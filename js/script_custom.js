// ==========================================
// ★ カスタム問題ルーター（受け口）
// ==========================================
export function applyCustomTemplate(question) {

    const pattern = question.answer; // カスタム形式取得
    console.log(pattern);
    
    if (pattern === "【custom_01】") {return custom01(question);} // ★ custom_01：整数の足し算・引き算
    if (pattern === "【custom_02】") {return custom02(question);} // ★ custom_02：少数の足し算・引き算
    if (pattern === "【custom_03】") {return custom03(question);} // ★ custom_03：九九のかけ算
    if (pattern === "【custom_04】") {return custom04(question);} // ★ custom_04：割り算
    if (pattern === "【custom_05】") {return custom05(question);} // ★ custom_05：数値の大小
    if (pattern === "【custom_06】") {return custom06(question);} // ★ custom_06：掛け算

    // パターンが無ければそのまま返す
    return question;
}
// ==========================================
// ★ 共通処理
// ==========================================
// 整数 or 小数の乱数（0：整数 1以上：小数）
function getRandom(min, max, fix) {
    if (fix == 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Number((Math.random() * (max - min) + min).toFixed(fix));
    }
}
// 小数点以下の桁数を検出
function detectFix(num) {
    const s = String(num);
    const idx = s.indexOf(".");
    return idx === -1 ? 0 : s.length - idx - 1;
};
function round(num, fix) {
    return Number(num.toFixed(fix));
}
// 4択作成（整数）
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
// 4択作成（少数）
function generateChoicesFix(answer, min) {
    // 正解の小数桁数を自動検出（文字列化）
    const fix = detectFix(answer);
    const choices = new Set([answer.toFixed(fix)]);
    // ダミー
    while (choices.size < 4) {
        let dummy = 0;
        const pt = getRandom(1, 4, 0); // パターン選択（整数）
        if (pt === 1) { // パターン1：正解 ± 1～3（小数対応）
            const diff = getRandom(1, 3, fix);
            dummy = answer + (Math.random() < 0.5 ? -diff : diff);
        } else if (pt === 2) { // パターン2：正解 ±（問題の最小値）
            const diff = getRandom(0, min, fix);
            dummy = answer + (Math.random() < 0.5 ? -diff : diff);
        } else if (pt === 3) { // パターン3：正解 ±（正解値の5%）
            const diff = Number((answer * 0.05).toFixed(fix));
            const delta = getRandom(0, diff, fix);
            dummy = answer + (Math.random() < 0.5 ? -delta : delta);
        } else if (pt === 4) { // パターン4：正解 ±（正解値の10%）
            const diff = Number((answer * 0.10).toFixed(fix));
            const delta = getRandom(0, diff, fix);
            dummy = answer + (Math.random() < 0.5 ? -delta : delta);
        }

        // 正の値のみ採用、重複は Set が自動で排除
        if (dummy > 0 && dummy !== answer) {choices.add(round(dummy, fix));}
    }
    return Array.from(choices);
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
        answer = round((v1 + v2), fix);
        newText = newText.replace("【値1】", "たし算");
        newText = newText.replace("【値2】", v1);
        newText = newText.replace("【値3】", "＋");
        newText = newText.replace("【値4】", v2);
    } else {
        answer = round((v2 - v1), fix);
        newText = newText.replace("【値1】", "ひき算");
        newText = newText.replace("【値2】", v2);
        newText = newText.replace("【値3】", "－");
        newText = newText.replace("【値4】", v1);
    }

    // 選択肢生成
    const choices = generateChoicesFix(answer, min);
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
// ★ custom_03：九九のかけ算
// 【値1】～【値2】、【答】　choices（最小,最大）
// ==========================================
function custom03(q) {

    // choices を設定値として使う（例：桁数など）
    const min = Number(q.choices[0]);
    const max = Number(q.choices[1]);

    // ランダム値生成
    const v1 = getRandom(min, max, 0);
    const v2 = getRandom(min, max, 0);

    let newText = q.text;

    // 正解計算
    let answer = v1 * v2;
    newText = newText.replace("【値1】", v1);
    newText = newText.replace("【値2】", v2);

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
// ★ custom_04：割り算
// 【値1】～【値2】、【答】　choices（割る数,商,答え（最小,最大））
// ==========================================
function custom04(q)  {
    // choices を設定値として使う（例：桁数など）
    const BMin = Number(q.choices[0]);
    const BMax = Number(q.choices[1]);
    const CMin = Number(q.choices[2]);
    const CMax = Number(q.choices[3]);
    const AMin = Number(q.choices[4]);
    const AMax = Number(q.choices[5]);

    // 乱数取得
    let A, B, C;
    while (true) {
        B = getRandom( BMin, BMax, 0 ); // 割る数
        C = getRandom( CMin, CMax, 0 ); // 商
        A = B * C; // 割られる数（3桁になるはず）

        // 条件を満たしたら終了
        if (A >= AMin && A <= AMax) {break;}
    }

    // 正解
    const answer = C;
    
    let newText = q.text;
    newText = newText.replace("【値1】", A);
    newText = newText.replace("【値2】", B);

    // 選択肢生成
    const choices = generateChoices(answer, BMin);
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
// ★ custom_05：数値の大小
// 【値1】～【値4】、【答】　choices（最小,最大,大：1 小：0）
// ==========================================
function custom05(q)  {
    // choices を設定値として使う
    const min = Number(q.choices[0]);
    const max = Number(q.choices[1]);
    const val = Number(q.choices[2]);

    const fix = Math.max(detectFix(min), detectFix(max));

    // ランダム値生成
    const v1 = getRandom(min, max, fix);
    const v2 = getRandom(min, max, fix);
    const v3 = getRandom(min, max, fix);
    const v4 = getRandom(min, max, fix);

    // 正解計算
    let answer = v1;
    if (val == 0) {
        if (answer > v2) {answer = v2;}
        if (answer > v3) {answer = v3;}
        if (answer > v4) {answer = v4;}
    } else if (val == 1) {
        if (answer < v2) {answer = v2;}
        if (answer < v3) {answer = v3;}
        if (answer < v4) {answer = v4;}
    }

    // 問題文
    let newText = q.text;
    newText = newText.replace("【値1】", v1);
    newText = newText.replace("【値2】", v2);
    newText = newText.replace("【値3】", v3);
    newText = newText.replace("【値4】", v4);
    // 選択肢
    const choices = new Set([v1.toLocaleString('ja-JP'), v2.toLocaleString('ja-JP'), v3.toLocaleString('ja-JP'), v4.toLocaleString('ja-JP')]);    
    // 解説置換
    const newExplanation = q.explanation.replace("【答】", answer.toLocaleString('ja-JP'));
    return {
        ...q,
        text: newText,
        choices: choices,
        answer: answer.toLocaleString('ja-JP'),
        explanation: newExplanation
    };
}
// ==========================================
// ★ custom_06：掛け算
// 【値1】～【値4】、【答】　choices（最小,最大）
// ==========================================
function custom06(q) {

    // choices を設定値として使う（例：桁数など）
    const Amin = Number(q.choices[0]); // 1つ目
    const Amax = Number(q.choices[1]); // 1つ目
    const Bmin = Number(q.choices[2]); // 2つ目
    const Bmax = Number(q.choices[3]); // 2つ目

    // ランダム値生成
    const v1 = getRandom(Amin, Amax, 0);
    const v2 = getRandom(Bmin, Bmax, 0);

    let newText = q.text;

    // 正解計算
    let answer = 0;
    answer = v1 * v2;
    newText = newText.replace("【値1】", v1);
    newText = newText.replace("【値2】", v2);

    // 選択肢生成
    const choices = generateChoices(answer, Amin);
    // 解説置換
    let newExplanation = q.explanation.replace("【答】", answer);
    newExplanation = newExplanation.explanation.replace("【値1】", v1);
    newExplanation = newExplanation.explanation.replace("【値2】", v2);

    return {
        ...q,
        text: newText,
        choices: choices,
        answer: String(answer),
        explanation: newExplanation
    };
}
