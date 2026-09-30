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

// ==========================================
// 🎒 小学校5年生向け（grade: 5）クイズデータ追加
// ==========================================
// 🟥 【全教科】
targetArray.push(...[
    { grade: 5, genre: "japanese", type: "select", text: "「比（ひ）率（りつ）」と同じ意味を持つ言葉はどれかな？", choices: ["割合", "合計", "倍数", "平均"], answer: "割合", explanation: "せいかいは「割合」！<br>全体に対する数量の割合を<b>「比（ひ）率（りつ）」</b>と言うよ！" },
    { grade: 5, genre: "japanese", type: "select", text: "ニュースなどで情報を「提（てい）供（きょう）」すると言うときの正しい意味はどれかな？", choices: ["役立つものを差し出すこと", "ものを隠すこと", "新しく作り出すこと", "ものを捨てること"], answer: "役立つものを差し出すこと", explanation: "せいかいは「役立つものを差し出すこと」！<br>情報や材料を相手に役立ててもらうために差し出すことを<b>「提（てい）供（きょう）」</b>と言うよ！" },
    { grade: 5, genre: "japanese", type: "select", text: "「状況に 適（てき）応（おう）する」の「適（てき）応（おう）」の正しい意味はどれかな？", choices: ["その場によくあてはまること", "その場から逃げ出すこと", "別のものを新しく作ること", "間違えてしまうこと"], answer: "その場によくあてはまること", explanation: "せいかいは「その場によくあてはまること」！<br>まわりの環境や状態にうまく合わせることを<b>「適（てき）応（おう）」</b>と言うよ！" },
    { grade: 5, genre: "japanese", type: "select", text: "「みんなを 引（いん）導（どう）する」という言葉の使い方は正しいかな？", choices: ["まちがい（正しくは 誘導 や 案内）", "正しい"], answer: "まちがい（正しくは 誘導 や 案内）", explanation: "せいかいは「まちがい」！<br>「引（いん）導（どう）」は亡くなった人を仏の道へ導く仏教の言葉なので、普段の案内には<b>「誘（ゆう）導（どう）」</b>などを使おう！" },
    { grade: 5, genre: "japanese", type: "select", text: "「劇を 上（じょう）演（えん）する」というときの「上（じょう）演（えん）」の正しい意味はどれかな？", choices: ["観客の前で劇をして見せること", "劇の練習をすること", "劇の台本を書くこと", "劇の道具を片付けること"], answer: "観客の前で劇をして見せること", explanation: "せいかいは「観客の前で劇をして見せること」！<br>舞台などで劇を実際にやって観客に見せることを<b>「上（じょう）演（えん）」</b>と言うよ！" },
    { grade: 5, genre: "japanese", type: "select", text: "「先生が 講（こう）話（わ）をする」というときの「講（こう）話（わ）」の正しい意味はどれかな？", choices: ["ある内容について分かりやすく話すこと", "大声で怒ること", "秘密の話をすること", "歌を歌うこと"], answer: "ある内容について分かりやすく話すこと", explanation: "せいかいは「ある内容について分かりやすく話すこと」！<br>大勢の人に向けて、ためになる話を分かりやすく説明することを<b>「講（こう）話（わ）」</b>と言うよ！" },
    { grade: 5, genre: "math", type: "select", text: "三角形の面積を求める公式はどれかな？", choices: ["底辺 × 高さ ÷ 2", "底辺 × 高さ", "辺 × 辺", "（上底 ＋ 下底）× 高さ ÷ 2"], answer: "底辺 × 高さ ÷ 2", explanation: "せいかいは「底辺 × 高さ ÷ 2」！<br>三角形の面積は、長方形の面積の半分になるから<b>「÷ 2」</b>をするのを忘れないようにしよう！" },
    { grade: 5, genre: "math", type: "select", text: "ある数をもとにしたとき、比べられる量がもとの数の何倍にあたるかを表した数値を何と言うかな？", choices: ["割合", "倍数", "約数", "平均"], answer: "割合", explanation: "せいかいは「割合」！<br>割合は<b>「比べられる量 ÷ もとにする量」</b>で計算することができるよ！" },
    { grade: 5, genre: "math", type: "select", text: "100円の商品の消費税が10%のとき、支払う総（そう）額（がく）はいくらになるかな？", choices: ["110円", "100円", "101円", "120円"], answer: "110円", explanation: "せいかいは「110円」！<br>100円の10%は10円なので、商品の代金と合わせて<b>100 ＋ 10 ＝ 110円</b>になるよ！" },
    { grade: 5, genre: "math", type: "select", text: "2mの重さが60gの針金があります。この針金1mの重さは何gかな？", choices: ["30g", "120g", "20g", "15g"], answer: "30g", explanation: "せいかいは「30g」！<br>1mあたりの重さを求めるので、全体の重さを長さで割って<b>60 ÷ 2 ＝ 30g</b>になるよ！" },
    { grade: 5, genre: "math", type: "select", text: "角柱の体積を求める公式はどれかな？", choices: ["底面積 × 高さ", "底面積 × 高さ ÷ 2", "底辺 × 高さ", "辺 × 辺 × 辺"], answer: "底面積 × 高さ", explanation: "せいかいは「底面積 × 高さ」！<br>角柱の体積は、底面の面積（底面積）に高さを掛（か）けることで 測（そく）定（てい） できるよ！" },
    { grade: 5, genre: "math", type: "select", text: "0.4 を分数で表すとどれになるかな？", choices: ["5分の2", "4分の1", "10分の40", "5分の4"], answer: "5分の2", explanation: "せいかいは「5分の2」！<br>0.4は10分の4だね。分子と分母を2で約分すると<b>「5分の2」</b>になるよ！" },
    { grade: 5, genre: "science", type: "select", text: "植物の種子が発芽するために、絶対に必要ないものはどれかな？", choices: ["日光", "水", "空気", "適当な温度"], answer: "日光", explanation: "せいかいは「日光」！<br>発芽に必要なのは<b>「水・空気・適当な温度」</b>の3つだよ。日光は発芽した後の成長に必要になるんだ！" },
    { grade: 5, genre: "science", type: "select", text: "メダカのたまごの中の赤ちゃんは、主に何という栄養を吸収して成長するかな？", choices: ["養分（卵黄）", "水", "空気中の酸素", "まわりの水草"], answer: "養分（卵黄）", explanation: "せいかいは「養分（卵黄）」！<br>たまごの中にある黄色っぽい球（たま）のような部分が、成長に必要な<b>養分（ようぶん）</b>になっているよ！" },
    { grade: 5, genre: "science", type: "select", text: "台風は、日本に接近するとき一般的にどちらの方角からどちらの方角へ進むことが多いかな？", choices: ["南西から北東", "北から南", "東から西", "南東から北西"], answer: "南西から北東", explanation: "せいかいは「南西から北東」！<br>日本の上空にある「偏（へん）西（せい）風（ふう）」という西からの風に乗るため、<b>南西から北東へ</b>進むことが多いよ！" },
    { grade: 5, genre: "science", type: "select", text: "ヒトの体内で、お腹の中の赤ちゃんに栄養や酸素を送るための特別な器官を何と言うかな？", choices: ["胎盤", "心臓", "胃", "へそのお"], answer: "胎盤", explanation: "せいかいは「胎盤」！<br>お母さんのお腹の中にある<b>「胎盤（たいばん）」</b>を通して、栄養や酸素が赤ちゃんに送られるんだよ！（へそのお は胎盤と赤ちゃんを繋ぐ管だよ）" },
    { grade: 5, genre: "science", type: "select", text: "水溶液に溶けている物質を、再び結晶として取り出す操作を何と言うかな？", choices: ["再結晶", "ろ過", "蒸発", "溶解"], answer: "再結晶", explanation: "せいかいは「再結晶」！<br>一度溶かした物質を、温度を下げたり水を蒸発させたりして再び純粋な結晶にする操作を<b>「再結晶（さいけっしょう）」</b>と言うよ！" },
    { grade: 5, genre: "science", type: "select", text: "ヨウ素液を落とすと、青紫色に変化する植物の栄養分は何かな？", choices: ["デンプン", "脂肪", "タンパク質", "砂糖"], answer: "デンプン", explanation: "せいかいは「デンプン」！<br>ヨウ素液は<b>「デンプン」</b>に反応して青紫色に変わる特徴があるよ。ジャガイモなどにたくさん含まれているね！" },
    { grade: 5, genre: "social", type: "select", text: "日本で使われている米の多くは、どこから 輸（ゆ）入（にゅう） されているかな？", choices: ["国内でほぼ自給している", "アメリカ", "タイ", "オーストラリア"], answer: "国内でほぼ自給している", explanation: "せいかいは「国内でほぼ自給している」！<br>日本の主食であるお米は、ほとんどを<b>日本国内の田んぼ</b>で作っていて、自給率がとても高い農産物だよ！" },
    { grade: 5, genre: "social", type: "select", text: "外国から製品を輸入するときに、国内の産業を守るためにかけられる税金を何と言うかな？", choices: ["関税", "消費税", "所得税", "住民税"], answer: "関税", explanation: "せいかいは「関税」！<br>海外からの安い製品がたくさん入ってきて国内の産業が困らないように、輸入時にかける税金を<b>「関税（かんぜい）」</b>と言うよ！" },
    { grade: 5, genre: "social", type: "select", text: "日本の国土の約何割が、森林で占められているかな？", choices: ["約7割", "約3割", "約5割", "約9割"], answer: "約7割", explanation: "せいかいは「約7割」！<br>山が多くて自然が豊かな日本の国土は、全体の<b>約7割（約3分の2）</b>が森林で覆（おお）われているんだよ！" },
    { grade: 5, genre: "social", type: "select", text: "自動車などの工業製品を、ベルトコンベアなどを使って同じ工場で大量に組み立てる工業の仕組みを何と言うかな？", choices: ["ライン生産方式", "受注生産方式", "手作業方式", "個数限定方式"], answer: "ライン生産方式", explanation: "せいかいは「ライン生産方式」！<br>作業を 複（ふく）雑（ざつ） にせず、流れてくる製品に次々と部品を取り付けて効率よく大量生産する仕組みを<b>「ライン生産方式」</b>と言うよ！" },
    { grade: 5, genre: "social", type: "select", text: "現在の日本の政治の最高法規であり、国の基本的な仕組みや人権を守るルールが書かれた法律を何と言うかな？", choices: ["日本国憲法", "明治憲法", "刑法", "民法"], answer: "日本国憲法", explanation: "せいかいは「日本国憲法」！<br>1947年に施行された<b>「日本国憲（けん）法（ぽう）」</b>は、国のすべての法律の基本となる一番大切なきまりだよ！" },
    { grade: 5, genre: "social", type: "select", text: "日本で国会などの政治を行う 政（せい）権（けん） を選ぶために、国民が行う大切な行動は何かな？", choices: ["選挙", "デモ", "アンケート", "裁判"], answer: "選挙", explanation: "せいかいは「選挙」！<br>国民の代表者を選んで政治を託（たく）すために、満18歳以上の国民全員に与えられている大切な権利が<b>「選挙（せんきょ）」</b>だよ！" },
    { grade: 5, genre: "moral", type: "select", text: "友達が意地悪をされているのを見かけました。心がけるべき一番 善（ぜん） 意（い） ある行動はどれかな？", choices: ["信頼できる大人や先生に相談する", "気づかないふりをして通り過ぎる", "自分も一緒になって意地悪をする", "遠くからスマホで動画を撮る"], answer: "信頼できる大人や先生に相談する", explanation: "せいかいは「信頼できる大人や先生に相談する」！<br> 悪（あく） 行（ぎょう） を見過ごさず、自分だけで解決しようとせずに先生や保護者に話すことが一番安全で優しい解決への一歩だよ！" },
    { grade: 5, genre: "moral", type: "select", text: "みんなで使う公園の遊具が壊れかけているのを見つけました。適切な行動はどれかな？", choices: ["近くの役所や管理している大人に知らせる", "そのまま気にせず遊び続ける", "もっと壊してみる", "インターネットのSNSに悪口を書く"], answer: "近くの役所や管理している大人に知らせる", explanation: "せいかいは「近くの役所や管理している大人に知らせる」！<br>みんなが安全に使えるように、不具合を見つけたら<b>管理している大人</b>に教えてあげよう！" },
    { grade: 5, genre: "moral", type: "select", text: "約束の時間にどうしても遅れてしまいそうなとき、最初にするべき誠実な対応は何かな？", choices: ["遅れることが分かった時点で相手に連絡する", "何も言わずに走って向かう", "行くのをやめて家に帰る", "相手が怒るのを待つ"], answer: "遅れることが分かった時点で相手に連絡する", explanation: "せいかいは「遅れることが分かった時点で相手に連絡する」！<br>相手を心配させたり 評（ひょう）判（ばん） を下げたりしないよう、<b>事前に状況を伝えること</b>が信頼を守るマナーだよ！" },
    { grade: 5, genre: "moral", type: "select", text: "クラスの話し合いで、自分とは全く違う意見が出ました。話し合いの態度として間違っているものはどれかな？", choices: ["相手の意見を途中で遮って強く批判する", "最後まで相手の理由を聞く", "どうしてそう考えたのか質問する", "自分の意見とどこが違うか比べる"], answer: "相手の意見を途中で遮って強く批判する", explanation: "せいかいは「相手の意見を途中で遮って強く批判する」！<br>違う意見であっても、頭ごなしに 批（ひ）判（はん） せず、まずは<b>お互いの考えを尊重して聴くこと</b>が大切だよ！" },
    { grade: 5, genre: "moral", type: "select", text: "掃除の時間、サボっている友達がいました。注意しても聞いてくれません。どうするのが良いかな？", choices: ["自分は自分の担当場所をしっかりと綺麗にする", "自分も一緒にサボる", "友達を強く叩いて怒る", "その友達の机を隠す"], answer: "自分は自分の担当場所をしっかりと綺麗にする", explanation: "せいかいは「自分は自分の担当場所をしっかりと綺麗にする」！<br>他人の行動に流されず、<b>自分のやるべき責任</b>をしっかりと果たすことが素晴らしい態度だね！" },
    { grade: 5, genre: "moral", type: "select", text: "友達の持ち物をうっかり壊してしまいました。最初に行うべき正しい行動は何かな？", choices: ["素直に謝罪して壊したことを伝える", "隠して元の場所に戻す", "他の人が壊したことにする", "新しいものを内緒で買ってすり替える"], answer: "素直に謝罪して壊したことを伝える", explanation: "せいかいは「素直に謝罪して壊したことを伝える」！<br>失敗してしまったときは、嘘をつかずにしっかりと 謝（しゃ）罪（ざい） し、<b>正直に話すこと</b>が一番大切だよ！" },
    { grade: 5, genre: "english", type: "select", text: "英語で「木（き）」を表す単語はどれかな？", choices: ["tree", "flower", "grass", "river"], answer: "tree", explanation: "せいかいは「tree」！<br>森や公園にたくさん生えている大きな木は英語で<b>「tree（ツリー）」</b>と言うよ！" },
    { grade: 5, genre: "english", type: "select", text: "「私は野球が好きです」と英語で言いたいとき、空欄に入る単語はどれかな？「I （　） baseball.」", choices: ["like", "play", "watch", "have"], answer: "like", explanation: "せいかいは「like」！<br>〜が好き、という気持ちを表すときは<b>「like（ライク）」</b>の単語を当てはめるよ！" },
    { grade: 5, genre: "english", type: "select", text: "英語の挨拶（あいさつ）で「こんにちは」を意味する一般的な言葉はどれかな？", choices: ["Hello", "Goodbye", "Thank you", "Sorry"], answer: "Hello", explanation: "せいかいは「Hello」！<br>時間に関係なくいつでも使える「こんにちは」の挨拶は<b>「Hello（ハロー）」</b>だね！" },
    { grade: 5, genre: "english", type: "select", text: "果物の「バナナ」の正しい英語のつづりはどれかな？", choices: ["banana", "bananna", "banan", "vanana"], answer: "banana", explanation: "せいかいは「banana」！<br>日本語の音と似ているけれど、アルファベットでは<b>「b・a・n・a・n・a」</b>と書くよ！" },
    { grade: 5, genre: "english", type: "select", text: "英語で「12」を表す単語はどれかな？", choices: ["twelve", "eleven", "twenty", "ten"], answer: "twelve", explanation: "せいかいは「twelve」！<br>11はeleven、<b>12はtwelve（トゥエルブ）</b>と言うんだよ。セットで覚えておこう！" },
    { grade: 5, genre: "english", type: "select", text: "英語で「月曜日」を表す単語はどれかな？", choices: ["Monday", "Sunday", "Friday", "Tuesday"], answer: "Monday", explanation: "せいかいは「Monday」！<br>1週間の始まりの月曜日は英語で<b>「Monday（マンデー）」</b>と言うよ。最初のMは大文字で書こう！" }
]);

}
