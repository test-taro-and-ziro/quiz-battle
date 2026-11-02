// ==========================================
// ★ カスタム問題ルーター（受け口）
// ==========================================
export function applyCustomTemplate(question, userGrade) {

    const pattern = question.answer; // カスタム形式取得
    const grade = question.grade; // 学年取得
    console.log(pattern);

    if(grade == -1) {question = wordsConversion(question, grade);} // ★ 漢字変換

    if (pattern === "【custom_01】") {return custom01(question);} // ★ custom_01：整数の足し算・引き算
    if (pattern === "【custom_02】") {return custom02(question);} // ★ custom_02：少数の足し算・引き算
    if (pattern === "【custom_03】") {return custom03(question);} // ★ custom_03：九九のかけ算
    if (pattern === "【custom_04】") {return custom04(question);} // ★ custom_04：割り算
    if (pattern === "【custom_05】") {return custom05(question);} // ★ custom_05：数値の大小
    if (pattern === "【custom_06】") {return custom06(question);} // ★ custom_06：掛け算
    if (pattern === "【custom_07】") {return custom07(question);} // ★ custom_07：計算のきまり（計算のじゅんじょ）
    if (pattern === "【custom_08】") {return custom08(question);} // ★ custom_08：計算のきまり（分配法則などのきまり）
    
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
    newExplanation = newExplanation.replace("【値1】", v1);
    newExplanation = newExplanation.replace("【値2】", v2);

    return {
        ...q,
        text: newText,
        choices: choices,
        answer: String(answer),
        explanation: newExplanation
    };
}

// ==========================================
// ★ custom_07：計算のきまり（計算のじゅんじょ）
// 【値1】～【値4】、【答】　choices（最小,最大）
// ==========================================
// custom_07：計算のきまり（計算のじゅんじょ）
//{ grade: 4, genre: "math", type: "select", text: "計算のじゅんじょの問題だよ。<br><b>「【値1】 ＝ ？？？」</b> の答えはどれかな？", choices: ["20", "50", "1", "9"], answer: "【custom_07】", explanation: "せいかいは「【答】」！<br>たし算とかけ算が ある式では、<b>かけ算を先に計算</b>します。まず 【値1】を計算し、そのあと 【値2】と計算するので、答えは 【答】 になります。" },
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
    newExplanation = newExplanation.replace("【値1】", v1);
    newExplanation = newExplanation.replace("【値2】", v2);

    return {
        ...q,
        text: newText,
        choices: choices,
        answer: String(answer),
        explanation: newExplanation
    };
}

	// custom_08：計算のきまり（分配法則などのきまり）
	//{ grade: 4, genre: "math", type: "select", text: "分配法則のきまりの問題だよ。<br>【値1】 × 【値2】 ＋ 【値1】 × 【値3】 を 計算すると 答えはどれ？", choices: ["20", "50", "1", "5"], answer: "【custom_08】", explanation: "せいかいは「【答】」！<br>この式は、【値1】が2回 出てくるので、計算をくふうできます。【値1】×（【値2】＋【値3】） の形にし、かっこの中を計算すると かんたんに計算できます。分配法則（ぶんぱいほうそく）は、同じ数がくり返し出てくるときに 計算をはやくするための 大切なきまりです。" },

// ==========================================
// ★ 学年別漢字変換
// ==========================================
function wordsConversion(q, grade) {

    let newText = q.text;
    let newExplanation = q.explanation;

    console.log(newText);
    console.log(newExplanation);

    // 小学1年生で習う漢字
    if( grade <= 1) { newExplanation = newExplanation.replace("上", grade == 1 ? "上（うえ）" : "うえ"); } 
    if( grade <= 1) { newExplanation = newExplanation.replace("下", grade == 1 ? "下（した）" : "した"); } 
    if( grade <= 1) { newExplanation = newExplanation.replace("赤", grade == 1 ? "赤（あか）" : "あか"); } 
    if( grade <= 1) { newExplanation = newExplanation.replace("青", grade == 1 ? "青（あお）" : "あお"); } 
    if( grade <= 1) { newExplanation = newExplanation.replace("人", grade == 1 ? "人（にん）" : "にん"); } 
    if( grade <= 1) { newExplanation = newExplanation.replace("一", grade == 1 ? "一（いち）" : "いち"); } 

    // 小学2年生で習う漢字
    if( grade <= 2) { newExplanation = newExplanation.replace("番目", grade == 2 ? "番目（ばんめ）" : "ばんめ"); } 
    if( grade <= 2) { newExplanation = newExplanation.replace("数字", grade == 2 ? "数字（すうじ）" : "すうじ"); } 
    if( grade <= 2) { newExplanation = newExplanation.replace("答え", "こたえ"); } 
    if( grade <= 2) { newExplanation = newExplanation.replace("後ろ", "うしろ"); } 

    // 小学3年生で習う漢字
    if( grade <= 3) { newExplanation = newExplanation.replace("箱", grade == 3 ? "箱（はこ）" : "はこ"); } 
    if( grade <= 3) { newExplanation = newExplanation.replace("全部", grade == 3 ? "全部（ぜんぶ）" : "ぜんぶ"); } 
    if( grade <= 3) { newExplanation = newExplanation.replace("横", grade == 3 ? "横（よこ）" : "よこ"); } 
    if( grade <= 3) { newExplanation = newExplanation.replace("列", grade == 3 ? "列（れつ）" : "れつ"); } 

    // 小学4年生で習う漢字
    if( grade <= 4) { newExplanation = newExplanation.replace("生徒", grade == 4 ? "生徒（せいと）" : "せいと"); } 

    // 小学5年生で習う漢字
    if( grade <= 5) { newExplanation = newExplanation.replace("個", grade == 5 ? "個（こ）" : "こ"); } 
    if( grade <= 5) { newExplanation = newExplanation.replace("正解", grade == 5 ? "正解（せいかい）" : "せいかい"); } 

    // 小学6年生で習う漢字
    if( grade <= 6) { newExplanation = newExplanation.replace("縦", grade == 6 ? "縦（たて）" : "たて"); } 
    if( grade <= 6) { newExplanation = newExplanation.replace("並び", "ならび"); } 

    // 小学校で習わない漢字
    newExplanation = newExplanation.replace("帽子", "帽子（ぼうし）");

    
    // みかんの 箱が あります。上から かぞえても、下から かぞえても、イチゴの 箱は 3番目に あります。箱は 全部で 何個 あるかな？（数字で 答えてね）
    // 正解は「5」！<br>イチゴの 上に 2個、下に 2個 あるから、2 ＋ 1 ＋ 2 ＝ <b>5個</b> に なるよ！
    // 帽子が 5個（赤3、青2）あります。3人の 生徒（A, B, C）が 縦一列に 並び、後ろの 人だけが 前の 人の 帽子を 見えるように かぶせました（Cが一番後ろ）。Cが「自分の帽子の色はわからない」と言い、それを聞いた Bも「わからない」と言いました。このとき、一番前の Aは 自分の 帽子の 色を 論理的に 特定できる。まるか ばつか？
    // 正解は「まる」！<br>Cがわからないことから前2人は青・青ではない。Bがわからないことから、Aが青ならBは自分を赤と断定できたはず。よってAは自分が <b>赤</b> だと特定することができるよ！

    
    return {
        ...q,
        text: newText,
        explanation: newExplanation
    };
}
