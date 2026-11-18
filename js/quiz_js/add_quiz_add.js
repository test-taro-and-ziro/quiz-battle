// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 追加クイズ
targetArray.push(...[
	{ grade: 0, genre: "math", type: "select", text: "たしざんの もんだいだよ。 <br>【triangle_sum】", choices: ["1", "9", "5", "4"], answer: "1", explanation: "けいさんの もんだい だよ。おちついて かんがえると こたえが わかるよね。【triangle_sum】" },
]);

}
