// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 追加クイズ
targetArray.push(...[
// かずと くらべる（数の基礎）：数の意味や順序を学ぶ単元。
{ grade: 1, genre: "math", type: "select", text: "7の つぎの かずは どれかな？", choices: ["6", "8", "9", "10"], answer: "8", explanation: "せいかいは「8」！<br>かずは 7、8、9 と じゅんばんに ならびます。7の つぎは 8です。" },
{ grade: 1, genre: "math", type: "select", text: "10と 3で できている かずは どれかな？", choices: ["13", "14", "15", "16"], answer: "13", explanation: "せいかいは「13」！<br>10が 1つと 3で 13です。10の まとまりと のこりの かずを かんがえましょう。" },
{ grade: 1, genre: "math", type: "select", text: "つぎの かずの うち、いちばん おおきい かずは どれかな？", choices: ["12", "18", "15", "11"], answer: "18", explanation: "せいかいは「18」！<br>18は 12、15、11 よりも おおきい かずです。" },
{ grade: 1, genre: "math", type: "select", text: "れつに ならんでいます。まえから 3ばんめは どれかな？<br>（まえ）いぬ、ねこ、うさぎ、とり（うしろ）", choices: ["いぬ", "ねこ", "うさぎ", "とり"], answer: "うさぎ", explanation: "せいかいは「うさぎ」！<br>まえから かぞえると、いぬ、ねこ、うさぎ の じゅんです。" },
// かたち・くらしのさんすう：図形や生活の中の算数。
{ grade: 1, genre: "math", type: "select", text: "4つの へんが ある かたちは どれかな？", choices: ["さんかく", "しかく", "まる", "たま"], answer: "しかく", explanation: "せいかいは「しかく」！<br>しかくには 4つの へんが あります。" },
{ grade: 1, genre: "math", type: "select", text: "ボールの ような かたちは どれかな？", choices: ["はこ", "たま", "さんかく", "しかく"], answer: "たま", explanation: "せいかいは「たま」！<br>ボールの ように ころがる かたちは たまです。" },
{ grade: 1, genre: "math", type: "select", text: "水（みず）が たくさん はいるのは どれかな？", choices: ["コップ", "バケツ", "おさら", "スプーン"], answer: "バケツ", explanation: "せいかいは「バケツ」！<br>バケツは コップよりも たくさんの 水（みず）を いれることが できます。" },
{ grade: 1, genre: "math", type: "select", text: "とけいで、みじかい はりが「3」を さしている ときの じこくは どれかな？", choices: ["3じ", "6じ", "9じ", "12じ"], answer: "3じ", explanation: "せいかいは「3じ」！<br>みじかい はりが 3を さしている ときは 3じです。" },
]);

}
