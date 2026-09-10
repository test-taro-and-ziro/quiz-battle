import { initializeApp } from "https://gstatic.com";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc } from "https://gstatic.com";

// !!! ご自身のFirebaseプロジェクトの設定値に書き換えてください !!!
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ADMIN_PASSWORD = "admin1234"; 

// 状態管理
let deviceId = null;
let currentUsersMap = {}; 
let currentUser = null; // ログイン中ならここに「おなまえ」が入る（表示切り替えの鍵）

// 起動時処理
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

// 画面の切り替え関数
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

// 【ログイン状態の変更に伴う表示切り替えロジック】
function updateDisplayByLoginStatus(username) {
    if (username) {
        // ログイン状態：メニュー画面へ
        currentUser = username;
        const uData = currentUsersMap[username];
        const displayGrade = uData.grade === 1 ? "低学年・幼児" : uData.grade === 3 ? "中学年" : "高学年";
        
        document.getElementById('menu-welcome').textContent = "ようこそ、" + username + " さん！";
        document.getElementById('user-stats').textContent = "クラス: " + displayGrade + " | 現在の勝ち数: " + (uData.wins || 0) + "回";
        showScreen('screen-menu');
        
        // 【将来用】ここで「game.html」などの別ファイルを読み込む関数を呼び出せます
        // loadGameScreen(); 
    } else {
        // ログアウト状態：ログイン（アカウント選択）画面へ
        currentUser = null;
        document.getElementById('username-input').value = '';
        renderUserList();
        showScreen('screen-login');
    }
}

// クラウドから自端末のアカウント一覧を取得して表示
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

// 新規アカウント登録
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
        updateDisplayByLoginStatus(nameInput); // 登録成功したらそのままログイン状態へ
    } catch (e) {
        alert("登録に失敗しました。");
        console.error(e);
    }
}

// ログアウト（引数なしで呼ぶとログアウト状態にする）
function logout() {
    updateDisplayByLoginStatus(null);
}

// 管理者画面を開く
async function openAdminScreen() {
    const pass = prompt("管理者パスワードを入力してください：");
    if (pass === ADMIN_PASSWORD) {
        showScreen('screen-admin');
        await renderAdminUserList();
    } else if (pass !== null) {
        alert("パスワードが違います。");
    }
}

// 管理者画面：全ユーザー表示
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

// 【将来用】ゲーム画面（別ファイル）を非同期で読み込んで合体させる雛形
async function loadGameScreen() {
    try {
        // 例: 'game.html' という別ファイルから中身を吸い上げる
        const response = await fetch('game.html'); 
        const htmlText = await response.text();
        document.getElementById('game-container').innerHTML = htmlText;
        console.log("ゲーム画面を正常に読み込みました。");
    } catch (e) {
        console.error("ゲーム画面の分割読込に失敗:", e);
    }
}

// グローバル紐づけ
window.handleRegister = handleRegister;
window.logout = logout;
window.openAdminScreen = openAdminScreen;
