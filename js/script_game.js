// ==========================================
// クエスト画面（game.html）専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from './firebase-config.js';
// 💡 共通マスタファイルからお仕事をインポート
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setupPlayerMaster } from './game-master.js';

// ==========================================
// 1. 本物のFirebase構造に合わせたダミーデータ
// ==========================================
const mockQuestions = [
    { id: "q1", type: "四択", genre: "math", grade: 4, text: "15 × 6 のこたえは つぎのうちどれかな？", choices: ["75", "80", "90", "100"], answer: "90", explanation: "15×6は90になります。" },
    { id: "q2", type: "四択", genre: "moral", grade: 4, text: "SNSで友達の悪口を書いている人を見つけました。適切な行動は？", choices: ["関わらず、大人や先生に相談する", "自分も一緒に書き込む", "その人を強く問い詰める", "面白そうなので友達に拡散する"], answer: "関わらず、大人や先生に相談する", explanation: "悪口には関わらず、すぐに信頼できる大人や先生に相談しよう。" },
    { id: "q3", type: "四択", genre: "Japanese", grade: 4, text: "「一生懸命」と同じ意味の言葉はどれ？", choices: ["必死になって", "てきとうに", "のんびりと", "おこりながら"], answer: "必死になって", explanation: "正解は「必死になって」です！" },
    { id: "q4", type: "直接入力", genre: "math", grade: 4, text: "25 × 4 の答えはいくつ？", choices: [], answer: "100", explanation: "25×4は100です！" },
    { id: "q5", type: "四択", genre: "math", grade: 0, text: "りんごが 3こ あります。2こ もらうと、ぜんぶで なんこ？", choices: ["5こ", "4こ", "1こ", "6こ"], answer: "5こ", explanation: "3+2は5になるよ。" },
    { id: "q6", type: "〇×", genre: "math", grade: 4, text: "三角形の内角の和（3つの角をたした数）は 180度 である。マルかバツか？", choices: ["〇", "×"], answer: "〇", explanation: "正解は〇！どんな三角形でも、3つの角を合わせると絶対に180度になるよ。" },
    { id: "q7", type: "四択", genre: "Japanese", grade: 4, text: "「ノートに文字を（　）。」カッコに入る正しい言葉は？", choices: ["書く", "歩く", "食べる", "話す"], answer: "書く", explanation: "ノートには文字を「書く」のが正しいね。" },
    { id: "q8", type: "〇×", genre: "moral", grade: 4, text: "友達が困っているときは、気づかないふりをするのが良い。マルかバツか？", choices: ["〇", "×"], answer: "×", explanation: "バツです！困っている友達がいたら、「どうしたの？」と声をかけてあげよう。" },
    { id: "q9", type: "直接入力", genre: "math", grade: 4, text: "1分間は、何秒かな？（数字だけでこたえてね）", choices: [], answer: "60", explanation: "正解は60秒です！ちなみに1時間は60分だよ。" },
    { id: "q10", type: "四択", genre: "math", grade: 4, text: "81 ÷ 9 のこたえは？", choices: ["7", "8", "9", "10"], answer: "9", explanation: "九九の「くく あしじゅういち」を逆算すると9になるよ！" }
];

// ==========================================
// 2. ゲームの状態管理（ステート）
// ==========================================
let currentQuestionIndex = 0; 
let currentScore = 100;       
let timerInterval = null;     
const maxQuestions = mockQuestions.length; 

// スコア記録用
let playerScore = 0;
let npc1Score = 0;
let npc2Score = 0;
const clearQuota = 300; // 問題数が増えたのでノルマを調整

// ==========================================
// 3. 画面起動時の処理
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('clear-quota').textContent = clearQuota;
    document.getElementById('res-quota-score').textContent = clearQuota;
    
    loadQuestion(currentQuestionIndex);
    
    document.getElementById('back-to-map-btn').addEventListener('click', () => {
        window.location.href = 'quest.html';
    });
});

// ==========================================
// 4. クイズの出題処理
// ==========================================
function loadQuestion(index) {
    if (index >= maxQuestions) {
        showResult();
        return;
    }

    const q = mockQuestions[index];
    
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

    // クイズ形式による初期値（制限時間カウンタ）の分岐
    // ※内部的には、0になるまで減算し、残り時間ボーナス（最大20ポイント）の計算に使用します
    let maxTimerValue = 30; // 通常は30
    if (q.type === "直接入力") {
        maxTimerValue = 40; // 直接入力は長めの40
    }

    if (q.type === "四択" || q.type === "○×") {
        q.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = q.type === "○×" ? 'choice-btn ox-btn' : 'choice-btn';
            btn.textContent = choice;
            btn.addEventListener('click', () => handleAnswer(choice, q.answer, maxTimerValue));
            inputsContainer.appendChild(btn);
        });
    } else if (q.type === "直接入力") {
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
            handleAnswer(userAnswer, q.answer, maxTimerValue);
        });
        
        group.appendChild(input);
        group.appendChild(submitBtn);
        inputsContainer.appendChild(group);
    }

    // タイマーの開始（0になるまでしっかり減る、HTML上の数値要素への反映は削除）
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
function handleAnswer(userAnswer, correctAnswer, maxTimerValue) {
    clearInterval(timerInterval);
    document.getElementById('quiz-inputs').classList.add('hidden');
    document.getElementById('timer-bar-fill').style.width = '0%';

    const isCorrect = (userAnswer === correctAnswer);
    const resultMessage = document.getElementById('result-message');
    
    let addedPlayerScore = 0;
    if (isCorrect) {
        resultMessage.textContent = "せいかい！ 🎉";
        resultMessage.className = "result-text correct"; 
        
        // ★新しいポイント計算ロジック
        // 残り時間を最大20ポイントに換算 ＋ 最小値の10ポイントを必ず加算
        const timeBonus = Math.round((currentScore / maxTimerValue) * 20);
        addedPlayerScore = timeBonus + 10; 
        
    } else {
        resultMessage.textContent = "ざんねん… 😢";
        resultMessage.className = "result-text incorrect"; 
        addedPlayerScore = 0; // 不正解は0ポイント
    }

    playerScore += addedPlayerScore;
    document.getElementById('player-score').textContent = playerScore;

    // NPCの自動回答（1/3スケール用に獲得ポイントを調整）
    const npc1Correct = Math.random() > 0.4; 
    const npc2Correct = Math.random() > 0.5; 
    const addedNpc1 = npc1Correct ? Math.floor(Math.random() * 10) + 12 : 0; 
    const addedNpc2 = npc2Correct ? Math.floor(Math.random() * 10) + 12 : 0;
    
    npc1Score += addedNpc1;
    npc2Score += addedNpc2;
    document.getElementById('npc1-score').textContent = npc1Score;
    document.getElementById('npc2-score').textContent = npc2Score;

    // 合計ポイントとフッターゲージの更新
    const totalScore = playerScore + npc1Score + npc2Score;
    document.getElementById('total-score').textContent = totalScore;
    const progressPercent = Math.min((totalScore / clearQuota) * 100, 100);
    document.getElementById('quota-bar-fill').style.width = `${progressPercent}%`;

    const q = mockQuestions[currentQuestionIndex];
    document.getElementById('explanation-text').textContent = q.explanation;
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
