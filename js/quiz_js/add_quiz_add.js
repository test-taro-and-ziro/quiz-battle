// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 🟥 【こくご：japanese】
targetArray.push(...[
]);
// 🟥 【さんすう：Math】
targetArray.push(...[
  // 四捨五入と概数
  { grade: 4, genre: "math", type: "which", text: "「四捨五入」とは、5 以上なら<b>切り上げ</b>、4 以下なら<b>切り捨てる</b>きまりである。", choices: [true, false], answer: true, explanation: "「四捨五入（ししゃごにゅう）」とは、ある位を見て、<b>数をだいたいの大きさにする</b>ためのきまり のことです。<br>たとえば「十の位で四捨五入する」と言われたら、一の位の数字 を見ます。<br>・一の位が 0〜4 のとき → 切りすてる（小さくする）<br>・一の位が 5〜9 のとき → 切り上げる（大きくする）<br>というルールです。" },
  { grade: 4, genre: "math", type: "which", text: "「概算」とは、正確な数ではなく、<b>だいたいの大きさを表す数</b>である。", choices: [true, false], answer: true, explanation: "「概数」とは、正確な数ではなく、<b>「だいたいこのくらい」を表す数</b> のことです。<br>大きい数や細かい数を、<b>使いやすく</b>・<b>わかりやすく</b>・<b>目的に合わせて</b>、数の大きさをつかみやすくします。" },
  { grade: 4, genre: "math", type: "select", text: "「482」を十の位で四捨五入するとどうなるかな？", choices: ["480","490","400","500"], answer: "480", explanation: "十の位で四捨五入すると、一の位の2を見て切り捨てるので480になるよ。" },
  { grade: 4, genre: "math", type: "select", text: "「376」を百の位で四捨五入するとどうなるかな？", choices: ["400","300","380","390"], answer: "400", explanation: "百の位で四捨五入すると、十の位の7を見て切り上げるので400になるよ。" },
  { grade: 4, genre: "math", type: "select", text: "「129」を十の位で四捨五入するとどうなるかな？", choices: ["130","120","100","140"], answer: "130", explanation: "十の位で四捨五入すると、一の位の9を見て切り上げるので130になるよ。" },
  { grade: 4, genre: "math", type: "select", text: "「54」を十の位で四捨五入するとどうなるかな？", choices: ["50","60","40","55"], answer: "50", explanation: "十の位で四捨五入すると、一の位の4を見て切り捨てるので50になるよ。" },
  { grade: 4, genre: "math", type: "select", text: "「88」を十の位で四捨五入するとどうなるかな？", choices: ["90","80","100","70"], answer: "90", explanation: "十の位で四捨五入すると、一の位の8を見て切り上げるので90になるよ。" }

]);

}
