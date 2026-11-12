// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_kanji(targetArray) {

// 追加クイズ
targetArray.push(...[
// ひらがなを漢字に
{ grade: 4, genre: "japanese", type: "select", text: "「庭の花を <u><b>かんさつ</b></u> する。」<br>下線のひらがな「かんさつ」を 漢字で 書くと どれかな？", choices: ["観察", "関察", "観札", "感察"], answer: "観察", explanation: "せいかいは「観察」！<br>観察（かんさつ）は、ものごとの様子をよく見て調べることです。" },
{ grade: 4, genre: "japanese", type: "select", text: "「むずかしいことにも <u><b>ゆうき</b></u> を出して ちょうせんする。」<br>下線のひらがな「ゆうき」を 漢字で 書くと どれかな？", choices: ["勇気", "有気", "優気", "勇記"], answer: "勇気", explanation: "せいかいは「勇気」！<br>勇気（ゆうき）は、おそれずに行動する気持ちのことです。" },
{ grade: 4, genre: "japanese", type: "select", text: "「雨の日が 三日 <u><b>れんぞく</b></u> した。」<br>下線のひらがな「れんぞく」を 漢字で 書くと どれかな？", choices: ["連続", "連族", "練続", "連足"], answer: "連続", explanation: "せいかいは「連続」！<br>連続（れんぞく）は、とぎれずに続いていることです。" },
// 漢字の読み仮名
{ grade: 4, genre: "japanese", type: "select", text: "「森林を守るために <u><b>努力</b></u> を続けている。」<br>下線の漢字の読み方は どれかな？", choices: ["どりょく", "どりょう", "どろく", "どろょく"], answer: "どりょく", explanation: "せいかいは「どりょく」！<br>努力（どりょく）は、目標（もくひょう）に向かって 一生懸命（いっしょうけんめい）に がんばることです。" },
{ grade: 4, genre: "japanese", type: "select", text: "「学級会でみんなが <u><b>協力</b></u> して じゅんびを進めた。」<br>下線の漢字の読み方は どれかな？", choices: ["きょうりょく", "きょうりき", "きょりょく", "きょうろく"], answer: "きょうりょく", explanation: "せいかいは「きょうりょく」！<br>協力（きょうりょく）は、みんなで力を合わせて 同じことに取り組むことです。" },
{ grade: 4, genre: "japanese", type: "select", text: "「新しい <u><b>目標</b></u> を決めて練習を始めた。」<br>下線の漢字の読み方は どれかな？", choices: ["もくひょう", "もっぴょう", "もくびょう", "もっひょう"], answer: "もくひょう", explanation: "せいかいは「もくひょう」！<br>目標（もくひょう）は、自分が めざすことや、これからがんばりたいことです。" },  
// 正しい送り仮名
{ grade: 4, genre: "japanese", type: "select", text: "「図書室で本を <u><b>かりる</b></u>。」<br>下線の正しい書き方は どれかな？", choices: ["借りる", "借る", "借", "借り"], answer: "借りる", explanation: "せいかいは「借りる」！<br>借りる（かりる）は、人から物を貸してもらうことです。" },
{ grade: 4, genre: "japanese", type: "select", text: "「先生にアドバイスを <u><b>もとめる</b></u>。」<br>下線の正しい書き方は どれかな？", choices: ["求める", "求る", "求", "求む"], answer: "求める", explanation: "せいかいは「求める」！<br>求める（もとめる）は、ほしいものや必要（ひつよう）なものを 手に入れようとすることです。" },
{ grade: 4, genre: "japanese", type: "select", text: "「聞いたことを友だちに <u><b>つたえる</b></u>。」<br>下線の正しい書き方は どれかな？", choices: ["伝える", "伝る", "伝わる", "伝"], answer: "伝える", explanation: "せいかいは「伝える」！<br>伝える（つたえる）は、話や気持ち、情報などを相手に知らせることです。" },
// 同じ読み方の漢字
{ grade: 4, genre: "japanese", type: "select", text: "「給食（きゅうしょく）を のこさず食べて <u><b>かんしょく</b></u> した。」<br>下線に入る漢字は どれかな？", choices: ["完食", "管食", "関食", "観食"], answer: "完食", explanation: "せいかいは「完食」！<br>完食（かんしょく）は、食べ物を全部食べきることです。「完」には『すっかり終わる』という意味があります。" },
{ grade: 4, genre: "japanese", type: "select", text: "「店には たくさんの <u><b>い</b></u>料品 が ならんでいる。」<br>下線に入る漢字は どれかな？", choices: ["位", "衣", "井", "以"], answer: "衣", explanation: "せいかいは「衣」！<br>衣料品（いりょうひん）は、服や身につけるもののことです。衣（い）は、ころもや服を表す漢字です。" },
{ grade: 4, genre: "japanese", type: "select", text: "「体育館の <u><b>しょうめい</b></u> が 明るく光っている。」<br>下線に入る漢字は どれかな？", choices: ["焼明", "照明", "笑明", "唱明"], answer: "照明", explanation: "せいかいは「照明」！<br>照明（しょうめい）は、光であたりを明るくする設備（せつび）のことです。照（しょう）は、照らすという意味を表します。" },
]);

targetArray.push(...[
// ひらがな → 漢字
{ grade: 1, genre: "japanese", type: "select", text: "「こうえんで <u><b>いぬ</b></u> を みた。」<br>せんのひいてある ことばを かんじで かくと どれかな？", choices: ["犬", "鳥", "虫", "貝"], answer: "犬", explanation: "せいかいは「犬」！<br>犬（いぬ）は、人（ひと）と いっしょに くらすことが おおい どうぶつだよ。" },
{ grade: 1, genre: "japanese", type: "select", text: "「そらに <u><b>つき</b></u> が みえる。」<br>せんのひいてある ことばを かんじで かくと どれかな？", choices: ["月", "日", "空", "雨"], answer: "月", explanation: "せいかいは「月」！<br>月（つき）は、よるの 空（そら）に みえる てんたいだよ。" },
{ grade: 1, genre: "japanese", type: "select", text: "「にわに きれいな <u><b>はな</b></u> が さいた。」<br>せんのひいてある ことばを かんじで かくと どれかな？", choices: ["花", "草", "木", "竹"], answer: "花", explanation: "せいかいは「花」！<br>花（はな）は、しょくぶつに さく きれいな ところだよ。" },  
// 漢字 → 読み方
{ grade: 1, genre: "japanese", type: "select", text: "「<u><b>雨</b></u> が ふっている。」<br>せんのひいてある かんじは なんて よむかな？", choices: ["あめ", "くも", "ゆき", "かぜ"], answer: "あめ", explanation: "せいかいは「あめ」！<br>雨（あめ）は、空（そら）から ふる 水（みず）のことだよ。" },
{ grade: 1, genre: "japanese", type: "select", text: "「<u><b>山</b></u> に のぼる。」<br>せんのひいてある かんじは なんて よむかな？", choices: ["やま", "かわ", "もり", "いし"], answer: "やま", explanation: "せいかいは「やま」！<br>山（やま）は、じめんが たかく なっている ところだよ。" },
{ grade: 1, genre: "japanese", type: "select", text: "「<u><b>青</b></u> い そら。」<br>せんのひいてある かんじは なんて よむかな？", choices: ["あお", "あか", "しろ", "くろ"], answer: "あお", explanation: "せいかいは「あお」！<br>青（あお）は、空（そら）や うみのような いろを あらわす ことばだよ。" },
// 文に合う漢字を選ぶ
{ grade: 1, genre: "japanese", type: "select", text: "「がっこうで <b>＿＿</b> を よんだ。」<br>せんのところに はいる かんじは どれかな？", choices: ["本", "木", "土", "糸"], answer: "本", explanation: "せいかいは「本」！<br>本（ほん）は、おはなしや べんきょうのための文字（もじ）が かいてあるものだよ。" },
{ grade: 1, genre: "japanese", type: "select", text: "「こうていに <b>＿＿</b> が たくさん ある。」<br>せんのところに はいる かんじは どれかな？", choices: ["木", "林", "森", "青"], answer: "木", explanation: "せいかいは「木」！<br>木（き）は、みどりの はっぱが ついている しょくぶつだよ。" },
{ grade: 1, genre: "japanese", type: "select", text: "「きょうは <b>＿＿</b> が ふっている。」<br>せんのところに はいる かんじは どれかな？", choices: ["赤", "雪", "雲", "風"], answer: "雪", explanation: "せいかいは「雪」！<br>雪（ゆき）は、さむい日（ひ）に 空（そら）から ふってくる 白（しろ）い こおりの つぶだよ。" },
]);

}
