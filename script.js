console.log("★JSファイルの読み込み自体には成功しています！");

import { initializeApp } from "https://gstatic.com";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc } from "https://gstatic.com";

// ご自身のFirebaseプロジェクトの設定値
const firebaseConfig = {
    apiKey: "AIzaSyBUfZOKhw9nHc5K6sq7pMWH2eeVixVx3wI",
    authDomain: "quiz-battle-b8b48.firebaseapp.com",
    projectId: "quiz-battle-b8b48",
    storageBucket: "quiz-battle-b8b48.firebasestorage.app",
    messagingSenderId: "883874950005",
    appId: "1:883874950005:web:08b22a374ccb1e6133013c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ADMIN_PASSWORD = "abc123"; 

let deviceId = null;
let currentUsersMap = {}; 
let currentUser = null; 

window.addEventListener('DOMContentLoaded', async () => {
    initDeviceId();
    await renderUserList();
});

function initDeviceId() {
    deviceId = localStorage.getItem('quiz_battle_device_id');
    if (!deviceId) {
        deviceId = 'dev_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('quiz_battle_device_id', deviceId);
    }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

// ログイン状態による表示切り替え
function updateDisplayByLoginStatus(username) {
    if (username) {
        currentUser = username;
        const uData = currentUsersMap[username];
        const displayGrade = uData.grade === 1 ? "低学年・幼児" : uData.grade === 3 ? "中学年" : "高学年";
        
        document.getElementById('menu-welcome').textContent = "ようこそ、" + username + " さん！";
        document.getElementById('user-stats').textContent = "クラス: " + displayGrade + " | 現在の勝ち数: " + (uData.wins || 0) + "回";
        showScreen('screen-menu');
        
        // 【重要】ゲーム画面（game.html）に向けて、ログインしたユーザーの情報を送る
        const gameFrame = document.getElementById('game-frame');
        if (gameFrame && gameFrame.contentWindow) {
            // ページ読み込み完了を見越して少しだけ待ってから送信
            setTimeout(() => {
                gameFrame.contentWindow.postMessage({
                    type: "LOGIN_USER",
                    username: username,
                    grade: uData.grade,
                    wins: uData.wins
                }, "*");
            }, 500);
        }
    } else {
        currentUser = null;
        document.getElementById('username-input').value = '';
        renderUserList();
        showScreen('screen-login');
    }
}

async function renderUserList() {
    const listContainer = document.getElementById('login-user-list');
    if (!listContainer) return;
    listContainer.innerHTML = '<div style="padding:10px; color:#666;">読み込み中...</div>';

    currentUsersMap = {};
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        listContainer.innerHTML = ''; 
        let count = 0;

        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            if (data.device_id === deviceId) {
                const username = docSnap.id;
                currentUsersMap[username] = data;

                const item = document.createElement('div');
                item.className = 'user-item';
                const displayGrade = data.grade === 1 ? "低学年・幼児" : data.grade === 3 ? "中学年" : "高学年";
                item.textContent = username + " (" + displayGrade + " / 勝ち数:" + (data.wins || 0) + ")";
                item.onclick = function() { updateDisplayByLoginStatus(username); };
                listContainer.appendChild(item);
                count++;
            }
        });

        if (count === 0) {
            listContainer.innerHTML = '<div style="padding:10px; color:#aaa; font-size:12px;">アカウントがありません</div>';
        }
    } catch (e) {
        console.error("データ取得エラー:", e);
        listContainer.innerHTML = '<div style="padding:10px; color:red;">データの読み込みに失敗しました</div>';
    }
}

async function handleRegister() {
    const nameInput = document.getElementById('username-input').value.trim();
    const ageSelect = document.getElementById('age-select').value;
    if (!nameInput) { alert('おなまえを入力してね！'); return; }
    if (!ageSelect) { alert('学年をえらんでね！'); return; }

    const docRef = doc(db, "users", nameInput);
    const userData = {
        device_id: deviceId,
        grade: parseInt(ageSelect),
        wins: 0,
        lv: 1
    };

    try {
        await setDoc(docRef, userData);
        currentUsersMap[nameInput] = userData;
        updateDisplayByLoginStatus(nameInput); 
    } catch (e) {
        alert("登録に失敗しました。");
        console.error(e);
    }
}

function logout() {
    updateDisplayByLoginStatus(null);
}

async function openAdminScreen() {
    const pass = prompt("管理者パスワードを入力してください：");
    if (pass === ADMIN_PASSWORD) {
        showScreen('screen-admin');
        await renderAdminUserList();
    } else if (pass !== null) {
        alert("パスワードが違います。");
    }
}

async function renderAdminUserList() {
    const tbody = document.getElementById('admin-user-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="6">データを読み込み中...</td></tr>';

    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const username = docSnap.id;
            const data = docSnap.data();
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${username}</strong></td>
                <td>
                    <select id="admin-grade-${username}">
                        <option value="1" ${data.grade === 1 ? 'selected' : ''}>低学年・幼児</option>
                        <option value="3" ${data.grade === 3 ? 'selected' : ''}>中学年</option>
                        <option value="5" ${data.grade === 5 ? 'selected' : ''}>高学年</option>
                    </select>
                </td>
                <td><input type="number" id="admin-wins-${username}" value="${data.wins || 0}" style="width:60px;"></td>
                <td><input type="number" id="admin-lv-${username}" value="${data.lv || 1}" style="width:60px;"></td>
                <td style="font-size:10px; color:#666;">${data.device_id || 'なし'}</td>
                <td><button id="btn-save-${username}">保存</button></td>
            `;
            
            tr.querySelector(`#btn-save-${username}`).onclick = async function() {
                const nextGrade = parseInt(document.getElementById(`admin-grade-${username}`).value);
                const nextWins = parseInt(document.getElementById(`admin-wins-${username}`).value);
                const nextLv = parseInt(document.getElementById(`admin-lv-${username}`).value);
                
                try {
                    await updateDoc(doc(db, "users", username), {
                        grade: nextGrade,
                        wins: nextWins,
                        lv: nextLv
                    });
                    alert(`${username} のデータを更新しました！`);
                } catch(err) {
                    alert("更新に失敗しました。");
                    console.error(err);
                }
            };

            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6">登録されているユーザーがいません。</td></tr>';
        }
    } catch(e) {
        tbody.innerHTML = '<tr><td colspan="6" style="color:red;">データの取得に失敗しました。</td></tr>';
    }
}

// 親の画面（index.html）からクラウド上の勝利数を増やすための仕組みも用意
window.addEventListener("message", async (event) => {
    if (event.data && event.data.type === "ADD_WIN") {
        if (!currentUser) return;
        const uData = currentUsersMap[currentUser];
        uData.wins = (uData.wins || 0) + 1;
        try {
            await updateDoc(doc(db, "users", currentUser), { wins: uData.wins });
            // 再描画して画面の勝ち数を更新
            document.getElementById('user-stats').textContent = "クラス: " + (uData.grade === 1 ? "低学年" : "高学年") + " | 現在の勝ち数: " + uData.wins + "回";
        } catch(e) {
            console.error("ゲーム側からの勝利数保存失敗:", e);
        }
    }
});

window.handleRegister = handleRegister;
window.logout = logout;
window.openAdminScreen = openAdminScreen;
