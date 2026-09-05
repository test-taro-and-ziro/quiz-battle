const quizDatabase = {
    'こくご': [
        { lvl: 1, q: "「いぬ」の はんたいの おおきい どうぶつは？", a: ["くま", "ねこ", "あり", "とり"], c: 0 },
        { lvl: 1, q: "「こんにちは」の つぎに くる 正しい文字は？\nこんにち（ ）", a: ["は", "わ", "お", "あ"], c: 0 },
        { lvl: 3, q: "「一生懸命」と 同じ意味の言葉はどれ？", a: ["必死になって", "てきとうに", "のんびりと", "おこりながら"], c: 0 },
        { lvl: 3, q: "「（ ）も歩けば棒に当たる」 空欄に入る動物は？", a: ["犬", "猫", "猿", "鳥"], c: 0 },
        { lvl: 5, q: "「他人の行動を見て、自分の行いを改める」という意味の四字熟語は？", a: ["反面教師", "単刀直入", "以心伝心", "弱肉強食"], c: 0 },
        { lvl: 5, q: "次のうち、「敬語（尊敬語）」として正しいものはどれ？", a: ["先生がお見えになる", "先生が来る", "先生が参る", "先生が来られる"], c: 0 }
    ],
    'さんすう': [
        { lvl: 1, q: " りんごが 3こ あります。2こ もらうと、ぜんぶで なにこ？", a: ["5こ", "4こ", "1こ", "6こ"], c: 0 },
        { lvl: 1, q: "「8」の つぎに おおきい かずは なに？", a: ["9", "7", "10", "6"], c: 0 },
        { lvl: 3, q: " 25 × 4 の答えはいくつ？", a: ["100", "80", "90", "120"], c: 0 },
        { lvl: 3, q: " 1リットルは何ミリリットル（ml）？", a: ["1000ml", "100ml", "10ml", "10000ml"], c: 0 },
        { lvl: 5, q: " 時速60kmの車が、2時間で進む距離は？", a: ["120km", "30km", "60km", "180km"], c: 0 },
        { lvl: 5, q: " 三角形の面積を求める公式は？", a: ["底辺 × 高さ ÷ 2", "底辺 × 高さ", "半径 × 半径 × 3.14", "縦 × 横"], c: 0 }
    ],
    'どうとく': [
        { lvl: 1, q: " ともだちの おもちゃを つかいたいとき、なんて 言う？", a: ["かして！という", "だまって とる", "おこる", "なきだす"], c: 0 },
        { lvl: 1, q: " ごはんを たべるとき、さいしょに 言う あいさつは？", a: ["ごちそうさま", "いただきます", "こんにちは", "ありがとう"], c: 0 },
        { lvl: 3, q: " 友達が困って泣いています。どうするのが一番良い？", a: ["「どうしたの？」と声をかける", "見ないふりをする", "一緒に泣く", "他の友達と言いふらす"], c: 0 },
        { lvl: 3, q: " 図書館など、みんなが使う場所での正しい過ごし方は？", a: ["静かに過ごす", "大声で走る", "お菓子を食べる", "ゲームを大音量でする"], c: 0 },
        { lvl: 5, q: " SNSで友達の悪口を書いている人を見つけました。適切な行動は？", a: ["関わらず、大人や先生に相談する", "自分も一緒に書き込む", "その人を強く責め立てる", "面白そうなので友達に拡散する"], c: 0 },
        { lvl: 5, q: " 「責任（せきにん）を持つ」とはどういうこと？", a: ["自分の失敗を認め、次につなげる", "絶対に失敗しないこと", "誰かのせいにすること", "嫌なことから逃げること"], c: 0 }
    ]
};

const npcList = [
    { name: "みならいニンジャ", avatar: "みならい", speed: 6.0, accuracy: 0.6 },
    { name: "あかニンジャ", avatar: "あか", speed: 4.5, accuracy: 0.75 },
    { name: "マスター・ハンゾウ", avatar: "マスター", speed: 3.0, accuracy: 0.9 }
];

let users = JSON.parse(localStorage.getItem('quiz_battle_users')) || {};
let currentUser = null;
let currentGenre = '';
let currentQuestions = [];
let questionIndex = 0;
let playerHP = 100;
let npcHP = 100;
let currentNPC = null;
let questionStartTime = 0;
let timerInterval = null;
let npcTimeout = null;
const maxAnswerTime = 10000;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

function renderUserList() {
    const listContainer = document.getElementById('login-user-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    Object.keys(users).forEach(username => {
        const item = document.createElement('div');
        item.className = 'user-item';
        const displayGrade = users[username].grade === 1 ? "低学年・幼児" : users[username].grade === 3 ? "中学年" : "高学年";
        item.textContent = username + " (" + displayGrade + " / 勝利:" + (users[username].wins || 0) + ")";
        item.onclick = function() { loginAs(username); };
        listContainer.appendChild(item);
    });
    if(Object.keys(users).length === 0) {
        listContainer.innerHTML = '<div style="padding:10px; color:#aaa; font-size:12px;">アカウントがありません</div>';
    }
}

function handleRegister() {
    const nameInput = document.getElementById('username-input').value.trim();
    const ageSelect = document.getElementById('age-select').value;
    if (!nameInput) { alert('おなまえを入力してね！'); return; }
    if (!ageSelect) { alert('学年をえらんでね！'); return; }
    users[nameInput] = {
        grade: parseInt(ageSelect),
        wins: users[nameInput] ? users[nameInput].wins : 0,
        lv: users[nameInput] ? users[nameInput].lv : 1
    };
    localStorage.setItem('quiz_battle_users', JSON.stringify(users));
    loginAs(nameInput);
}

function loginAs(username) {
    currentUser = username;
    const uData = users[username];
    const displayGrade = uData.grade === 1 ? "低学年・幼児" : uData.grade === 3 ? "中学年" : "高学年";
    document.getElementById('menu-welcome').textContent = "ようこそ、" + username + " さん！";
    document.getElementById('user-stats').textContent = "クラス: " + displayGrade + "向け | かち数: " + (uData.wins || 0) + "回";
    showScreen('screen-menu');
}

function logout() {
    currentUser = null;
    document.getElementById('username-input').value = '';
    renderUserList();
    showScreen('screen-login');
}

function startBattle(genre) {
    currentGenre = genre;
    const uData = users[currentUser];
    const allGenreQuizzes = quizDatabase[genre] || [];
    currentQuestions = allGenreQuizzes.filter(q => q.lvl === uData.grade);
    if(currentQuestions.length === 0) currentQuestions = allGenreQuizzes;
    currentQuestions.sort(function() { return Math.random() - 0.5; });
    const npcIdx = Math.min(Math.floor((uData.wins || 0) / 3), npcList.length - 1);
    currentNPC = npcList[npcIdx];
    playerHP = 100;
    npcHP = 100;
    questionIndex = 0;
    document.getElementById('battle-genre-label').textContent = "ジャンル: " + genre;
    document.getElementById('player-name-label').textContent = currentUser;
    document.getElementById('npc-name-label').textContent = currentNPC.name;
    document.getElementById('npc-avatar').textContent = currentNPC.avatar;
    updateHPDisplays();
    showScreen('screen-battle');
    nextQuestion();
}

function updateHPDisplays() {
    document.getElementById('player-hp').style.width = playerHP + '%';
    document.getElementById('npc-hp').style.width = npcHP + '%';
    document.getElementById('player-hp-text').textContent = "HP: " + playerHP + "/100";
    document.getElementById('npc-hp-text').textContent = "HP: " + npcHP + "/100";
}

function nextQuestion() {
    if (playerHP <= 0 || npcHP <= 0) { endBattle(); return; }
    if (questionIndex >= currentQuestions.length) {
        questionIndex = 0;
        currentQuestions.sort(function() { return Math.random() - 0.5; });
    }
    const qData = currentQuestions[questionIndex];
    document.getElementById('quiz-text').innerText = qData.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    qData.a.forEach(function(opt, idx) {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = '<span class="option-num">' + (idx+1) + '</span> ' + opt;
        btn.onclick = function() { handlePlayerAnswer(idx); };
        container.appendChild(btn);
    });
    questionStartTime = Date.now();
    startTimerBar();
    scheduleNPCAction(qData);
}

function startTimerBar() {
    clearInterval(timerInterval);
    const bar = document.getElementById('timer-bar');
    bar.style.width = '100%';
    timerInterval = setInterval(function() {
        const elapsed = Date.now() - questionStartTime;
        const remainingPercent = Math.max(0, 100 - (elapsed / maxAnswerTime) * 100);
        bar.style.width = remainingPercent + '%';
        if (elapsed >= maxAnswerTime) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 50);
}

function scheduleNPCAction(qData) {
    clearTimeout(npcTimeout);
    const baseSpeed = currentNPC.speed * 1000;
    const actualSpeed = baseSpeed * (0.8 + Math.random() * 0.4);
    npcTimeout = setTimeout(function() {
        if (playerHP <= 0 || npcHP <= 0) return;
        const isCorrect = Math.random() < currentNPC.accuracy;
        if (isCorrect) {
            playerHP = Math.max(0, playerHP - 20);
            triggerEffect('npc-avatar', 'animate-attack-right');
            triggerEffect('player-fighter', 'animate-shake');
            updateHPDisplays();
            showTemporaryText(currentNPC.name + " のこうげき！ 20 ダメージ！");
        }
    }, actualSpeed);
}

function handlePlayerAnswer(selectedIdx) {
    clearInterval(timerInterval);
    clearTimeout(npcTimeout);
    const qData = currentQuestions[questionIndex];
    const elapsed = Date.now() - questionStartTime;
    if (selectedIdx === qData.c) {
        const speedBonus = elapsed < 4000 ? 30 : 20;
        npcHP = Math.max(0, npcHP - speedBonus);
        triggerEffect('player-avatar', 'animate-attack-left');
        triggerEffect('npc-fighter', 'animate-shake');
        updateHPDisplays();
        showTemporaryText("せいかい！ " + speedBonus + " ダメージ！", function() {
            questionIndex++;
            nextQuestion();
        });
    } else {
        playerHP = Math.max(0, playerHP - 15);
        triggerEffect('player-fighter', 'animate-shake');
        updateHPDisplays();
        showTemporaryText("まちがい (ただしくは: " + qData.a[qData.c] + ")", function() {
            questionIndex++;
            nextQuestion();
        });
    }
}

function handleTimeOut() {
    clearTimeout(npcTimeout);
    playerHP = Math.max(0, playerHP - 10);
    updateHPDisplays();
    showTemporaryText("じかんぎれ！ 10ダメージ！", function() {
        questionIndex++;
        nextQuestion();
    });
}

function showTemporaryText(text, callback) {
    document.querySelectorAll('.option-btn').forEach(function(b) { b.disabled = true; });
    document.getElementById('quiz-text').innerText = text;
    setTimeout(function() { if(callback) callback(); }, 1500);
}

function triggerEffect(elementId, className) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.classList.remove(className);
    setTimeout(function() { el.classList.add(className); }, 10);
}

function endBattle() {
    clearInterval(timerInterval);
    clearTimeout(npcTimeout);
    const uData = users[currentUser];
    if (npcHP <= 0) {
        document.getElementById('result-title').textContent = "かち！";
        document.getElementById('result-avatar').textContent = "🏆";
        document.getElementById('result-text').innerHTML = "おめでとう！ " + currentNPC.name + " をたおしたぞ！";
        uData.wins = (uData.wins || 0) + 1;
    } else {
    document.getElementById('result-title').textContent = "まけちゃった...";
    document.getElementById('result-avatar').textContent = "🍂";
    document.getElementById('result-text').innerHTML = currentNPC.name + " は強かった...！";
}
    localStorage.setItem('quiz_battle_users', JSON.stringify(users));
    loginAs(currentUser);
    showScreen('screen-result');
}

function backToMenu() { 
    showScreen('screen-menu'); 
}

window.onload = function() { 
    renderUserList(); 
};
