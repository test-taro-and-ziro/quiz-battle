// バージョン（例: 10.13.0）や拡張子（.js）まで正しく記述します
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js';
import { 
  getFirestore, 
  collection, // データI/Oで使用する大きい箱
  doc,    // データI/Oで使用する小さい箱
  addDoc, // 場所を自動生成させてデータを保存
  getDocs, // すべてのデータを読み込む
  setDoc, // 指定した場所にデータを書き込む
  getDoc  // 指定した場所のデータを読み込む
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';

// ご自身のFirebaseプロジェクトの設定値
const firebaseConfig = {
    apiKey: "AIzaSyBUfZOKhw9nHc5K6sq7pMWH2eeVixVx3wI",
    authDomain: "quiz-battle-b8b48.firebaseapp.com",
    projectId: "quiz-battle-b8b48",
    storageBucket: "quiz-battle-b8b48.firebasestorage.app",
    messagingSenderId: "883874950005",
    appId: "1:883874950005:web:08b22a374ccb1e6133013c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore
const db = getFirestore(app);

const ADMIN_PASSWORD = "admin1234"; 

let deviceId = null;
let currentUser = null; 

// 起動時処理
window.addEventListener('DOMContentLoaded', () => {
    initDeviceId();
    // 💡 起動時はトップ画面の初期状態にリセット
    resetTopScreen();
});

function initDeviceId() {
    deviceId = localStorage.getItem('quiz_battle_device_id');
    if (!deviceId) {
        deviceId = 'dev_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('quiz_battle_device_id', deviceId);
    }
}

// 💡 画面切り替えの汎用関数
function changeScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    const target = document.getElementById(screenId);
    if (target) target.style.display = 'block';
}

// 💡 トップ画面の状態を最初のメニューだけにリセットする関数
function resetTopScreen() {
    currentUser = null;
    // 各種入力欄をクリア
    document.getElementById('login-username-input').value = '';
    if (document.getElementById('username-input')) document.getElementById('username-input').value = '';
    if (document.getElementById('age-select')) document.getElementById('age-select').value = '';
    
    // 表示エリアの制御
    document.getElementById('login-action-zone').style.display = 'none';
    document.getElementById('logged-in-char-zone').style.display = 'none';
    changeScreen('screen-login');
}

// 💡 「ログイン（つづきから）」ボタンを押した時の入力欄トグル
function toggleLoginInput() {
    const zone = document.getElementById('login-action-zone');
    if (zone.style.display === 'none') {
        zone.style.display = 'block';
        document.getElementById('logged-in-char-zone').style.display = 'none'; // キャラエリアは隠す
    } else {
        zone.style.display = 'none';
    }
}

// 💡 既存ユーザーのログイン処理
async function handleLogin() {
    const nameInput = document.getElementById('login-username-input').value.trim();
    if (!nameInput) { alert('おなまえを入力してね！'); return; }

    try {
        const docRef = doc(db, "users", nameInput);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            currentUser = nameInput;
            
            // 💡 トップ画面にキャラクター情報を表示
            showCharacterInfo(nameInput, userData);
        } else {
            alert('そのおなまえのキャラクターは見つからなかったよ。新しくつくるか、もう一度たしかめてね！');
        }
    } catch (e) {
        console.error("ログインエラー:", e);
        alert("データの読み込みに失敗しました。");
    }
}

// 💡 新規登録（あたらしくはじめる）処理
async function handleRegister() {
    const nameInput = document.getElementById('username-input').value.trim();
    const ageSelect = document.getElementById('age-select').value;
    const genderSelect = document.getElementById('gender-select').value;
    const animalSelect = document.getElementById('char-animal-select').value;
  
　  if (!nameInput) { alert('おなまえを入力してね！'); return; }
    if (!ageSelect) { alert('学年をえらんでね！'); return; }
  　if (!genderSelect) { alert('せいべつをえらんでね！'); return; }
　  if (!animalSelect) { alert('どうぶつをえらんでね！'); return; }

    try {
        // 重複チェック
        const docRef = doc(db, "users", nameInput);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            alert('そのおなまえはすでに使われているよ！ちがうおなまえにしてね。');
            return;
        }

        // 💡 性別と動物の組み合わせから画像ファイル名を決定
        const finalCharImage = getCharacterFileName(animalSelect, genderSelect);

        const userData = {
            device_id: deviceId,
            grade: parseInt(ageSelect),   // 学年を保存
            gender: genderSelect,         // 性別を保存
            animal: animalSelect,         // 動物の種類を保存
            char_image: finalCharImage,   // 決定した画像ファイル名を保存
            wins: 0,
            lv: 1
        };

        await setDoc(docRef, userData);
        currentUser = nameInput;
        
        // 💡 登録成功したら、トップ画面に戻してキャラクター情報を表示
        showCharacterInfo(nameInput, userData);
    } catch (e) {
        alert("登録に失敗しました。");
        console.error(e);
    }
}

// 💡 トップ画面にキャラクター情報をセットして表示する共通関数
function showCharacterInfo(username, userData) {
    const displayGrade = userData.grade === 1 ? "低学年・幼児" : userData.grade === 3 ? "中学年" : "高学年";
    
    // HTML要素にデータを流し込む
    document.getElementById('char-name').textContent = username;
    document.getElementById('char-rank').textContent = displayGrade;
    
    // 💡 Firebaseから読み込んだ画像ファイル名を使って表示（imagesフォルダを見に行く）
    const charImg = document.getElementById('char-visual');
    if (userData.char_image) {
        charImg.src = "images/" + userData.char_image; 
    } else {
        // もし昔のデータなどで画像が登録されていなかった場合のセーフティ
        charImg.src = "images/placeholder.jfif";
    }
  
    // 入力欄を隠し、キャラクター確認エリアを表示
    document.getElementById('login-action-zone').style.display = 'none';
    document.getElementById('logged-in-char-zone').style.display = 'block';
    
    // もし新規作成画面にいたらトップ画面に戻す
    changeScreen('screen-login');
}

// 💡 性別と動物から画像ファイル名を決定するヘルパー関数
function getCharacterFileName(animal, gender) {
    if (!animal || !gender) return "placeholder.jfif";
    
    // 例：うさぎ(usagi) ＋ おとこのこ(male) ＝ usagi_male.jfif 
    // ※お手元の「usagi_1.jfif」をオス用にする場合は、ここを "usagi_1.jfif" にしてもOKです
    if (animal === "usagi") {
        return gender === "male" ? "usagi_male.jfif" : "usagi_female.jfif";
    }
    
    return "placeholder.jfif";
}

// 💡 選択中のキャラクターをその場でプレビュー表示する関数（新規追加）
function previewCharacter() {
    const animal = document.getElementById('char-animal-select').value;
    const gender = document.getElementById('gender-select').value;
    
    // 性別がまだ選ばれていないのに動物が選ばれたら、分かりやすいようにアラートを出すか、デフォルトをオス(male)等にする
    if (animal && !gender) {
        alert("さきに「せいべつ」をえらんでね！");
        document.getElementById('char-animal-select').value = ""; // 選択をリセット
        return;
    }

    const fileName = getCharacterFileName(animal, gender);
    document.getElementById('register-char-preview').src = "images/" + fileName;
}

// 💡 「ゲームをはじめる」ボタンを押したとき（次の画面へ）
function startGame() {
    if (!currentUser) return;
    
    // 次のメインメニュー画面へデータを渡して切り替え
    document.getElementById('menu-welcome').textContent = "ようこそ、" + currentUser + " さん！";
    // 補足：簡易的にstatsを表示するために再取得するか、データを保持しておくと便利です
    changeScreen('screen-menu');
}

// ログアウト（やりなおす）
function logout() {
    resetTopScreen();
}

// 管理者画面を開く
async function openAdminScreen() {
    const pass = prompt("管理者パスワードを入力してください：");
    if (pass === ADMIN_PASSWORD) {
        changeScreen('screen-admin');
        await renderAdminUserList();
    } else if (pass !== null) {
        alert("パスワードが違います。");
    }
}

// 管理者画面のリスト描画
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
        console.error(e);
    }
}

// HTMLのonclickから呼び出せるようにwindowオブジェクトに登録
window.changeScreen = changeScreen;
window.toggleLoginInput = toggleLoginInput;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.startGame = startGame;
window.cancelLogin = resetTopScreen; // やりなおすボタン用
window.logout = logout;
window.openAdminScreen = openAdminScreen;
window.previewCharacter = previewCharacter;
