// ==========================================
// クエスト画面（game.html）専用プログラム
// ==========================================
// 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from './firebase-config.js';
// 共通ファイルを読み込む1行を追加
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setCompanionSrc, loadGenreMaster, loadGradeMaster, loadCompanionMaster, loadDungeonMaster, 
        setupPlayerMaster, logoutPlayerMaster, prepareTempData,
        animalMasterData, genreMasterData, gradeMasterData, companionMasterData, dungeonMasterData, currentLoginUser, currentPlayerData, tempData } from './game-master.js';

// ==========================================
// 1. 本物のFirebase構造に合わせたダミーデータ
// ==========================================
const mockQuestions = [
    { id: "q1", type: "select", genre: "math", grade: 4, text: "15 × 6 のこたえは つぎのうちどれかな？", choices: ["75", "80", "90", "100"], answer: "90", explanation: "15×6は90になります。" },
    { id: "q2", type: "select", genre: "moral", grade: 4, text: "SNSで友達の悪口を書いている人を見つけました。適切な行動は？", choices: ["関わらず、大人や先生に相談する", "自分も一緒に書き込む", "その人を強く問い詰める", "面白そうなので友達に拡散する"], answer: "関わらず、大人や先生に相談する", explanation: "悪口には関わらず、すぐに信頼できる大人や先生に相談しよう。" },
    { id: "q3", type: "select", genre: "Japanese", grade: 4, text: "「一生懸命」と同じ意味の言葉はどれ？", choices: ["必死になって", "てきとうに", "のんびりと", "おこりながら"], answer: "必死になって", explanation: "正解は「必死になって」です！" },
    { id: "q4", type: "direct", genre: "math", grade: 4, text: "25 × 4 の答えはいくつ？", choices: [], answer: "100", explanation: "25×4は100です！" },
    { id: "q5", type: "select", genre: "math", grade: 0, text: "りんごが 3こ あります。2こ もらうと、ぜんぶで なんこ？", choices: ["5こ", "4こ", "1こ", "6こ"], answer: "5こ", explanation: "3+2は5になるよ。" },
    { id: "q6", type: "which", genre: "math", grade: 4, text: "三角形の内角の和（3つの角をたした数）は 180度 である。マルかバツか？", choices: ["〇", "×"], answer: true, explanation: "正解は〇！どんな三角形でも、3つの角を合わせると絶対に180度になるよ。" },
    { id: "q7", type: "select", genre: "Japanese", grade: 4, text: "「ノートに文字を（　）。」カッコに入る正しい言葉は？", choices: ["書く", "歩く", "食べる", "話す"], answer: "書く", explanation: "ノートには文字を「書く」のが正しいね。" },
    { id: "q8", type: "which", genre: "moral", grade: 4, text: "友達が困っているときは、気づかないふりをするのが良い。マルかバツか？", choices: ["〇", "×"], answer: false, explanation: "バツです！困っている友達がいたら、「どうしたの？」と声をかけてあげよう。" },
    { id: "q9", type: "direct", genre: "math", grade: 4, text: "1分間は、何秒かな？（数字だけでこたえてね）", choices: [], answer: "60", explanation: "正解は60秒です！ちなみに1時間は60分だよ。" },
    { id: "q10", type: "select", genre: "math", grade: 4, text: "81 ÷ 9 のこたえは？", choices: ["7", "8", "9", "10"], answer: "9", explanation: "九九の「くく はちじゅういち」を逆算すると9になるよ！" }
];

// ==========================================
// 2. ゲームの状態管理（ステート）
// ==========================================
// ★ エラー解決のため、現在のダミーデータを本番用配列名として定義します
let currentQuestions = mockQuestions;

let currentQuestionIndex = 0; 
let currentScore = 30;       
let timerInterval = null;     
const maxQuestions = 10; 

// スコア記録用
let playerScore = 0;
let npc1Score = 0;
let npc2Score = 0;

// ★ URLパラメータから受け取るクエスト情報用の変数
let currentUser = "";  // ユーザー名
let currentQuest = ""; // ダンジョンID
let currentGenre = ""; // ジャンル（math, Japanese など）
let clearQuota = 1000; // 問題数が増えたのでノルマを調整
let userGrade = 4; // ★【New】学年情報を保存しておくグローバル変数（初期値は小4）

// 仲間データ管理
let activeCompanions = [];
const DEFAULT_NPC_ID = "default";

// ==========================================
// 3. 画面起動時の処理
// ==========================================
window.addEventListener('DOMContentLoaded', async () => {

    // URLの「?temp=ドキュメントID」からプレイヤーの名前を読み取る
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
    // ★ tempData から値を復元
    currentUser = tempData.name;
    currentQuest = tempData.dungeons_id;
    currentGenre = tempData.genre;
    
    // ★ ここからダンジョン名を取得する処理
    await loadDungeonMaster();
    const dungeonData = dungeonMasterData.find(d => d.id === currentQuest);
    // 万が一、ダンジョン情報が取れなかった場合はクエスト選択画面に戻す
    if (dungeonData) {
        // ダンジョン情報を画面に表示
        document.getElementById("dungeon-title").textContent = dungeonData.name;
        document.getElementById('clear-quota').textContent = dungeonData.norma;
        document.getElementById('res-quota-score').textContent = dungeonData.norma;
        clearQuota = dungeonData.norma;
    } else {
        // 万が一、ダンジョン情報が取れなかった場合はクエスト選択画面に戻す
        alert("ダンジョン情報が見つかりません。もういちど選んでね！");
        window.location.href = `quest.html?user=${currentUser}`;
        return;
    }
        
    // ★ 受け取った本物のユーザー名を使って仲間データを読み込み
    await setupPartyAndRender(currentUser);

    // ② ★【Firestore本番接続】本物のクイズデータをFirebaseから条件検索して10問セット
    await loadRealQuestions(currentUser, currentGenre);

    // ★ 地図に戻るボタンのイベント設定（ユーザー名を引き継ぐ）
    setupBackToMapButton();
});

// ==========================================
// ★ なかまと【自キャラ共通関数連動】のデータ取得・画像画面反映ロジック（準備中画像対応版）
// ==========================================
async function setupPartyAndRender(userName) {
    try {
        // マスタロード（すでに取得済みなら内部で即返されます）
        await loadAnimalMaster();
        await loadGenreMaster();
        await loadCompanionMaster(); 

        // 🌟 共通関数を実行。すでにログイン・地図画面で取得済みなら、Firebaseへの通信は行わずキャッシュを即座に返します！（二重取得の廃止）
        const userData = await setupPlayerMaster(userName);
        
        let partyIds = [];
        let playerFileName = "placeholder.jpg";
        if (userData) {
            // ★ ここで取得した学年（grade）をグローバル変数にガチッと保存！
            if (userData.grade !== undefined) {
                userGrade = userData.grade;
            }
            // 実データのフィールド名「companions」からIDリストを取得
            if (userData.companions && Array.isArray(userData.companions)) {
                partyIds = [...userData.companions];
            }
            // 動物キーと性別から画像ファイル名を逆引き
            playerFileName = getCharacterFileName(userData.animal, userData.gender);
        }

        // 自キャラの画像反映
        const playerImgEl = document.getElementById('player-img');
        if (playerImgEl) {
            playerImgEl.onerror = () => setCharacterSrc(playerImgEl, "placeholder.jpg");
            setCharacterSrc(playerImgEl, playerFileName);
            playerImgEl.alt = "じぶん";
        }

        // ==========================================
        // ユーザ所持の仲間を検索して追加
        // ==========================================
        activeCompanions = [];
        partyIds.forEach(id => {
            const npc = companionMasterData.find(c => c.id === id);
            if (npc) activeCompanions.push(npc);
        });
        // 足りない場合は default を補完
        while (activeCompanions.length < 2) {
            const defaultNpc = companionMasterData.find(c => c.id === DEFAULT_NPC_ID);
            if (defaultNpc) activeCompanions.push(defaultNpc);
            else break;
        }
        // なかま2人の画面反映（画像がないNPCは自動で準備中 placeholder.jpg に差し替え）
        activeCompanions.forEach((companion, index) => {
            const num = index + 1;

            // 名前反映
            const nameEl = document.getElementById(`npc${num}-name`);
            if (nameEl) nameEl.textContent = companion.name;

            // 画像反映
            const imgEl = document.getElementById(`npc${num}-img`);
            if (imgEl) {
                imgEl.onerror = () => setCompanionSrc(imgEl, "placeholder.jpg");

                const fileName = companion.img || "placeholder.jpg";
                setCompanionSrc(imgEl, fileName);

                imgEl.alt = companion.name;
            }
        });

    } catch (error) {
        console.error("キャラデータの読み込みに失敗しました:", error);
    }
}

// ==========================================
// ★【確定版】Firestoreから条件に合うクイズを取得して10問選出する関数
// ==========================================
async function loadRealQuestions(userName, genre) {
    try {
        // ① プレイヤーの学年に応じて、検索対象にする学年リストを動的に組み立てる
        let targetGrades = [userGrade];
        if (userGrade > 0 && genre !== "boss") {
            // 1年生以上の場合は、ひとつ下の学年（1年生なら0＝幼児）を追加する
            targetGrades.push(userGrade - 1);
        }
        // ※ 幼児（userGrade === 0）の場合は、targetGrades は [0] のままになります

        // 2. questions コレクションから「ジャンル」と「対象学年リストのいずれか」が一致する問題を検索
        let genreList = [];
        if (genre === "boss") {
            // ダンジョンマスタをロード（キャッシュ対応）
            await loadDungeonMaster();    
            // ID に一致するダンジョン情報を取得
            const dungeonData = dungeonMasterData.find(d => d.id === currentQuest);
            // ボス戦 → ダンジョンの rewards の科目すべて
            genreList = Object.keys(dungeonData.rewards);  
        } else {
            genreList = [genre];
        }
        const qQuestions = query(
            collection(db, "questions"), 
            where("genre", "in", genreList),
            where("grade", "in", targetGrades)
        );
        const querySnapshot = await getDocs(qQuestions);

        let allMatchedQuestions = [];
        querySnapshot.forEach((docSnap) => {
            allMatchedQuestions.push({
                id: docSnap.id,
                ...docSnap.data()
            });
        });

        // 3. マッチした本物の問題をまずはランダムにシャッフル（並び替え）
        for (let i = allMatchedQuestions.length - 1; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            [allMatchedQuestions[i], allMatchedQuestions[r]] = [allMatchedQuestions[r], allMatchedQuestions[i]];
        }

        // 4. ★ 10問になるように、足りない分をテスト用データから自動補完するロジック
        let finalQuestions = [...allMatchedQuestions];

        // もし本物の問題が10問未満だったら、10問になるまでテストデータを詰め込む
        if (finalQuestions.length < 10) {
            console.log(`本番の問題が足りないため（現在${finalQuestions.length}問）、テストデータから補完します。`);
            
            // テストデータを念のためシャッフルしてから追加する
            let tempMock = [...mockQuestions];
            for (let i = tempMock.length - 1; i > 0; i--) {
                const r = Math.floor(Math.random() * (i + 1));
                [tempMock[i], tempMock[r]] = [tempMock[r], tempMock[i]];
            }

            // 10問に到達するまで、シャッフルしたテストデータを1問ずつ合流させる
            for (let i = 0; i < tempMock.length; i++) {
                if (finalQuestions.length >= 10) break;
                
                // すでに配列に入っている問題とIDが被っていないかチェック（重複防止の安全策）
                const isDuplicate = finalQuestions.some(q => q.id === tempMock[i].id);
                if (!isDuplicate) {
                    finalQuestions.push(tempMock[i]);
                }
            }

            // 万が一、テストデータを足しても10問に満たない場合は、同じテストデータから再度補完
            while (finalQuestions.length < 10) {
                finalQuestions.push(mockQuestions[Math.floor(Math.random() * mockQuestions.length)]);
            }
        }

        // 5. 確実に10問になった配列の、先頭から10問を切り取って本番用の配列にセット！
        currentQuestions = finalQuestions.slice(0, 10);

        // 6. データの準備がすべて整ったら、ローディング画面を消して満を持して1問目を出題！
        const loadingScreen = document.getElementById('ai-loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
        
        loadQuestion(currentQuestionIndex);

    } catch (error) {
        console.error("クイズデータの取得に失敗しました:", error);
        alert("つうしんエラーが発生しました。");
        const loadingScreen = document.getElementById('ai-loading-screen');
        if (loadingScreen) loadingScreen.classList.add('hidden');
    }
}

// ==========================================
// 4. クイズの出題処理
// ==========================================
function loadQuestion(index) {
    if (index >= maxQuestions) {
        showResult();
        return;
    }

    const q = currentQuestions[index];
    
    // 画面要素の更新
    document.getElementById('current-question-num').textContent = index + 1;
    
    // --- ★【完全自動化】ジャンルマスタから動的に表示を切り替えるロジック ---
    let genreJA = q.genre; // 見つからなかった場合のバックアップ    
    // キャッシュされたジャンルマスタから、現在の問題の科目(value)に一致するドキュメントを検索
    // ※実データが小文字の "english" 等になっているため、toLowerCase() で安全に比較します
    const matchedGenre = genreMasterData.find(g => g.value.toLowerCase() === q.genre.toLowerCase());
    if (matchedGenre) {
        // ユーザーの学年(userGrade)が 0 (幼児) の場合はひらがな(label)、それ以外は漢字(label_junior)を自動適用！
        if (userGrade === 0) {
            genreJA = matchedGenre.label;        // 例: "えいご"
        } else {
            genreJA = matchedGenre.label_junior; // 例: "英語"
        }
    }
    document.getElementById('quiz-genre').textContent = genreJA;

    // ✨ 学年マスタから問題の grade（数値）に一致するデータを抽出する
    const gradeBadgeEl = document.getElementById('quiz-grade');
    if (gradeBadgeEl) {
        // マスタデータの value（数値型）と q.grade（数値型）を比較
        const matchedGrade = gradeMasterData.find(g => g.value === q.grade);
        if (matchedGrade) {
            // 一致するものがあれば、データベースに登録されている label（"4年生", "幼児" など）を表示
            gradeBadgeEl.textContent = matchedGrade.label;
        } else {
            // 万が一マスタから見つからなかった場合のバックアップ表示
            gradeBadgeEl.textContent = q.grade === 0 ? "幼児" : `${q.grade}年生`;
        }
    }

    // クイズ
    document.getElementById('quiz-text').textContent = q.text;
    document.getElementById('explanation-area').classList.add('hidden');
    
    const inputsContainer = document.getElementById('quiz-inputs');
    inputsContainer.innerHTML = ''; 
    inputsContainer.classList.remove('hidden');
    inputsContainer.classList.remove('ox-row'); // ★ 毎回横並びクラスをリセットする

    // クイズ形式による初期値（制限時間カウンタ）の分岐
    let maxTimerValue = 30; // 通常（select, which）は30
    if (q.type === "direct") {
        maxTimerValue = 40; // 直接入力（direct）は40
    }

    // ボタン・入力エリアの生成（引数から余計な変数を削除してシンプルに）
    if (q.type === "select") {
        // ① 元のループ（q.choices.forEach）は削除し、まず配列を安全にコピーします
        let shuffledChoices = [...q.choices];
        
        // ② コピーした配列をランダムにシャッフルします
        for (let i = shuffledChoices.length - 1; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            [shuffledChoices[i], shuffledChoices[r]] = [shuffledChoices[r], shuffledChoices[i]];
        }

        // ③ シャッフルされた新しい並び順（shuffledChoices）で4つのボタンを生成します！
        shuffledChoices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice;
            btn.addEventListener('click', () => handleAnswer(choice, q.answer));
            inputsContainer.appendChild(btn);
        });
    } else if (q.type === "which") {
        // ★ 〇×の時だけコンテナを横並び（ox-row）にするクラスを追加！
        inputsContainer.classList.add('ox-row');
        
        // 画面の見た目は「〇」「×」のまま、裏側で "true" / "false" を判定に送る仕掛けにします
        const oxChoices = [
            { text: "〇", value: "true" },
            { text: "×", value: "false" }
        ];
        
        oxChoices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn ox-btn';
            btn.textContent = choice.text; // 画面には「〇」や「×」を表示
            // ボタンを押したときに、裏側の値（"true" または "false"）を判定に送ります
            btn.addEventListener('click', () => handleAnswer(choice.value, q.answer));
            inputsContainer.appendChild(btn);
        });
    } else if (q.type === "direct") {
        const group = document.createElement('div');
        group.className = 'text-input-group';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'direct-answer-input';
        input.placeholder = 'こたえを入力してね';
        
        const submitBtn = document.createElement('button');
        submitBtn.id = 'submit-answer-btn';
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = '決定';
        
        submitBtn.addEventListener('click', () => {
            const userAnswer = input.value.trim();
            handleAnswer(userAnswer, q.answer);
        });
        
        group.appendChild(input);
        group.appendChild(submitBtn);
        inputsContainer.appendChild(group);
    }

    // ==========================================
    // ⏰ タイマーの開始（0になるまでなめらかに減る）
    // ==========================================
    currentScore = maxTimerValue; // 例: 30秒 または 40秒
    document.getElementById('timer-bar-fill').style.width = '100%';
    
    clearInterval(timerInterval);
    // ✨【修正】1秒間に50回（20ミリ秒ごと）の超高速ループに変更して、なめらかさを表現します
    timerInterval = setInterval(() => {
        if (currentScore > 0) {
            // 20ミリ秒は「0.02秒」なので、0.02 ずつ細かく引き算をします
            currentScore -= 0.02;
            
            // もしマイナスにいってしまったら0でストップさせる安全処理
            if (currentScore < 0) currentScore = 0;
            
            // 残り時間ゲージをリアルタイムに縮小（100% から 0% まで超滑らかに連動）
            const timerPercent = (currentScore / maxTimerValue) * 100;
            document.getElementById('timer-bar-fill').style.width = `${timerPercent}%`;
        } else {
            // ✨ 0秒になったら自動でタイマーの引き算ループだけをストップさせます
            clearInterval(timerInterval);
        }
    }, 20);
}

// ==========================================
// 5. 回答時の判定・解説表示処理
// ==========================================
function handleAnswer(userAnswer, correctAnswer) {
    clearInterval(timerInterval);
    document.getElementById('quiz-inputs').classList.add('hidden');
    document.getElementById('timer-bar-fill').style.width = '0%';

    let isCorrect = (userAnswer === correctAnswer);
    // もし〇×クイズ（ボタンから "true" または "false" の文字列が届いた）の場合
    if (userAnswer === "true" || userAnswer === "false") {
        // ボタンから届いた文字を、本物の true / false （Boolean型）に変換してデータと比べます
        const userBool = (userAnswer === "true");
        isCorrect = (userBool === correctAnswer); 
    }
    const resultMessage = document.getElementById('result-message');
    
    let addedPlayerScore = 0;
    if (isCorrect) {
        resultMessage.textContent = "せいかい！ 🎉";
        resultMessage.className = "result-text correct"; 
        
        // ★現在の問題のタイプを安全に取得してベース時間を判定
        const q = currentQuestions[currentQuestionIndex];
        const maxTimerValue = (q.type === "direct") ? 40 : 30;
        
        // 新しいポイント計算ロジック（残り時間ボーナス最大20ポイント ＋ 最小値10ポイント）
        const timeBonus = Math.round((currentScore / maxTimerValue) * 20);
        addedPlayerScore = timeBonus + 10; 
        
    } else {
        resultMessage.textContent = "ざんねん… 😢";
        resultMessage.className = "result-text incorrect"; 
        addedPlayerScore = 0; 
    }
    playerScore += addedPlayerScore;

    // ==========================================
    // ★ NPC2人の自動回答シミュレーション
    // ==========================================
    const questionGenre = currentQuestions[currentQuestionIndex].genre; // 現在の問題のジャンル（mathなど）
    let npcScores = [0, 0]; // なかま1、なかま2が得るポイントのキープ用

        
    activeCompanions.forEach((companion, index) => {
        // ① 天才・得意・それ以外の確率（正解率）を決定
        let successRate = 0.15; // デフォルト：それ以外（15%）
        // 天才（genius）80%
        if (companion.genius && companion.genius.includes(questionGenre)) {
            successRate = 0.80;    
        // 得意（good）40%
        } else if (companion.good && companion.good.includes(questionGenre)) {
            successRate = 0.40;
        }

        // ② 確率の抽選
        const isNpcCorrect = Math.random() < successRate;

        // ③ 正解していたら、回答速度ボーナスを含めたポイントを算出
        if (isNpcCorrect) {
            // 基礎ポイント10 ＋ スピードボーナス
            npcScores[index] = 10 + Math.floor(Math.random() * 6); 
        } else {
            npcScores[index] = 0; // 不正解なら0ポイント
        }
    });

    // 算出したポイントをそれぞれのトータルスコアに加算して画面に反映
    npc1Score += npcScores[0];
    npc2Score += npcScores[1];

    // ==========================================
    // ★ 2秒間のポイントポップアップ演出ロジック
    // ==========================================
    const popups = [
        { el: document.getElementById('player-popup'), score: addedPlayerScore },
        { el: document.getElementById('npc1-popup'), score: npcScores[0] },
        { el: document.getElementById('npc2-popup'), score: npcScores[1] }
    ];

    popups.forEach(pop => {
        if (pop.el) {
            // 前のアニメーションをリセットするため一度クローンして差し替え
            const newEl = pop.el.cloneNode(true);
            pop.el.parentNode.replaceChild(newEl, pop.el);
            
            // テキストのセットと色の切り替え
            if (pop.score > 0) {
                newEl.textContent = `+${pop.score}pt`;
                newEl.classList.remove('zero');
            } else {
                newEl.textContent = `＋0pt`;
                newEl.classList.add('zero');
            }
            
            // 表示開始
            newEl.classList.remove('hidden');
            
            // 2秒後（2000ミリ秒後）に自動で隠す
            setTimeout(() => {
                newEl.classList.add('hidden');
            }, 2000);
        }
    });

    // 合計ポイントとフッターゲージの更新
    const totalScore = playerScore + npc1Score + npc2Score;
    document.getElementById('total-score').textContent = totalScore;
    const progressPercent = Math.min((totalScore / clearQuota) * 100, 100);
    document.getElementById('quota-bar-fill').style.width = `${progressPercent}%`;

    const q = currentQuestions[currentQuestionIndex];
    // document.getElementById('explanation-text').textContent = q.explanation;
    document.getElementById('explanation-text').innerHTML = q.explanation;
    document.getElementById('explanation-area').classList.remove('hidden');

    const nextBtn = document.getElementById('next-question-btn');
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    };
}

// ==========================================
// 6. 結果確認（リザルト）画面の表示処理
// ==========================================
async function showResult() {
    document.getElementById('res-player-score').textContent = playerScore;
    document.getElementById('res-npc1-score').textContent = npc1Score;
    document.getElementById('res-npc2-score').textContent = npc2Score;
    
    const totalScore = playerScore + npc1Score + npc2Score;
    document.getElementById('res-total-score').textContent = totalScore;

    const resultTitle = document.getElementById('result-title');
    const rewardArea = document.getElementById('reward-area');
    const rewardContent = document.getElementById('reward-content');

    // ★ クリア判定
    if (totalScore >= clearQuota) {
        resultTitle.textContent = "STAGE CLEAR!! 🎉";
        resultTitle.className = "clear-title";
        rewardArea.classList.remove('hidden');

        // ★ ボスステージ判定（ジャンルが boss ならボス）
        if (currentGenre === "boss") {
            // ★ ランクアップ処理を呼び出し、返ってきたHTMLをセット
            rewardContent.innerHTML = await getBossReward();
        } else {
            // ★ 秘宝獲得処理を呼び出し、返ってきたHTMLをセット
            rewardContent.innerHTML = await getTreasureReward();
        }
    } else {
        resultTitle.textContent = "GAME OVER... 😢";
        resultTitle.className = "failed-title";
        rewardArea.classList.add('hidden'); 
    }

    document.getElementById('result-screen').classList.remove('hidden');
}
// ボスステージ専用：ランクアップ処理
async function getBossReward() {
    // ★ ユーザーデータ取得
    const userData = await setupPlayerMaster(currentUser);
    // ★ rank がなければ初期化
    if (!userData.rank) {userData.rank = 0;}

    // ダンジョンマスタをロード（キャッシュ対応）
    await loadDungeonMaster();    
    // ID に一致するダンジョン情報を取得
    const dungeonData = dungeonMasterData.find(d => d.id === currentQuest);

    // ★ ランクアップ条件：ダンジョンランク > ユーザランク
    if (dungeonData.rank > userData.rank) {
        // Firestore 保存
        userData.rank = dungeonData.rank;
        const playerRef = doc(db, "users", userData.docId);
        await updateDoc(playerRef, { rank: userData.rank });

        return `<p>👑 ボスステージクリア！ランクが <strong>${userData.rank}</strong> にアップした！</p>`;
    }
    // ★ すでに同じ or 高いランクならアップなし
    return `<p>👑 ボスをたおした！しかしランクはかわらなかった。</p>`;
}
// 通常ステージ用：秘宝獲得処理
async function getTreasureReward() {
    // ダンジョンマスタをロード（キャッシュ対応）
    await loadDungeonMaster();    
    // ID に一致するダンジョン情報を取得
    const dungeonData = dungeonMasterData.find(d => d.id === currentQuest);
    const treasureId = dungeonData.rewards[currentGenre];
        
    // 🌟 共通関数。Firebaseへの通信は行わずキャッシュを即座に返します！（二重取得の廃止）
    const userData = await setupPlayerMaster(currentUser);
    // ★ treasures がなければ作成
    if (!userData.treasures) {userData.treasures = [];}

    // ★ 重複チェック
    if (userData.treasures.includes(treasureId)) {return `<p>📘 秘宝（ひほう）はすでに持っているようだ…</p>`;}

    // ★ 25% 抽選
    const getChance = Math.random() < 0.25;
    if (!getChance) {return `<p>😢 こんかいは秘宝（ひほう）を見つけられなかった…</p>`;}

    // ★ Firestore 保存
    userData.treasures.push(treasureId);
    const playerRef = doc(db, "users", userData.docId);
    await updateDoc(playerRef, { treasures: userData.treasures });

    return `<p>🏅 秘宝（ひほう）をてにいれた！地図（ちず）のユーザ情報で かくにんしてね</p>`;
}

// ==========================================
// ★ 地図に戻るボタンのユーザー情報引き継ぎ処理
// ==========================================
function setupBackToMapButton() {
    // 地図に戻るアクションを持つボタン全てにイベントを設定
    // （ヘッダーにあるボタンや、リザルト画面の「ちずに戻る」ボタンに対応）
    const backButtons = [
        document.getElementById('back-to-map-btn'), // リザルト画面上のボタン
        document.getElementById('header-back-btn')   // （もしヘッダー等にもあれば対応できるよう共通化）
    ];

    backButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                // 安全にユーザー名エンコードしてURLパラメータを組み立てる
                const targetUrl = `quest.html?temp=${encodeURIComponent(tempData.id)}`;
                window.location.href = targetUrl;
            });
        }
    });
}
