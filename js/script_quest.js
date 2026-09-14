// ==========================================
// クエスト選択画面（quest.html）専用プログラム
// ==========================================
import { db } from './firebase-config.js';
import { 
  getFirestore, 
  collection, // データI/Oで使用する大きい箱
  doc,    // データI/Oで使用する小さい箱
  addDoc, // 場所を自動生成させてデータを保存
  getDocs, // すべてのデータを読み込む
  setDoc, // 指定した場所にデータを書き込む
  getDoc, // 指定した場所のデータを読み込む
  updateDoc,  // 更新機能
  deleteDoc,  // 削除機能
  query,      // 🌟 フィールド検索で使用
  where       // 🌟 フィールド検索で使用
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';

// 💡 共通マスタファイルからお仕事をインポート
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setupPlayerMaster } from './game-master.js';

let currentUser = null;
// let animalMasterData = []; // 💡 新設：データベースから読み込んだ動物マスターを保存する配列

// 💡 画面が起動した時の処理
window.addEventListener('DOMContentLoaded', async () => {
    // 1. URLの「?user=おなまえ」からプレイヤーの名前を読み取る
    const urlParams = new URLSearchParams(window.location.search);
    currentUser = urlParams.get('user');

    if (!currentUser) {
        // 名前が取れなければ安全のためにトップ画面に戻す
        alert("もういちどログインしなおしてね！");
        window.location.href = 'index.html';
        return;
    }
    // 2. 「animal」コレクション（マスターデータ）をすべて読み込む [js]
    await loadAnimalMaster();
    // 「Treasures」コレクション（マスターデータ）をすべて読み込む [js]
    await loadTreasureMaster();
  
    // 3. 共通関数を使ってプレイヤー情報を準備
    const userData = await setupPlayerMaster(currentUser);

    if (userData) {
        renderPlayerStatus(userData);
        setupProfileModal(userData);
    } else {
        alert("キャラクター情報がみつかりませんでした。");
        window.location.href = 'index.html';
    }
});

// 💡 Firestoreから秘宝マスタをロードして order フィールド順に並べる関数
async function loadTreasureMaster() {
    try {
        // ドキュメントは自動生成IDなので、フィールドの「order」を基準に昇順ソートして取得
        const q = query(collection(db, "treasures"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        
        treasureMasterData = [];
        querySnapshot.forEach((docSnap) => {
            treasureMasterData.push(docSnap.data());
        });
    } catch (e) {
        console.error("秘宝マスタのロードに失敗しました:", e);
    }
}

// 💡 Firebaseからデータを読み込んで、左下の情報箱に表示する関数
function renderPlayerStatus(userData) {
    document.getElementById('player-name').textContent = currentUser;
    const displayGrade = userData.grade === 0 ? "幼児" : userData.grade + "年生";
    document.getElementById('player-grade').textContent = "がくねん: " + displayGrade;

    const fileName = getCharacterFileName(userData.animal, userData.gender);
    setCharacterSrc(document.getElementById('player-avatar'), fileName);
}

// 💡 プロフィール＆秘宝モーダルの制御ロジック
function setupProfileModal(userData) {
    const trigger = document.getElementById('player-status-trigger');
    const overlay = document.getElementById('profile-modal-overlay');
    const closeBtn = document.getElementById('btn-close-profile');

    // 左下の情報箱がクリックされたらモーダルを開く
    trigger.addEventListener('click', () => {
        document.getElementById('profile-modal-name').textContent = currentUser;
        const displayGrade = userData.grade === 0 ? "幼児" : userData.grade + "年生";
        document.getElementById('profile-modal-grade').textContent = "がくねん: " + displayGrade;
        
        const fileName = getCharacterFileName(userData.animal, userData.gender);
        setCharacterSrc(document.getElementById('profile-modal-avatar'), fileName);

        // 💡 ユーザーの所持リスト（例: ['T1', 'T3']）を渡して丸い枠を生成
        renderTreasures(userData.treasures || []);

        // CSSのクラスを追加してモーダルを表示
        overlay.classList.add('is-active');
    });

    // とじるボタンでモーダルを閉じる
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('is-active');
    });
}

// 💡 ひほう（秘宝）をマスタ順（order順）に丸い枠で並べる関数
function renderTreasures(userTreasures) {
    const container = document.getElementById('treasure-list-container');
    container.innerHTML = ''; // リセット

    // Firestoreから取得した全ての秘宝データをループ
    treasureMasterData.forEach(treasure => {
        // フィールド「treasure」（T1など）がユーザーの所持リストに含まれているか判定
        const hasTreasure = userTreasures.includes(treasure.treasure);

        // 秘宝の丸い枠（スロット）を作成
        const slot = document.createElement('div');
        slot.classList.add('treasure-slot');
        if (!hasTreasure) {
            slot.classList.add('is-locked'); // 未獲得時はCSSで薄暗く見せる
        }

        // 丸い枠の中のイメージ画像
        const img = document.createElement('img');
        // 獲得済みなら images/treasures/ 内のファイル名、未獲得なら placeholder.jpg
        img.src = hasTreasure ? `images/treasures/${treasure.img}` : 'images/placeholder.jpg';
        img.alt = treasure.name;
        img.classList.add('treasure-icon');

        // 秘宝の名前ラベル
        const label = document.createElement('div');
        label.classList.add('treasure-label');
        label.textContent = hasTreasure ? treasure.name : '？？？';

        slot.appendChild(img);
        slot.appendChild(label);
        container.appendChild(slot);
    });
}

// 💡 地図上のスタンプ（森・泉・洞窟）が押されたときの処理
function selectQuest(questName) {
    // 選択されたクエストの名前を小窓にセット
    document.getElementById('selected-quest-name').textContent = questName;
    // ジャンルを選ぶ小さな小窓（モーダル）をパッと表示する
    document.getElementById('genre-modal-overlay').style.display = 'flex';
}

// 💡 小窓の「えらびなおす」が押されたときの処理
function cancelQuestSelect() {
    // 小窓を非表示にする
    document.getElementById('genre-modal-overlay').style.display = 'none';
}

// 💡 ジャンル（さんすう・こくご）ボタンが押されたときの処理（game.html へ遷移）
function goToGame(genre) {
    const questName = document.getElementById('selected-quest-name').textContent;
    // 次のゲーム本編（game.html）へ「ユーザー名」「選んだクエスト」「ジャンル」をすべて引き継いでジャンプ！
    window.location.href = `game.html?user=${encodeURIComponent(currentUser)}&quest=${encodeURIComponent(questName)}&genre=${encodeURIComponent(genre)}`;
}

// 🛑 新設：ログアウトボタンが押されたときに確認する関数
function logout() {
    if (confirm("ログアウトして トップがめんにもどる？")) {
        window.location.href = 'index.html';
    }
}

// HTMLの onclick から呼び出せるように window オブジェクトに登録 [js]
window.selectQuest = selectQuest;
window.cancelQuestSelect = cancelQuestSelect;
window.goToGame = goToGame;
window.logout = logout;
