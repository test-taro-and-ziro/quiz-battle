// ==========================================
// 👶 全学年向けクイズデータ（custom）
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_custom(targetArray) {

// 🟦 【さんすう：math】
targetArray.push(...[
	// custom_01：整数の足し算・引き算
	{ grade: 1, genre: "math", type: "select", text: "【値1】の もんだいだよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の こたえは どれかな？", choices: ["1", "9"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>けいさんの もんだい だよ。おちついて かんがえると こたえが わかるよね。" },
	{ grade: 2, genre: "math", type: "select", text: "【値1】の もんだいだよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答え（こたえ）はどれかな？", choices: ["10", "49"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算（けいさん）の もんだい だよ。おちついて かんがえると 答え（こたえ）が わかるよね。" },
	{ grade: 3, genre: "math", type: "select", text: "【値1】の 問題（もんだい）だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えはどれかな？", choices: ["50", "99"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算の 問題（もんだい）だよ。おちついて 考えると 答えが わかるよね。" },
	{ grade: 4, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えはどれかな？", choices: ["100", "999"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 5, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えはどれかな？", choices: ["1000", "4999"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 6, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えはどれかな？", choices: ["5000", "9999"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	// custom_02：小数の足し算・引き算
	{ grade: 3, genre: "math", type: "select", text: "【値1】の 問題（もんだい）だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えはどれかな？", choices: ["0.1", "9.9"], answer: "【custom_02】", explanation: "正解は「【答】」！<br>計算の 問題（もんだい）だよ。おちついて 考えると 答えが わかるよね。" },
	{ grade: 4, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えはどれかな？", choices: ["0.01", "9.99"], answer: "【custom_02】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 5, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えはどれかな？", choices: ["0.001", "9.999"], answer: "【custom_02】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 6, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えはどれかな？", choices: ["0.0001", "9.9999"], answer: "【custom_02】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	// custom_03：九九
	{ grade: 2, genre: "math", type: "select", text: "九九のかけ算の もんだいだよ。 <br>「【値1】 × 【値2】　＝　？？？　」の 答え（こたえ）はどれかな？", choices: ["1", "9"], answer: "【custom_03】", explanation: "正解は「【答】」！<br>1けた どうしの かけ算（1×1 から 9×9 まで）の「<b>計算式（けいさんしき）</b>」と答え（こたえ）を、<b>語呂（ごろ）のよい ことばで リズムよく</b> おぼえるやり方。" },
	{ grade: 3, genre: "math", type: "select", text: "九九のかけ算の 問題（もんだい）だよ。 <br>「【値1】 × 【値2】　＝　？？？　」の 答えはどれかな？", choices: ["1", "9"], answer: "【custom_03】", explanation: "正解は「【答】」！<br>1けた どうしの かけ算（1×1 から 9×9 まで）の計算式（けいさんしき）と 答えを、<b>語呂（ごろ）のよい ことばで リズムよく</b> 暗記する方法。" }
]);

}
