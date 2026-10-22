// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 追加クイズ
targetArray.push(...[
	  // わたしたちの県：県庁の場所や広がり、県の主な産業や特色、47都道府県の名前と位置
    { grade: 4, genre: "social", type: "select", text: "日本で一番南にある「都道府県」はどこかな？", choices: ["沖縄県（おきなわけん）", "鹿児島県", "東京都", "北海道"], answer: "東京都", explanation: "せいかいは「東京都」！<br>ひっかけ問題だね。実は小笠原諸島（おがさわらしょとう）の<b>「沖ノ鳥島（おきのとりしま）」が日本の一番南にあり</b>、そこは東京都なんだよ！" },
    { grade: 4, genre: "social", type: "select", text: "日本で一番広い「都道府県」はどこかな？", choices: ["北海道", "東京都", "岩手県", "沖縄県"], answer: "北海道", explanation: "せいかいは「北海道（ほっかいどう）」！<br>日本の北にある<b>北海道が一番広い</b>よ。ちなみに2番目に広いのは岩手県だよ！" },
    { grade: 4, genre: "social", type: "which", text: "都道府県の中で、まわりがすべて海にかこまれている 島国のような県は「沖縄（おきなわ）県」である。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>日本の南にある<b>沖縄県は、たくさんの美しい島が 集まってできている県</b>なんだよ。" },
    { grade: 4, genre: "social", type: "select", text: "都道府県のリーダー（一番上の責任者（せきにんしゃ））を なんとよぶかな？", choices: ["知事（ちじ）", "総理大臣（そうりだいじん）", "市長", "校長先生"], answer: "知事（ちじ）", explanation: "せいかいは「知事（ちじ）」！<br>東京都 知事（ちじ）や大阪府 知事（ちじ）のように、<b>それぞれの都道府県をまとめるリーダー</b>のことだよ。" },
  	{ grade: 4, genre: "social", type: "which", text: "日本の 都道府県は、全部で「47」 ある。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>1つの 「都（東京都）」、1つの 「道（北海道）」、2つの 「府（大阪府・京都府）」、そして 43の 県を 合わせて <b>全部で 47</b> あるんだよ！" },
  	{ grade: 4, genre: "social", type: "select", text: "私たちの 住む 都道府県の 特徴（とくちょう）や、有名な 伝統工芸品（でんとうこうげいひん）などを まとめた 計画や 地図を 見るには、どこの ホームページを 調べると いいかな？", choices: ["都道府県庁のページ", "おもちゃ会社のページ", "外国のニュースページ", "オンラインゲームのページ"], answer: "都道府県庁のページ", explanation: "せいかいは「都道府県庁のページ」！<br>県庁（けんちょう）や 都庁の ページには、<b>自分の 地域（ちいき）の 人口や 特産品（とくさんひん）</b> の データが たくさん しょうかいされているよ！" },
  	{ grade: 4, genre: "social", type: "select", text: "日本には全部で何都道府県あるかな？", choices: ["43", "45", "47", "50"], answer: "47", explanation: "せいかいは「47」！<br>日本は1都・1道・2府・43県の、全部で47都道府県に分かれているよ。" },
  	{ grade: 4, genre: "social", type: "select", text: "県や都、府、道の仕事を行う役所を何というかな？", choices: ["市役所", "県庁", "図書館", "消防署（しょうぼうしょ）"], answer: "県庁", explanation: "せいかいは「県庁」！<br>県庁は、県の仕事を行う中心となる役所だよ。" },
  	{ grade: 4, genre: "social", type: "select", text: "県庁がある市や区のことを何というかな？", choices: ["県庁所在地", "中心地", "首都", "市役所所在地"], answer: "県庁所在地", explanation: "せいかいは「県庁所在地」！<br>県庁が置かれている場所のことを県庁所在地というよ。" },
  	{ grade: 4, genre: "social", type: "which", text: "都道府県によって、さかんな産業や特産品はちがう。まるかばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>気候や土地のようすによって、さかんな産業や作られるものがちがうよ。" },
  	{ grade: 4, genre: "social", type: "which", text: "県の広さや位置は、地図で調べることができる。まるかばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>地図を見ると、県の広さや位置、まわりの県との関係がわかるよ。" },
  	{ grade: 4, genre: "social", type: "select", text: "東京都の都庁がある場所はどこかな？", choices: ["新宿区", "渋谷区", "調布市", "八王子市"], answer: "新宿区", explanation: "せいかいは「新宿区」！<br>東京都の仕事を行う東京都庁は新宿区にあるよ。" },
  	{ grade: 4, genre: "social", type: "select", text: "東京都がふくまれている地方はどこかな？", choices: ["関東地方", "東北地方", "中部地方", "近畿地方"], answer: "関東地方", explanation: "せいかいは「関東地方」！<br>東京都は関東地方の一つだよ。" },
  	{ grade: 4, genre: "social", type: "which", text: "東京都には23区と、多摩地域（たまちいき）がある。まるかばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>東京都は23区だけでなく、多摩地域（たまちいき）や諸島（しょとう）もあるよ。" },
  	{ grade: 4, genre: "social", type: "select", text: "東京都の西のほうにある「調布市」はどの地域（ちいき）にあるかな？", choices: ["多摩地域（たまちいき）", "23区", "伊豆諸島（いずしょとう）", "小笠原諸島（おがさわらしょとう）"], answer: "多摩地域（たまちいき）", explanation: "せいかいは「多摩地域（たまちいき）」！<br>調布市は東京都の多摩地域にある市だよ。" },
  	{ grade: 4, genre: "social", type: "which", text: "東京都にも農業をしている地域（ちいき）がある。まるかばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>東京都の多摩地域（たまちいき）では野菜などを作る農業も行われているよ。" },
  	{ grade: 4, genre: "social", type: "select", text: "東京都の南に広がる海の名前はどれかな？", choices: ["東京湾", "大阪湾", "伊勢湾（いせわん）", "駿河湾（するがわん）"], answer: "東京湾", explanation: "せいかいは「東京湾」！<br>東京湾は東京都や千葉県、神奈川県に面している海だよ。" },
  	{ grade: 4, genre: "social", type: "which", text: "東京都には人が住んでいる島がある。まるかばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>伊豆諸島（いずしょとう）や小笠原諸島（おがさわらしょとう）など、人が住んでいる島があるよ。" },
  	{ grade: 4, genre: "social", type: "select", text: "東京都でさかんな産業として正しいものはどれかな？", choices: ["サービス業", "酪農（らくのう）", "稲作（いなさく）", "漁業（ぎょぎょう）"], answer: "サービス業", explanation: "せいかいは「サービス業」！<br>東京都にはたくさんの会社やお店があり、サービス業がさかんだよ。東京都にも農業はあるけれど、特にサービス業が発達しているんだ。" },
]);

}
