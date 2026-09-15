// ==========================================
// クエスト画面（game.html）専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from './firebase-config.js';
// 💡 共通マスタファイルからお仕事をインポート
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setupPlayerMaster, loadGenreMaster } from './game-master.js';

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
let currentQuest = ""; // クエスト名
let currentGenre = ""; // ジャンル（math, Japanese など）
let clearQuota = 300; // 問題数が増えたのでノルマを調整
let userGrade = 4; // ★【New】学年情報を保存しておくグローバル変数（初期値は小4）

// 仲間データ管理
let activeCompanions = [];
const DEFAULT_NPC_ID = "p72A7WPl8OtG5Ht7hhXC"; 

// ==========================================
// 3. 画面起動時の処理
// ==========================================
window.addEventListener('DOMContentLoaded', async () => {
    // ★ URLパラメータ（?user=〇〇&quest=〇〇&genre=〇〇）の解析と受け取り
    const urlParams = new URLSearchParams(window.location.search);
    currentUser = urlParams.get('user');
    currentQuest = urlParams.get('quest');
    currentGenre = urlParams.get('genre');
    const currentNorma = urlParams.get('norma');
    if (currentNorma) {
        clearQuota = parseInt(currentNorma, 10); // clearQuotaに直接セット！
    }    
    document.getElementById('clear-quota').textContent = clearQuota;
    document.getElementById('res-quota-score').textContent = clearQuota;

    // 万が一、ユーザー名が取れなかった場合は安全のためにトップ画面に戻す
    if (!currentUser) {
        alert("もういちどログインしなおしてね！");
        window.location.href = 'index.html';
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
        // 動物マスタのロード（すでに取得済みなら内部で即返されます）
        await loadAnimalMaster();

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
        
        // 仲間が足りない場合はおさるさんで補完
        while (partyIds.length < 2) {
            partyIds.push(DEFAULT_NPC_ID);
        }
        partyIds = partyIds.slice(0, 2);
        
        // 仲間2人のマスタ情報をFirebase（companions）から取得
        activeCompanions = [];
        for (let i = 0; i < partyIds.length; i++) {
            const npcId = partyIds[i];
            const npcDocRef = doc(db, "companions", npcId);
            const npcDocSnap = await getDoc(npcId === DEFAULT_NPC_ID ? doc(db, "companions", "dummy") : npcDocRef);
            
            if (npcDocSnap.exists()) {
                activeCompanions.push({ id: npcId, ...npcDocSnap.data() });
            } else {
                activeCompanions.push({
                    id: DEFAULT_NPC_ID, name: "おさるさん", image_path: "monkey_01",
                    good_genres: [], bad_genres: ["math", "Japanese", "moral"]
                });
            }
        }
        
        // なかま2人の画面反映（画像がないNPCは自動で準備中 placeholder.jpg に差し替え）
        activeCompanions.forEach((companion, index) => {
            const num = index + 1;
            const nameEl = document.getElementById(`npc${num}-name`);
            if (nameEl) nameEl.textContent = companion.name;
            
            const imgEl = document.getElementById(`npc${num}-img`);
            if (imgEl) {
                imgEl.onerror = () => setCharacterSrc(imgEl, "placeholder.jpg");
                if (companion.image_path) {
                    setCharacterSrc(imgEl, companion.image_path.includes('.') ? companion.image_path : "placeholder.jpg");
                } else {
                    setCharacterSrc(imgEl, "placeholder.jpg");
                }
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
        // 2. questions コレクションから「ジャンル」と「学年」が一致する問題を検索
        const qQuestions = query(
            collection(db, "questions"), 
            where("genre", "==", genre),
            where("grade", "==", userGrade)
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
    
    // 進行度ゲージの更新
    const qProgress = ((index + 1) / 10) * 100;
    document.getElementById('question-bar-fill').style.width = `${qProgress}%`;
    
    // 属性の翻訳表示
    let genreJA = q.genre;
    if (q.genre === "math") genreJA = "さんすう";
    if (q.genre === "Japanese") genreJA = "こくご";
    if (q.genre === "moral") genreJA = "どうとく";
    let gradeJA = q.grade === 0 ? "ようじ" : `小${q.grade}`;
    
    document.getElementById('quiz-genre').textContent = genreJA;
    document.getElementById('quiz-grade').textContent = gradeJA;
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
        q.choices.forEach(choice => {
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

    // タイマーの開始（0になるまで減る）
    currentScore = maxTimerValue;
    document.getElementById('timer-bar-fill').style.width = '100%';
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (currentScore > 0) {
            currentScore--;
            
            // 残り時間ゲージをリアルタイムに縮小（100% から 0% まで）
            const timerPercent = (currentScore / maxTimerValue) * 100;
            document.getElementById('timer-bar-fill').style.width = `${timerPercent}%`;
        }
    }, 333); 
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
    const currentGenre = currentQuestions[currentQuestionIndex].genre; // 現在の問題のジャンル（mathなど）
    let npcScores = [0, 0]; // なかま1、なかま2が得るポイントのキープ用
     
    activeCompanions.forEach((companion, index) => {
        // ① 得意・苦手・それ以外の確率（正解率）を決定
        let successRate = 0.40; // デフォルト：それ以外（40%）
        
        if (companion.good_genres && companion.good_genres.includes(currentGenre)) {
            successRate = 0.60; // 得意（60%）
        } else if (companion.bad_genres && companion.bad_genres.includes(currentGenre)) {
            successRate = 0.20; // 苦手（20%）
        }

        // ② 確率の抽選
        const isNpcCorrect = Math.random() < successRate;

        // ③ 正解していたら、回答速度ボーナスを含めたポイントを算出
        if (isNpcCorrect) {
            // 回答の速さはランダム（残り時間ボーナスを 5〜15ポイントの間でランダムに付与）
            const npcTimeBonus = Math.floor(Math.random() * 11) + 5; 
            // 基礎ポイント10 ＋ スピードボーナス
            npcScores[index] = 10 + npcTimeBonus; 
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
function showResult() {
    document.getElementById('res-player-score').textContent = playerScore;
    document.getElementById('res-npc1-score').textContent = npc1Score;
    document.getElementById('res-npc2-score').textContent = npc2Score;
    
    const totalScore = playerScore + npc1Score + npc2Score;
    document.getElementById('res-total-score').textContent = totalScore;

    const resultTitle = document.getElementById('result-title');
    const rewardArea = document.getElementById('reward-area');
    const rewardContent = document.getElementById('reward-content');

    if (totalScore >= clearQuota) {
        resultTitle.textContent = "STAGE CLEAR!! 🎉";
        resultTitle.className = "clear-title";
        
        rewardArea.classList.remove('hidden');
        rewardContent.innerHTML = `<p>🏅 ひほう<strong>「たいようのメダル」</strong>をみつけた！</p>
                                   <p>🐾 <strong>おさるさん</strong> がなかまに加わりたそうにこちらを見ている！（後日対応）</p>`;
    } else {
        resultTitle.textContent = "GAME OVER... 😢";
        resultTitle.className = "failed-title";
        rewardArea.classList.add('hidden'); 
    }

    document.getElementById('result-screen').classList.remove('hidden');
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
                const targetUrl = `quest.html?user=${encodeURIComponent(currentUser)}`;
                window.location.href = targetUrl;
            });
        }
    });
}
