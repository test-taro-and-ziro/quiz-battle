// ==========================================
// 👶 全学年向けクイズデータ（custom）
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_custom(targetArray) {

// 🟦 【さんすう：math】
targetArray.push(...[
	{ grade: 4, genre: "math", type: "select", text: "たし算の問題だよ。 <br>「【値1】 ＋ 【値2】　＝　？？？　」の 答えはどれかな？", choices: ["1000_99999", "1000_99999", "", ""], answer: "【custom_01-1】", explanation: "正解は「【答】」！<br>四則演算（しそくえんざん）の問題だよ。ゆっくり考えて解けばわかるよね。" }
]);

