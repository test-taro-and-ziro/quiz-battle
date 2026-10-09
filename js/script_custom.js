// ==========================================
// ★ カスタム問題生成エンジン
// ==========================================
export function customizeQuestions(originalQuestions) {

    const customized = originalQuestions.map((q) => {

        // 1. ランダム値を生成（例：計算問題用）
        const v1 = getRandomInt(10, 99);   // 2桁の数字
        const v2 = getRandomInt(2, 9);     // 1桁の数字
        const v3 = getRandomInt(2, 9);     // 1桁の数字

        // 2. 正解を計算
        const correct = v1 * v2 + v3;

        // 3. 選択肢をランダム生成（正解＋ダミー）
        const choices = generateChoices(correct);

        // 4. テキスト置換
        let newText = q.text
            .replace("【値1】", "計算")
            .replace("【値2】", v1)
            .replace("【値3】", v2)
            .replace("【値4】", v3);

        // 5. 解説置換
        let newExplanation = q.explanation.replace("【答】", correct);

        // 6. 新しい問題オブジェクトを返す
        return {
            ...q,
            text: newText,
            choices: choices,
            answer: String(correct),
            explanation: newExplanation
        };
    });

    return customized;
}

