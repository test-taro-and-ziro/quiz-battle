// ==========================================
// 👶 幼児向け（grade: 0）クイズデータ
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions0(targetArray) {

// 🟥 【こくご：japanese】
targetArray.push(...[
	{ grade: 0, genre: "japanese", type: "select", text: "「ねこ」の さいしょの もじは なあに？", choices: ["ね", "こ", "い", "う"], answer: "ね", explanation: "せいかいは「ね」！<br><b>ね</b>・こ のさいしょのもじは<b>「ね」</b>だね！" },
	{ grade: 0, genre: "japanese", type: "select", text: "「ぞう」の おおきい はなは どこにある？", choices: ["かお", "おなか", "あし", "おしり"], answer: "かお", explanation: "せいかいは「かお」！<br>おはなが ながーい ぞうさんは、<b>かお</b>に はながあるよ！" },
	{ grade: 0, genre: "japanese", type: "which", text: "「いぬ」を はんたいから よむと 「ぬい」になる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>うしろから よむと <b>ぬ・い</b> になるね！" },
	{ grade: 0, genre: "japanese", type: "select", text: "そら を とぶ とりは どれかな？", choices: ["すずめ", "らいおん", "くま", "きりん"], answer: "すずめ", explanation: "せいかいは「すずめ」！<br>すずめさんは <b>つばさ</b>を パタパタさせて そら を とぶよ！" },
	{ grade: 0, genre: "japanese", type: "select", text: "「りんご」の いろ は なにいろかな？", choices: ["あか", "あお", "きいろ", "くろ"], answer: "あか", explanation: "せいかいは「あか」！<br>あまくて おいしい りんごは <span style='color:#e74c3c; font-weight:bold;'>あかいいろ</span> を しているよ！" },
	{ grade: 0, genre: "japanese", type: "select", text: "「うみ」に すんでいる いきものは どれ？", choices: ["たこ", "かぶとむし", "うさぎ", "ぽにー"], answer: "たこ", explanation: "せいかいは「たこ」！<br>たこさんは <b>うみ の なか</b>で あしを くねくね させて およぐよ！" },
	{ grade: 0, genre: "japanese", type: "which", text: "「あり」の もじ の かずは 3つである。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>あ・り の もじ は <b>2つ</b> だよ！" },
	{ grade: 0, genre: "japanese", type: "select", text: "「あ」の つぎに くる もじは なあに？", choices: ["い", "う", "え", "お"], answer: "い", explanation: "せいかいは「い」！<br>あいうえお の じゅんばんは、<b>「あ」のつぎは「い」</b>だね！" },
	{ grade: 0, genre: "japanese", type: "select", text: "ワンワン と なく どうぶつは なあに？", choices: ["いぬ", "ねこ", "ねずみ", "うし"], answer: "いぬ", explanation: "せいかいは「いぬ」！<br>かわいい いぬさんは <b>ワンワン！</b> って げんき に なくよ！" },
	{ grade: 0, genre: "japanese", type: "select", text: "おてがみ を かく ときに つかうものは どれかな？", choices: ["えんぴつ", "はさみ", "すぷーん", "とけい"], answer: "えんぴつ", explanation: "せいかいは「えんぴつ」！<br><b>えんぴつ</b>を つかって、じを かきかき しようね！" },
	{ grade: 0, genre: "japanese", type: "which", text: "「くり」と「すいか」は、どちらも さいしょの もじ が「く」である。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>すいかの さいしょの もじ は <b>「す」</b> だよ！" },
	{ grade: 0, genre: "japanese", type: "select", text: "雨（あめ）が ふったときに さすものは なあに？", choices: ["かさ", "くつ", "ぼうし", "かばん"], answer: "かさ", explanation: "せいかいは「かさ」！<br>雨（あめ）の日は <b>かさ</b>をさして おでかけしよう！" },
	{ grade: 0, genre: "japanese", type: "select", text: "「めがね」を かける ばしょ は どこかな？", choices: ["め", "くち", "みみ", "あし"], answer: "め", explanation: "せいかいは「め」！<br>おめめの まえに <b>めがね</b>を かけるよ！" },
	{ grade: 0, genre: "japanese", type: "which", text: "「いぬ」を はんたいから よむと「ぬい」に なる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>はんたいから よむと <b>ぬ・い</b> に なるね！" },
	{ grade: 0, genre: "japanese", type: "select", text: "「りんご」の なか の もじ は なあに？", choices: ["ん", "り", "ご", "め"], answer: "ん", explanation: "せいかいは「ん」！<br>り・<b>ん</b>・ご の まんなか の もじ は「ん」だね！" },
	{ grade: 0, genre: "japanese", type: "which", text: "「ぞう」の なまえ に「てんてん（゛）」は つかない。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ（false）」！<br>「そう」に てんてんを つけて <b>「ぞう」</b> に なるよ！" },
	{ grade: 0, genre: "japanese", type: "select", text: "ごはんを たべるときは 「〇〇〇〇〇〇」", choices: ["いただきます", "ごちそうさま", "こんにちは", "ありがとう"], answer: "いただきます", explanation: "せいかいは「いただきます」！<br>ごはんを つくってくれた ひとに かんしゃして <b>いただきます</b> を いおうね！" },
	{ grade: 0, genre: "japanese", type: "which", text: "「すいか」の さいごの もじ は「か」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>す・い・<b>か</b> の さいご の もじ は「か」だね！" },
	{ grade: 0, genre: "japanese", type: "select", text: "「くま」と「まる」を がったいさせると、どんな ことばに なるかな？", choices: ["くまる", "まくま", "まるく", "くまま"], answer: "くまる", explanation: "せいかいは「くまる」！<br>くま ＋ まる ➔ <b>くまる</b> に なるね！" },
	{ grade: 0, genre: "japanese", type: "which", text: "「ちいさい つ（っ）」を つかう ことばは 「きって」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br><b>きって</b> は 「っ」が はいるよ！" },
	{ grade: 0, genre: "japanese", type: "select", text: "「う、お、え、あ、〇」 〇に はいる もじは なあに？", choices: ["い", "か", "ん", "た"], answer: "い", explanation: "せいかいは「い」！<br>あ・<b>い</b>・う・え・お の なかまだね！" },
	{ grade: 0, genre: "japanese", type: "which", text: "「バナナ」は がいこく から きた たべものなので カタカナで かく。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>がいこく から きた ものは <b>カタカナ</b> で かくよ！" }
]);
// 🟦 【さんすう：math】
targetArray.push(...[
	{ grade: 0, genre: "math", type: "select", text: "りんごが 3こ あります。2こ もらうと、ぜんぶで なんこ？", choices: ["5こ", "4こ", "1こ", "6こ"], answer: "5こ", explanation: "せいかいは「5こ」だよ！<br>あわせるから たしざんだね。<b>3 ＋ 2 ＝ 5</b> に なるよ！" },
	{ grade: 0, genre: "math", type: "select", text: "「8」の つぎに おおきい かずは なに？", choices: ["9", "5", "11", "6"], answer: "9", explanation: "せいかいは「9」だよ！<br>1,2,3,4,5,6,7,8… と かぞえると、8の つぎは <b>9</b> だね！" },
	{ grade: 0, genre: "math", type: "select", text: "くるまの タイヤは ぜんぶで なんこ あるかな？", choices: ["2こ", "3こ", "4こ", "5こ"], answer: "4こ", explanation: "せいかいは「4こ」！<br>ブーブー はしる くるまには <b>4つの タイヤ</b> が ついているよ！" },
	{ grade: 0, genre: "math", type: "select", text: "ちょうちょが 1ぴき います。もう 1ぴき くると、なんびき？", choices: ["2ひき", "3ひき", "4ひき", "5ひき"], answer: "2ひき", explanation: "せいかいは「2ひき」！<br>1つに 1つを あわせると <b>1 + 1 = 2</b> に なるね！" },
	{ grade: 0, genre: "math", type: "which", text: "「おつきさま」の かたちは しかくい。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>まんまる おつきさまは <span style='color:#f1c40f; font-weight:bold;'>まるい かたち</span> を しているよ！" },
	{ grade: 0, genre: "math", type: "select", text: "アメが 4こ あります。1こ たべると、のこりは なんこ？", choices: ["2こ", "3こ", "4こ", "1こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>4つ の うち 1つ を ひくと <b>4 - 1 = 3</b> に なるね！" },
	{ grade: 0, genre: "math", type: "select", text: "「10」と「2」は、どちらが おおい かな？", choices: ["10のほうが おおい", "2のほうが おおい", "おなじ", "くらべられない"], answer: "10のほうが おおい", explanation: "せいかいは「10のほうが おおい」！<br>10こ のほうが 2こ よりも <b>たくさん あって おおい</b> ね！" },
	{ grade: 0, genre: "math", type: "which", text: "て の ゆびは、ぜんぶで 10ほん ある。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>みぎの 手（て）5ほん と ひだりの 手（て）5ほん を あわせると <b>5 + 5 = 10ほん</b> だよ！" },
	{ grade: 0, genre: "math", type: "select", text: "「3」の つぎに おおい かずは なあに？", choices: ["4", "2", "5", "1"], answer: "4", explanation: "せいかいは「4」！<br>1、2、3 の つぎは <b>4</b> に なるね！" },
	{ grade: 0, genre: "math", type: "select", text: "さんかく（▲）の かど は なんこ あるかな？", choices: ["3こ", "4こ", "5こ", "2こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>さんかく の とがっている かど は <b>3つ</b> あるよ！" },
	{ grade: 0, genre: "math", type: "select", text: "きりんさんの くび と、ぶたさんの くび、ながいのは どっち？", choices: ["きりんさん", "ぶたさん", "おなじ", "わからない"], answer: "きりんさん", explanation: "せいかいは「きりんさん」！<br>きりんさんの くびは <b>びよーんと ながくて</b> おおきいね！" },
	{ grade: 0, genre: "math", type: "which", text: "て の ゆびは、ぜんぶで 10ほん ある。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>みぎの 手（て）5ほん と ひだりの 手（て）5ほん を あわせると <b>5 + 5 = 10ほん</b> だよ！" },
	{ grade: 0, genre: "math", type: "select", text: "「3」の つぎに おおい かずは なあに？", choices: ["4", "2", "5", "1"], answer: "4", explanation: "せいかいは「4」！<br>1、2、3 の つぎは <b>4</b> に なるね！" },
    { grade: 0, genre: "math", type: "select", text: "サイコロの いちばん おおきい め（かず）は なあに？", choices: ["6", "5", "4", "3"], answer: "6", explanation: "せいかいは「6」！<br>しかくいサイコロには <b>1から6までの かず</b>が かいてあるよ！" },
    { grade: 0, genre: "math", type: "which", text: "2こ のイチゴと、2こ のミカン。あわせると 5こ になる。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>2 と 2 を あわせると <b>2 + 2 = 4こ</b> になるね！" },
    { grade: 0, genre: "math", type: "select", text: "ドーナツが 6こ あって、2こ もらうと ぜんぶで なんこ？", choices: ["8こ", "7こ", "6こ", "9こ"], answer: "8こ", explanation: "せいかいは「8こ」！<br>6こ に 2こ を たしざんすると <b>6 + 2 = 8</b> になるね！" },
    { grade: 0, genre: "math", type: "select", text: "ノートが 3さつ あって、3さつ つかうと のこりは なんさつ？", choices: ["0さつ", "1さつ", "2さつ", "3さつ"], answer: "0さつ", explanation: "せいかいは「0さつ」！<br><b>3つ から 3つ を ひく</b>と、ぜんぶ なくなっちゃうね！" },
	{ grade: 0, genre: "math", type: "select", text: "クッキーが 3こ あります。1こ たべたら、のこりは なんこに なるかな？", choices: ["2こ", "1こ", "3こ", "4こ"], answer: "2こ", explanation: "せいかいは「2こ」！<br>3こから 1こ ひくと <b>2こ</b> になるね！" },
	{ grade: 0, genre: "math", type: "which", text: "「5」は「3」よりも 大きい（おおきい） かずである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>かずの じゅんばんで <b>5のほうが あとに くる</b>から、大きいよ！" },
	{ grade: 0, genre: "math", type: "select", text: "「● ● ● ● ●」 ほし（●）は ぜんぶで なんこ あるかな？", choices: ["5こ", "4こ", "6こ", "3こ"], answer: "5こ", explanation: "せいかいは「5こ」！<br>ひとつずつ かぞえると 1、2、3、4、<b>5こ</b> だね！" },
	{ grade: 0, genre: "math", type: "which", text: "「4」の つぎの かず（1つ 大きい かず）は「6」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ（false）」！<br>4の つぎの かずは <b>「5」</b> だよ！" },
	{ grade: 0, genre: "math", type: "select", text: "あかい ミニカーが 2だい、あおい ミニカーが 2だい あります。あわせて なんだいに なるかな？", choices: ["4だい", "2だい", "3だい", "5だい"], answer: "4だい", explanation: "せいかいは「4だい」！<br>2 ＋ 2 ＝ <b>4だい</b> になるね！" },
	{ grade: 0, genre: "math", type: "which", text: "ドーナツが 1こも ない とき、かずは「0（ぜろ）」と いう。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>なにも ない ときは <b>「0」</b> とあらわすよ！" },
	{ grade: 0, genre: "math", type: "select", text: "「10」より 1つ すくない かずは なあに？", choices: ["9", "8", "10", "7"], answer: "9", explanation: "せいかいは「9」！<br>10の 1つ まえの かずは <b>「9」</b> だね！" },
	{ grade: 0, genre: "math", type: "which", text: "さんかく（△）の カタチの かど（とがっているところ）は 4つ ある。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ（false）」！<br>さんかくの かどは <b>3つ</b> だよ！" },
	{ grade: 0, genre: "math", type: "select", text: "アメを 6こ 持っています。おともだちに 3こ あげたら、のこりは なんこかな？", choices: ["3こ", "2こ", "4こ", "6こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>6こから 3こ ひくと <b>3こ</b> だね！" },
	{ grade: 0, genre: "math", type: "which", text: "「2、4、6、8、〇」 〇に はいる かずは「10」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>2ずつ ふえる かずだから、8の つぎは <b>10</b> だよ！" }
]);
// 🔬 【りか：science】
targetArray.push(...[
	{ grade: 0, genre: "science", type: "select", text: "おそらに でる、まあるくて きいろい、夜（よる）に ピカピカ ひかる ものは なあに？", choices: ["つき", "たいよう", "くも", "にじ"], answer: "つき", explanation: "せいかいは「つき」！<br>夜（よる）の おそらを あかるく てらしてくれる <b>お月（つき）さま</b> だね！" },
	{ grade: 0, genre: "science", type: "which", text: "「あり」の 足（あし）の かずは 4ほん である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ（false）」！<br>ありの 足（あし）は <b>6ほん</b> あるよ！むしの なかま は みんな 足（あし）が 6ほん なんだ！" },
	{ grade: 0, genre: "science", type: "select", text: "はるに さく、ピンクいろの きれいな はなで、ひらひらと はなびらが まう 木（き）は なあに？", choices: ["さくら", "ひまわり", "どんぐり", "あさがお"], answer: "さくら", explanation: "せいかいは「さくら」！<br>はるに なると、がっこうや こうえんに <b>さくら</b>が たくさん さくよ！" },
	{ grade: 0, genre: "science", type: "which", text: "水（みず）を こおり の へや に いれて つめたく すると、こおりに なる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>水（みず）は <b>つめたく すると こおりに</b> なって、あつく すると ゆげに なるよ！" },
	{ grade: 0, genre: "science", type: "select", text: "どうぶつクイズ！ おはなが とても ながくて、水（みず）を ぶわーっと ふく どうぶつは なあに？", choices: ["ぞう", "きりん", "くま", "うさぎ"], answer: "ぞう", explanation: "せいかいは「ぞう」！<br><b>ぞうさん</b>の ながい おはなは、ごはんを たべたり 水（みず）を のんだり するのに べんりなんだよ！" },
	{ grade: 0, genre: "science", type: "which", text: "メダカは、水（みず）の なかでも いきが できる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>おさかな は <b>エラ</b> を つかって、水（みず）の なかでも じょうずに いきが できるんだよ！" },
	{ grade: 0, genre: "science", type: "select", text: "あきに なると、こうえんの じめん に たくさん おちている、ぼうしを かぶった 茶色（ちゃいろ）の 木（き）の みは なあに？", choices: ["どんぐり", "まつぼっくり", "くり", "りんご"], answer: "どんぐり", explanation: "せいかいは「どんぐり」！<br>りすくんや くまくんも だいすきな <b>どんぐり</b>が たくさん みつかるよ！" },
	{ grade: 0, genre: "science", type: "which", text: "いぬの おみみは、うしろの おと を きく とき、うごかす ことが できる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>いぬや ねこは、おと が する ほうに <b>おみみを ピクピク うごかして</b> よく きいているよ！" },
	{ grade: 0, genre: "science", type: "select", text: "おそらに かかる、あか、あお、きいろ など、7つの いろが ならんだ きれいな はし のような ものは なあに？", choices: ["にじ", "くも", "かみなり", "たいよう"], answer: "にじ", explanation: "せいかいは「にじ」！<br>雨（あめ）が あがった あとに、おひさまの 光（ひかり）が 水（みず）に あたると <b>にじ</b>が でるよ！" },
	{ grade: 0, genre: "science", type: "which", text: "ひまわりの はなは、夜（よる）に なると パッと さく。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ（false）」！<br>ひまわりは <b>昼（ひる）の あかるい たいよう</b>が だいすきで、おひさまの ほうを むいて さくよ！" },
	{ grade: 0, genre: "science", type: "select", text: "おそらに キラキラ ひかる、夜（よる）に みえるものは なあに？", choices: ["ほし", "たいよう", "くも", "にじ"], answer: "ほし", explanation: "せいかいは「ほし」！<br>夜（よる）の おそらには <b>キラキラひかる おほしさま</b>が たくさん みえるよ！" },
	{ grade: 0, genre: "science", type: "select", text: "はるに さく、ピンクいろの きれいな おはなは なあに？", choices: ["さくら", "ひまわり", "どんぐり", "あさがお"], answer: "さくら", explanation: "せいかいは「さくら」！<br>あったかくなると <b>さくら</b>の はなが さいて、とっても きれいだね！" },
	{ grade: 0, genre: "science", type: "which", text: "かえるさんは、水（みず）の なかでも およぐことが できる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>かえるさんは <b>水（みず）の なかも、土（つち）の うえも</b> どちらも とくいだよ！" },
	{ grade: 0, genre: "science", type: "select", text: "あおむしさんが おおきくなると、なんの むしに へんしん するかな？", choices: ["ちょうちょ", "かぶとむし", "ばった", "あり"], answer: "ちょうちょ", explanation: "せいかいは「ちょうちょ」！<br>あおむしさんは <b>きれいな はねの ちょうちょ</b> に へんしん するよ！" },
	{ grade: 0, genre: "science", type: "select", text: "ワンワン なく いぬの 足（あし）は ぜんぶで なんほん？", choices: ["4ほん", "2ほん", "6ほん", "8ほん"], answer: "4ほん", explanation: "せいかいは「4ほん」！<br>いぬさんや ねこさんの 足（あし）は <b>ぜんぶで 4ほん</b> あるよ！" },
	{ grade: 0, genre: "science", type: "which", text: "ゆきは、あったかい へや に おいておくと 水（みず）になる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>つめたい ゆきや こおり は、<b>あったかいと とけて 水（みず）に なる</b>よ！" },
	{ grade: 0, genre: "science", type: "select", text: "いけ の なかで スイスイ およぐ、あかい おさかなは なあに？", choices: ["きんぎょ", "めだか", "くじら", "いるか"], answer: "きんぎょ", explanation: "せいかいは「きんぎょ」！<br>あかくて ひらひら およぐ かわいい おさかなは <b>きんぎょ</b> だね！" },
	{ grade: 0, genre: "science", type: "select", text: "あきに 木（き）から ぽとんと おちてくる、ぼうしを かぶった 木（き）の みは なあに？", choices: ["どんぐり", "まつぼっくり", "りんご", "くり"], answer: "どんぐり", explanation: "せいかいは「どんぐり」！<br>もりの どうぶつたちも だいすきな <b>どんぐり</b> は あきに みつかるよ！" },
	{ grade: 0, genre: "science", type: "which", text: "ありさんは、じぶんよりも おもたい ものを はこぶことが できる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>ありさんは からだは ちいさいけれど、<b>とっても ちからもち</b> なんだよ！" },
	{ grade: 0, genre: "science", type: "select", text: "なつの あさ、まぶしく ひかる おそらの おおきな まるい ものは？", choices: ["たいよう", "おつきさま", "にじ", "くも"], answer: "たいよう", explanation: "せいかいは「たいよう」！<br>おひるを あかるく、<b>あったかくしてくれるのは たいよう</b> だね！" },
	{ grade: 0, genre: "science", type: "select", text: "あさがお の はなが さくのは、1にちの うちの いつかな？", choices: ["あさ", "よる", "ひる", "ゆうがた"], answer: "あさ", explanation: "せいかいは「あさ」！<br><b>あさがお</b> は、その なまえの とおり <b>あさ はやく</b> に きれいな はなを さかせるよ！" },
	{ grade: 0, genre: "science", type: "which", text: "すいか は、木（き）の うえに みのる。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>すいか は 木（き）の うえではなく、<b>土（つち）の うえ を はう ツル</b> に なるんだよ！" },
	{ grade: 0, genre: "science", type: "select", text: "とっても くび が ながい、きいろ と ちゃいろ の もよう の どうぶつ は？", choices: ["きりん", "ぞう", "らいおん", "しまうま"], answer: "きりん", explanation: "せいかいは「きりん」！<br>たかい 木（き）の うえ の はっぱ も とどく、<b>くび の ながい どうぶつ は きりん</b> さんだね！" },
	{ grade: 0, genre: "science", type: "select", text: "うみ に すんでいる、おでこ から ピュー と 水（みず）を ふく おおきな いきもの は？", choices: ["くじら", "さめ", "たこ", "かに"], answer: "くじら", explanation: "せいかいは「くじら」！<br>うみ の なかで いちばん おおきな <b>くじら</b> さんは、せなか から しお を ふくよ！" }
]);
// 🗺️ 【しゃかい：social】
targetArray.push(...[
	{ grade: 0, genre: "social", type: "select", text: "パトカーや パトロールカーは、みんなの まちの あんぜんを まもる どこから くるかな？", choices: ["こうばん・けいさつしょ", "しょうぼうしょ", "びょういん", "がっこう"], answer: "こうばん・けいさつしょ", explanation: "せいかいは「こうばん・けいさつしょ」！<br>おまわりさんが こうばんから パトカーに のって まちを まもってくれているよ！" },
	{ grade: 0, genre: "social", type: "which", text: "おうちの ごみは、いつでも すきなひに すきなだけ だして よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>ごみは きめられた ようびや じかんに だす るーるが あるよ！" },
	{ grade: 0, genre: "social", type: "select", text: "おてがみや ハガキを おうちに とどけてくれる、あかい バイクや くるまに のった ひとは だれかな？", choices: ["ゆうびんやさん", "おまわりさん", "しょうぼうしさん", "おいしゃさん"], answer: "ゆうびんやさん", explanation: "せいかいは「ゆうびんやさん」！<br>ポストに いれた おてがみを、ゆうびんやさんが とおくまで はこんでくれるよ！" },
	{ grade: 0, genre: "social", type: "which", text: "おうだんほどうを わたるときは、しんごうが あおに なってから わたる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あおに なっても、みぎと ひだりを よく みてから わたろうね！" },
	{ grade: 0, genre: "social", type: "select", text: "おかいものを するときに、おみせの ひとに わたす たいせつな ものは なあに？", choices: ["おかね", "おもちゃ", "はっぱ", "えんぴつ"], answer: "おかね", explanation: "せいかいは「おかね」！<br>おかしや おもちゃを もらう かわりに、ただしく おかねを わたそうね！" },
	{ grade: 0, genre: "social", type: "which", text: "バスや でんしゃの なかでは、おおきなこえで はしりまわって あそんでも よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>みんなが のる のりものだから、しずかに すわって じゅんばんを まとうね！" },
	{ grade: 0, genre: "social", type: "select", text: "おうちの まわりに ある、すべりだい や ブランコが あって あそべる ひろい ばしょは なあに？", choices: ["こうえん", "えき", "こうじょう", "おみせ"], answer: "こうえん", explanation: "せいかいは「こうえん」！<br>みんなの こうえんだから、なかよく じゅんばんこで あそぼうね！" },
	{ grade: 0, genre: "social", type: "which", text: "まちに ある しんごうきの きいろは、いそいで はしって わたれ という いみである。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>きいろは「もうすぐ あかに なるから とまれ」という いみだよ！" },
	{ grade: 0, genre: "social", type: "select", text: "かじが おきた ときに、あかい しょうぼうしゃに のって いそいで ひを けしに きてくれる ひとは だれかな？", choices: ["しょうぼうしさん", "おまわりさん", "うんてんしゅさん", "せんせい"], answer: "しょうぼうしさん", explanation: "せいかいは「しょうぼうしさん」！<br>おみずを たくさん つんだ しょうぼうしゃで、しょうぼうしさんが ひを けしてくれるよ！" },
	{ grade: 0, genre: "social", type: "which", text: "スーパーや おみせに ある ものは、おかねを はらう まえに たべても よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>レジで おかねを はらってから たべようね！" },
	{ grade: 0, genre: "social", type: "select", text: "まちの あんぜんを まもってくれる、あかい くるまは なあに？", choices: ["しょうぼうしゃ", "パトカー", "きゅうきゅうしゃ", "タクシー"], answer: "しょうぼうしゃ", explanation: "せいかいは「しょうぼうしゃ」！<br>かじの ときに あかい しょうぼうしゃが ビューッと はしって ひを けすよ！" },
	{ grade: 0, genre: "social", type: "select", text: "おてがみや ハガキを おうちに とどけてくれるのは だれかな？", choices: ["ゆうびんやさん", "はいしゃさん", "おまわりさん", "やきゅうしゅ"], answer: "ゆうびんやさん", explanation: "せいかいは「ゆうびんやさん」！<br>かばんに たくさんの おてがみを いれて、おうちに とどけてくれるよ！" },
	{ grade: 0, genre: "social", type: "which", text: "しんごうが あお の ときは、すすんでも よい。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あおは すすむ、あかは とまる。しっかり まもろうね！" },
	{ grade: 0, genre: "social", type: "select", text: "びょうきや けがをした ひとを、いそいで びょういんへ はこぶ しろい くるまは？", choices: ["きゅうきゅうしゃ", "パトカー", "トラック", "バス"], answer: "きゅうきゅうしゃ", explanation: "せいかいは「きゅうきゅうしゃ」！<br>ピーポーピーポーと きゅうきゅうしゃが はこんでくれるよ！" },
	{ grade: 0, genre: "social", type: "select", text: "まちの パトロールをして、みんなを たすけてくれる けいさつの くるまは？", choices: ["パトカー", "しょうぼうしゃ", "ごみしゅうしゅうしゃ", "ブルドーザー"], answer: "パトカー", explanation: "せいかいは「パトカー」！<br>しろと くろの パトカーに のって、おまわりさんが まもってくれるよ！" },
	{ grade: 0, genre: "social", type: "which", text: "おかいものを するときは、おかねを はらってから しなものを もらう。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>おかねを ちゃんと はらってから おかいものしようね！" },
	{ grade: 0, genre: "social", type: "select", text: "おいしい おこめや おやさいを、はたけで つくってくれるのは だれ？", choices: ["のうかさん", "りょうし", "うんてんしゅ", "うちゅうひこうし"], answer: "のうかさん", explanation: "せいかいは「のうかさん」！<br>まいにち おいしい ごはんが たべられるのは、のうかさんの おかげだね！" },
	{ grade: 0, genre: "social", type: "select", text: "たくさんの ひとを のせて、せんろの うえを がたんごとん はしる のりものは？", choices: ["でんしゃ", "ひこうき", "ふね", "じてんしゃ"], answer: "でんしゃ", explanation: "せいかいは「でんしゃ」！<br>えきから えきへ、たくさんの ひとを はこぶ のりものだね！" },
	{ grade: 0, genre: "social", type: "which", text: "バスや でんしゃに のるときは、ならんでいる じゅんばんを まもって のる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>みんなが つかう のりものだから、じゅんばんを しっかり まもって ならぼうね！" },
	{ grade: 0, genre: "social", type: "select", text: "あたまに しろい ぼうしを かぶって、おいしい ケーキを つくってくれる ひとは？", choices: ["パティシエ", "かんごし", "しょうぼうし", "せんせい"], answer: "パティシエ", explanation: "せいかいは「パティシエ」！<br>あまくて おいしい ケーキや おかしを つくる しょくにんさんだよ！" },
	{ grade: 0, genre: "social", type: "select", text: "おうちの まえに おいておいた ごみを、おおきな くるまで あつめてくれる ひとは？", choices: ["ごみしゅうしゅうの ひと", "たくはいびんの ひと", "だいくさん", "おまわりさん"], answer: "ごみしゅうしゅうの ひと", explanation: "せいかいは「ごみしゅうしゅうの ひと」！<br>まちを きれいに するために、ごみしゅうしゅうしゃで あつめてくれるよ！" },
	{ grade: 0, genre: "social", type: "which", text: "じぶんの おうちが ある くにの なまえは「にほん」である。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>わたしたちが くらしている この くには にほん というんだよ！" },
	{ grade: 0, genre: "social", type: "select", text: "かみのけを ちょきちょき きれいに してくれる おみせは？", choices: ["とこや・びようしつ", "ほんやさん", "ケーキやさん", "おもちゃやさん"], answer: "とこや・びようしつ", explanation: "せいかいは「とこや・びようしつ」！<br>はさみを じょうずに つかって、かみのけを すっきり きれいに してくれるよ！" },
	{ grade: 0, genre: "social", type: "select", text: "そらの うえを ビューンと とんで、とおくの くにまで はこんでくれる おおきな のりものは？", choices: ["ひこうき", "ヘリコプター", "しんかんせん", "ロケット"], answer: "ひこうき", explanation: "せいかいは「ひこうき」！<br>おおきな はねを つけて そらを とぶ のりものだね！" }
]);
// 🔤 【えいご：english】
targetArray.push(...[
	{ grade: 0, genre: "english", type: "select", text: "「りんご」は えいごで なあに？", choices: ["apple（アップル）", "banana（バナナ）", "cat（キャット）", "dog（ドッグ）"], answer: "apple（アップル）", explanation: "せいかいは「apple（アップル）」！<br>あかくて おいしい <b>apple</b> だね！" },
	{ grade: 0, genre: "english", type: "which", text: "どうぶつの「いぬ」は えいごで「dog（ドッグ）」という。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>ワンワン なく どうぶつは <b>dog</b> だよ！" },
	{ grade: 0, genre: "english", type: "select", text: "「ねこ」は えいごで なあに？", choices: ["cat（キャット）", "dog（ドッグ）", "fox（フォックス）", "bear（ベア）"], answer: "cat（キャット）", explanation: "せいかいは「cat（キャット）」！<br>ニャーオと なく かわいい <b>cat</b> だね！" },
	{ grade: 0, genre: "english", type: "which", text: "「ありがとう」は えいごで「Hello（ハロー）」という。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ（false）」！<br>「ありがとう」は <b>Thank you（サンキュー）</b> だよ！Hello は「こんにちは」だね！" },
	{ grade: 0, genre: "english", type: "select", text: "あさ、おともだちとあったときに いう えいごの あいさつは なあに？", choices: ["Good morning（グッドモーニング）", "Good night（グッドナイト）", "Goodbye（バイバイ）", "Thank you（サンキュー）"], answer: "Good morning（グッドモーニング）", explanation: "せいかいは「Good morning（グッドモーニング）」！<br>あさ おきたら げんきよく <b>Good morning!</b> と いおうね！" },
	{ grade: 0, genre: "english", type: "which", text: "すうじの「1」は えいごで「one（ワン）」と よむ。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>1 は えいごで <b>one（ワン）</b> だよ！" },
	{ grade: 0, genre: "english", type: "select", text: "えのぐの「あか」は えいごで なあに？", choices: ["red（レッド）", "blue（ブルー）", "yellow（イエロー）", "green（グリーン）"], answer: "red（レッド）", explanation: "せいかいは「red（レッド）」！<br>いちごや トマトの いろは <b>red</b> だね！" },
	{ grade: 0, genre: "english", type: "which", text: "「バイバイ（さようなら）」は えいごで「Goodbye（グッドバイ）」という。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>おともだちと わかれる ときは <b>Goodbye!</b> と いおうね！" },
	{ grade: 0, genre: "english", type: "select", text: "すうじの「3」は えいごで なあに？", choices: ["three（スリー）", "one（ワン）", "two（ツー）", "four（フォー）"], answer: "three（スリー）", explanation: "せいかいは「three（スリー）」！<br>one、two、<b>three!</b> の three だね！" },
	{ grade: 0, genre: "english", type: "which", text: "えのぐの「あお」は えいごで「yellow（イエロー）」という。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ（false）」！<br>「あお」は <b>blue（ブルー）</b> だよ！yellow は「きいろ」だね！" },
    { grade: 0, genre: "english", type: "select", text: "えいごで 「アップル」といえば、なんの フルーツかな？", choices: ["りんご", "みかん", "ばなな", "ぶどう"], answer: "りんご", explanation: "せいかいは「りんご」！<br>まっかな りんごは えいごで <b>Apple（アップル）</b> っていうんだよ！" },
    { grade: 0, genre: "english", type: "select", text: "えいごで 「ドッグ」といえば、どうぶつは なあに？", choices: ["いぬ", "ねこ", "うさぎ", "くま"], answer: "いぬ", explanation: "せいかいは「いぬ」！<br>いぬさんは えいごで <b>Dog（ドッグ）</b> っていうんだよ。ワンワン！" },
    { grade: 0, genre: "english", type: "select", text: "えいごで 「レッド」といえば、なにいろの ことかな？", choices: ["あか", "あお", "きいろ", "みどり"], answer: "あか", explanation: "せいかいは「あか」！<br>しょうぼうしゃの <span style='color:#e74c3c; font-weight:bold;'>あかいろは えいごで Red（レッド）</span> だよ！" },
    { grade: 0, genre: "english", type: "select", text: "えいごで 「ブルー」といえば、なにいろの ことかな？", choices: ["あお", "あか", "きいろ", "しろ"], answer: "あお", explanation: "せいかいは「あお」！<br>おそらや ひろいうみの <span style='color:#3498db; font-weight:bold;'>あおいろは えいごで Blue（ブルー）</span> だよ！" },
    { grade: 0, genre: "english", type: "which", text: "えいごで 「ハロー」と いわれたら、あいさつの おへんじをする。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br><b>Hello（ハロー）</b> は「こんにちは」だから、げんきにハローとおかえししよう！" },
    { grade: 0, genre: "english", type: "select", text: "すうじの 「1（いち）」を、えいごでいうと なあに？", choices: ["One", "Two", "Three", "Four"], answer: "One", explanation: "せいかいは「One（ワン）」！<br>1（いち）、2（に）、3（さん）は えいごで <b>One（ワン）、Two（ツー）、Three（スリー）</b> だね！" },
    { grade: 0, genre: "english", type: "select", text: "えいごで 「バナナ」の さいしょの もじは なあに？", choices: ["B", "A", "C", "M"], answer: "B", explanation: "せいかいは「B」！<br>きいろくて おいしいバナナは <b>Banana</b> なので、<b>「B」</b>から はじまるよ！" },
    { grade: 0, genre: "english", type: "which", text: "えいごで 「バイバイ」は、あさ おきたときに いう あいさつである。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br><b>Bye-bye（バイバイ）</b> は、おともだちと<b>「さようなら」</b>をして わかれるときの ことばだよ！" },
    { grade: 0, genre: "english", type: "select", text: "おおきな みみの 「うさぎ」さんを、えいごでいうと なあに？", choices: ["Rabbit", "Bear", "Monkey", "Lion"], answer: "Rabbit", explanation: "せいかいは「Rabbit（ラビット）」！<br>ぴょんぴょん はねる うさぎさんは <b>Rabbit（ラビット）</b> っていうんだよ！" },
    { grade: 0, genre: "english", type: "select", text: "すうじの 「3（さん）」を、えいごでいうと なあに？", choices: ["Three", "Two", "One", "Four"], answer: "Three", explanation: "せいかいは「Three（スリー）」！<br>ゆびを 3ほん たて <b>Three（スリー）</b> と かぞえてみようね！" },
    { grade: 0, genre: "english", type: "which", text: "えいごで 「ミルク」といえば、しろい ぎゅうにゅう のことである。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>あさごはんで のむ おいしいぎゅうにゅうは <b>Milk（ミルク）</b> というんだよ！" },
    { grade: 0, genre: "english", type: "select", text: "えいごで 「イエロー」といえば、なんの いろかな？", choices: ["きいろ", "みどり", "ピンク", "くろ"], answer: "きいろ", explanation: "せいかいは「きいろ」！<br>あまくて おいしいレモンやバナナは <b>Yellow（イエロー）</b> だね！" },
    { grade: 0, genre: "english", type: "select", text: "みんながだいすきなどうぶつ 「くま」さんを、えいごでいうと なあに？", choices: ["Bear", "Lion", "Tiger", "Fox"], answer: "Bear", explanation: "せいかいは「Bear（ベア）」！<br>もりにおおきなくまさんは <b>Bear（ベア）</b> というんだよ！" }
]);
// 🟩 【どうとく：moral】
targetArray.push(...[
	{ grade: 0, genre: "moral", type: "select", text: "おともだちから おもちゃを かりるときは、なんて いって からのほうが いいかな？", choices: ["かして", "ちょうだい", "だめ", "ありがとう"], answer: "かして", explanation: "せいかいは「かして」！<br>すなおに <b>「かして」</b> といえば、おともだちも えがおで かしてくれるよ！" },
	{ grade: 0, genre: "moral", type: "which", text: "おともだちが びょうきや ケガで おやすみの ときは、げんきに なってね と おもうきもちが たいせつである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>おともだちを <b>おもいやる やさしい きもち</b> は、とっても すてきだね！" },
	{ grade: 0, genre: "moral", type: "select", text: "おうちの ひとに ごはんを つくってもらったり、なにかを してもらったときに いう まほうの ことばは なあに？", choices: ["ありがとう", "ごめんなさい", "こんにちは", "バイバイ"], answer: "ありがとう", explanation: "せいかいは「ありがとう」！<br><b>「ありがとう」</b> と おつたえすると、みんなが とっても しあわせな きもちに なるよ！" },
	{ grade: 0, genre: "moral", type: "select", text: "おともだちの あしを うっかり ふんじゃった！ すぐに いう 大切な（たいせつな） ことばは なあに？", choices: ["ごめんなさい", "ありがとう", "こんにちは", "やったあ"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>わるいことを しちゃったときは、すなすぐに <b>「ごめんなさい」</b> と あやまろうね！" },
	{ grade: 0, genre: "moral", type: "which", text: "おうちを でるとき、おうちの ひとに 「いってきます」と げんきよく あいさつを する。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>げんきな あいさつを すると、おうちの ひとも <b>安心（あんしん）して</b> おくりだせるよ！" },
    { grade: 0, genre: "moral", type: "select", text: "ともだちの おもちゃを つかいたいとき、なんて 言（い）う？", choices: ["かして,という", "だまって とる", "おこる", "なきだす"], answer: "かして,という", explanation: "せいかいは「かして,という」だよ！<br>だまってとると おともだちが かなしむから、<b>「かして」</b>といって やさしくじゅんばんをまとうね。" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを たべるとき、さいしょに いう あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "ありがとう"], answer: "いただきます", explanation: "せいかいは「いただきます」だよ！<br>たべもののいのちや、つくってくれたひとに<span style='color:#ff7675; font-weight:bold;'>「ありがとう」のきもち</span>をこめていうたいせつなあいさつだね。" },
    { grade: 0, genre: "moral", type: "select", text: "おうちの ひとに プレゼントを もらったよ。なんて いう？", choices: ["ありがとう", "ごめんなさい", "こんにちは", "バイバイ"], answer: "ありがとう", explanation: "せいかいは「ありがとう」！<br>うれしいことを してもらったときは <b>「ありがとう」</b> と おつたえしようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちの あしを うっかり ふんじゃった！なんて いう？", choices: ["ごめんなさい", "ありがとう", "やったー", "わはは"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>わるいことを しちゃったときは <b>すぐ「ごめんなさい」</b> が できると かっこいいよ！" },
    { grade: 0, genre: "moral", type: "which", text: "よる おそいじかんに、おうちの なかで ドタバタ はしってもよい。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>よるは みんなくつろぐ じかんだよ。おうちの なかでは <span style='color:#3498db; font-weight:bold;'>しずかに すごそうね</span>。" },
    { grade: 0, genre: "moral", type: "select", text: "あさ おきたとき、おうちの ひとに する あいさつは？", choices: ["おはよう", "おやすみ", "さようなら", "いただきます"], answer: "おはよう", explanation: "せいかいは「おはよう」！<br>あさいちばんの <b>「おはよう！」</b> は とっても きもちがいいね！" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを たべおわったあとに いう あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "おじゃまします"], answer: "ごちそうさま", explanation: "せいかいは「ごごちそうさま」！<br>つくってくれた ひとや、おやさいさんに <b>「ごちそうさま」</b> っていおうね！" },
    { grade: 0, genre: "moral", type: "which", text: "おもちゃで あそんだあとは、そのままにして つぎのあそびをする。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>あそんだ あとは <b>「おかたづけ」</b> を してから つぎの あそびを しようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちが つかっている おもちゃを じぶんも つかいたいとき、どうする？", choices: ["かして、ときく", "むりやりとる", "なげつける", "だまってとる"], answer: "かして、ときく", explanation: "せいかいは「かして、ときく」だよ！<br>やさしく <b>「かーしーてー」</b> って おはなし してみようね！" },
	{ grade: 0, genre: "moral", type: "select", text: "そとから おうちに かえってきたら、さいしょに することは？", choices: ["てあらい・うがい", "テレビをみる", "おやつをたべる", "ねる"], answer: "てあらい・うがい", explanation: "せいかいは「てあらい・うがい」！<br>バイキンを やっつけるために <span style='color:#2ecc71; font-weight:bold;'>ガラガラ・ブクブク</span> しようね！" },
    { grade: 0, genre: "moral", type: "which", text: "どうろを わたるときは、みぎ と ひだり を しっかり みてから わたる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>くるまが こないか <b>みぎ・ひだり・みぎ</b> を しっかり みて、てをあげて わたろうね！" },
    { grade: 0, genre: "moral", type: "select", text: "ろうかや おおへやの なかは、どうやって いどうする？", choices: ["あるく", "はしる", "すべりだいする", "ジャンプする"], answer: "あるく", explanation: "せいかいは「あるく」！<br>おうちの なかで はしると ごっつんこして <b>あぶないから、あるこうね</b>！" },
    { grade: 0, genre: "moral", type: "which", text: "おともだちが ころんで ないていたら、わらって いじめる。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>おともだちが いたいときは <b>「だいじょうぶ？」</b> って たすけてあげようね。" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちの おうちに あそびに いったとき、おへやに はいるまえに いう あいさつは？", choices: ["おじゃまします", "ありがとう", "ごめんなさい", "バイバイ"], answer: "おじゃまします", explanation: "せいかいは「おじゃまします」！<br>よそのおうちにはいるときは <b>「おじゃまします」</b> と げんきにいおうね！" },
    { grade: 0, genre: "moral", type: "select", text: "みんなで つかう おもちゃは、どうやって つかうと いいかな？", choices: ["なかよくつかう", "ひとりでどくせんする", "なげつける", "こわす"], answer: "なかよくつかう", explanation: "せいかいは「なかよくつかう」！<br>みんなで <b>じゅんばんに こうたいしながら</b> なかよくあそぼうね！" },
	{ grade: 0, genre: "moral", type: "select", text: "あそんだ あとの おもちゃは、どうするのが ただしいかな？", choices: ["きちんと おかたづけ する", "そのままにして ねちゃう", "おにわに ぜんぶ すてる", "こわして あそぶ"], answer: "きちんと おかたづけ する", explanation: "せいかいは「きちんと おかたづけ する」！<br>つぎに あそぶ ときに こまらないように、ちゃんと もとの ばしょに もどそうね！" },
	{ grade: 0, genre: "moral", type: "which", text: "どうぶつむらの いきもの（むしや おはな）は、むやみに いじめて いのちを たいせつに しなくても よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>ちいさな むしも おはなも、みんな いっしょうけんめい いきている たいせつな いのち だよ！" },
	{ grade: 0, genre: "moral", type: "which", text: "こうえんの ブランコは、じぶんが あきるまで ひとりじめ して あそんで よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>みんなの ブランコだから、おともだちが まっていたら <b>じゅんばんこ</b> で かわろうね！" },
	{ grade: 0, genre: "moral", type: "select", text: "がっこうや ようちえんで、あさ せんせいや おともだちに あった ときの あいさつは なあに？", choices: ["おはようございます", "さようなら", "いただきます", "おやすみなさい"], answer: "おはようございます", explanation: "せいかいは「おはようございます」！<br>あさ いちばんに 「おはよう！」 と げんきに いうと、1にちが たのしく はじまるよ！" },
	{ grade: 0, genre: "moral", type: "which", text: "ごはんを たべるとき、きらいな おやさいが あっても、ひとくちは がんばって たべてみる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>からだを おおきく げんきに するために、つくってくれた ひとのことも おもって チャレンジしてみよう！" }
]);
    
// 🟥 【その他：etc】
targetArray.push(...[
	{ grade: 0, genre: "etc", type: "select", text: "あさがおの はなを さかせるために、まいにち あげるものは なあに？", choices: ["みず", "おかし", "おもちゃ", "ジュース"], answer: "みず", explanation: "せいかいは「みず」！<br>あさがおも のどが かわくから、まいにち <b>みず</b>を あげようね！" },
	{ grade: 0, genre: "etc", type: "which", text: "「カスタネット」を たたたきとき、あかい ほうが うえに なるように もつ。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あかい ほうが <b>うえ</b>に なるように もつよ！" },
	{ grade: 0, genre: "etc", type: "which", text: "「カスタネット」を たたたきとき、あおい ほうが うえに なるように もつ。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>あおい ほうが <b>した</b>に なるように もつよ！" },
	{ grade: 0, genre: "etc", type: "select", text: "おうちを でるとき、おうちの ひとに いう あいさつは なあに？", choices: ["いってきます", "ただいま", "ありがとう", "おやすみなさい"], answer: "いってきます", explanation: "せいかいは「いってきます」！<br>げんきよく <b>「いってきます！」</b>と いってから おでかけ しようね！" },
	{ grade: 0, genre: "etc", type: "select", text: "こうえんに ある、おしりを つけて まえと うしろに びゅーんと ゆらして あそぶ ゆうぐは なあに？", choices: ["ブランコ", "すべりだい", "てつぼう", "さくひん"], answer: "ブランコ", explanation: "せいかいは「ブランコ」！<br>しっかり <b>くさり</b>を にぎって、たのしく あそぼうね！" },
	{ grade: 0, genre: "etc", type: "which", text: "あおしんごうの ときは、みちを わたっても よい。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あおに なっても、みぎと ひだりを <b>よく みてから</b> わたろうね！" },
	{ grade: 0, genre: "etc", type: "select", text: "がっこうに いくとき、きょうかしょや ノートを いれる せなかに せおう おおきな かばんは なあに？", choices: ["ランドセル", "ポシェット", "ふくろ", "むしカゴ"], answer: "ランドセル", explanation: "せいかいは「ランドセル」！<br>まいにち たくさんの <b>べんきょうどうぐ</b>を はこんでくれるよ！" },
	{ grade: 0, genre: "etc", type: "which", text: "はさみを おともだちに かす ときは、はの ほうを じぶんが にぎって わたす。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あぶなくないように、<b>もちて</b>を おともだちに むけて わたそうね！" },
	{ grade: 0, genre: "etc", type: "which", text: "ごはんを たべた あと、むしばに ならないように はを みがく。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>むしばに ならないように、まいにち <b>はぶらし</b>で しっかり みがこうね！" },
	{ grade: 0, genre: "etc", type: "select", text: "うんどうかいで、あかい ボールを おおきな カゴの なかに たくさん いれる きょうぎは なあに？", choices: ["たまいれ", "かけっこ", "つなひき", "おんど"], answer: "たまいれ", explanation: "せいかいは「たまいれ」！<br>みんなで ちからを あわせて <b>カゴを めがけて</b> なげるのが たのしいね！" },
	{ grade: 0, genre: "etc", type: "which", text: "たいじゅうを はかる ときは、どたどた はしりまわりながら はかる。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>ただしく はかるために、たいじゅうけいの うえでは <b>しずかに ぴたっと とまる</b> のが せいかいだよ！" }
]);

// 🟥 【論理的思考力：logical】
targetArray.push(...[
	{ grade: 0, genre: "logical", type: "which", text: "くまくんは うさぎちゃんより おおきいです。うさぎちゃんは ねこちゃんより おおきいです。いちばん おおきいのは「くまくん」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>じゅんばんに ならべると、<b>くま ＞ うさぎ ＞ ねこ</b> に なるから、くまくんが いちばん おおきいね！" },
	{ grade: 0, genre: "logical", type: "select", text: "あか、あお、きいろの ぼうしが あります。たろうくんは あかでは ありません。じろうくんは あおです。さぶろうくんの ぼうしは なにいろかな？", choices: ["あか", "あお", "きいろ"], answer: "あか", explanation: "せいかいは「あか」！<br>じろうくんが「あお」だから、のこりは あかと きいろ。たろうくんは「あかではない」ので きいろ、だから さぶろうくんが <b>「あか」</b>になるよ！" },
	{ grade: 0, genre: "logical", type: "which", text: "あか、あお、きいろの くるまが ならんでいます。あかの くるまは、あおの くるまの まえに あります。きいろの くるまは いちばん うしろです。いちばん まえに あるのは「あかの くるま」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>まえから <b>あか ➔ あお ➔ きいろ</b> の じゅんばんに流通（りゅうつう）するから、あかの くるまが いちばん まえだね！" },
	{ grade: 0, genre: "logical", type: "which", text: "いぬくん、さるくん、きつねくんが かけっこを しました。いぬくんは さるくんより はやいです。きつねくんは いちばん おそいです。いちばん はやいのは「いぬくん」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>はやい じゅまんばは <b>いぬ ➔ さる ➔ きつね</b> に なるから、いぬくんが いちばん はやいね！" },
	{ grade: 0, genre: "logical", type: "select", text: "あか、あお、みどりの おはじきが あります。あかの おはじきは みどりの となりです。あおの おはじきは いちばん ひだりです。みどりが いちばん みぎなら、まんなかは なにいろかな？", choices: ["あか", "あお", "みどり"], answer: "あか", explanation: "せいかいは「あか」！<br>ひだりから <b>あお ➔ あか ➔ みどり</b> の じゅんばんに なるから、まんなかは <b>あか</b> だね！" },
	{ grade: 0, genre: "logical", type: "which", text: "りんごの ほうが バナナより おおいです。バナナの ほうが みかんより おおいです。いちばん すくないのは「りんご」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ（false）」！<br>おおい じゅんばんに ならべると <b>りんご ➔ バナナ ➔ みかん</b> だから、いちばん すくないのは みかんだよ！" },
	{ grade: 0, genre: "logical", type: "which", text: "たろうくんは じろうくんより せが たかいです。じろうくんは さぶろうくんより せが たかいです。いちばん せが たかいのは「たろうくん」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>たかい じゅんばんに ならべると <b>たろう ＞ じろう ＞ さぶろう</b> だから、たろうくんが いちばん たかいね！" },
	{ grade: 0, genre: "logical", type: "select", text: "しろ、くろ、みどりの ボールが あります。Aくんは しろを もっています。Bくんは くろでは ありません。Cくんは なにいろの ボールを もっているかな？", choices: ["みどり", "しろ", "くろ"], answer: "くろ", explanation: "せいかいは「くろ」！<br>Aくんが「しろ」だから、のこりは くろと みどり。Bくんは「くろではない」ので みどり、だから Cくんが <b>「くろ」</b>を もっているよ！" },
	{ grade: 0, genre: "logical", type: "select", text: "どうぶつむらの もちつき たいかいです。うさぎ、くま、さるが ならんでいます。くまは うさぎの すぐうしろです。さるは いちばん まえです。まんなかに いるのは どの どうぶつかな？", choices: ["うさぎ", "くま", "さる"], answer: "うさぎ", explanation: "せいかいは「うさぎ」！<br>いちばん まえが「さる」で、くまが「うさぎの すぐうしろ」だから、<b>さる ➔ うさぎ ➔ くま</b> の じゅんばんになって、まんなかは <b>うさぎ</b> だよ！" },
	{ grade: 0, genre: "logical", type: "which", text: "みかん、リンゴ、バナナが あります。みかんは リンゴより すくないです。バナナが いちばん おおいです。いちばん すくないのは「みかん」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>おおい じゅんばんに ならべると、<b>バナナ ＞ リンゴ ＞ みかん</b> に なるから、みかんが いちばん すくないね！" },
	{ grade: 0, genre: "logical", type: "select", text: "どうぶつたちが いえの まえに ならんでいます。いぬの いえは ねこの いえの となりです。くまの いえは いちばん みぎです。ねこの いえが いちばん ひだりなら、まんなかは だれの いえかな？", choices: ["いぬ", "ねこ", "くま"], answer: "いぬ", explanation: "せいかいは「いぬ」！<br>ひだりから <b>ねこ ➔ いぬ ➔ くま</b> の じゅんばんに なるから、まんなかは <b>いぬ</b> の いえだね！" },
]);

// 🟥 【発想力：creative】
targetArray.push(...[
	{ grade: 0, genre: "creative", type: "select", text: "「とり」と「けもの」を がったいさせたら、どんな どうぶつに なるかな？ むかしの おはなしに でてくるよ！", choices: ["グリフィン（とりとライオン）", "きりん", "くじら", "カラス"], answer: "グリフィン（とりとライオン）", explanation: "せいかいは「グリフィン」！<br>ちがう いきものの <b>かっこいい ところを むすびつけた</b>、まほうの どうぶつなんだ！" },
	{ grade: 0, genre: "creative", type: "which", text: "まる（○）と さんかく（△）を くみあわせると、「おうち」の かたちを つくることが できる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>さんかくを <b>やね</b>、まるを <b>まど</b>に すると、かわいい おうちが ひらめくね！" },
	{ grade: 0, genre: "creative", type: "select", text: "おそらの「くも」を みていたら、ある どうぶつの かたちに みえてきました。おみみが ながくて、ぴょんぴょん はねる どうぶつは なあに？", choices: ["うさぎ", "ぞう", "へび", "ライオン"], answer: "うさぎ", explanation: "せいかいは「うさぎ」！<br>くもの かたちを <b>じぶんの しっている どうぶつ</b>に みたてる、たのしい ひらめきだね！" },
	{ grade: 0, genre: "creative", type: "which", text: "「ドーナツ」の かたちと、じてんしゃの「タイヤ」の かたちは、まんなかに あなが あいているところが にている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>ちがう ものだけど、<b>「まんなかに あなが ある まる」</b> という かたちが そっくりだね！" },
	{ grade: 0, genre: "creative", type: "select", text: "どうぶつむらの えんぴつです。まあるい えんぴつは つくえから ころころ おちちゃいます。おちないように するには、どんな かたちに すれば いいかな？", choices: ["しかくい えんぴつ", "ほしがたの えんぴつ", "ながーい えんぴつ", "おもい えんぴつ"], answer: "しかくい えんぴつ", explanation: "せいかいは「しかくい えんぴつ」！<br><b>しかくや さんかく</b>の かたちに すると、つくえの うえで ぴったり とまるんだよ！" },
	{ grade: 0, genre: "creative", type: "which", text: "「めがね」の かたちと、すうじの「8」の かたちは、まるが 2つ ならんでいるところが にている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>よこに むけると <b>めがね</b>、たてに むけると <b>すうじの 8</b> に みえるね！" },
	{ grade: 0, genre: "creative", type: "select", text: "おうちの なかで「かさ」を さかさまに して おくと、どんな つかいかたが ひらめくかな？", choices: ["ぬいぐるみをいれるカゴ", "ごはんをたべるおさら", "お水（みず）をのむコップ", "お絵（え）かきをするノート"], answer: "ぬいぐるみをいれるカゴ", explanation: "せいかいは「ぬいぐるみを入れるカゴ」！<br>ふつうの つかいかたを かえると、<b>ものを いれる べんりな いれもの</b>に へんしん するよ！" },
	{ grade: 0, genre: "creative", type: "which", text: "みかんの カタチと、ボールの カタチは、どちらも「まあるい」ところが むすびついている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>どちらも <b>ころころ ころがる まあるい カタチ</b> だね！" },
	{ grade: 0, genre: "creative", type: "select", text: "どうぶつむらの チョコレートです。おててで もつと、どろどろに とけちゃいます。とけないように まわりに つけるのは どれかな？", choices: ["かたい おさとうのカラ", "みずのはっぱ", "やわらかい クリーム", "つめたい こおり"], answer: "かたい おさとうのカラ", explanation: "せいかいは「かたい おさとうのカラ」！<br>コーティングという しくみを つかうと、<b>おててが よごれない チョコレート</b>が ひらめくんだよ！" },
	{ grade: 0, genre: "creative", type: "which", text: "「すいか」の もようと、「トラ」の もようは、くろい しましまが あるところが にている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>どちらも かっこいい <b>くろい しましま</b>の もようを もっているね！" },
	{ grade: 0, genre: "creative", type: "which", text: "「めがね」の かたちと、すうじの「8」の かたちは、まるが 2つ ならんでいるところが にている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる（true）」！<br>よこに むけると <b>めがね</b>、たてに むけると <b>すうじの 8</b> に みえるね！" }
]);

// 🟥 【水平思考力：tricky】
targetArray.push(...[
	{ grade: 0, genre: "tricky", type: "which", text: "カマキリと、ハサミと、きりかぶ。このなかで「木（き）」から できているのは ハサミである。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>なまえに「き」が つく「きりかぶ」が 木（き）から できているよ！ハサミは <b>てつ</b> だね！" },
	{ grade: 0, genre: "tricky", type: "select", text: "トラックと パトカーと じてんしゃが はしっています。きゅうに とまることが できるのは どれかな？", choices: ["どれも きゅうには とまれない", "トラック", "パトカー", "じてんしゃ"], answer: "どれも きゅうには とまれない", explanation: "せいかいは「どれも きゅうには とまれない」！<br>のりものは <b>きゅうには とまれない</b> という ひっかけ クイズだったよ！あぶないから きをつけてね！" },
	{ grade: 0, genre: "tricky", type: "select", text: "コップの なかに おみずが いっぱい はいっています。これを ひっくりかえしたら、おみずは どうなるかな？", choices: ["こぼれて からっぽになる", "こおって こおりになる", "あかくなる", "そらに とんでいく"], answer: "こぼれて からっぽになる", explanation: "せいかいは「こぼれて からっぽになる」！<br>ひっくりかえしたら <b>もちろん こぼれちゃう</b> よね！" },
	{ grade: 0, genre: "tricky", type: "which", text: "リンゴ、バナナ、パイナップル。このなかで きに なっているのは バナナである。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>バナナは きではなく、とても おおきな <b>くさ</b> に なっているんだよ！" },
	{ grade: 0, genre: "tricky", type: "select", text: "おそらの うえに、まあるくて あかるい たいようが あります。よるに なると、たいようは どこに いくかな？", choices: ["ちきゅうの はんたいがわに まわる", "うみの なかに しずんで きえる", "うちゅうの ごみばこに すてられる", "おつきさまに へんしんする"], answer: "ちきゅうの はんたいがわに まわる", explanation: "せいかいは「ちきゅうの はんたいがわに まわる」！<br>たいようが きえたのではなく、<b>ちきゅうが まわって はんたいがわに いっただけ</b> なんだよ！" },
	{ grade: 0, genre: "tricky", type: "which", text: "おうちの なかで、ねこちゃんが 3びき いました。1びきが へやの すみに かくれました。へやの なかに いる ねこちゃんは 2びきである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>かくれたけれど、<b>へやの なかから はいでていない</b> から、2びきの ままだよ！" },
	{ grade: 0, genre: "tricky", type: "select", text: "コップが 3つ あります。1つだけ おみずが はいっていません。おみずが はいっている コップを ひっくりかえしたら、おみずは どうなるかな？", choices: ["こぼれる", "こおりになる", "なにも おきない", "おゆになる"], answer: "こぼれる", explanation: "せいかいは「こぼれる」！<br>おみずが はいっている コップを ひっくりかえしたのだから、<b>もちろん こぼれちゃう</b> よ！" },
	{ grade: 0, genre: "tricky", type: "which", text: "おにぎりを 3こ つくりました。ぜんぶ たべたら、のこりは 0こに なる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ぜんぶ たべたのだから、<b>おさらの うえには なにも のこらない</b> よね！" },
	{ grade: 0, genre: "tricky", type: "select", text: "きいろい おさらの うえに、きいろい リンゴが のっています。みどりの おさらの うえに、みどりの メロンが のっています。では、きいろい おさらの うえには なにが のっているかな？", choices: ["のっているものは わからない", "バナナ", "レモン", "キウイ"], answer: "のっているものは わからない", explanation: "せいかいは「のっているものは わからない」！<br>おさらの いろと フルーツの いろが おなじとは かぎらないから、<b>わからない</b> が せいかいだよ！" },
	{ grade: 0, genre: "tricky", type: "select", text: "きいろい へやの なかに、きいろい ひよこが 3びき います。でんきを パチッと けして まっくらに なりました。ひよこは なんびきに なったかな？", choices: ["3びきの まま かわらない", "0びきになる", "まっくろになる", "みえなくなる"], answer: "3びきの まま かわらない", explanation: "せいかいは「3びきの まま かわらない」！<br>くらくて <b>めには みえなくなる</b>けれど、ひよこは ちゃんと <b>3びき いる</b> よね！" },
	{ grade: 0, genre: "tricky", type: "which", text: "ウサギと カメが かけっこを しました。ウサギが とちゅうで いねむりを しました。かったのは ウサギである。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>おはなしの とおり、あきらめずに ゆっくり あるいた <b>カメ</b> が かったね！" },
	{ grade: 0, genre: "tricky", type: "which", text: "おふろの なかに、おもちゃの アヒルを 10びき いれました。おゆが あつかったので、3びき にげて いきました。おふろの なかには 7びき のこっている。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>おもちゃの アヒルだから、おゆが あつくても <b>にげない</b> よ！ 10びきの ままだね！" }
]);

}
