// ==========================================
// クエスト選択画面（quest.html）専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from './firebase-config.js';
// 💡 共通ファイルを読み込む1行を追加
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, loadGenreMaster, setupPlayerMaster, logoutPlayerMaster } from './game-master.js';

let currentUser = null;
let treasureMasterData = [];
let dungeonMasterData = []; // 💡 データベースから読み込んだダンジョン情報を保存する配列
let selectedDungeon = null; // 💡 現在プレイヤーが選択したダンジョンのデータ

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
    // 「Dungeons」コレクション（マスターデータ）をすべて読み込む [js]
    await loadDungeonMaster(); 
  
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

// 💡 Firestoreからダンジョンマスタをロードし、メニューボタンを自動生成する関数
async function loadDungeonMaster() {
    try {
        const q = query(collection(db, "dungeons"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        
        dungeonMasterData = [];
        querySnapshot.forEach((docSnap) => {
            dungeonMasterData.push(docSnap.data());
        });

        // ボタンの自動生成を実行
        renderDungeonMenu();
    } catch (e) {
        console.error("ダンジョンマスタのロードに失敗しました:", e);
    }
}

// 💡 メニュー箱の中にダンジョンボタンを自動生成して並べる関数
function renderDungeonMenu() {
    const container = document.getElementById('dungeon-list-container');
    container.innerHTML = ''; 

    dungeonMasterData.forEach(dungeon => {
        const btn = document.createElement('button');
        btn.classList.add('menu-item-btn');
        btn.textContent = `🚩 ${dungeon.name}`; 
        
        btn.addEventListener('click', () => {
            selectQuest(dungeon);
        });

        container.appendChild(btn);
    });
}

// 💡 Firebaseからデータを読み込んで、左下の情報箱に表示する関数
function renderPlayerStatus(userData) {
    document.getElementById('player-name').textContent = currentUser;
    const displayGrade = userData.grade === 0 ? "幼児" : userData.grade + "年生";
    document.getElementById('player-grade').textContent = "学年: " + displayGrade;

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
        document.getElementById('profile-modal-grade').textContent = "学年: " + displayGrade;
        
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

// 💡 ダンジョンが押されたとき、対応するジャンルだけを出し分ける処理
function selectQuest(dungeon) {
    selectedDungeon = dungeon; 
    // ダンジョン名を表示
    document.getElementById('selected-quest-name').textContent = dungeon.name;
    // 💡 データベースから読み込んだノルマ（norma）の値をモーダルにセット！
    document.getElementById('selected-quest-norma').textContent = dungeon.norma;
    
    const genreContainer = document.getElementById('genre-list-container');
    genreContainer.innerHTML = ''; 

    const availableGenres = Object.keys(dungeon.rewards || {});

    // 日本語表示用の対応マップ
    const genreLabels = {
        math: { label: '➕ 算数（さんすう）', className: 'btn-math' },
        japanese: { label: '📖 国語（こくご）', className: 'btn-japanese' },
        english: { label: '🔤 英語（えいご）', className: 'btn-english' },
        science: { label: '🧪 理科（りか）', className: 'btn-science' },
        social: { label: '🗺️ 社会（しゃかい）', className: 'btn-social' },
        moral: { label: '🤝 道徳（どうとく）', className: 'btn-moral' },
        etc: { label: '🎨 その他（そのた）', className: 'btn-etc' }
    };

    availableGenres.forEach(genreKey => {
        const genreInfo = genreLabels[genreKey] || { label: genreKey, className: 'btn-genre-default' };

        const btn = document.createElement('button');
        btn.classList.add('btn-genre', genreInfo.className);
        btn.textContent = genreInfo.label;
        
        btn.addEventListener('click', () => {
            goToGame(genreKey);
        });

        genreContainer.appendChild(btn);
    });

    document.getElementById('genre-modal-overlay').style.display = 'flex';
}

// 💡 小窓の「えらびなおす」が押されたときの処理
function cancelQuestSelect() {
    // 小窓を非表示にする
    document.getElementById('genre-modal-overlay').style.display = 'none';
}

// 💡 ジャンルボタンが押されたときの処理（game.html へ遷移）
function goToGame(genre) {
    // 💡 選択されたダンジョンデータからノルマ（norma）を取得（万が一空ならデフォルト値「10000」に）
    const normaValue = selectedDungeon.norma || "10000";
    // 次のゲーム本編（game.html）へ引き継いでジャンプ！
    window.location.href = `game.html?user=${encodeURIComponent(currentUser)}&quest=${encodeURIComponent(selectedDungeon.name)}&genre=${encodeURIComponent(genre)}&norma=${encodeURIComponent(normaValue)}`;
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
