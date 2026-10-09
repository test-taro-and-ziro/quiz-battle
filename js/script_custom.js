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
function generateChoices(correct) {
    const choices = new Set([correct]); // 正解
    // ダミー
    while (choices.size < 4) {
        const dummy = correct + getRandomInt(-20, 20);
        if (dummy > 0) choices.add(dummy);
    }
    return Array.from(choices).map(String);
}

// ==========================================
// ★ custom_01：計算式をランダム生成する例
// ==========================================
function custom01(q) {

    // choices を設定値として使う（例：桁数など）
    const base1 = Number(q.choices[0]);
    const base2 = Number(q.choices[1]);

    // ランダム値生成
    const v1 = getRandomInt(10, 99);
    const v2 = getRandomInt(2, 9);
    const v3 = getRandomInt(2, 9);

    // 正解計算
    const correct = v1 * v2 + v3;

    // 選択肢生成
    const choices = generateChoices(correct);

    // テキスト置換
    const newText = q.text
        .replace("【値1】", "計算")
        .replace("【値2】", v1)
        .replace("【値3】", v2)
        .replace("【値4】", v3);

    // 解説置換
    const newExplanation = q.explanation.replace("【答】", correct);

    return {
        ...q,
        text: newText,
        choices: choices,
        answer: String(correct),
        explanation: newExplanation
    };
}
