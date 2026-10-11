// ==========================================
// ★ カスタム問題ルーター（受け口）
// ==========================================
export function applyCustomTemplate(question) {

    const pattern = question.answer; // カスタム形式取得
    if (pattern === "【custom_01】") {return custom01(question);}
    if (pattern === "【custom_02】") {return custom02(question);}

    // 追加パターンはここに増やす
    // if (pattern === "【custom_xxx】") return customXxx(question);

    // パターンが無ければそのまま返す
    return question;
}
// ==========================================
// ★ 共通処理
// ==========================================
// 乱数（最小～最高） ※fix：小数
function getRandom(min, max, fix) {
    if (fix == 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Number((Math.random() * (max - min) + min).toFixed(fix));
    }
}
// 小数点
function detectFix(num) {
    const s = String(num);
    const idx = s.indexOf(".");
    return idx === -1 ? 0 : s.length - idx - 1;
};
// 4択作成
function generateChoices(answer, min) {
    const choices = new Set([answer]); // 正解
    // ダミー
    while (choices.size < 4) {
        let dummy = 0; // ダミー問題
        const pt = getRandom(1, 4, 0); // ダミー問題のパターン
        if (pt == 1) {dummy = answer + getRandom(-3, 3);} // パターン1：正解 ± 1～3
        if (pt == 2) {dummy = answer + getRandom(-min, min);} // パターン2：正解 ±（問題の最小値）
        if (pt == 3) { // パターン3：正解 ±（正解値の5%）
            const diff = Math.floor(answer * 0.05);
            dummy = answer + getRandom(-diff, diff);
        } else if (pt == 4) { // パターン4：正解 ±（正解値の10%）            
            const diff = Math.floor(answer * 0.10);
            dummy = answer + getRandom(-diff, diff);
        }
        // 正の値のみ採用、重複は Set が自動で排除
        if (dummy > 0 && dummy !== answer) {choices.add(dummy);}
    }
    return Array.from(choices).map(String);
}

// ==========================================
// ★ custom_01：整数の足し算・引き算
// 【値1】～【値4】、【答】　choices（最小,最大）
// ==========================================
function custom01(q) {

    // choices を設定値として使う（例：桁数など）
    const min = Number(q.choices[0]);
    const max = Number(q.choices[1]);

    // ランダム値生成
    const v1 = getRandom(min, max, 0);
    const v2 = getRandom(min, max, 0);

    let newText = q.text;

    // 正解計算
    let answer = 0;
    if (v1 > v2) {
        answer = v1 + v2;
        newText = newText.replace("【値1】", "たし算");
        newText = newText.replace("【値2】", v1);
        newText = newText.replace("【値3】", "＋");
        newText = newText.replace("【値4】", v2);
    } else {
        answer = v2 - v1;
        newText = newText.replace("【値1】", "ひき算");
        newText = newText.replace("【値2】", v2);
        newText = newText.replace("【値3】", "－");
        newText = newText.replace("【値4】", v1);
    }

    // 選択肢生成
    const choices = generateChoices(answer, min);
    // 解説置換
    const newExplanation = q.explanation.replace("【答】", answer);

    return {
        ...q,
        text: newText,
        choices: choices,
        answer: String(answer),
        explanation: newExplanation
    };
}

// ==========================================
// ★ custom_02：少数の足し算・引き算
// 【値1】～【値4】、【答】　choices（最小,最大）
// ==========================================
function custom02(q) {

    // choices を設定値として使う（例：桁数など）
    const min = Number(q.choices[0]);
    const max = Number(q.choices[1]);

    const fix = Math.max(detectFix(min), detectFix(max));
    
    // ランダム値生成
    const v1 = getRandom(min, max, fix);
    const v2 = getRandom(min, max, fix);

    let newText = q.text;

    // 正解計算
    let answer = 0;
    if (v1 > v2) {
        answer = v1 + v2;
        newText = newText.replace("【値1】", "たし算");
        newText = newText.replace("【値2】", v1);
        newText = newText.replace("【値3】", "＋");
        newText = newText.replace("【値4】", v2);
    } else {
        answer = v2 - v1;
        newText = newText.replace("【値1】", "ひき算");
        newText = newText.replace("【値2】", v2);
        newText = newText.replace("【値3】", "－");
        newText = newText.replace("【値4】", v1);
    }

    // 選択肢生成
    const choices = generateChoices(answer, min);
    // 解説置換
    const newExplanation = q.explanation.replace("【答】", answer);

    return {
        ...q,
        text: newText,
        choices: choices,
        answer: String(answer),
        explanation: newExplanation
    };
}
