// ==========================================
// 👶 全学年向けクイズデータ（custom）
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_custom(targetArray) {

// 🟦 【さんすう：math】
targetArray.push(...[
	// custom_01：整数の足し算・引き算
	{ grade: 1, genre: "math", type: "select", text: "【値1】の もんだいだよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の こたえは どれかな？", choices: ["1", "9"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>けいさんの もんだい だよ。おちついて かんがえると こたえが わかるよね。" },
	{ grade: 2, genre: "math", type: "select", text: "【値1】の もんだいだよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答え（こたえ）は どれかな？", choices: ["10", "49"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算（けいさん）の もんだい だよ。おちついて かんがえると 答え（こたえ）が わかるよね。" },
	{ grade: 3, genre: "math", type: "select", text: "【値1】の 問題（もんだい）だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えは どれかな？", choices: ["50", "99"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算の 問題（もんだい）だよ。おちついて 考えると 答えが わかるよね。" },
	{ grade: 4, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えは どれかな？", choices: ["100", "999"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 5, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えは どれかな？", choices: ["1000", "4999"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 6, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えは どれかな？", choices: ["5000", "9999"], answer: "【custom_01】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	// custom_02：小数の足し算・引き算
	{ grade: 3, genre: "math", type: "select", text: "【値1】の 問題（もんだい）だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えは どれかな？", choices: ["0.1", "9.9"], answer: "【custom_02】", explanation: "正解は「【答】」！<br>計算の 問題（もんだい）だよ。おちついて 考えると 答えが わかるよね。" },
	{ grade: 4, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えは どれかな？", choices: ["0.01", "9.99"], answer: "【custom_02】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 5, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えは どれかな？", choices: ["0.001", "9.999"], answer: "【custom_02】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 6, genre: "math", type: "select", text: "【値1】の問題だよ。 <br>「【値2】 【値3】 【値4】　＝　？？？　」の 答えは どれかな？", choices: ["0.0001", "9.9999"], answer: "【custom_02】", explanation: "正解は「【答】」！<br>計算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	// custom_03：九九のかけ算
	{ grade: 2, genre: "math", type: "select", text: "九九のかけ算の もんだいだよ。 <br>「【値1】 × 【値2】　＝　？？？　」の 答え（こたえ）は どれかな？", choices: ["1", "9"], answer: "【custom_03】", explanation: "正解は「【答】」！<br>1けた どうしの かけ算（1×1 から 9×9 まで）の「<b>計算式（けいさんしき）</b>」と答え（こたえ）を、<b>語呂（ごろ）のよい ことばで リズムよく</b> おぼえるやり方。" },
	{ grade: 3, genre: "math", type: "select", text: "九九のかけ算の 問題（もんだい）だよ。 <br>「【値1】 × 【値2】　＝　？？？　」の 答えは どれかな？", choices: ["1", "9"], answer: "【custom_03】", explanation: "正解は「【答】」！<br>1けた どうしの かけ算（1×1 から 9×9 まで）の計算式（けいさんしき）と 答えを、<b>語呂（ごろ）のよい ことばで リズムよく</b> 暗記する方法。" },
	// custom_04：割り算
	{ grade: 4, genre: "math", type: "select", text: "わり算の問題だよ。 <br>「【値1】 ÷ 【値2】　＝　？？？　」の 答えは どれかな？", choices: ["3", "9", "34", "99", "100", "300"], answer: "【custom_04】", explanation: "正解は「【答】」！<br>わり算の 問題だよ。おちついて考えると 答えが わかるよね。" },
	{ grade: 4, genre: "math", type: "select", text: "「【値1】人を【値2】人ずつのグループに分けると、何グループになるかな？」", choices: ["3","5","6","30","30","100"], answer: "【custom_04】", explanation: "正解は「【答】」！<br>人数を分けるときは わり算を使うよ。" },
	{ grade: 4, genre: "math", type: "select", text: "「【値1】個のおかしを【値2】個ずつ袋に入れると、何袋できるかな？」", choices: ["5","10","5","20","50","100"], answer: "【custom_04】", explanation: "正解は「【答】」！<br>同じ数ずつ分けるときは わり算だよ。" },
	{ grade: 4, genre: "math", type: "select", text: "「【値1】メートルの道を【値2】メートルずつ区切ると、いくつに分けられるかな？」", choices: ["50","200","5","20","500","1000"], answer: "【custom_04】", explanation: "正解は「【答】」！<br>長さを同じ間隔で区切るときも わり算を使うよ。" }

]);

}
