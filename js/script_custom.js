// ==========================================
// ★ カスタム問題ルーター（受け口）
// ==========================================
export function applyCustomTemplate(question) {

    const pattern = question.answer; // カスタム形式取得
    if (pattern === "【custom_01】") {return custom01(question);}

    // 追加パターンはここに増やす
    // if (pattern === "【custom_xxx】") return customXxx(question);

    // パターンが無ければそのまま返す
    return question;
}
// ==========================================
// ★ 共通処理
// ==========================================
// 乱数（最小～最高）
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 4択作成
function generateChoices(answer, min) {
    const choices = new Set([answer]); // 正解
    // ダミー
    while (choices.size < 4) {
        let dummy = 0; // ダミー問題
        const pt = getRandomInt(1, 4); // ダミー問題のパターン
        if (pt == 1) {
            // パターン1：正解 ± 1～3
            dummy = answer + getRandomInt(-3, 3);
        } else if (pt == 2) {
            // パターン2：正解 ±（問題の最小値）
            dummy = answer + getRandomInt(-min, min);
        } else if (pt == 3) {
            // パターン3：正解 ±（正解値の5%）
            const diff = Math.floor(answer * 0.05);
            dummy = answer + getRandomInt(-diff, diff);
        } else if (pt == 4) {
            // パターン4：正解 ±（正解値の10%）
            const diff = Math.floor(answer * 0.10);
            dummy = answer + getRandomInt(-diff, diff);
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

    console.log("クイズのカスタマイズ実施；custom_01:");
    
    // choices を設定値として使う（例：桁数など）
    const min = Number(q.choices[0]);
    const max = Number(q.choices[1]);

    // ランダム値生成
    const v1 = getRandomInt(min, max);
    const v2 = getRandomInt(min, max);

    let newText = q.text;
    newText = newText.replace("【値1】", "計算");

    // 正解計算
    const answer = 0;
    if (v1 > v2) {
        answer = v1 + v2;
        newText = newText.replace("【値2】", v1);
        newText = newText.replace("【値3】", "＋");
        newText = newText.replace("【値4】", v2);
    } else {
        answer = v2 - v1;
        newText = newText.replace("【値2】", v2);
        newText = newText.replace("【値3】", "－");
        newText = newText.replace("【値4】", v3);
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
