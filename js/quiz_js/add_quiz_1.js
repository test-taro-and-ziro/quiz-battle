// ==========================================
// 👶 小学1年生向け（grade: 1）クイズデータ
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions1(targetArray) {

// 🟥 【こくご：japanese】
targetArray.push(...[
	{ grade: 1, genre: "japanese", type: "select", text: "「は」と よむけれど、文（ぶん）の なかで 「〜は」と つなぐ ときは どうかくかな？ 【わたし〇 どうぶつ村（むら）の おともだち】", choices: ["は", "わ", "ば", "お"], answer: "は", explanation: "せいかいは「は」！<br>おはなしの つなぎの 「〜は」は、ときは <b>「は」</b> とルールだよ！" },
	{ grade: 1, genre: "japanese", type: "which", text: "「を」と よむけれど、文（ぶん）の なかで つなぐ ときは 「お」と 。まるか ばつか？ 【ごはん〇 たべる】", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>「〜を」と つなぐ ときは、<b>「を」</b> とのが せいかいだよ！" },
	{ grade: 1, genre: "japanese", type: "select", text: "「山（やま）」という かんじの よみかたは なあに？", choices: ["やま", "かわ", "うみ", "そら"], answer: "やま", explanation: "せいかいは「やま」！<br>山（やま）の かたちから できた <b>「山（やま）」</b> という かんじだね！" },
	{ grade: 1, genre: "japanese", type: "which", text: "「一（いち）（いち）」の つぎの 数字（すうじ）の かんじは 「三（さん）」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>一（いち）の つぎは 2を あらわす <b>「二」</b> だね！" },
	{ grade: 1, genre: "japanese", type: "select", text: "はんたいの ことば クイズ！ 「おおきい」の はんたいの ことばは なあに？", choices: ["ちいさい", "ながい", "たかい", "ひろい"], answer: "ちいさい", explanation: "せいかいは「ちいさい」！<br>大きい（おおきい） ⇔ <b>小さい（ちいさい）</b> は はんたいの ことば だね！" },
	{ grade: 1, genre: "japanese", type: "which", text: "「川（かわ）」という かんじの せんの かずは 3本（ぼん）である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>水（みず）が ながれる かたちから できた <b>「川（かわ）」</b> は 3本（ぼん）せんだね！" },
	{ grade: 1, genre: "japanese", type: "select", text: "「きりん」の 数えかた（かぞえかた）は なあに？", choices: ["〜頭（とう）", "〜匹（ひき）", "〜わ", "〜本（本）"], answer: "〜頭（とう）", explanation: "せいかいは「〜頭（とう）」！<br>大きい どうぶつは <b>「頭（とう）」</b> と数える（かぞえる）ことが 多いよ！" },
	{ grade: 1, genre: "japanese", type: "which", text: "「こんにちは」の さいごの もじは 「わ」と 。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>あいさつの 「こんにちは」の さいごは <b>「は」</b> とよ！" },
	{ grade: 1, genre: "japanese", type: "select", text: "「日」という かんじの よみかたで まちがっているものは どれかな？", choices: ["かわ", "ひ", "にち", "び"], answer: "かわ", explanation: "せいかいは「かわ」！<br><b>日（ひ・にち）</b> は 「かわ」とは よまないよ！" },
	{ grade: 1, genre: "japanese", type: "which", text: "「くるま」を かんじで かくと 「車」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>タイヤが ついた のりものの かんじは <b>「車（くるま）」</b> だよ！" },
	// ひらがな・カタカナの学習: 正しい書き順、形、濁音・半濁音・促音（「っ」）や拗音（「キャ・キュ・チョ」など）の読み書き
	{ grade: 1, genre: "japanese", type: "select", text: "「がっこう」の 文字（もじ）の かずは いくつ？", choices: ["3", "4", "5", "6"], answer: "4", explanation: "せいかいは「4」！<br>「がっこう」は 「が・っ・こ・う」 の4文字（もじ）です。ちいさい「っ」も 1つの 文字（もじ）として かぞえます。" },
	{ grade: 1, genre: "japanese", type: "select", text: "つぎの うち、カタカナで かいてある ことばは どれ？", choices: ["いぬ", "ねこ", "サル", "とり"], answer: "サル", explanation: "せいかいは「サル」！<br>「サル」は カタカナで かかれています。カタカナは どうぶつの なまえや がいこくの ことばなどにも つかわれます。" },
	{ grade: 1, genre: "japanese", type: "which", text: "「きって」の なかの ちいさい「っ」は よまない。○か ×か。", choices: [true, false], answer: false, explanation: "せいかいは「×」！<br>「きって」は 「き・っ・て」 と よみます。ちいさい「っ」も たいせつな 文字（もじ）です。" },
	{ grade: 1, genre: "japanese", type: "select", text: "「がっこう」の なかに ある ちいさい 文字（もじ）は どれかな？", choices: ["っ", "ゃ", "ゅ", "ょ"], answer: "っ", explanation: "せいかいは「っ」！<br>「がっこう」には ちいさい「っ」が はいっています。" },
	{ grade: 1, genre: "japanese", type: "select", text: "「ねこ」を カタカナで かくと どれ？", choices: ["ネコ", "イヌ", "トリ", "ウマ"], answer: "ネコ", explanation: "せいかいは「ネコ」！<br>「ねこ」を カタカナで かくと「ネコ」です。ひらがなと カタカナは よみかたが おなじですが、かたちが ちがいます。" },
	{ grade: 1, genre: "japanese", type: "select", text: "「リンゴ」を ひらがなで かくと どれ？", choices: ["りんご", "みかん", "ばなな", "いちご"], answer: "りんご", explanation: "せいかいは「りんご」！<br>「リンゴ」を ひらがなで かくと「りんご」です。カタカナを ひらがなに なおして よめるように なろうね。" },
	{ grade: 1, genre: "japanese", type: "select", text: "どうぶつの なまえは どれ？", choices: ["犬（いぬ）", "りんご", "ぼうし", "えんぴつ"], answer: "犬（いぬ）", explanation: "せいかいは「犬（いぬ）」！<br>「犬（いぬ）」は どうぶつの なまえです。ことばを なかまごとに わけられるように なろうね。" },
	{ grade: 1, genre: "japanese", type: "select", text: "くだものの なまえは どれ？", choices: ["みかん", "くるま", "ねこ", "つくえ"], answer: "みかん", explanation: "せいかいは「みかん」！<br>「みかん」は くだものの なまえです。くだもの、どうぶつ、もの などの なかまを みつけてみよう。" },
	{ grade: 1, genre: "japanese", type: "select", text: "「か」に てんてんを つけると どの 文字（もじ）に なるかな？", choices: ["が", "ぱ", "ば", "ざ"], answer: "が", explanation: "せいかいは「が」！<br>「か」に てんてん（゛）を つけると「が」に なります。" },
	{ grade: 1, genre: "japanese", type: "select", text: "「は」に まるを つけると どの 文字（もじ）に なるかな？", choices: ["ば", "ぱ", "は", "だ"], answer: "ぱ", explanation: "せいかいは「ぱ」！<br>「は」に まる（゜）を つけると「ぱ」に なります。" },  
	// 音読・声に出して読むこと: 句読点（。、）を意識して、すらすらと声に出して読む練習
	{ grade: 1, genre: "japanese", type: "select", text: "つぎの 文（ぶん）の 「。」 が はいる ところは どこ？<br>「きょうは はれです あそびます」", choices: ["きょうは", "はれです", "あそびます", "いらない"], answer: "はれです", explanation: "せいかいは「はれです」！<br>「きょうは はれです。あそびます。」となります。「。」は 文（ぶん）の おわりに つけます。" },
	{ grade: 1, genre: "japanese", type: "select", text: "「こんにちは あそびましょう」。「。」を いれる ところは どこかな？", choices: ["こんにちは", "あそびましょう", "どちらも", "いらない"], answer: "あそびましょう", explanation: "せいかいは「あそびましょう」！<br>「。」は 文（ぶん）の おわりに つけます。" },
	// 文をつくる・書くこと: 見たこと、聞いたこと、思ったことを短い文章にまとめる（「こんなことがあったよ」など）
	{ grade: 1, genre: "japanese", type: "select", text: "つぎの 文（ぶん）を よみましょう。<br>「わたしは こうえんで あそびました。」<br>なにを したかな？", choices: ["あそんだ", "たべた", "よんだ", "ねた"], answer: "あそんだ", explanation: "せいかいは「あそんだ」！<br>文（ぶん）には「こうえんで あそびました。」と かいてあります。なにを したかを よみとりましょう。" },
	{ grade: 1, genre: "japanese", type: "select", text: "つぎの 文（ぶん）を よみましょう。<br>「きのう 犬（いぬ）を みました。」<br>なにを みたかな？", choices: ["犬（いぬ）", "ねこ", "とり", "うま"], answer: "犬（いぬ）", explanation: "せいかいは「犬（いぬ）」！<br>文（ぶん）には「犬（いぬ）を みました。」と かいてあります。みたものを みつけましょう。" },
	{ grade: 1, genre: "japanese", type: "select", text: "つぎの 文（ぶん）を よみましょう。<br>「おとうとと こうえんへ いきました。」<br>どこへ いったかな？", choices: ["こうえん", "学校（がっこう）", "いえ", "みせ"], answer: "こうえん", explanation: "せいかいは「こうえん」！<br>文（ぶん）には「こうえんへ いきました。」と かいてあります。いった ばしょを よみとりましょう。" },
	{ grade: 1, genre: "japanese", type: "select", text: "つぎの 文（ぶん）を よみましょう。<br>「わたしは 本（ほん）を よみました。」<br>なにを よんだかな？", choices: ["本（ほん）", "えんぴつ", "りんご", "ぼうし"], answer: "本（ほん）", explanation: "せいかいは「本（ほん）」！<br>文（ぶん）には「本（ほん）を よみました。」と かいてあります。なにを したかに ちゅうもくしましょう。" },
	{ grade: 1, genre: "japanese", type: "select", text: "つぎの 文（ぶん）を よみましょう。<br>「ともだちと あそんで たのしかったです。」<br>どう おもったかな？", choices: ["たのしかった", "かなしかった", "こわかった", "おこった"], answer: "たのしかった", explanation: "せいかいは「たのしかった」！<br>文（ぶん）の さいごに「たのしかったです。」と かいてあります。おもったことを よみとりましょう。" },
	{ grade: 1, genre: "japanese", type: "select", text: "つぎの 文（ぶん）を よみましょう。<br>「えを かいて うれしかったです。」<br>どう おもったかな？", choices: ["うれしかった", "かなしかった", "ねむかった", "こわかった"], answer: "うれしかった", explanation: "せいかいは「うれしかった」！<br>文（ぶん）には「うれしかったです。」と かいてあります。きもちを あらわす ことばを みつけましょう。" },
	//　お話（物語・説明文）の読解: 登場人物の気持ちを考えたり、順序に沿って内容を読み取ったりする
	{ grade: 1, genre: "japanese", type: "select", text: "おはなしを よみましょう。<br>「あさ おきました。そのあと ごはんを たべました。」<br>さきに したことは なにかな？", choices: ["おきた", "ごはんを たべた", "ねた", "あそんだ"], answer: "おきた", explanation: "せいかいは「おきた」！<br>おはなしでは、まず おきて、そのあとに ごはんを たべています。" },
	{ grade: 1, genre: "japanese", type: "select", text: "おはなしを よみましょう。<br>「学校（がっこう）へ いきました。そのあと ともだちと あそびました。」<br>あとに したことは なにかな？", choices: ["ともだちと あそんだ", "学校（がっこう）へ いった", "ねた", "ほんを よんだ"], answer: "ともだちと あそんだ", explanation: "せいかいは「ともだちと あそんだ」！<br>学校（がっこう）へ いったあと、ともだちと あそんでいます。" },
	{ grade: 1, genre: "japanese", type: "select", text: "おはなしを よみましょう。<br>「水（みず）を のみました。そのあと はを みがきました。」<br>いちばん さいごに したことは なにかな？", choices: ["はを みがいた", "水（みず）を のんだ", "あそんだ", "ねた"], answer: "はを みがいた", explanation: "せいかいは「はを みがいた」！<br>水（みず）を のんだあとに、はを みがいています。おはなしの じゅんばんを たしかめましょう。" },
	{ grade: 1, genre: "japanese", type: "select", text: "おはなしを よみましょう。<br>「こうえんで あそびました。とても たのしかったです。」<br>どんな きもちだったかな？", choices: ["たのしかった", "かなしかった", "こわかった", "おこった"], answer: "たのしかった", explanation: "せいかいは「たのしかった」！<br>ぶんに「とても たのしかったです。」と かいてあります。おはなしに かいてある きもちを よみとりましょう。" },
	{ grade: 1, genre: "japanese", type: "select", text: "おはなしを よみましょう。<br>「だいじな おもちゃが みつかりました。うれしかったです。」<br>どんな きもちだったかな？", choices: ["うれしかった", "かなしかった", "ねむかった", "こわかった"], answer: "うれしかった", explanation: "せいかいは「うれしかった」！<br>おもちゃが みつかって、「うれしかったです。」と かいてあります。" },
	{ grade: 1, genre: "japanese", type: "select", text: "おはなしを よみましょう。<br>「雨（あめ）が ふりました。そとで あそべませんでした。かなしかったです。」<br>どんな きもちだったかな？", choices: ["かなしかった", "うれしかった", "たのしかった", "おこった"], answer: "かなしかった", explanation: "せいかいは「かなしかった」！<br>ぶんに「かなしかったです。」と かいてあります。" },
	{ grade: 1, genre: "japanese", type: "select", text: "おはなしを よみましょう。<br>「かみなりが なりました。こわかったです。」<br>どんな きもちだったかな？", choices: ["こわかった", "うれしかった", "たのしかった", "かなしかった"], answer: "こわかった", explanation: "せいかいは「こわかった」！<br>おはなしには「こわかったです。」と かいてあります。どんな きもちだったかを よみとりましょう。" },
]);
// 🟦 【さんすう：math】
targetArray.push(...[
	{ grade: 1, genre: "math", type: "which", text: "「十（じゅう）のくらい」が 3で、「一（いち）のくらい」が 5の かずは 「53」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>十（じゅう）の位（くらい）が 3、一（いち）の位（くらい）が 5の かずは <b>「35」</b> だよ！" },
	{ grade: 1, genre: "math", type: "select", text: "ごぜん 9じから 1じかん たつと、とけいの みじかい はりは どこを さすかな？", choices: ["10", "9", "11", "12"], answer: "10", explanation: "せいかいは「10」！<br>9じの 1じかん つぎは <b>10じ</b> だね！" },
	{ grade: 1, genre: "math", type: "select", text: "ながい じゅんばんに ならべよう！ 10センチ、5センチ、20センチ。一番（いちばん） ながいのは どれかな？", choices: ["20センチ", "10センチ", "5センチ", "ぜんぶ同じ"], answer: "20センチ", explanation: "せいかいは「20センチ」！<br>数字（すうじ）が 一番（いちばん） おおきい <b>20センチ</b> が もっとも ながいよ！" },
	{ grade: 1, genre: "math", type: "which", text: "しかくの かたちの まわりには、へん（まっすぐなせん）が 3本（ぼん） ある。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>しかくには へんが <b>4本（ほん）</b> あるよ！" },
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
// 🟦 【理科：science】
targetArray.push(...[
	{ grade: 1, genre: "science", type: "select", text: "はるに なると、にわや こうえんで みかける、はねが きいろや 白（しろ）の ひらひら とぶ むしは なあに？", choices: ["ちょうちょ", "かぶとむし", "せみ", "とんぼ"], answer: "ちょうちょ", explanation: "せいかいは「ちょうちょ」！<br>はなの <b>みつ</b> を すうために、ひらひらと お花（はな）の まわりを とぶよ！" },
	{ grade: 1, genre: "science", type: "which", text: "「せみ」は、あきの さむい 日（ひ）に 「みーんみーん」と げんきに なく。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>せみは <b>なつの あつい 日（ひ）</b> が だいすきで、たくさん なくんだよ！" },
	{ grade: 1, genre: "science", type: "select", text: "雨（あめ）が ふる とき、お空（そら）に ある まあるい たいようは どこに かくれているかな？", choices: ["くものうしろ", "お山の下（おやまのした）", "うみの中（なか）", "うちゅうのはて"], answer: "くものうしろ", explanation: "せいかいは「くものうしろ」！<br>あつい <b>あまぐも</b> が たいようを かくしているから、お空（そら）が くらく なるんだね！" },
	{ grade: 1, genre: "science", type: "which", text: "かえるは、おたまじゃくし の ときは 足（あし）が ない。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>おたまじゃくし は <b>さいしょは しっぽ だけ</b> で、大きくなると うしろ足（あし）から はえてくるよ！" },
	{ grade: 1, genre: "science", type: "select", text: "よるに お空（そら）を みたとき、一番（いちばん） 大きく（おおきく） まあるく ひかってみえる カタチの ものは なあに？", choices: ["まんまるなお月（つき）さま", "ちいさな ほし", "ひこうき", "たいよう"], answer: "まんまるなお月（つき）さま", explanation: "せいかいは「まんまるなお月（つき）さま」！<br>カタチが まいにち すこしずつ かわる <b>お月さま</b> だね！" },
	{ grade: 1, genre: "science", type: "which", text: "「いぬ」や「ねこ」の からだには、とりのような はねが はえている。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>いぬや ねこの からだには <b>ふさふさの け</b> が はえているよ！はねが あるのは とりの なかまだね！" },
	{ grade: 1, genre: "science", type: "select", text: "スイカを たべた あと、土（つち）に まくと あたらしい スイカが できる まほうの ツブは なあに？", choices: ["種（たね）", "はっぱ", "いしころ", "水（みず）"], answer: "種（たね）", explanation: "せいかいは「種（たね）」！<br>黒くて（くろくて） 小さな（ちいさな） <b>たね</b> を まいて お水（みず）を あげると、また 大きく 育つ（そだつ）よ！" },
	{ grade: 1, genre: "science", type: "which", text: "おひさまは、あさになると 「ひがし」のお空（そら）から のぼってくる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>朝は <b>東（ひがし）</b> から のぼって、ゆうがたには <b>にし</b> へ しずむよ！" },
	{ grade: 1, genre: "science", type: "select", text: "かたつむり は、すきな おてんきは なにかな？", choices: ["雨（あめ）", "はれ", "くもり", "ゆき"], answer: "雨（あめ）", explanation: "せいかいは「雨（あめ）」！<br>からだが かわくのが にがてだから、しめった <b>雨の日（あめのひ）</b> に げんきに うごくよ！" },
	{ grade: 1, genre: "science", type: "which", text: "チューリップの花（はな）は、ふゆの さむい ゆきの なかで さく。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>チューリップは ふゆの あいだ 土の中（つちのなか）で じっとしていて、あたたかい <b>はる</b> に さくよ！" },
	{ grade: 1, genre: "science", type: "which", text: "学校（がっこう）や こうえんや にわに いる、あきに 「リーン、リーン」と きれいな こえで なく 虫（むし）は すずむし である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あきの よるに <b>すずしい 音色（ねいろ）</b>を きかせて くれる 虫（むし）だよ！" },
	{ grade: 1, genre: "science", type: "direct", text: "学校（がっこう）や こうえんや にわに いる、あきに 「リーン、リーン」と きれいな こえで なく 虫（むし）は なあに？（ひらがな4もじで こたえてね）", choices: [], answer: "すずむし", explanation: "せいかいは「すずむし」！<br>あきの よるに <b>すずしい 音色（ねいろ）</b>を きかせて くれる 虫（むし）だよ！" },
]);

// 🟦 【社会：social】
targetArray.push(...[
	{ grade: 1, genre: "social", type: "select", text: "小学校（しょうがっこう）に いくとき、みんなが あんぜんに あるけるように、車（くるま）が とおる みちの よこに ある 白い（しろい） せんの 中（なか）を なんというかな？", choices: ["ほどう", "しゃどう", "せんろ", "こうえん"], answer: "ほどう", explanation: "せいかいは「ほどう」！<br>人（ひと）が あるくための <b>ほどう</b> を、一列（いちれつ）に ならんで あんぜんに とうこうしようね！" },
	{ grade: 1, genre: "social", type: "which", text: "学校（がっこう）の としょしつの本（ほん）は、みんなの ものだから やぶいたり らくがきを しても よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>みんなで つかう たいせつな 本（ほん）だから、<b>きれいに よんで</b> つぎの 人（ひと）に かそうね！" },
	{ grade: 1, genre: "social", type: "select", text: "みんなが すんでいる まちの ゴミを あつめて、きれいに おそうじをしてくれる 大きな（おおきな） トラックのなまえは なにかな？", choices: ["ゴミ収集車（しゅうしゅうしゃ）", "救急車（きゅうきゅうしゃ）", "ブルドーザー", "タクシー"], answer: "ゴミ収集車（しゅうしゅうしゃ）", explanation: "せいかいは「ゴミ収集車（しゅうしゅうしゃ）」！<br>みんなが だした ゴミを、<b>ゴミ収集車（しゅうしゅうしゃ）</b> が まいにち まわって あつめてくれるんだよ！" },
	{ grade: 1, genre: "social", type: "which", text: "まちの おみせや スーパーマーケットは、たべものや どうぐを つくってくれた 人（ひと）から しいれて うっている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>おやさいをつくる のうかさん などから、おみせの人（ひと）が <b>あつめて</b> みんなに うってくれるんだよ！" },
	{ grade: 1, genre: "social", type: "which", text: "お正月（おしょうがつ）に じんじゃや おてらに いって、あたらしい としの おねがいを することを 「はつもうで」と いう。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>日本（にほん）の むかしからの ぎょうじで、1年（ねん）の <b>はじめの ごあいさつ</b> に いくんだよ！" },
	{ grade: 1, genre: "social", type: "select", text: "きゅうな びょうきや ケガを した 人（ひと）を、のせて びょういんまで 音（おと）を ならしながら はしる 白い（しろい） おおきな 車（くるま）は なあに？", choices: ["救急車（きゅうきゅうしゃ）", "消防車（しょうぼうしゃ）", "トラック", "パトカー"], answer: "救急車（きゅうきゅうしゃ）", explanation: "せいかいは「救急車（きゅうきゅうしゃ）」！<br>ピーポー ピーポー と音（おと）を ならしながら、<b>おいしゃさんの いる びょういん</b> へ いそいで はこんでくれるよ！" },
	{ grade: 1, genre: "social", type: "which", text: "がいこくから きた おともだちとは、ことばが ちがうから なかよく しては いけない。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>ことばや すんでいた くにが ちがっても、<b>えがおで たのしく なかよく</b> なれるよ！" },
	{ grade: 1, genre: "social", type: "select", text: "5月（ごがつ）の こどもの日（ひ）に、おうちの やねや おにわに かざる、おさかなの カタチをした 大きな（おおきな） ぬのの かざりは なあに？", choices: ["こいのぼり", "ひな人形（にんぎょう）", "七夕（たなばた）かざり", "クリスマスツリー"], answer: "こいのぼり", explanation: "せいかいは「こいのぼり」！<br>こどもたちが <b>げんきに 大きく（おおきく） そだちますように</b> とねがいを こめて かざるよ！" },
	{ grade: 1, genre: "social", type: "which", text: "でんしゃや バスの 中（なか）に ある 「ゆうせんせき」は、おとしよりや からだの ふじゆうな 人（ひと）に ゆずるための せきである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>みんなで たすけあう ための せきだから、こまっている 人（ひと）が いたら <b>どうぞ</b> とせきを ゆずろうね！" }
]);

// 🟥 【英語：english】
targetArray.push(...[
	{ grade: 1, genre: "english", type: "select", text: "くだものの「バナナ」は えいごで どう かく かな？", choices: ["banana", "apple", "orange", "grape"], answer: "banana", explanation: "せいかいは「banana」！<br>えいごでも そのまま <b>banana（バナナ）</b> だよ！" },
	{ grade: 1, genre: "english", type: "which", text: "どうぶつ村（むら）の「くま」は えいごで「lion（ライオン）」という。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>「くま」は えいごで <b>bear（ベア）</b> というよ！" },
	{ grade: 1, genre: "english", type: "select", text: "「こんにちは」と ともだちに あった ときに いう えいごは なあに？", choices: ["Hello（ハロー）", "Goodbye（グッドバイ）", "Thank you（サンキュー）", "Sorry（ソーリー）"], answer: "Hello（ハロー）", explanation: "せいかいは「Hello（ハロー）」！<br>あかるく <b>Hello!</b> と あいさつ しようね！" },
	{ grade: 1, genre: "english", type: "which", text: "すうじの「5」は えいごで「five（ファイブ）」という。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>かたての ゆびの 数（かず）と おなじ <b>five</b> だね！" },
	{ grade: 1, genre: "english", type: "select", text: "「きいろ」は えいごで なあに？", choices: ["yellow（イエロー）", "pink（ピンク）", "white（ホワイト）", "black（ブラック）"], answer: "yellow（イエロー）", explanation: "せいかいは「yellow（イエロー）」！<br>レモンの いろは <b>yellow</b> だよ！" },
	{ grade: 1, genre: "english", type: "which", text: "「ごめんなさい」は えいごで「Thank you」という。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>「ごめんなさい」は えいごで <b>I'm sorry（アイムソーリー）</b> というよ！" },
	{ grade: 1, genre: "english", type: "select", text: "空（そら）を とぶ 「とり」は えいごで なあに？", choices: ["bird（バード）", "fish（フィッシュ）", "monkey（monkey）", "rabbit（ラビット）"], answer: "bird（バード）", explanation: "せいかいは「bird（バード）」！<br>パタパタ とぶ <b>bird</b> だね！" },
	{ grade: 1, genre: "english", type: "which", text: "水（みず）の なかを およぐ「さかな」は えいごで「fish（フィッシュ）」という。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>すいすい およぐ <b>fish</b> だよ！" },
	{ grade: 1, genre: "english", type: "select", text: "「うさぎ」は えいごで なあに？", choices: ["rabbit（ラビット）", "pig（ピッグ）", "cow（カウ）", "mouse（マウス）"], answer: "rabbit（ラビット）", explanation: "せいかいは「rabbit（ラビット）」！<br>みみが ながくて ぴょんぴょん はねる <b>rabbit</b> だね！" },
	{ grade: 1, genre: "english", type: "which", text: "「みどり」は えいごで「orange（オレンジ）」という。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>「みどり」は <b>green（グリーン）</b> だよ！" }
]);

// 🟥 【生活：life】
targetArray.push(...[
	{ grade: 1, genre: "life", type: "select", text: "おともだちが にもつを たくさん 持って（もって）いて、たいへんそうなとき、どうこえを かけるかな？", choices: ["なにか てつだうことは ある？", "ずるいぞと おこる", "とおくから わらう", "ひとりで はしってにげる"], answer: "なにか てつだうことは ある？", explanation: "せいかいは「なにか てつだうことは ある？」！<br>こまっている おともだちを みつけたら、<b>「てつだうよ」</b> と やさしいこえを かけようね！" },
	{ grade: 1, genre: "life", type: "which", text: "いきものを かうときは、まいにち わすれずに 水（みず）や ごはんを あげて、さいごまで せきにんを もつ。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>いきものは <b>おもちゃ ではない</b> から、かぞくとして たいせつに そだてようね！" },
	{ grade: 1, genre: "life", type: "select", text: "学校（がっこう）の ろうかを あるくときの ただしい ルールは どれかな？", choices: ["みぎがわをしずかにあるく", "ぜんりょくではしる", "おともだちとおしあいをする", "大ごえをだしながらすすむ"], answer: "みぎがわをしずかにあるく", explanation: "せいかいは「みぎがわをしずかにあるく」！<br>はしると <b>おともだちと ぶつかって ケガを しちゃう</b> から、ろうかは しずかに あるこうね！" },
	{ grade: 1, genre: "life", type: "which", text: "自分が いやなことは、おともだちに されても へいきだから、やってもよい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>じぶんが <b>されて かなしいこと</b> は、おともだちにも ぜったいに しては いけないよ！" },
	{ grade: 1, genre: "life", type: "select", text: "みんなの こうえんに ある 花（はな）が、きれいに さいています。どうするのが いちばん いいかな？", choices: ["みんなでみて たのしむ", "ぜんぶ ひきぬいて もってかえる", "ふみつけて あそぶ", "ゴミを 上（うえ）から なげすてる"], answer: "みんなでみて たのしむ", explanation: "せいかいは「みんなで見て たのしむ」！<br>こうえんは <b>みんなの ばしょ</b> だから、花（はな）も たいせつに まもって たのしもうね！" },
	{ grade: 1, genre: "life", type: "which", text: "おともだちと けんかを してしまったとき、じぶんが わるいと おもったら、すなおに「ごめんなさい」と いう。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ゆうきを だして <b>「ごめんなさい」</b> が いえれば、きっと また なかよく なれるよ！" },
	{ grade: 1, genre: "life", type: "select", text: "きょうしつの つくえや いすを つかうとき、いちばん ただしい こころがけは どれかな？", choices: ["みんなで つかうものだから たいせつにする", "らくがきを たくさんする", "わざと ガタガタ ゆらして こわす", "じぶんの ものだからと もってかえる"], answer: "みんなで つかうものだから たいせつにする", explanation: "せいかいは「みんなで つかうものだから たいせつにする」！<br>学校（がっこう）の ものは <b>みんなで つかう たいせつな もの</b> だから、きずつけないように つかおうね！" },　　
	{ grade: 1, genre: "life", type: "which", text: "おともだちが はっぴょうして いるときは、おしゃべりを しながら きいてもよい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>おはなして いる 人（ひと）の ほうを <b>しっかり みて、しずかに きく</b> のが ただしい マナーだよ！" },
	{ grade: 1, genre: "life", type: "select", text: "みちに ゴミが おちていました。ゴミ箱（ばこ）が ちかくに ないとき、どうするのが 一番（いちばん） いいかな？", choices: ["おうちまで もちかえって すてる", "そのまま べつのばしょになげすてる", "みなかったこと にしてはしる", "土の中（つちのなか）にうめてかくす"], answer: "おうちまで もちかえって すてる", explanation: "せいかいは「おうちまで もちかえって すてる」！<br>まちを <b>きれいに する</b> ために、ゴミは じぶんで ちゃんと もちかえろうね！" },
	{ grade: 1, genre: "life", type: "which", text: "やくそくの じかんや きまり は、だれも みていなければ やぶっても よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>きまり は <b>みんなが きもちよく くらすための おやくそく</b> だから、ひとりの ときも まもろうね！" },
	{ grade: 1, genre: "life", type: "select", text: "はるに さく、ピンクいろの きれいな 花（はな）で、学校の 入学式（にゅうがくしき）の ころに たくさん さく 木（き）は なあに？", choices: ["さくら", "ひまわり", "もみじ", "あじさい"], answer: "さくら", explanation: "せいかいは「さくら」！<br>はるの おとずれを <b>おいわい</b>して くれるように、きれいに さくよ！" },
	{ grade: 1, genre: "life", type: "select", text: "ともだちと けんかを してしまったとき、なかよしに もどるために いう ことばは なあに？", choices: ["ごめんなさい", "ばいばい", "ありがとう", "おめでとう"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>すなおな きもちで <b>「ごめんなさい」</b>と いえば、きっと なかなおり できるよ！" },
	{ grade: 1, genre: "life", type: "which", text: "プールに はいる まえには、かならず じゅんびたいそうを する。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ケガを しないように、<b>あしもと や てくび</b>を しっかり うごかしてから プールに はいろうね！" },
	{ grade: 1, genre: "life", type: "select", text: "学校（がっこう）で、つかった つくえの うえ や、きょうしつの ゆか を きれいに おそうじ する どうぐは なあに？", choices: ["ほうき と ぞうきん", "はさみ と のり", "教科書 と ノート", "ランドセル"], answer: "ほうき と ぞうきん", explanation: "せいかいは「ほうき と ぞうきん」！<br>みんなで つかう きょうしつだから、<b>ほうき と ぞうきん</b> で ピカピカに しようね！" },
	{ grade: 1, genre: "life", type: "which", text: "きゅうしょくを たべる まえ には、せっけん で きれいに 手（て）を あらう。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>バイきんを おうちの 中（なか）に いれないように、<b>せっけん</b> で ピカピカに あらおうね！" },
	{ grade: 1, genre: "life", type: "select", text: "たいいくのじかんに、せんせいが「あつまれ！」と ふえを ふいたとき、さいしょに することは なあに？", choices: ["かけあしで せいんせいのところに あつまる", "そのばで すわって めをつぶる", "おともだちと おしゃべりをする", "にもつを かたづけに きょうしつにもどる"], answer: "かけあしで せいんせいのところに あつまる", explanation: "せいかいは「かけあしで せいんせいのところに あつまる」！<br>ふえの 音（おと）が きこえたら、<b>すばやく あつまろう</b> ね！" },
]);
// 🟥 【芸術：art】
targetArray.push(...[
	{ grade: 1, genre: "art", type: "which", text: "けんばんハーモニカを ふくとき、うしろの あなを ぜんぶ ふさがないと 音（おと）が でない。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>けんばんハーモニカは <b>ホースから いきを ふきながら</b> けんばんを おせば、音（おと）が でるよ！" },
	{ grade: 1, genre: "art", type: "select", text: "ねんどを まるくて つるつるな カタチに するとき、手（て）の どこを つかって まるめるかな？", choices: ["手（て）のひら", "手（て）のこう", "ひじ", "ゆびのつめ"], answer: "手（て）のひら", explanation: "せいかいは「手（て）のひら」！<br>りょうほうの <b>手（て）のひら</b>で サンドイッチの ように はさんで コロコロ させると まるく なるよ！" },
	{ grade: 1, genre: "art", type: "which", text: "おんがくの じかんに うたう ときは、したを むいて ちいさな こえで もそもそとうたう。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>せすじを のばして、<b>とおくへ とどくような げんきな こえ</b> で うたうと たのしいよ！" },
	{ grade: 1, genre: "art", type: "select", text: "空（そら）の いろに ちかい のは どれかな？", choices: ["あお", "あか", "きいろ", "くろ"], answer: "あお", explanation: "せいかいは「あお」！<br>よく はれた 日（ひ）の 空（そら）は あおいね！" },
	{ grade: 1, genre: "art", type: "select", text: "おひさまに ちかい いろは どれかな？", choices: ["きいろ", "みどり", "くろ", "むらさき"], answer: "きいろ", explanation: "せいかいは「きいろ」！<br>おひさまみたいに あかるい いろだね！" },
	{ grade: 1, genre: "art", type: "select", text: "まるい かたちは どれかな？", choices: ["○", "□", "△", "×"], answer: "○", explanation: "せいかいは「○」！<br>ボールみたいな かたちだね！" },
	{ grade: 1, genre: "art", type: "select", text: "しかくい かたちは どれかな？", choices: ["○", "□", "△", "×"], answer: "□", explanation: "せいかいは「□」！<br>はこのような かたちだね！" },
	{ grade: 1, genre: "art", type: "select", text: "山（やま）に ちかい かたちは どれかな？", choices: ["さんかく", "まる", "しかく", "せん"], answer: "さんかく", explanation: "せいかいは「さんかく」！<br>山（やま）は さんかくに みえることが あるね！" },
	{ grade: 1, genre: "art", type: "select", text: "おりがみを きる ときに つかう ものは どれかな？", choices: ["はさみ", "コップ", "くつ", "かばん"], answer: "はさみ", explanation: "せいかいは「はさみ」！<br>ずこうで おりがみを きる ときに つかうよ！" },
	{ grade: 1, genre: "art", type: "select", text: "音（おと）をきいて たのしむ おべんきょうは どれかな？", choices: ["おんがく", "さんすう", "こくご", "りか"], answer: "おんがく", explanation: "せいかいは「おんがく」！<br>うたったり 音（おと）を きいたりして たのしむ おべんきょうだよ！" },
]);
// 🟥 【ひらめき：brain】
targetArray.push(...[
	{ grade: 1, genre: "brain", type: "which", text: "ボウリングで、10本（ぽん）の ピンのうち 4本（ほん） たおれました。のこって たっている ピンの かずは 5本（ほん）である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>10本（ぽん）から 4本（ほん） ひくと、のこりは <b>6本（ぽん）</b> だね！" },
	{ grade: 1, genre: "brain", type: "select", text: "どうぶつたちが かけっこを しました。いぬくんは 2番目（ばんめ）でした。たぬきくんは いぬくんの すぐ うしろでした。たぬきくんは なん番目（ばんめ）に なるかな？", choices: ["1番目（いちばんめ）", "2番目（にばんめ）", "3番目（さんばんめ）", "4番目（よんばんめ）"], answer: "3番目（さんばんめ）", explanation: "せいかいは「3番目（さんばんめ）」！<br>2番目（にばんめ）の <b>すぐ うしろ</b> だから 3番目（さんばんめ） だね！" },
	{ grade: 1, genre: "brain", type: "which", text: "エレベーターが あります。1かいから 3かいまで あがるのに 10びょうかかりました。おなじ はやさで 1かいから 5かいまで あがるのに かかる じかんは 20びょうである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>1かい→3かいは 2かいぶん。1かい→5かいは 4かいぶんだから <b>20びょう</b> だね！" },
	{ grade: 1, genre: "brain", type: "select", text: "15この チョコレートが あります。おともだちに 5こ あげました。おとうさんが 2こ くれました。いま チョコレートは ぜんぶで なんこに なったかな？", choices: ["12こ", "10こ", "17こ", "8こ"], answer: "12こ", explanation: "せいかいは「12こ」！<br>15 − 5 ＋ 2 ＝ <b>12こ</b> だね！" },
	{ grade: 1, genre: "brain", type: "which", text: "とけいの ながい はりが「12」から「6」まで うごきました。じかんが 30ふんたったというのは まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>はんぶん まわると <b>30ふん</b> だよ！" },
	{ grade: 1, genre: "brain", type: "select", text: "あめが 12こ あります。いもうとに 4こ あげました。おかあさんが 3こ くれました。いま あめは ぜんぶで なんこに なったかな？", choices: ["11こ", "8こ", "15こ", "9こ"], answer: "11こ", explanation: "せいかいは「11こ」！<br>12 − 4 ＋ 3 ＝ <b>11こ</b> だね！" },
	{ grade: 1, genre: "brain", type: "which", text: "クッキーの はこに 10まい はいっていました。あさ 3まい たべ、ひる 4まい たべたら、のこりは 5まいである。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>10 − 3 − 4 ＝ <b>3まい</b> だね！" },
	{ grade: 1, genre: "brain", type: "which", text: "ある おみせは、あさ 9じに ひらいて、よる 6じに しまります。この おみせが ひらいている じかんは 10じかんである。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>9じ→12じで 3じかん、12じ→6じで 6じかん。3＋6＝<b>9じかん</b> だね！" },
	{ grade: 1, genre: "brain", type: "which", text: "いけに カモが 6わ いました。3わ どこかへ とんでいき、そのあと 1わ もどってきました。いま カモは 4わである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>6 － 3 ＝ 3わ、そこに 1わ もどるから 3 ＋ 1 ＝ <b>4わ</b> だね！" },
	{ grade: 1, genre: "brain", type: "select", text: "ひきだしの なかに えんぴつが 8本（ぽん） あります。あかえんぴつが 3本（ぼん）、あおえんぴつが 2本（ほん）、のこりは くろえんぴつです。くろえんぴつは なん本（ぼん） あるかな？", choices: ["3本（ぼん）", "2本（ほん）", "5本（ほん）", "4本（ほん）"], answer: "3本（ぼん）", explanation: "せいかいは「3本（ぼん）」！<br>赤（あか）と 青（あお）を あわせて 3 ＋ 2 ＝ 5本（ほん）。ぜんたいから ひくと 8 － 5 ＝ <b>3本（ぼん）</b> だね！" },
	{ grade: 1, genre: "brain", type: "select", text: "まっしろな かみに、しろい クレヨンで えを かきました。そのあと、どうすれば えが みえるように なるかな？", choices: ["上（うえ）から水（みず）の えのぐを ぬる", "けしゴムで ぜんぶ けす", "ハサミで こまかく きる", "くらい へやに もっていく"], answer: "上（うえ）から水（みず）の えのぐを ぬる", explanation: "せいかいは「上（うえ）から水（みず）の えのぐを ぬる」！<br>クレヨンが <b>えのぐを はじく</b>から、かいた えが パッと うかびあがるよ！" },
	{ grade: 1, genre: "brain", type: "which", text: "「えんぴつ」の うしろに「けしゴム」を くっつけると、いつでも もじが けせる べんりな どうぐになる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ちがう どうぐを <b>ドッキング</b> させることで、あたらしい アイデアが うまれたんだよ！" },
	{ grade: 1, genre: "brain", type: "select", text: "ジュースを のむときに つかう、ほそくて あなが あいた くだを なにというかな？", choices: ["ストロー", "コップ", "スプーン", "フォーク"], answer: "ストロー", explanation: "せいかいは「ストロー」！<br>ストローは むかし、<b>むぎわら</b>を つかって つくられていたんだよ！" },
	{ grade: 1, genre: "brain", type: "which", text: "かみを まあるく つつの かたちに して のぞくと、とおくが よく みえる ぼうえんきょうのような あそびが できる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ただの ひらたい かみでも、<b>かたちを かえる</b>ことで たのしい おもちゃに へんしんするよ！" },
	{ grade: 1, genre: "brain", type: "select", text: "「うちわ」を もっと すずしく するために、でんきで はねを じどうで まわすように ひらめいた かでんは なあに？", choices: ["せんぷうき", "テレビ", "れいぞうこ", "せんたくき"], answer: "せんぷうき", explanation: "せいかいは「せんぷうき」！<br>「あおぐ」という はたらきを <b>でんきの ちから</b>と むすびつけたんだね！" },
	{ grade: 1, genre: "brain", type: "which", text: "ダンボールの はこを くみあわせて へやを つくると、じぶんだけの「ひみつきち」を ひらめくことが できる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ゴミに なる はこでも、<b>はっそうを かえれば</b> すてきな おもちゃに なるんだよ！" },
	{ grade: 1, genre: "brain", type: "which", text: "へやを あかるく するための でんきゅうを はつめいした、ひらめきの てんさいの なまえは「エジソン」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あきらめずに なんかいも じっけんをして、<b>あたらしい あかり</b>を うみだした えらい 人（ひと）だよ！" },
	{ grade: 1, genre: "brain", type: "direct", text: "「糸（いと）」と「虫（むし）」という 2つの ことばを くみあわせると、ある むしの なまえに なるよ。まゆを つくる この むしは なあに？（ひらがな 3もじ）", choices: [], answer: "かいこ", explanation: "せいかいは「かいこ」！<br>かんじで かくと <b>蚕（かいこ）</b>になって、いとを だす むしの ことだよ！" },
	{ grade: 1, genre: "brain", type: "direct", text: "目の上（めのうえ）に、よこに ながく はえていて、あせが 目（め）に はいらないように まもってくれる けの なまえは なあに？（ひらがな 3もじ）", choices: [], answer: "まゆげ", explanation: "せいかいは「まゆげ」！<br>かおの パーツの <b>やくわり</b>を つなげて かんがえると、パッと ひらめくね！" },
	{ grade: 1, genre: "brain", type: "select", text: "えのぐの「青（あお）」と「赤（あか）」を まぜると、どんな いろに なるかな？", choices: ["むらさき", "みどり", "みずいろ", "はいいろ"], answer: "むらさき", explanation: "せいかいは「むらさき」！<br>ちがう いろを <b>くみあわせる</b>ことで、あたらしくて きれいな いろが うまれるよ！" },
	{ grade: 1, genre: "brain", type: "which", text: "おじいちゃんが、1日（にち）に 3かい しんぶんを よみます。1週間（しゅうかん）で しんぶんが おうちに とどく かずは 21回である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>しんぶんは <b>よむ かいすう</b> に かんけいなく、おうちに とどくのは 1日（にち）に <b>「1かい（または あさと ゆうがたの 2かい）」</b> だからだよ！" },
	{ grade: 1, genre: "brain", type: "select", text: "ねこが 3びき います。1ぴきの ねこが 1ぴきの ネズミを つかまえるのに 3ふん かかります。3びきの ねこが 3びきの ネズミを どうじに つかまえるには なんふん かかるかな？", choices: ["3ふん", "1ふん", "9ふん", "6ふん"], answer: "3ふん", explanation: "せいかいは「3分」！<br>みんなが <b>どうじに よーいドン！</b> で つかまえるから、じかんは かわらず <b>3ふん</b> だよ！" },
	{ grade: 1, genre: "brain", type: "which", text: "1本（ぽん）の えんぴつを、まんなかから パキッと 2つに わりました。とがっている しんの ぶぶんは、ぜんぶで 2かしょに なった。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>わった だけだから、もともと とがっていた <b>さいしょの 1かしょ</b> だけだね！はんたいがわは とがっていないよ！" },
	{ grade: 1, genre: "brain", type: "select", text: "いけに カエルが 5ひき いました。そこに てんてきの ヘビが 1ぴき やってきました。カエルは おいけに ぜんぶで なんびき のこっているかな？", choices: ["0ひき", "5ひき", "4ひき", "6ぴき"], answer: "0匹", explanation: "せいかいは「0匹」！<br>ヘビが きたから、カエルたちは びっくりして <b>みんな 水（みず）の中（なか）に にげて</b> しまったよ！" },
	{ grade: 1, genre: "brain", type: "which", text: "10この リンゴを、2人（り）の こどもに おなじ かずずつ わけます。1人（り） 5こずつりんごをもっている。 まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ひっかけは ありません！ 10を はんぶんに すると <b>5こ</b> だね。たまには すなおな もんだいも でるよ！" },
	{ grade: 1, genre: "brain", type: "select", text: "あなたの おとうさんと おかあさんの あいだに うまれた こどもが います。でも、あなたの きょうだいでは ありません。この こどもは だれかな？", choices: ["じぶん", "いとこ", "おともだち", "だれでもない"], answer: "じぶん", explanation: "せいかいは「じぶん」！<br>あなたの きょうだい ではないなら、それは <b>あなた じしん</b> のことだよ！" },
	{ grade: 1, genre: "brain", type: "select", text: "1本（ぽん）の ひもが あります。ハサミで 1（かい） パチンと きると、ひもは ぜんぶで 何本（なんぼん）に わかれるかな？", choices: ["2本（ほん）", "1本（ぽん）", "3本（ぼん）", "0本（ほん）"], answer: "2本（ほん）", explanation: "せいかいは「2本」！<br>1つの ものを 1かい きると、<b>2つの パーツ</b> に わかれるよね！だまされなかったかな？" },
]);

}
