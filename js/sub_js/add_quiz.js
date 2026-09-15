// ==========================================
// 💡 一括登録用クイズ
// ==========================================
// 📝 大量に登録したいクイズデータの配列（1レコード1行仕様）

// ==========================================
// 👶 幼児向け（grade: 0）クイズデータ
// ==========================================
// 🟥 【こくご：japanese】
export const bulkQuestionsData = [
    { grade: 0, genre: "japanese", type: "select", text: "「ねこ」の さいしょの もじは なあに？", choices: ["ね", "こ", "い", "う"], answer: "ね", explanation: "せいかいは「ね」！<br><b>ね</b>・こ のさいしょのもじは<b>「ね」</b>だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "「ぞう」の おおきい はなは どこにある？", choices: ["かお", "おなか", "あし", "おしり"], answer: "かお", explanation: "せいかいは「かお」！<br>おはなが ながーい ぞうさんは、<b>かお</b>に はながあるよ！" },
    { grade: 0, genre: "japanese", type: "which", text: "「いぬ」を はんたいから よむと 「ぬい」になる。○か×か？", choices: ["○", "×"], answer: "○", explanation: "せいかいは ○（まる）！<br>うしろから よむと <b>ぬ・い</b> になるね！おもしろいね！" },
    { grade: 0, genre: "japanese", type: "select", text: "そらを とぶ とりは どれかな？", choices: ["すずめ", "らいおん", "くま", "きりん"], answer: "すずめ", explanation: "せいかいは「すずめ」！<br>すずめさんは <b>つばさ</b>を パタパタさせて そらを とぶよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「りんご」の いろは なにいろかな？", choices: ["あか", "あお", "きいろ", "くろ"], answer: "あか", explanation: "せいかいは「あか」！<br>あまくて おいしい りんごは <span style='color:#e74c3c; font-weight:bold;'>あかいいろ</span> を しているよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「うみ」に すんでいる いきものは どれ？", choices: ["たこ", "かぶとむし", "うさぎ", "ぽにー"], answer: "たこ", explanation: "せいかいは「たこ」！<br>たこさんは <b>うみの なか</b>で あしを くねくね させて およぐよ！" },
    { grade: 0, genre: "japanese", type: "which", text: "「あり」の もじの かずは 3つである。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>あ・り で <b>2つの もじ</b> だから、×（ばつ）だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "「あ」の つぎに くる もじは なあに？", choices: ["い", "う", "え", "お"], answer: "い", explanation: "せいかいは「い」！<br>あいうえお の じゅんばんは、<b>「あ」のつぎは「い」</b>だね！" },
    { grade: 0, genre: "japanese", type: "direct", text: "「うさぎ」の まんなかの もじを ひらがな1もじで おしえてね。", choices: [], answer: "さ", explanation: "せいかいは「さ」だよ！<br>う・<b>さ</b>・ぎ の まんなかは <b>「さ」</b> だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "ワンワン と なく どうぶつは なあに？", choices: ["いぬ", "ねこ", "ねずみ", "うし"], answer: "いぬ", explanation: "せいかいは「いぬ」！<br>かわいい いぬさんは <b>ワンワン！</b> って 元気に なくよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「ねこ」の さいしょの もじは なあに？", choices: ["ね", "こ", "い", "う"], answer: "ね", explanation: "せいかいは「ね」！<br><b>ね</b>・こ のさいしょのもじは<b>「ね」</b>だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "「ぞう」の おおきい はなは どこにある？", choices: ["かお", "おなか", "あし", "おしり"], answer: "かお", explanation: "せいかいは「かお」！<br>おはなが ながーい ぞうさんは、<b>かお</b>に はながあるよ！" },
    { grade: 0, genre: "japanese", type: "which", text: "「いぬ」を はんたいから よむと 「ぬい」になる。○か×か？", choices: ["○", "×"], answer: "○", explanation: "せいかいは ○（まる）！<br>うしろから よむと <b>ぬ・い</b> になるね！おもしろいね！" },
    { grade: 0, genre: "japanese", type: "select", text: "そらを とぶ とりは どれかな？", choices: ["すずめ", "らいおん", "くま", "きりん"], answer: "すずめ", explanation: "せいかいは「すずめ」！<br>すずめさんは <b>つばさ</b>を パタパタさせて そらを とぶよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「りんご」の いろは なにいろかな？", choices: ["あか", "あお", "きいろ", "くろ"], answer: "あか", explanation: "せいかいは「あか」！<br>あまくて おいしい りんごは <span style='color:#e74c3c; font-weight:bold;'>あかいいろ</span> を しているよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "「うみ」に すんでいる いきものは どれ？", choices: ["たこ", "かぶとむし", "うさぎ", "ぽにー"], answer: "たこ", explanation: "せいかいは「たこ」！<br>たこさんは <b>うみの なか</b>で あしを くねくね させて およぐよ！" },
    { grade: 0, genre: "japanese", type: "which", text: "「あり」の もじの かずは 3つである。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>あ・り で <b>2つの もじ</b> だから、×（ばつ）だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "「あ」の つぎに くる もじは なあに？", choices: ["い", "う", "え", "お"], answer: "い", explanation: "せいかいは「い」！<br>あいうえお の じゅんばんは、<b>「あ」のつぎは「い」</b>だね！" },
    { grade: 0, genre: "japanese", type: "direct", text: "「うさぎ」の まんなかの もじを ひらがな1もじで おしえてね。", choices: [], answer: "さ", explanation: "せいかいは「さ」だよ！<br>う・<b>さ</b>・ぎ の まんなかは <b>「さ」</b> だね！" },
    { grade: 0, genre: "japanese", type: "select", text: "ワンワン と なく どうぶつは なあに？", choices: ["いぬ", "ねこ", "ねずみ", "うし"], answer: "いぬ", explanation: "せいかいは「いぬ」！<br>かわいい いぬさんは <b>ワンワン！</b> って 元気に なくよ！" },
    { grade: 0, genre: "japanese", type: "select", text: "おてがみを かくときに つかうものは どれかな？", choices: ["えんぴつ", "はさみ", "すぷーん", "とけい"], answer: "えんぴつ", explanation: "せいかいは「えんぴつ」！<br><b>えんぴつ</b>を使って、じを かきかき しようね！" },
    { grade: 0, genre: "japanese", type: "which", text: "「くり」と「すいか」は、どちらも さいしょの文字が「く」である。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>すいかの さいしょのもじは <b>「す」</b> だからちがうね！" },
    { grade: 0, genre: "japanese", type: "select", text: "あめが ふったときに さすものは なあに？", choices: ["かさ", "くつ", "ぼうし", "かばん"], answer: "かさ", explanation: "せいかいは「かさ」！<br>雨（あめ）の日は <b>かさ</b>をさして おでかけしよう！" },
    { grade: 0, genre: "japanese", type: "select", text: "「めがね」を かける場所（ばしょ）は どこかな？", choices: ["め", "くち", "みみ", "あし"], answer: "め", explanation: "せいかいは「め」！<br>おめめの まえに <b>めがね</b>を かけて よく見えるようにするよ！" },
    { grade: 0, genre: "japanese", type: "direct", text: "「くるま」の さいごの もじは なあに？ひらがな1もじでいれてね。", choices: [], answer: "ま", explanation: "せいかいは「ま」だよ！<br>く・る・<b>ま</b> の さいごは <b>「ま」</b> だね！" }
]);
// 🟦 【さんすう：math】10問
bulkQuestionsData.push(...[
    { grade: 0, genre: "math", type: "select", text: "りんごが 3こ あります。2こ もらうと、ぜんぶで なんこ？", choices: ["5こ", "4こ", "1こ", "6こ"], answer: "5こ", explanation: "せいかいは「5こ」だよ！<br>あわせるからたしざんだね。<b>3 ＋ 2 ＝ 5</b> になるよ！" },
    { grade: 0, genre: "math", type: "select", text: "「8」の つぎに おおきい かずは なに？", choices: ["9", "5", "11", "6"], answer: "9", explanation: "せいかいは「9」だよ！<br>1,2,3,4,5,6,7,8……と数えていくと、8のつぎは<b>「9」</b>だね！" },
    { grade: 0, genre: "math", type: "direct", text: "1 + 1 は？", choices: [], answer: "2", explanation: "せいかいは「2」！<br><b>1 ＋ 1 ＝ 2</b>、さんすうのきほんだね" },
    { grade: 0, genre: "math", type: "select", text: "くるまの タイヤは ぜんぶで なんこ あるかな？", choices: ["2こ", "3こ", "4こ", "5こ"], answer: "4こ", explanation: "せいかいは「4こ」！<br>ブーブー はしる くるまには <b>4つの タイヤ</b>が ついているよ！" },
    { grade: 0, genre: "math", type: "select", text: "ちょうちょが 1ぴき います。もう 1ぴき くると、なんびき？", choices: ["2ひき", "3ひき", "4ひき", "5ひき"], answer: "2ひき", explanation: "せいかいは「2ひき」！<br>1つに 1つを あわせると <b>1 + 1 = 2</b> に なるね！" },
    { grade: 0, genre: "math", type: "which", text: "「おつきさま」の かたちは しかくい。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>まんまる おつきさまは <span style='color:#f1c40f; font-weight:bold;'>まるい かたち</span> を しているよ！" },
    { grade: 0, genre: "math", type: "select", text: "あめが 4こ あります。1こ たべると、のこりは なんこ？", choices: ["2こ", "3こ", "4こ", "1こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>4つの うち 1つを ひくと <b>4 - 1 = 3</b> に なるね！" },
    { grade: 0, genre: "math", type: "select", text: "「10」と「2」は、どちらが 大きい（おおい）かな？", choices: ["10のほうが大きい", "2のほうが大きい", "おなじ大きさ", "くらべられない"], answer: "10のほうが大きい", explanation: "せいかいは「10のほうが大きい」！<br>10こ のほうが 2こ よりも <b>たくさん あって 大きい</b> ね！" },
    { grade: 0, genre: "math", type: "select", text: "きりんさんの くびと、ぶたさんの くび、ながいのは どっち？", choices: ["きりんさん", "ぶたさん", "おなじながさ", "わからない"], answer: "きりんさん", explanation: "せいかいは「きりんさん」！<br>きりんさんの 首（くび）は <b>びよーんと ながくて</b> おおきいね！" },
    { grade: 0, genre: "math", type: "which", text: "て の ゆびは、ぜんぶで 10ほん ある。○か×か？", choices: ["○", "×"], answer: "○", explanation: "せいかいは ○（まる）！<br>みぎ手（5ほん）と ひだり手（5ほん）を あわせると <b>5 + 5 = 10ほん</b> だよ！" },
    { grade: 0, genre: "math", type: "select", text: "「3」の つぎに 大きい（おおい） かずは なあに？", choices: ["4", "2", "5", "1"], answer: "4", explanation: "せいかいは「4」！<br>1、2、3、の つぎは <b>「4」</b> に なるね！" },
    { grade: 0, genre: "math", type: "direct", text: "バナナが 5ほん あります。みんなで 5ほん たべると、のこりは なんほん？（すうじでいれてね）", choices: [], answer: "0", explanation: "せいかいは「0」ほん だよ！<br>ぜんぶ たべちゃったから <b>5 - 5 = 0</b> で、のこりは なしだね！" },
    { grade: 0, genre: "math", type: "select", text: "さんかく（▲）の かどの かずは なんこ あるかな？", choices: ["3こ", "4こ", "5こ", "2こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>さんかくの とがっている かどは <b>3つ</b> あるよ！" },
    { grade: 0, genre: "math", type: "select", text: "くるまの タイヤは ぜんぶで なんこ あるかな？", choices: ["2こ", "3こ", "4こ", "5こ"], answer: "4こ", explanation: "せいかいは「4こ」！<br>ブーブー はしる くるまには <b>4つの タイヤ</b>が ついているよ！" },
    { grade: 0, genre: "math", type: "select", text: "ちょうちょが 1ぴき います。もう 1ぴき くると、なんびき？", choices: ["2ひき", "3ひき", "4ひき", "5ひき"], answer: "2ひき", explanation: "せいかいは「2ひき」！<br>1つに 1つを あわせると <b>1 + 1 = 2</b> に なるね！" },
    { grade: 0, genre: "math", type: "which", text: "「おつきさま」の かたちは しかくい。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>まんまる おつきさまは <span style='color:#f1c40f; font-weight:bold;'>まるい かたち</span> を しているよ！" },
    { grade: 0, genre: "math", type: "select", text: "あめが 4こ あります。1こ たべると、のこりは なんこ？", choices: ["2こ", "3こ", "4こ", "1こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>4つの うち 1つを ひくと <b>4 - 1 = 3</b> に なるね！" },
    { grade: 0, genre: "math", type: "select", text: "「10」と「2」は、どちらが 大きい（おおい）かな？", choices: ["10のほうが大きい", "2のほうが大きい", "おなじ大きさ", "くらべられない"], answer: "10のほうが大きい", explanation: "せいかいは「10のほうが大きい」！<br>10こ のほうが 2こ よりも <b>たくさん あって 大きい</b> ね！" },
    { grade: 0, genre: "math", type: "select", text: "きりんさんの くびと、ぶたさんの くび、ながいのは どっち？", choices: ["きりんさん", "ぶたさん", "おなじながさ", "わからない"], answer: "きりんさん", explanation: "せいかいは「きりんさん」！<br>きりんさんの 首（くび）は <b>びよーんと ながくて</b> おおきいね！" },
    { grade: 0, genre: "math", type: "which", text: "て の ゆびは、ぜんぶで 10ほん ある。○か×か？", choices: ["○", "×"], answer: "○", explanation: "せいかいは ○（まる）！<br>みぎ手（5ほん）と ひだり手（5ほん）を あわせると <b>5 + 5 = 10ほん</b> だよ！" },
    { grade: 0, genre: "math", type: "select", text: "「3」の つぎに 大きい（おおい） かずは なあに？", choices: ["4", "2", "5", "1"], answer: "4", explanation: "せいかいは「4」！<br>1、2、3、の つぎは <b>「4」</b> に なるね！" },
    { grade: 0, genre: "math", type: "direct", text: "バナナが 5ほん あります。みんなで 5ほん たべると、のこりは なんほん？（すうじでいれてね）", choices: [], answer: "0", explanation: "せいかいは「0」ほん だよ！<br>ぜんぶ たべちゃったから <b>5 - 5 = 0</b> で、コツのこりは なしだね！" },
    { grade: 0, genre: "math", type: "select", text: "さんかく（▲）の かどの かずは なんこ あるかな？", choices: ["3こ", "4こ", "5こ", "2こ"], answer: "3こ", explanation: "せいかいは「3こ」！<br>さんかくの とがっている かどは <b>3つ</b> あるよ！" },
    { grade: 0, genre: "math", type: "select", text: "サイコロの いちばん おおきい め（かず）は なあに？", choices: ["6", "5", "4", "3"], answer: "6", explanation: "せいかいは「6」！<br>しかくいサイコロには <b>1から6までの かず</b>が かいてあるよ！" },
    { grade: 0, genre: "math", type: "which", text: "2こ のイチゴと、2こ のミカン。あわせると 5こ になる。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>2 と 2 を あわせると <b>2 + 2 = 4こ</b> になるね！" },
    { grade: 0, genre: "math", type: "select", text: "ドーナツが 6こ あって、2こ もらうと ぜんぶで なんこ？", choices: ["8こ", "7こ", "6こ", "9こ"], answer: "8こ", explanation: "せいかいは「8こ」！<br>6こ に 2こ を たし算すると <b>6 + 2 = 8</b> になるね！" },
    { grade: 0, genre: "math", type: "select", text: "ノートが 3さつ あって、3さつ つかうと のこりは なんさつ？", choices: ["0さつ", "1さつ", "2さつ", "3さつ"], answer: "0さつ", explanation: "せいかいは「0さつ」！<br><b>3つ から 3つ を ひく</b>と、ぜんぶ なくなっちゃうね！" },
    { grade: 0, genre: "math", type: "direct", text: "1、2、3、4、5、6、7、8、の つぎの かずを すうじでいれてね。", choices: [], answer: "9", explanation: "せいかいは「9」！<br>じゅんばんに かぞえると 8のつぎは <b>「9」</b> だね！" }    
]);
// 🟩 【どうとく：moral】10問
bulkQuestionsData.push(...[
    { grade: 0, genre: "moral", type: "select", text: "ともだちの おもちゃを つかいたいとき、なんて 言う？", choices: ["かして,という", "だまって とる", "おこる", "なきだす"], answer: "かして,という", explanation: "せいかいは「かして,という」だよ！<br>だまってとるとおともだちがかなしむから、<b>「かして」</b>といってやさしくじゅんばんをまとうね。" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを たべるとき、さいしょに 言う あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "ありがとう"], answer: "いただきます", explanation: "せいかいは「いただきます」だよ！<br>たべのものいのちや、つくってくれたひとに<span style='color:#ff7675; font-weight:bold;'>「ありがとう」のきもち</span>をこめていうたいせつなあいさつだね。" },
    { grade: 0, genre: "moral", type: "select", text: "おうちの ひとに プレゼントを もらったよ。なんて 言う？", choices: ["ありがとう", "ごめんなさい", "こんにちは", "バイバイ"], answer: "ありがとう", explanation: "せいかいは「ありがとう」！<br>うれしいことを してもらったときは <b>「ありがとう」</b> と おつたえしようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちの あしを うっかり ふんじゃった！なんて 言う？", choices: ["ごめんなさい", "ありがとう", "やったー", "わはは"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>わるいことを しちゃったときは <b>すぐ「ごめんなさい」</b> が できると かっこいいよ！" },
    { grade: 0, genre: "moral", type: "which", text: "よる 遅い（おそい）じかんに、おうちの なかで ドタバタ 走ってもよい。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>よるは みんなくつろぐ じかんだよ。おうちの なかでは <span style='color:#3498db; font-weight:bold;'>しずかに すごそうね</span>。" },
    { grade: 0, genre: "moral", type: "select", text: "あさ 起きた（おきた）とき、おうちの ひとに する あいさつは？", choices: ["おはよう", "おやすみ", "さようなら", "いただきます"], answer: "おはよう", explanation: "せいかいは「おはよう」！<br>あさ一番の <b>「おはよう！」</b> は とっても きもちがいいね！" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを 食べおわった（たべおわった）あとに 言う あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "おじゃまします"], answer: "ごちそうさま", explanation: "せいかいは「ごごちそうさま」！<br>つくってくれた 人や、お野菜（やさい）さんに <b>「ごちそうさま」</b> っていおうね！" },
    { grade: 0, genre: "moral", type: "which", text: "おもちゃで 遊んだ（あそんだ）あとは、そのままにして 次のあそびをする。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>あそんだ あとは <b>「おかたづけ」</b> を してから つぎの あそびを しようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちが つかっている おもちゃを 自分も つかいたいとき、どうする？", choices: ["かして、と聞く", "むりやり奪う", "なげつける", "だまって取る"], answer: "かして、と聞く", explanation: "せいかいは「かして、と聞く」だよ！<br>やさしく <b>「かーしーてー」</b> って おはなし してみようね！" },
    { grade: 0, genre: "moral", type: "select", text: "外から おうちに 帰ってきた（かえってきた）ら、さいしょに することは？", choices: ["てあらい・うがい", "テレビをみる", "おやつをたべる", "ねる"], answer: "てあらい・うがい", explanation: "せいかいは「てあらい・うがい」！<br>バイキンを やっつけるために <span style='color:#2ecc71; font-weight:bold;'>ガラガラ・ブクブク</span> しようね！" },
    { grade: 0, genre: "moral", type: "which", text: "道路（どうろ）を わたるときは、みぎ と ひだり を しっかり 見てから わたる。○か×か？", choices: ["○", "×"], answer: "○", explanation: "せいかいは ○（まる）！<br>くるまが 来ないか <b>みぎ・ひだり・みぎ</b> を しっかり みて、てをあげて わたろうね！" },
    { grade: 0, genre: "moral", type: "direct", text: "お外（そと）で 会った（あった）ひとに 「こんにちは」と いわれたら、なんて おへんじ する？", choices: [], answer: "こんにちは", explanation: "せいかいは「こんにちは」だよ！<br>あいさつを されたら、おなじように <b>「こんにちは！」</b> と 元気に おへんじ しようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おうちの ひとに プレゼントを もらったよ。なんて 言（い）う？", choices: ["ありがとう", "ごめんなさい", "こんにちは", "バイバイ"], answer: "ありがとう", explanation: "せいかいは「ありがとう」！<br>うれしいことを してもらったときは <b>「ありがとう」</b> と おつたえしようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちの あしを うっかり ふんじゃった！なんて 言（い）う？", choices: ["ごめんなさい", "ありがとう", "やったー", "わはは"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>わるいことを しちゃったときは <b>すぐ「ごめんなさい」</b> が できると かっこいいよ！" },
    { grade: 0, genre: "moral", type: "which", text: "よる 遅い（おそい）じかんに、おうちの なかで ドタバタ はしってもよい。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>よるは みんなくつろぐ じかんだよ。おうちの なかでは <span style='color:#3498db; font-weight:bold;'>しずかに すごそうね</span>。" },
    { grade: 0, genre: "moral", type: "select", text: "あさ 起きた（おきた）とき、おうちの ひとに する あいさつは？", choices: ["おはよう", "おやすみ", "さようなら", "いただきます"], answer: "おはよう", explanation: "せいかいは「おはよう」！<br>あさいちばんの <b>「おはよう！」</b> は とっても きもちがいいね！" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを 食べおわった（たべおわった）あとに 言（い）う あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "おじゃまします"], answer: "ごちそうさま", explanation: "せいかいは「ごちそうさま」！<br>つくってくれた 人や、お野菜（やさい）さんに <b>「ごちそうさま」</b> っていおうね！" },
    { grade: 0, genre: "moral", type: "which", text: "おもちゃで 遊んだ（あそんだ）あとは、そのままにして 次のあそびをする。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>あそんだ あとは <b>「おかたづけ」</b> を してから つぎの あそびを しようね！" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちが つかっている おもちゃを じぶんも つかいたいとき、どうする？", choices: ["かして、ときく", "むりやりとる", "なげつける", "だまってとる"], answer: "かして、ときく", explanation: "せいかいは「かして、と聞（き）く」だよ！<br>やさしく <b>「かーしーてー」</b> って おはなし してみようね！" },
    { grade: 0, genre: "moral", type: "select", text: "外から おうちに 帰ってきた（かえってきた）ら、さいしょに することは？", choices: ["てあらい・うがい", "テレビをみる", "おやつをたべる", "ねる"], answer: "てあらい・うがい", explanation: "せいかいは「てあらい・うがい」！<br>バイキンを やっつけるために <span style='color:#2ecc71; font-weight:bold;'>ガラガラ・ブクブク</span> しようね！" },
    { grade: 0, genre: "moral", type: "which", text: "道路（どうろ）を わたるときは、みぎ と ひだり を しっかり 見（み）てから わたる。○か×か？", choices: ["○", "×"], answer: "○", explanation: "せいかいは ○（まる）！<br>くるまが こないか <b>みぎ・ひだり・みぎ</b> を しっかり みて、てをあげて わたろうね！" },
    { grade: 0, genre: "moral", type: "direct", text: "お外（そと）で 会った（あった）ひとに 「こんにちは」と いわれたら、なんて おへんじ する？", choices: [], answer: "こんにちは", explanation: "せいかいは「こんにちは」だよ！<br>あいさつを されたら、おなじように <b>「こんにちは！」</b> と 元気（げんき）に おへんじ しようね！" },
    { grade: 0, genre: "moral", type: "select", text: "廊下（ろうか）や お部屋（おへや）の なかは、どうやって いどうする？", choices: ["あるく", "はしる", "すべりだいする", "ジャンプする"], answer: "あるく", explanation: "せいかいは「あるく」！<br>おうちの なかで はしると ごっつんこして <b>あぶないから、あるこうね</b>！" },
    { grade: 0, genre: "moral", type: "which", text: "おともだちが ころんで 泣（な）いていたら、わらって いじめる。○か×か？", choices: ["○", "×"], answer: "×", explanation: "せいかいは ×（ばつ）！<br>おともだちが いたいときは <b>「だいじょうぶ？」</b> って 助けてあげようね。" },
    { grade: 0, genre: "moral", type: "select", text: "おともだちの おうちに あそびに いったとき、お部屋（おへや）に はいる前（まえ）に いう あいさつは？", choices: ["おじゃまします", "ありがとう", "ごめんなさい", "バイバイ"], answer: "おじゃまします", explanation: "せいかいは「おじゃまします」！<br>よそのおうちにはいるときは <b>「おじゃまします」</b> と 元気（げんき）にいおうね！" },
    { grade: 0, genre: "moral", type: "select", text: "みんなで 使う（つかう） おもちゃは、どうやって つかうと いいかな？", choices: ["なかよくつかう", "ひとりでどくせんする", "なげつける", "こわす"], answer: "なかよくつかう", explanation: "せいかいは「なかよくつかう」！<br>みんなで <b>順番（じゅんばん）に 交代（こうたい）しながら</b> なかよく遊（あそ）ぼうね！" },
    { grade: 0, genre: "moral", type: "direct", text: "夜（よる）ねるとき、おうちの人（ひと）に いう さいしょの あいさつは なあに？", choices: [], answer: "おやすみ", explanation: "せいかいは「おやすみ」だよ！<br>今日（きょう）も1日（にち）楽（たの）しかったね！元気（げんき）に <b>「おやすみなさい」</b> っていおうね！" }
]);

// ==========================================
// 🎒 小学校4年生向け（grade: 4）クイズデータ追加
// ==========================================
// 🟥 【こくご：japanese】10問
bulkQuestionsData.push(...[
    { grade: 4, genre: "japanese", type: "select", text: "「新聞（しんぶん）に意見（いけん）を（ ）する」空欄に入る正しい漢字はどれ？", choices: ["投稿", "同行", "結構", "慣行"], answer: "投稿", explanation: "正解は「投稿（とうこう）」！<br>自分の意見や文章を新聞や雑誌に載せてもらうために送ることを<b>「投稿」</b>と言います。" },
    { grade: 4, genre: "japanese", type: "select", text: "「他人の行動を見て、自分の行いを改める」という意味の四字熟語はどれ？", choices: ["反面教師", "単刀直入", "以心伝心", "弱肉強食"], answer: "反面教師", explanation: "正解は「反面教師（はんめんきょうし）」！<br>悪い見本であっても、それを見て<b>「自分は気をつけよう」</b>と学ぶことができるという意味だよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "「先生が参る（まいる）」という表現は、先生への敬語（尊敬語）として正しい。○か×か？", choices: ["○", "×"], answer: "×", explanation: "正解は ×（バツ）！<br>「参る」は自分がへりくだる謙譲語（けんじょうご）だよ。先生が来るときは<span style='color:#e74c3c; font-weight:bold;'>「お見えになる」や「来られる」</span>が正しいよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "「（ ）も歩けば棒に当たる」ということわざの空欄に入る動物はなに？", choices: ["犬", "猫", "猿", "鳥"], answer: "犬", explanation: "正解は「犬（いぬ）」！<br>何か行動を起こせば、<b>思いがけない幸運（または災難）にめぐり合う</b>という意味のことわざだよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "「一億（いちおく）」は、一万（いちまん）の何倍の大きさかな？", choices: ["100倍", "1000倍", "10000倍", "10倍"], answer: "10000倍", explanation: "正解は「10000倍（一万倍）」！<br>4年生で習う大きな数だね。一万が10000個集まると<b>「一億」</b>という大きな単位になるんだよ！" },
    { grade: 4, genre: "japanese", type: "select", text: "慣用句（かんようく）の問題だよ。「（ ）を広くする」で、たくさんの知り合いを作るという意味になる言葉はどれ？", choices: ["顔", "耳", "目", "手"], answer: "顔", explanation: "正解は「顔（かお）」！<br><b>「顔が広い」</b>と言うと、いろいろなジャンルにたくさんの知り合いや友達がいる人のことを指すよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "辞書（じしょ）で言葉を調べるとき、「あめ（雨）」は「あき（秋）」よりも後ろに載っている。○か×か？", choices: ["○", "×"], answer: "○", explanation: "正解は ○（まる）！<br>50音順で比べると、「あ<b>き</b>」の「き」よりも、「あ<b>め</b>」の「め」のほうが後ろにあるからだね！" },
    { grade: 4, genre: "japanese", type: "select", text: "同じ漢字で読み方が違う言葉だよ。「地面（じめん）に［植える］」と「［植木］（うえき）」。［ ］の漢字の正しい訓読み（くんよみ）はどれ？", choices: ["う（える）", "そだ（てる）", "さ（く）", "は（やす）"], answer: "う（える）", explanation: "正解は「う（える）」！<br>植物を土にセットすることは<b>「植える（うえる）」</b>、音読みでは「植物（しょくぶつ）」の「ショク」と読むよ。" },
    { grade: 4, genre: "japanese", type: "direct", text: "「初志貫徹（しょしかんてつ）」のように、漢字が4つ組み合わさって特別な意味を持つ言葉を何熟語という？（ひらがなで入力してね）", choices: [], answer: "よじじゅくご", explanation: "正解は「よじじゅくご（四字熟語）」だよ！<br>4つの漢字で<b>深い意味や教訓</b>を表す、とても便利な言葉の組み合わせなんだ。" },
    { grade: 4, genre: "japanese", type: "select", text: "文章のつながりを作る言葉だよ。「昨日は雨が降った。（ ）、遠足は中止になった。」空欄に入る最も適切な言葉はどれ？", choices: ["だから", "しかし", "または", "ちなみに"], answer: "だから", explanation: "正解は「だから」！<br>前の出来事が原因（雨）になって、後ろの結果（中止）につながるため、<b>順接（じゅんせつ）の「だから」</b>を使うよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "「他人の行動を見て、自分の行いを改める」という意味の四字熟語は？", choices: ["反面教師", "単刀直入", "以心伝心", "弱肉強食"], answer: "反面教師", explanation: "正解は「反面教師」だよ！<br>悪い見本（反面）を、自分を教えてくれる<b>「教師」</b>だと思って学びにするという意味だよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "次のうち、「敬語（尊敬語）」として正しいものはどれ？", choices: ["先生がお見えになる", "先生が来る", "先生が参る", "先生が来られる"], answer: "先生がお見えになる", explanation: "正解は「先生がお見えになる」だよ！<br>相手を高める最高の表現が<b>「お見えになる」</b>だよ。「参る」は自分がへりくだる謙譲語だから間違いやすいね。" },
    { grade: 4, genre: "japanese", type: "select", text: "「一生懸命」と同じ意味の言葉はどれ？", choices: ["必死になって", "てきとうに", "のんびりと", "おこりながら"], answer: "必死になって", explanation: "「一生懸命」は、命をかけるくらい<span style='color:red; font-weight:bold;'>全力でがんばる</span>という意味の四字熟語だよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "「（ ）も歩けば棒に当たる」空欄に入る動物は？", choices: ["犬", "猫", "猿", "鳥"], answer: "犬", explanation: "正解は「犬」だよ！<br><b>「犬も歩けば棒に当たる」</b>は、何か行動を起こせば、思いがけない幸運（または災難）に遭うということわざだよ。" }
]);
// 🟦 【さんすう：math】10問
bulkQuestionsData.push(...[
    { grade: 4, genre: "math", type: "select", text: "三角形の面積を求める公式は？", choices: ["底辺 × 高さ", "半径 × 半経 × 3.14", "縦 × 横", "底辺 × 高さ ÷ 2"], answer: "底辺 × 高さ ÷ 2", explanation: "正解は「底辺 × 高さ ÷ 2」だよ！<br>四角形の面積の半分になるから、さいごの<b>「÷ 2」</b>を絶対に忘れないようにしよう！" },
    { grade: 4, genre: "math", type: "select", text: "時速60kmの車が、2時間で進む距離は？", choices: ["120km", "30km", "60km", "180km"], answer: "120km", explanation: "正解は「120km」だよ！<br>「速さ × 時間 ＝ 距離」だから、<b>60 × 2 ＝ 120</b> という計算になるね。" },
    { grade: 4, genre: "math", type: "direct", text: "25 × 4 の答えはいくつ？", choices: [], answer: "100", explanation: "正解は「100」だよ！<br><b>25 × 4 ＝ 100</b> は算数でとってもよく使う計算だから、セットで覚えておくと便利だよ！" },
    { grade: 4, genre: "math", type: "select", text: "1リットルは何ミリリットル（ml）？", choices: ["1000ml", "100ml", "10ml", "10000ml"], answer: "1000ml", explanation: "正解は「1000ml」だよ！<br>「m（ミリ）」には<b>1000分の1</b>という意味があるから、1000ml集まるとちょうど1Lになるんだよ。" },
    { grade: 4, genre: "math", type: "select", text: "三角形の面積を求める公式はどれ？", choices: ["底辺×高さ÷2", "半径×半径×3.14", "縦×横", "底辺×高さ×2"], answer: "底辺×高さ÷2", explanation: "正解は「底辺×高さ÷2」だよ！<br>「÷2」をするのを<b>絶対に忘れないように</b>しようね！" },
    { grade: 4, genre: "math", type: "select", text: "1リットル（L）は、何ミリリットル（mL）の量と同じかな？", choices: ["1000mL", "100mL", "10mL", "10000mL"], answer: "1000mL", explanation: "正解は「1000mL」！<br>mLの「m（ミリ）」は<b>1000分の一</b>という意味なので、1L = 1000mL になるんだよ。" },
    { grade: 4, genre: "math", type: "select", text: "長方形（ちょうほうけい）の面積を求めるための正しい公式はどれ？", choices: ["たて × よこ", "たて ＋ よこ", "一辺 × 一辺", "底辺 × 高さ ÷ 2"], answer: "たて × よこ", explanation: "正解は「たて × よこ」！<br>面積（つの広さ）の基本だね。ちなみに「一辺×一辺」は<b>正方形の公式</b>だよ！" },
    { grade: 4, genre: "math", type: "which", text: "「平行四辺形（へいこうしへんけい）」の向かい合う辺の長さは、それぞれ等しい。○か×か？", choices: ["○", "×"], answer: "○", explanation: "正解は ○（まる）！<br>平行四辺形は、向かい合う<b>2組の辺がどちらも平行</b>で、長さも同じになる特徴があるよ！" },
    { grade: 4, genre: "math", type: "select", text: "時速60kmのスピードで走る車が、2時間進むと何km先まで行けるかな？", choices: ["120km", "30km", "60km", "180km"], answer: "120km", explanation: "正解は「120km」！<br>時速60kmとは「1時間に60km進む」という意味なので、<b>60 × 2 = 120km</b> になるよ！" },
    { grade: 4, genre: "math", type: "select", text: "角度（かくど）の問題だよ。1つの「直角（ちょっかく）」は何度（°）のことかな？", choices: ["90°", "180°", "45°", "360°"], answer: "90°", explanation: "正解は「90°（きゅうじゅうど）」！<br>ノートの角（かど）のような正しくまっすぐな直角は<b>90°</b>、半分にすると45°になるよ。" },
    { grade: 4, genre: "math", type: "select", text: "わり算の「あまり」の問題だよ。「45 ÷ 6」の正しい答えはどれ？", choices: ["7 あまり 3", "7 あまり 2", "6 あまり 9", "8 あまり 1"], answer: "7 あまり 3", explanation: "正解は「7 あまり 3」！<br>かけ算九九で考えると <b>6 × 7 = 42</b>。引き算して 45 - 42 = 3 なので、あまりは3になるね！" },
    { grade: 4, genre: "math", type: "which", text: "分数（ぶんすう）の問題だよ。「5分之3（3/5）」は「5分之2（2/5）」よりも小さい。○か×か？", choices: ["○", "×"], answer: "×", explanation: "正解は ×（バツ）！<br>下の数（分母）が同じなら、上の数（分子）が<b>大きいほう（3/5）が全体の量も大きくなる</b>よ！" },
    { grade: 4, genre: "math", type: "select", text: "1.4 ＋ 0.8 の正しい計算結果はどれかな？", choices: ["2.2", "1.2", "2.0", "1.12"], answer: "2.2", explanation: "正解は「2.2」！<br>小数のたし算だね。位（くらい）をそろえて、<b>14 ＋ 8 = 22</b> と同じように考えて小数点を打とう！" },
    { grade: 4, genre: "math", type: "direct", text: "「25 × 4」の計算の答えはいくつになる？（半角数字で入力してね）", choices: [], answer: "100", explanation: "正解は「100」だよ！<br>25を4回たすと100になるね。<b>「25×4＝100」</b>は算数でよく使う便利なセットだから覚えちゃおう！" },
    { grade: 4, genre: "math", type: "select", text: "1平方メートル（㎡）は、何平方センチメートル（㎠）と同じ広さかな？", choices: ["10000㎠", "100㎠", "1000㎠", "1000000㎠"], answer: "10000㎠", explanation: "正解は「10000㎠」！<br>1mは100cmなので、たて100cm×よこ100cmを計算して、<b>100 × 100 = 10000</b> になるんだよ！" }
]);
// 🟩 【どうとく：moral】10問
bulkQuestionsData.push(...[
    { grade: 4, genre: "moral", type: "select", text: "図書館など、みんなが使う場所での正しい過ごし方は？", choices: ["静かに過ごす", "大声で走る", "お菓子を食べる", "ゲームを大音量でする"], answer: "静かに過ごす", explanation: "正解は「静かに過ごす」です。<br>みんなが気持ちよく本を読めるように、公共の場所では<span style='color:#2ecc71; font-weight:bold;'>マナーを守って静かに</span>しようね。" },
    { grade: 4, genre: "moral", type: "select", text: "SNSで友達の悪口を書いている人を見つけました。適切な行動は？", choices: ["関わらず、大人や先生に相談する", "自分も一緒に書き込む", "その人を強く責め立てる", "面白そうなので友達に拡散する"], answer: "関わらず、大人や先生に相談する", explanation: "正解は「関わらず、大人や先生に相談する」です。<br>トラブルに巻き込まれないよう自分は関わらず、すぐに<span style='color:#ff7675; font-weight:bold;'>大人や先生に報告</span>しよう。" },
    { grade: 4, genre: "moral", type: "select", text: "「責任（せきにん）を持つ」とはどういうこと？", choices: ["自分の失敗を認め、次につなげること", "絶対に失敗しないこと", "誰かのせいにすること", "嫌なことから逃げること"], answer: "自分の失敗を認め、次につなげること", explanation: "正解は「自分の失敗を認め、次につなげること」です。<br>失敗しても他人のせいにせず、<b>自分の行動を引き受けること</b>が本当にカッコいい大人への一歩だよ。" },
    { grade: 4, genre: "moral", type: "which", text: "友達が困っているときは、声をかけずに放っておくのが正しい行動である。○か×か？", choices: ["○", "×"], answer: "×", explanation: "正解は×（バツ）だよ！<br>なにか手伝えることがないか、<b>「どうしたの？」</b>と優しく声をかけてあげよう。" },
    { grade: 4, genre: "moral", type: "select", text: "図書館など、みんなが使う公共（こうきょう）の場所での正しい過ごし方はどれ？", choices: ["静かに過ごす", "大声で走る", "お菓子を食べる", "ゲームを大音量でする"], answer: "静かに過ごす", explanation: "正解は「静かに過ごす」！<br>みんなが気持ちよく読書や勉強をできるように、周りの人へ<b>「思いやり」</b>を持つことが大切だね。" },
    { grade: 4, genre: "moral", type: "select", text: "SNSでクラスの友達の悪口が書き込まれているのを見つけました。最も適切な行動は？", choices: ["関わらず、大人や先生に相談する", "自分も一緒に書き込む", "その人を強く責め立てる", "面白そうなので友達に拡散する"], answer: "関わらず、大人や先生に相談する", explanation: "正解は「関わらず、大人や先生に相談する」！<br>ネットのトラブルは自分だけで解決しようとせず、信頼できる<span style='color:#2ecc71; font-weight:bold;'>保護者や先生にすぐに報告</span>しよう。" },
    { grade: 4, genre: "moral", type: "which", text: "友達との約束の時間に遅れそうになったとき、「だまって遅れていく」のが正しいマナーである。○か×か？", choices: ["○", "×"], answer: "×", explanation: "正解は ×（バツ）！<br>遅れそうだとわかった時点で、必ず相手に<b>連絡をして理由を伝える</b>のが、相手を尊重する正しいマナーだよ。" },
    { grade: 4, genre: "moral", type: "select", text: "学級会（がっきゅうかい）で自分とは違う意見が出ました。そのときの正しい態度はどれ？", choices: ["最後まで理由を聞く", "すぐに大声で否定する", "無視して席を立つ", "自分の意見を無理やり通す"], answer: "最後まで理由を聞く", explanation: "正解は「最後まで理由を聞く」！<br>人それぞれ違う考え方を持っているよ。まずは<b>相手の意見をしっかりと聞く</b>ことから、良い話し合いが始まるんだ。" },
    { grade: 4, genre: "moral", type: "select", text: "「自分の行動に責任（せきにん）を持つ」とは、具体的にどういうことかな？", choices: ["自分の失敗を認め、次につなげること", "絶対に失敗しないこと", "誰かのせいにすること", "嫌なことから逃げること"], answer: "自分の失敗を認め、次につなげること", explanation: "正解は「自分の失敗を認め、次につなげること」！<br>誰でも失敗はするよ。大切なのは言い訳をせず、<b>次からどうすれば上手くいくか</b>を自分で考えて行動することだよ。" },
    { grade: 4, genre: "moral", type: "which", text: "学校の備品（一輪車やボールなど）は、みんなの物なので雑に扱って壊しても気にしなくてよい。○か×か？", choices: ["○", "×"], answer: "×", explanation: "正解は ×（バツ）！<br>みんなで使う物は、次に使う人のことを考えて<b>「大切に優しく」</b>扱うのが、アニマル村の立派なプレイヤーのルールだよ。" },
    { grade: 4, genre: "moral", type: "select", text: "友達が宿題を忘れて困っています。「本当の優しさ」として、最も正しい行動はどれ？", choices: ["やり方を優しく教えてあげる", "自分の宿題をそのまま写させる", "先生に見つからないよう隠す", "忘れたことをみんなに言いふらす"], answer: "やり方を優しく教えてあげる", explanation: "正解は「やり方を優しく教えてあげる」！<br>答えを写させるのは、その友達の成長のためにならないよ。<b>ヒントをあげたり一緒に考える</b>のが本当の優しさだね。" },
    { grade: 4, genre: "moral", type: "select", text: "困っているお年寄りや、体が不自由な人が目の前にいます。どんな気持ちで接するとよいかな？", choices: ["何か手伝えるか声をかける", "気づかないふりをして通り過ぎる", "遠くからじっと見つめる", "かわいそうだと言いふらす"], answer: "何か手伝えるか声をかける", explanation: "正解は「何か手伝えるか声をかける」！<br><b>「何かお手伝いできることはありますか？」</b>という一言が、相手にとって大きな心の支えになるんだよ。" },
    { grade: 4, genre: "moral", type: "direct", text: "「自分のことだけでなく、他人の気持ちや立場を思いやって行動すること」を漢字2文字でなんと呼ぶ？", choices: [], answer: "配慮", explanation: "正解は「配慮（はいりょ）」または「親切・寛容」とも言うよ！<br>周りの人の気持ちに<b>心を配って行動できる</b>ようになると、村のみんなともっと仲良くなれるね！" },
    { grade: 4, genre: "moral", type: "select", text: "クラスの係の仕事が面倒（めんどう）になってしまいました。どう行動するのが一番良いかな？", choices: ["最後までやり遂げる方法を考える", "だまってサボる", "他の人に無理やり押し付ける", "怒って途中でやめる"], answer: "最後までやり遂げる方法を考える", explanation: "正解は「最後までやり遂げる方法を考える」！<br>自分が引き受けた役割は、<b>最後までやり遂げる（責任感）</b>ことで、クラスのみんなからの「信頼（しんらい）」に繋がるよ！" }
]);
