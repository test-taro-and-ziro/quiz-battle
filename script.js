import { quizDatabase, npcList } from './data.js';

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
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

function renderUserList() {
    const listContainer = document.getElementById('login-user-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    Object.keys(users).forEach(function(username) {
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
    currentQuestions = allGenreQuizzes.filter(function(q) { return q.lvl === uData.grade; });
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
