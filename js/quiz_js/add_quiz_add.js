// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 🟥 【こくご：japanese】
targetArray.push(...[
    // 送り仮名
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「考」 の送りがなは 「考える」で正しい？", choices: [true, false], answer: true, explanation: "正解は「考える」。<br>『考』に「える」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「改」 の送りがなは 「改める」で正しい？", choices: [true, false], answer: true, explanation: "正解は「改める」。<br>『改』に「める」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「借」 の送りがなは 「借る」で正しい？", choices: [true, false], answer: false, explanation: "正解は「借りる」。<br>『借』に「りる」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「治」 の送りがなは 「治す」で正しい？", choices: [true, false], answer: true, explanation: "正解は「治す」。<br>『治』に「す」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「失」 の送りがなは 「失なう」で正しい？", choices: [true, false], answer: false, explanation: "正解は「失う」。<br>『失』に「う」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「働」 の送りがなは 「働く」で正しい？", choices: [true, false], answer: true, explanation: "正解は「働く」。<br>『働』に「く」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「続」 の送りがなは 「続る」で正しい？", choices: [true, false], answer: false, explanation: "正解は「続ける」。<br>『続』に「ける」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「選」 の送りがなは 「選ぶ」で正しい？", choices: [true, false], answer: true, explanation: "正解は「選ぶ」。<br>『選』に「ぶ」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「伝」 の送りがなは 「伝る」で正しい？", choices: [true, false], answer: false, explanation: "正解は「伝える」。<br>『伝』に「える」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「試」 の送りがなは 「試す」で正しい？", choices: [true, false], answer: true, explanation: "正解は「試す」。<br>『試』に「す」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「焼」 の送りがなは 「焼く」で正しい？", choices: [true, false], answer: true, explanation: "正解は「焼く」。<br>『焼』に「く」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「残」 の送りがなは 「残す」で正しい？", choices: [true, false], answer: true, explanation: "正解は「残す」。<br>『残』に「す」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「照」 の送りがなは 「照らす」で正しい？", choices: [true, false], answer: true, explanation: "正解は「照らす」。<br>『照』に「らす」をつけるのが正しい送りがなだよ。" },
]);

}
