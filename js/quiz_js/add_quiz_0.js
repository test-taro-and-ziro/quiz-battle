// ==========================================
// 👶 幼児向け（grade: 0）クイズデータ
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions0(targetArray) {

// 🟥 【こくご：japanese】
targetArray.push(...[
    { grade: 0, genre: "japanese", type: "select", text: "「ねこ」の さいしょの もじは なあに？", choices: ["ね", "こ", "い", "う"], answer: "ね", explanation: "せいかいは「ね」！<br><b>ね</b>・こ のさいしょのもじは<b>「ね」</b>だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "「ぞう」の おおきい はなは どこにある？", choices: ["かお", "おなか", "あし", "おしり"], answer: "かお", explanation: "せいかいは「かお」！<br>おはなが ながーい ぞうさんは、<b>かお</b>に はながあるよ！" },
    { grade: 0, genre: "japanese", type: "which", text: "「いぬ」を はんたいから よむと 「ぬい」になる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>うしろから よむと <b>ぬ・い</b> になるね！おもしろいね！" },
    { grade: 0, genre: "japanese", type: "select", text: "そらを とぶ とりは どれかな？", choices: ["すずめ", "らいおん", "くま", "きりん"], answer: "すずめ", explanation: "せいかいは「すずめ」！<br>すずめさんは <b>つばさ</b>を パタパタさせて そらを とぶよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「りんご」の いろは なにいろかな？", choices: ["あか", "あお", "きいろ", "くろ"], answer: "あか", explanation: "せいかいは「あか」！<br>あまくて おいしい りんごは <span style='color:#e74c3c; font-weight:bold;'>あかいいろ</span> を しているよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「うみ」に すんでいる いきものは どれ？", choices: ["たこ", "かぶとむし", "うさぎ", "ぽにー"], answer: "たこ", explanation: "せいかいは「たこ」！<br>たこさんは <b>うみの なか</b>で あしを くねくね させて およぐよ！" },
    { grade: 0, genre: "japanese", type: "which", text: "「あり」の もじの かずは 3つである。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>あ・り で <b>2つの もじ</b> だから、×（ばつ）だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "「あ」の つぎに くる もじは なあに？", choices: ["い", "う", "え", "お"], answer: "い", explanation: "せいかいは「い」！<br>あいうえお の じゅんばんは、<b>「あ」のつぎは「い」</b>だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "ワンワン と なく どうぶつは なあに？", choices: ["いぬ", "ねこ", "ねずみ", "うし"], answer: "いぬ", explanation: "せいかいは「いぬ」！<br>かわいい いぬさんは <b>ワンワン！</b> って 元気に なくよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「ねこ」の さいしょの もじは なあに？", choices: ["ね", "こ", "い", "う"], answer: "ね", explanation: "せいかいは「ね」！<br><b>ね</b>・こ のさいしょのもじは<b>「ね」</b>だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "「ぞう」の おおきい はなは どこにある？", choices: ["かお", "おなか", "あし", "おしり"], answer: "かお", explanation: "せいかいは「かお」！<br>おはなが ながーい ぞうさんは、<b>かお</b>に はながあるよ！" },
    { grade: 0, genre: "japanese", type: "which", text: "「いぬ」を はんたいから よむと 「ぬい」になる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>うしろから よむと <b>ぬ・い</b> になるね！おもしろいね！" },
    { grade: 0, genre: "japanese", type: "select", text: "そらを とぶ とりは どれかな？", choices: ["すずめ", "らいおん", "くま", "きりん"], answer: "すずめ", explanation: "せいかいは「すずめ」！<br>すずめさんは <b>つばさ</b>を パタパタさせて そらを とぶよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「りんご」の いろは なにいろかな？", choices: ["あか", "あお", "きいろ", "くろ"], answer: "あか", explanation: "せいかいは「あか」！<br>あまくて おいしい りんごは <span style='color:#e74c3c; font-weight:bold;'>あかいいろ</span> を しているよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「うみ」に すんでいる いきものは どれ？", choices: ["たこ", "かぶとむし", "うさぎ", "ぽにー"], answer: "たこ", explanation: "せいかいは「たこ」！<br>たこさんは <b>うみの なか</b>で あしを くねくね させて およぐよ！" },
    { grade: 0, genre: "japanese", type: "which", text: "「あり」の もじの かずは 3つである。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>あ・り で <b>2つの もじ</b> だから、×（ばつ）だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "「あ」の つぎに くる もじは なあに？", choices: ["い", "う", "え", "お"], answer: "い", explanation: "せいかいは「い」！<br>あいうえお の じゅんばんは、<b>「あ」のつぎは「い」</b>だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "ワンワン と なく どうぶつは なあに？", choices: ["いぬ", "ねこ", "ねずみ", "うし"], answer: "いぬ", explanation: "せいかいは「いぬ」！<br>かわいい いぬさんは <b>ワンワン！</b> って 元気に なくよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "おてがみを かくときに つかうものは どれかな？", choices: ["えんぴつ", "はさみ", "すぷーん", "とけい"], answer: "えんぴつ", explanation: "せいかいは「えんぴつ」！<br><b>えんぴつ</b>を使って、じを かきかき しようね！" },
    { grade: 0, genre: "japanese", type: "which", text: "「くり」と「すいか」は、どちらも さいしょの文字が「く」である。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>すいかの さいしょのもじは <b>「す」</b> だからちがうね！" },
    { grade: 0, genre: "japanese", type: "select", text: "あめが ふったときに さすものは なあに？", choices: ["かさ", "くつ", "ぼうし", "かばん"], answer: "かさ", explanation: "せいかいは「かさ」！<br>雨（あめ）の日は <b>かさ</b>をさして おでかけしよう！" },
    { grade: 0, genre: "japanese", type: "select", text: "「めがね」を かける場所（ばしょ）は どこかな？", choices: ["め", "くち", "みみ", "あし"], answer: "め", explanation: "せいかいは「め」！<br>おめめの まえに <b>めがね</b>を かけて よく見えるようにするよ！" }
]);
// 🟦 【さんすう：math】
targetArray.push(...[
    { grade: 0, genre: "math", type: "select", text: "りんごが 3こ あります。2こ もらうと、ぜんぶで なんこ？", choices: ["5こ", "4こ", "1こ", "6こ"], answer: "5こ", explanation: "せいかいは「5こ」だよ！<br>あわせるからたしざんだね。<b>3 ＋ 2 ＝ 5</b> になるよ！" },
    { grade: 0, genre: "math", type: "select", text: "「8」の つぎに おおきい かずは なに？", choices: ["9", "5", "11", "6"], answer: "9", explanation: "せいかいは「9」だよ！<br>1,2,3,4,5,6,7,8……とかぞえていくと、8のつぎは<b>「9」</b>だね！" },
    { grade: 0, genre: "math", type: "select", text: "くるまの タイヤは ぜんぶで なんこ あるかな？", choices: ["2こ", "3こ", "4こ", "5こ"], answer: "4こ", explanation: "せいかいは「4こ」！<br>ブーブー はしる くるまには <b>4つの タイヤ</b>が ついているよ！" },
    { grade: 0, genre: "math", type: "select", text: "ちょうちょが 1ぴき います。もう 1ぴき くると、なんびき？", choices: ["2ひき", "3ひき", "4ひき", "5ひき"], answer: "2ひき", explanation: "せいかいは「2ひき」！<br>1つに 1つを あわせると <b>1 + 1 = 2</b> に なるね！" },
    { grade: 0, genre: "math", type: "which", text: "「おつきさま」の かたちは しかくい。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>まんまる おつきさまは <span style='color:#f1c40f; font-weight:bold;'>まるい かたち</span> を しているよ！" },
    { grade: 0, genre: "math", type: "select", text: "あめが 4こ あります。1こ たべると、のこりは なんこ？", choices: ["2こ", "3こ", "4こ", "1こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>4つの うち 1つを ひくと <b>4 - 1 = 3</b> に なるね！" },
    { grade: 0, genre: "math", type: "select", text: "「10」と「2」は、どちらが 大きい（おおい）かな？", choices: ["10のほうが大きい", "2のほうが大きい", "おなじ大きさ", "くらべられない"], answer: "10のほうが大きい", explanation: "せいかいは「10のほうが大きい」！<br>10こ のほうが 2こ よりも <b>たくさん あって 大きい</b> ね！" },
    { grade: 0, genre: "math", type: "select", text: "きりんさんの くびと、ぶたさんの くび、ながいのは どっち？", choices: ["きりんさん", "ぶたさん", "おなじながさ", "わからない"], answer: "きりんさん", explanation: "せいかいは「きりんさん」！<br>きりんさんのくびは <b>びよーんと ながくて</b> おおきいね！" },
    { grade: 0, genre: "math", type: "which", text: "て の ゆびは、ぜんぶで 10ほん ある。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>みぎて（5ほん）と ひだりて（5ほん）を あわせると <b>5 + 5 = 10ほん</b> だよ！" },
    { grade: 0, genre: "math", type: "select", text: "「3」の つぎに 大きい（おおい） かずは なあに？", choices: ["4", "2", "5", "1"], answer: "4", explanation: "せいかいは「4」！<br>1、2、3、の つぎは <b>「4」</b> に なるね！" },
    { grade: 0, genre: "math", type: "select", text: "さんかく（▲）の かどの かずは なんこ あるかな？", choices: ["3こ", "4こ", "5こ", "2こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>さんかくの とがっている かどは <b>3つ</b> あるよ！" },
    { grade: 0, genre: "math", type: "select", text: "くるまの タイヤは ぜんぶで なんこ あるかな？", choices: ["2こ", "3こ", "4こ", "5こ"], answer: "4こ", explanation: "せいかいは「4こ」！<br>ブーブー はしる くるまには <b>4つの タイヤ</b>が ついているよ！" },
    { grade: 0, genre: "math", type: "select", text: "ちょうちょが 1ぴき います。もう 1ぴき くると、なんびき？", choices: ["2ひき", "3ひき", "4ひき", "5ひき"], answer: "2ひき", explanation: "せいかいは「2ひき」！<br>1つに 1つを あわせると <b>1 + 1 = 2</b> に なるね！" },
    { grade: 0, genre: "math", type: "which", text: "「おつきさま」の かたちは しかくい。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>まんまる おつきさまは <span style='color:#f1c40f; font-weight:bold;'>まるい かたち</span> を しているよ！" },
    { grade: 0, genre: "math", type: "select", text: "あめが 4こ あります。1こ たべると、のこりは なんこ？", choices: ["2こ", "3こ", "4こ", "1こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>4つの うち 1つを ひくと <b>4 - 1 = 3</b> に なるね！" },
    { grade: 0, genre: "math", type: "select", text: "「10」と「2」は、どちらが 大きい（おおい）かな？", choices: ["10のほうが大きい", "2のほうが大きい", "おなじ大きさ", "くらべられない"], answer: "10のほうが大きい", explanation: "せいかいは「10のほうが大きい」！<br>10こ のほうが 2こ よりも <b>たくさん あって 大きい</b> ね！" },
    { grade: 0, genre: "math", type: "select", text: "きりんさんの くびと、ぶたさんの くび、ながいのは どっち？", choices: ["きりんさん", "ぶたさん", "おなじながさ", "わからない"], answer: "きりんさん", explanation: "せいかいは「きりんさん」！<br>きりんさんの 首（くび）は <b>びよーんと ながくて</b> おおきいね！" },
    { grade: 0, genre: "math", type: "which", text: "て の ゆびは、ぜんぶで 10ほん ある。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>みぎ手（5ほん）と ひだり手（5ほん）を あわせると <b>5 + 5 = 10ほん</b> だよ！" },
    { grade: 0, genre: "math", type: "select", text: "「3」の つぎに 大きい（おおい） かずは なあに？", choices: ["4", "2", "5", "1"], answer: "4", explanation: "せいかいは「4」！<br>1、2、3、の つぎは <b>「4」</b> に なるね！" },
    { grade: 0, genre: "math", type: "select", text: "さんかく（▲）の かどの かずは なんこ あるかな？", choices: ["3こ", "4こ", "5こ", "2こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>さんかくの とがっている かどは <b>3つ</b> あるよ！" },
    { grade: 0, genre: "math", type: "select", text: "サイコロの いちばん おおきい め（かず）は なあに？", choices: ["6", "5", "4", "3"], answer: "6", explanation: "せいかいは「6」！<br>しかくいサイコロには <b>1から6までの かず</b>が かいてあるよ！" },
    { grade: 0, genre: "math", type: "which", text: "2こ のイチゴと、2こ のミカン。あわせると 5こ になる。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>2 と 2 を あわせると <b>2 + 2 = 4こ</b> になるね！" },
    { grade: 0, genre: "math", type: "select", text: "ドーナツが 6こ あって、2こ もらうと ぜんぶで なんこ？", choices: ["8こ", "7こ", "6こ", "9こ"], answer: "8こ", explanation: "せいかいは「8こ」！<br>6こ に 2こ を たしざんすると <b>6 + 2 = 8</b> になるね！" },
    { grade: 0, genre: "math", type: "select", text: "ノートが 3さつ あって、3さつ つかうと のこりは なんさつ？", choices: ["0さつ", "1さつ", "2さつ", "3さつ"], answer: "0さつ", explanation: "せいかいは「0さつ」！<br><b>3つ から 3つ を ひく</b>と、ぜんぶ なくなっちゃうね！" }
]);
// 🟩 【どうとく：moral】
targetArray.push(...[
    { grade: 0, genre: "moral", type: "select", text: "ともだちの おもちゃを つかいたいとき、なんて 言う？", choices: ["かして,という", "だまって とる", "おこる", "なきだす"], answer: "かして,という", explanation: "せいかいは「かして,という」だよ！<br>だまってとるとおともだちがかなしむから、<b>「かして」</b>といってやさしくじゅんばんをまとうね。" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを たべるとき、さいしょに いう あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "ありがとう"], answer: "いただきます", explanation: "せいかいは「いただきます」だよ！<br>たべのものいのちや、つくってくれたひとに<span style='color:#ff7675; font-weight:bold;'>「ありがとう」のきもち</span>をこめていうたいせつなあいさつだね。" },
    { grade: 0, genre: "moral", type: "select", text: "おうちの ひとに プレゼントを もらったよ。なんて いう？", choices: ["ありがとう", "ごめんなさい", "こんにちは", "バイバイ"], answer: "ありがとう", explanation: "せいかいは「ありがとう」！<br>うれしいことを してもらったときは <b>「ありがとう」</b> と おつたえしようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちの あしを うっかり ふんじゃった！なんて いう？", choices: ["ごめんなさい", "ありがとう", "やったー", "わはは"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>わるいことを しちゃったときは <b>すぐ「ごめんなさい」</b> が できると かっこいいよ！" },
    { grade: 0, genre: "moral", type: "which", text: "よる おそいじかんに、おうちの なかで ドタバタ はしってもよい。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>よるは みんなくつろぐ じかんだよ。おうちの なかでは <span style='color:#3498db; font-weight:bold;'>しずかに すごそうね</span>。" },
    { grade: 0, genre: "moral", type: "select", text: "あさ おきたとき、おうちの ひとに する あいさつは？", choices: ["おはよう", "おやすみ", "さようなら", "いただきます"], answer: "おはよう", explanation: "せいかいは「おはよう」！<br>あさいちばんの <b>「おはよう！」</b> は とっても きもちがいいね！" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを たべおわったあとに いう あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "おじゃまします"], answer: "ごちそうさま", explanation: "せいかいは「ごごちそうさま」！<br>つくってくれた ひとや、おやさいさんに <b>「ごちそうさま」</b> っていおうね！" },
    { grade: 0, genre: "moral", type: "which", text: "おもちゃで あそんだあとは、そのままにして つぎのあそびをする。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>あそんだ あとは <b>「おかたづけ」</b> を してから つぎの あそびを しようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちが つかっている おもちゃを じぶんも つかいたいとき、どうする？", choices: ["かして、ときく", "むりやりとる", "なげつける", "だまってとる"], answer: "かして、ときく", explanation: "せいかいは「かして、ときく」だよ！<br>やさしく <b>「かーしーてー」</b> って おはなし してみようね！" },
    { grade: 0, genre: "moral", type: "select", text: "そとから おうちに かえってきた（かえってきた）ら、さいしょに することは？", choices: ["てあらい・うがい", "テレビをみる", "おやつをたべる", "ねる"], answer: "てあらい・うがい", explanation: "せいかいは「てあらい・うがい」！<br>バイキンを やっつけるために <span style='color:#2ecc71; font-weight:bold;'>ガラガラ・ブクブク</span> しようね！" },
    { grade: 0, genre: "moral", type: "which", text: "どうろを わたるときは、みぎ と ひだり を しっかり みてから わたる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>くるまが こないか <b>みぎ・ひだり・みぎ</b> を しっかり みて、てをあげて わたろうね！" },
    { grade: 0, genre: "moral", type: "select", text: "ろうかや おおへやの なかは、どうやって いどうする？", choices: ["あるく", "はしる", "すべりだいする", "ジャンプする"], answer: "あるく", explanation: "せいかいは「あるく」！<br>おうちの なかで はしると ごっつんこして <b>あぶないから、あるこうね</b>！" },
    { grade: 0, genre: "moral", type: "which", text: "おともだちが ころんで ないていたら、わらって いじめる。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>おともだちが いたいときは <b>「だいじょうぶ？」</b> って たすけてあげようね。" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちの おうちに あそびに いったとき、おへやに はいるまえに いう あいさつは？", choices: ["おじゃまします", "ありがとう", "ごめんなさい", "バイバイ"], answer: "おじゃまします", explanation: "せいかいは「おじゃまします」！<br>よそのおうちにはいるときは <b>「おじゃまします」</b> と げんきにいおうね！" },
    { grade: 0, genre: "moral", type: "select", text: "みんなで つかう おもちゃは、どうやって つかうと いいかな？", choices: ["なかよくつかう", "ひとりでどくせんする", "なげつける", "こわす"], answer: "なかよくつかう", explanation: "せいかいは「なかよくつかう」！<br>みんなで <b>じゅんばんに こうたいしながら</b> なかよくあそぼうね！" }
]);
// 🔬 【りか：science】
targetArray.push(...[
    { grade: 0, genre: "science", type: "select", text: "おそらに キラキラ ひかる、よるに みえるものは なあに？", choices: ["ほし", "たいよう", "くも", "にじ"], answer: "ほし", explanation: "せいかいは「ほし」！<br>よるの おそらには <b>キラキラひかる おほしさま</b>が たくさんみえるよ！" },
    { grade: 0, genre: "science", type: "select", text: "はるに さく、ピンクいろの きれいな おはなは なあに？", choices: ["さくら", "ひまわり", "どんぐり", "あさがお"], answer: "さくら", explanation: "せいかいは「さくら」！<br>あったかくなると <b>さくら</b>のはなが さいて、とってもきれいだね！" },
    { grade: 0, genre: "science", type: "which", text: "かえるさんは、みずの なかでも およぐことができる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>かえるさんは <b>みずのなかも、つちの うえも</b> どちらもだいとくいだよ！" },
    { grade: 0, genre: "science", type: "select", text: "あおむしさんが おおきくなると、なんの むしに へんしん するかな？", choices: ["ちょうちょ", "かぶとむし", "ばった", "あり"], answer: "ちょうちょ", explanation: "せいかいは「ちょうちょ」！<br>あおむしさんは <b>きれいな はねの ちょうちょ</b> に へんしんするよ！" },
    { grade: 0, genre: "science", type: "select", text: "ワンワン なく いぬの あしは ぜんぶで なんほん？", choices: ["4ほん", "2ほん", "6ほん", "8ほん"], answer: "4ほん", explanation: "せいかいは「4ほん」！<br>いぬさんや ねこさんの あしは <b>ぜんぶで 4ほん</b> あるよ！" },
    { grade: 0, genre: "science", type: "which", text: "ゆきは、あったかい おへやに おいておくと おみずになる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>つめたいゆきやこおりは、<b>あったかいと とけておみずになる</b>よ！" },
    { grade: 0, genre: "science", type: "select", text: "いけ の なかで スイスイ およぐ、あかい おさかなは なあに？", choices: ["きんぎょ", "めだか", "くじら", "いるか"], answer: "きんぎょ", explanation: "せいかいは「きんぎょ」！<br>あかくて ひらひら およぐ かわいいおさかなは <b>きんぎょ</b> だね！" },
    { grade: 0, genre: "science", type: "select", text: "あきに きから ぽとんと おちてくる、ぼうしを かぶったきのみは？", choices: ["どんぐり", "まつぼっくり", "りんご", "くり"], answer: "どんぐり", explanation: "せいかいは「どんぐり」！<br>もりのどうぶつたちもだいすきな <b>どんぐり</b> はあきにみつかるよ！" },
    { grade: 0, genre: "science", type: "which", text: "ありさんは、じぶんよりも おもたいものを はこぶことができる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>ありさんは からだはちいさいけれど、<b>とってもちからもち</b>なんだよ！" },
    { grade: 0, genre: "science", type: "select", text: "なつの あさ、まぶしく ひかる おそらの おおきなまるいものは？", choices: ["たいよう", "おつきさま", "にじ", "くも"], answer: "たいよう", explanation: "せいかいは「たいよう」！<br>おひるをあかるく、<b>あったかくしてくれるのは たいよう</b>だね！" },
    { grade: 0, genre: "science", type: "select", text: "あさがおの はなが さくのは、1にちのうちの いつかな？", choices: ["あさ", "よる", "おひる", "ゆうがた"], answer: "あさ", explanation: "せいかいは「あさ」！<br><b>あさがお</b> は、そのなまえのどおり <b>あさはやく</b> にきれいなはなをさかせるよ！" },
    { grade: 0, genre: "science", type: "which", text: "すいか は、きの うえに みのる。○か×か？", choices: [true, false], answer: false, explanation: "せいかいは ×（ばつ）！<br>すいか はきのうえではなく、<b>つちの うえを はうツル</b>になるんだよ！" },
    { grade: 0, genre: "science", type: "select", text: "とってもくびがながい、きいろとちゃいろのもようのどうぶつは？", choices: ["きりん", "ぞう", "らいおん", "しまうま"], answer: "きりん", explanation: "せいかいは「きりん」！<br>たかいきのうえのはっぱもとどく、<b>くびのながいどうぶつは きりん</b>さんだね！" },
    { grade: 0, genre: "science", type: "select", text: "うみにすんでいる、おでこから ピューと みずをふく おおきないきものは？", choices: ["くじら", "さめ", "たこ", "かに"], answer: "くじら", explanation: "せいかいは「くじら」！<br>うみのなかでいちばん おおきな <b>くじら</b>さんは、せなかからしおをふくよ！" }
]);
// 🗺️ 【しゃかい：social】
targetArray.push(...[
    { grade: 0, genre: "social", type: "select", text: "まちの あんぜんを まもってくれる、あかい くるまは なあに？", choices: ["しょうぼうしゃ", "ぱとかー", "きゅうきゅうしゃ", "たくしー"], answer: "しょうぼうしゃ", explanation: "せいかいは「しょうぼうしゃ」！<br>かじ のときに <span style='color:#e74c3c; font-weight:bold;'>あかいしょうぼうしゃ</span> が ビュービューはしってひをけすよ！" },
    { grade: 0, genre: "social", type: "select", text: "おてがみや ハガキを おうちに とどけてくれるのは だれかな？", choices: ["ゆうびんやさん", "はいしゃさん", "おまわりさん", "やきゅうしゅ"], answer: "ゆうびんやさん", explanation: "せいかいは「ゆうびんやさん」！<br>カバンに たくさんのおてがみをいれて、<b>おうちにとどけてくれる</b>よ！" },
    { grade: 0, genre: "social", type: "which", text: "しんごうが「あお）」のときは、すすんでもよい。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>あおはすすむ、<b>あかはとまる</b>。しっかりまもって わたろうね！" },
    { grade: 0, genre: "social", type: "select", text: "びょうきや ケガをしたひとを、いそいで びょういんへはこぶ しろいくるまは？", choices: ["きゅうきゅうしゃ", "ぱとかー", "とらっく", "ばす"], answer: "きゅうきゅうしゃ", explanation: "せいかいは「きゅうきゅうしゃ」！<br>ピーポーピーポーと <b>きゅうきゅうしゃ</b> がいそいではこんでくれるよ！" },
    { grade: 0, genre: "social", type: "select", text: "まちの パトロールをして、みんなをたすけてくれる けいさつのくるまは？", choices: ["ぱとかー", "しょうぼうしゃ", "ごみしゅうしゅうしゃ", "ぶるどーざー"], answer: "ぱとかー", explanation: "せいかいは「ぱとかー」！<br>しろとくろの <b>ぱとかー（パトカー）</b> にのって、おまわりさんがまもってくれるよ！" },
    { grade: 0, genre: "social", type: "which", text: "おかいものをするときは、おかねをはらってから しなものをもらう。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>おみせのルールだね。<b>おかねをちゃんとはらってから</b>おかいものしようね！" },
    { grade: 0, genre: "social", type: "select", text: "おいしい おこめや おやさいを、はたけで つくってくれるのはだれ？", choices: ["のうかさん", "ぎょにん", "うんてんしゅ", "うちゅうひこうし"], answer: "のうかさん", explanation: "せいかいは「のうかさん」！<br>まいにちおいしいごはんがたべられるのは、<b>のうかさん</b>のおかげだね！" },
    { grade: 0, genre: "social", type: "select", text: "たくさんのひとを のせて、せんろのうえを ガタンゴトンはしる のりものは？", choices: ["でんしゃ", "ひこうき", "ふね", "じてんしゃ"], answer: "でんしゃ", explanation: "せいかいは「でんしゃ」！<br>えきからえきへ、<b>たくさんのひとをはこぶのは でんしゃ</b>だね！" },
    { grade: 0, genre: "social", type: "which", text: "バスや でんしゃに のるときは、ならんでいるじゅんばんを まもってのる。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>みんながつかうのりものだね。<b>じゅんばんをしっかりまもって</b>ならぼうね！" },
    { grade: 0, genre: "social", type: "select", text: "あたまに しろいぼうしをかぶって、おいしい ケーキをつくってくれる人は？", choices: ["ぱてぃしえ", "かんごし", "しょうぼうし", "せんせい"], answer: "ぱてぃしえ", explanation: "せいかいは「ぱてぃしえ」！<br>あまくておいしい <b>おかしやケーキのしょくにんさん</b>だよ！" },
    { grade: 0, genre: "social", type: "select", text: "おうちの まえにおいておいた ゴミを、おおきなくるまで あつめにきてくれる人は？", choices: ["ごみしゅうしゅうのひと", "たくはいびんのひと", "だいくさん", "おまわりさん"], answer: "ごみしゅうしゅうの人", explanation: "せいかいは「ごみしゅうしゅうの人」！<br>まちをいつもきれいにするために、<b>ごみしゅうしゅうしゃ</b>であつめてくれるよ！" },
    { grade: 0, genre: "social", type: "which", text: "じぶんの おうちがある くにの なまえは「にほん」である。○か×か？", choices: [true, false], answer: true, explanation: "せいかいは ○（まる）！<br>わたしたちがくらしているこのくには <b>にほん</b> というんだよ！" },
    { grade: 0, genre: "social", type: "select", text: "かみのけを チョキチョキ かっこよく・かわいくきってくれるおみせは？", choices: ["とこや・びようしつ", "ほんやさん", "ケーキやさん", "おもちゃやさん"], answer: "とこや・びようしつ", explanation: "せいかいは「とこや・びようしつ」！<br>はさみをじょうずにつかって、<b>かみのけをすっきりきれいにしてくれる</b>よ！" },
    { grade: 0, genre: "social", type: "select", text: "そらの うえを ビューンととんで、とおくのくにまで はこんでくれる おおきなのりものは？", choices: ["ひこうき", "へりこぷたー", "しんかんせん", "ロケット"], answer: "ひこうき", explanation: "せいかいは「ひこうき」！<br>おおきなしろいはねをつけて <b>おそらをとぶのは ひこうき</b>だね！" }
]);
// 🔤 【えいご：english】
targetArray.push(...[
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

}
