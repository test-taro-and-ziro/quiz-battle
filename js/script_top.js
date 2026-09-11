// 💡 共通設定ファイルから db を読み込む
import { db } from './firebase-config.js';
import { 
  getFirestore, 
  collection, // データI/Oで使用する大きい箱
  doc,    // データI/Oで使用する小さい箱
  addDoc, // 場所を自動生成させてデータを保存
  getDocs, // すべてのデータを読み込む
  setDoc, // 指定した場所にデータを書き込む
  getDoc, // 指定した場所のデータを読み込む
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';

const ADMIN_PASSWORD = "admin1234"; 

let deviceId = null;
let currentUser = null; 

// 起動時処理
window.addEventListener('DOMContentLoaded', async () => { // asyncを追加
    initDeviceId();
    resetTopScreen();
    await loadGradesFromDB(); // 💡 データベースから学年をロード
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

// 💡 データベースから学年の選択肢を取得して画面に反映する関数
async function loadGradesFromDB() {
    const gradeSelect = document.getElementById('char-grade-select');
    if (!gradeSelect) return;
    try {
        const querySnapshot = await getDocs(collection(db, "grades"));
        gradeSelect.innerHTML = '<option value="">-- 学年をえらんでね --</option>';
        
        const gradeList = [];
        querySnapshot.forEach(d => gradeList.push({ id: d.id, ...d.data() }));
        gradeList.sort((a, b) => a.value - b.value); // 0〜6の順に並び替え

        gradeList.forEach((data) => {
            const option = document.createElement('option');
            option.value = data.value;
            option.textContent = data.label;
            gradeSelect.appendChild(option);
        });
    } catch (e) {
        console.error("学年ロードエラー:", e);
        gradeSelect.innerHTML = '<option value="">エラーが発生しました</option>';
    }
}
// 💡 新規登録（あたらしくはじめる）処理
async function handleRegister() {
    const nameInput = document.getElementById('username-input').value.trim();
    const gradeSelect = document.getElementById('char-grade-select').value;
    const genderSelect = document.getElementById('gender-select').value;
    const animalSelect = document.getElementById('char-animal-select').value;
  
    if (!nameInput) { alert('おなまえを入力してね！'); return; }
    if (!gradeSelect) { alert('学年をえらんでね！'); return; }
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
            grade: parseInt(gradeSelect), // 学年を保存
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
    const displayGrade = userData.grade === 0 ? "幼児" : userData.grade + "年生";    
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
    if (animal === "usagi") {
        return gender === "male" ? "usagi_male.jfif" : "usagi_female.jfif";
    }
    
    return "placeholder.jfif";
}

// 💡 選択中のキャラクターをその場でプレビュー表示する関数（新規追加）
function previewCharacter() {
    const animal = document.getElementById('char-animal-select').value;
    const gender = document.getElementById('gender-select').value;
    
    const fileName = getCharacterFileName(animal, gender);
    document.getElementById('register-char-preview').src = "images/" + fileName;
}

// 💡 「ゲームをはじめる」ボタンを押したとき（まずは地図画面 quest.html へ遷移！）
function startGame() {
    if (!currentUser) return;
    
    // 💡 クエスト選択画面（quest.html）へ名前を引き継いでジャンプ！
    window.location.href = 'quest.html?user=' + encodeURIComponent(currentUser);
}

// ログアウト（やりなおす）
function logout() {
    resetTopScreen();
}

// 💡 管理者画面を開いた時にすべてのデータを読み込むよう拡張
async function openAdminScreen() {
    const pass = prompt("管理者パスワードを入力してください：");
    if (pass === ADMIN_PASSWORD) {
        window.location.href = 'admin.html';
    } else if (pass !== null) {
        alert("パスワードが違います。");
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
