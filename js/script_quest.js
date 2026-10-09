// ==========================================
// クエスト選択画面（quest.html）専用プログラム
// ==========================================
// 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from './firebase-config.js';
// 共通ファイルを読み込む1行を追加
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setCompanionSrc, loadGenreMaster, loadGradeMaster, loadCompanionMaster, loadDungeonMaster, 
        setupPlayerMaster, logoutPlayerMaster, prepareTempData,
        animalMasterData, genreMasterData, gradeMasterData, companionMasterData, dungeonMasterData, currentLoginUser, currentPlayerData, tempData } from './game-master.js';

let currentUser = null;
let treasureMasterData = [];
let selectedDungeon = null; // 💡 現在プレイヤーが選択したダンジョンのデータ

// 💡 画面が起動した時の処理
window.addEventListener('DOMContentLoaded', async () => {
    // 1. URLの「?temp=ドキュメントID」からプレイヤーの名前を読み取る
    const urlParams = new URLSearchParams(window.location.search);
    const docid = urlParams.get('temp');
    if (!docid) {
        alert("ゲームデータが見つかりません。もういちどログインしてね！");
        window.location.href = 'index.html';
        return;
    }
    // ★ temp コレクション読み取り（共通関数）
    await prepareTempData(docid); // docID で読み取れる
    if (!tempData) {
        // 名前が取れなければ安全のためにトップ画面に戻す
        alert("もういちどログインしなおしてね！");
        window.location.href = 'index.html';
        return;
    }
    currentUser = tempData.name;

    // 2. 「animal」コレクション（マスターデータ）をすべて読み込む [js]
    await loadAnimalMaster();
    // 「Treasures」コレクション（マスターデータ）をすべて読み込む [js]
    await loadTreasureMaster();
    // 「Dungeons」コレクション（マスターデータ）をすべて読み込む [js]
    await loadDungeonMaster(); 
    // 「grade」コレクション（マスターデータ）をすべて読み込む [js]
    await loadGradeMaster();
    // 「companions」コレクション（マスターデータ）をすべて読み込む [js]
    await loadCompanionMaster();

    // 3. 共通関数を使ってプレイヤー情報を準備
    const userData = await setupPlayerMaster(currentUser);    
    if (userData) {
        renderPlayerStatus(userData); // ユーザ情報（左下）
        setupProfileModal(userData); // ポップアップ画面
    } else {
        alert("キャラクター情報がみつかりませんでした。");
        window.location.href = `index.html?temp=${encodeURIComponent(tempData.id)}`;
    }

    // ダンジョンボタンの自動生成を実行
    renderDungeonMenu();
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

// 💡 メニュー箱の中にダンジョンボタンを自動生成して並べる関数
function renderDungeonMenu() {
    const container = document.getElementById('dungeon-list-container');
    container.innerHTML = ''; 

    // ユーザランク取得
    const userRank = currentPlayerData.rank || 0;
    dungeonMasterData.forEach(dungeon => {

        // 💡 表示条件：ユーザランク + 1 >= ダンジョンランク
        if ((userRank + 1) < dungeon.rank) {return;} // 表示なし
        
        const btn = document.createElement('button');
        btn.classList.add('menu-item-btn');
        btn.textContent = `🚩 ${dungeon.name}`; 
        
        btn.addEventListener('click', () => {selectQuest(dungeon);});
        container.appendChild(btn);
    });
}

// 💡 Firebaseからデータを読み込んで、左下の情報箱に表示する関数
function renderPlayerStatus(userData) {
    // ユーザ名
    document.getElementById('player-name').textContent = currentUser;

    // ★ 学年マスタから label を取得
    let gradeLabel = "未設定";
    const gradeItem = gradeMasterData.find(g => g.value == userData.grade);
    if (gradeItem) {
        gradeLabel = gradeItem.label;
    }
    document.getElementById('player-grade').textContent = "学年：" + gradeLabel;

    // ★ ランク表示
    const rank = userData.rank ?? 0;
    document.getElementById('player-rank').textContent = "ランク: " + rank;

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

        // ▼ 秘宝描画
        renderTreasures(userData.treasures || []);
        // ▼ 仲間描画（equipment → companions）
        const companionIds = userData.equipment || [];
        renderCompanionsInProfile(companionIds);

        // ▼ タブ初期化
        setupProfileTabs();
        // ▼ 初期表示は「秘宝」タブ
        document.querySelector('[data-tab="treasure"]').classList.add('active');
        document.getElementById('tab-treasure').classList.add('active');
            
        // CSSのクラスを追加してモーダルを表示
        overlay.classList.add('is-active');
    });
    // とじるボタンでモーダルを閉じる
    closeBtn.addEventListener('click', () => {
        // ▼ タブの active をすべて解除
        document.querySelectorAll('.profile-tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.profile-tab-content').forEach(tab => tab.classList.remove('active'));
        // ▼ モーダルを閉じる
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
// 💡 仲間表示の関数
function renderCompanionsInProfile(companionIds) {
    const zone = document.getElementById("profile-companion-list");
    zone.innerHTML = "";

    companionIds.forEach(id => {
        const comp = companionMasterData.find(c => c.id === id);
        if (!comp) return;

        const card = document.createElement("div");
        card.className = "companion-card";

        card.innerHTML = `
            <img src="images/sub/${comp.img}" alt="${comp.name}">
            <div class="companion-info">
                <div><strong>${comp.name}</strong></div>
                <div>得意：${(comp.good || []).map(g => genreMasterData[g]).join(", ")}</div>
                <div>天才：${(comp.genius || []).map(g => genreMasterData[g]).join(", ")}</div>
            </div>
        `;

        zone.appendChild(card);
    });
}
// 💡 プロフィールタブの切り替え処理
function setupProfileTabs() {
    const buttons = document.querySelectorAll('.profile-tab-btn');
    const contents = document.querySelectorAll('.profile-tab-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            // ボタンの active 切り替え
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // コンテンツの active 切り替え
            contents.forEach(c => {
                c.classList.remove('active');
                if (c.id === `tab-${target}`) {
                    c.classList.add('active');
                }
            });
        });
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
        etc: { label: '🎨 その他（そのた）', className: 'btn-etc' },
        logical: { label: '🧩 論理的思考力（なぞとき）', className: 'btn-logical' },
        creative: { label: '💡 発想力（ひらめき）', className: 'btn-creative' },
        tricky: { label: '🪤 水平思考力（ひっかけ）', className: 'btn-tricky' }
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

    // 💡 ボス解放判定
    const userTreasures = currentPlayerData.treasures || [];
    const requiredTreasures = Object.values(dungeon.rewards || {});

    const bossUnlocked = requiredTreasures.every(t => userTreasures.includes(t));
    if (bossUnlocked) {
        const bossBtn = document.createElement('button');
        bossBtn.classList.add('btn-boss');
        bossBtn.textContent = "👑 ボスステージ";
        bossBtn.addEventListener('click', () => {
            goToGame("boss"); // ジャンルを boss として送る
        });
        genreContainer.appendChild(bossBtn);
    }

    document.getElementById('genre-modal-overlay').style.display = 'flex';
}

// 💡 小窓の「えらびなおす」が押されたときの処理
function cancelQuestSelect() {
    // 小窓を非表示にする
    document.getElementById('genre-modal-overlay').style.display = 'none';
}

// 💡 ジャンルボタンが押されたときの処理（game.html へ遷移）
async function goToGame(genre) {

    // 💡 temp コレクション取得
    const tempRef = collection(db, "temp");
    const q = query(tempRef, where("name", "==", currentUser));
    const snap = await getDocs(q);
    if (snap.empty) {
        console.error("temp データが存在しません");
        return;
    }

    // 💡 temp コレクションに「ダンジョンID」「ジャンル」を登録
    const docRef = snap.docs[0].ref;
    await updateDoc(docRef, {
        dungeons_id: selectedDungeon.id,
        genre: genre,
    });

    // 💡 game.html へは「ユーザ名」だけ渡す
    window.location.href = `game.html?temp=${encodeURIComponent(tempData.id)}`;
}

// 🛑 新設：ログアウトボタンが押されたときに確認する関数
function logout() {
    if (confirm("ログアウトして トップがめんにもどる？")) {
        window.location.href = `index.html?temp=${encodeURIComponent(tempData.id)}`;
    }
}

// HTMLの onclick から呼び出せるように window オブジェクトに登録 [js]
window.selectQuest = selectQuest;
window.cancelQuestSelect = cancelQuestSelect;
window.goToGame = goToGame;
window.logout = logout;
