// ==========================================
// 👶 全学年向けクイズデータ
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
	{ grade: 1, genre: "japanese", type: "which", text: "「くるま」を かんじで かくと 「車」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>タイヤが ついた のりものの かんじは <b>「車（くるま）」</b> だよ！" }
]);
// 🟦 【さんすう：math】
targetArray.push(...[
	{ grade: 1, genre: "math", type: "select", text: "たしざんの けいさんクイズ！ 【 8 ＋ 7 ＝ 〇 】 〇に はいる かずは なあに？", choices: ["15", "14", "16", "13"], answer: "15", explanation: "せいかいは「15」！<br>8に 2を たして 10、のこりの 5を あわせて <b>15</b> だね！" },
	{ grade: 1, genre: "math", type: "which", text: "ひきざんの けいさんクイズ！ 【 13 ‐ 4 ＝ 8 】 この けいさんは まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>13から 4を ひくと、ただしい こたえは <b>「9」</b> になるよ！" },
	{ grade: 1, genre: "math", type: "select", text: "ノートが 12さつ あります。4さつ つかうと、のこりの ノートは なんさつに なるかな？", choices: ["8さつ", "7さつ", "9さつ", "6さつ"], answer: "8さつ", explanation: "せいかいは「8さつ」！<br>12 － 4 ＝ <b>8さつ</b> だね！" },
	{ grade: 1, genre: "math", type: "which", text: "「十（じゅう）のくらい」が 3で、「一（いち）のくらい」が 5の かずは 「53」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>十（じゅう）の位（くらい）が 3、一（いち）の位（くらい）が 5の かずは <b>「35」</b> だよ！" },
	{ grade: 1, genre: "math", type: "select", text: "ごぜん 9じから 1じかん たつと、とけいの みじかい はりは どこを さすかな？", choices: ["10", "9", "11", "12"], answer: "10", explanation: "せいかいは「10」！<br>9じの 1じかん つぎは <b>10じ</b> だね！" },
	{ grade: 1, genre: "math", type: "which", text: "【 0 ＋ 9 ＝ 9 】 この たしざんの こたえは ただしい。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>なにもない「0」に 9を たしても、かずは かわらず <b>9</b> のままだよ！" },
	{ grade: 1, genre: "math", type: "select", text: "ながい じゅんばんに ならべよう！ 10センチ、5センチ、20センチ。一番（いちばん） ながいのは どれかな？", choices: ["20センチ", "10センチ", "5センチ", "ぜんぶ同じ"], answer: "20センチ", explanation: "せいかいは「20センチ」！<br>数字（すうじ）が 一番（いちばん） おおきい <b>20センチ</b> が もっとも ながいよ！" },
	{ grade: 1, genre: "math", type: "which", text: "しかくの かたちの まわりには、へん（まっすぐなせん）が 3本（ぼん） ある。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>しかくには へんが <b>4本（ほん）</b> あるよ！" },
	{ grade: 1, genre: "math", type: "select", text: "こどもが 14人（にん） います。おとこのこが 6人 のとき、おんなのこは なんにん いるかな？", choices: ["8人（にん）", "7人（にん）", "9人（にん）", "6人（にん）"], answer: "8人（にん）", explanation: "せいかいは「8人（にん）」！<br>14人（にん）から おとこのこの 6人（にん）を ひくと、14 － 6 ＝ <b>8人（にん）</b> だね！" },
	{ grade: 1, genre: "math", type: "which", text: "【 10 － 10 ＝ 0 】 この ひきざんの こたえは ただしい。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ある かずから おなじ かずを ぜんぶ ひくと <b>「0」</b> になるよ！" }
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
	{ grade: 1, genre: "science", type: "which", text: "チューリップの花（はな）は、ふゆの さむい ゆきの なかで さく。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>チューリップは ふゆの あいだ 土の中（つちのなか）で じっとしていて、あたたかい <b>はる</b> に さくよ！" }
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

// 🟥 【道徳：moral】
targetArray.push(...[
	{ grade: 1, genre: "moral", type: "select", text: "おともだちが にもつを たくさん 持って（もって）いて、たいへんそうなとき、どうこえを かけるかな？", choices: ["なにか てつだうことは ある？", "ずるいぞと おこる", "とおくから わらう", "ひとりで はしってにげる"], answer: "なにか てつだうことは ある？", explanation: "せいかいは「なにか てつだうことは ある？」！<br>こまっている おともだちを みつけたら、<b>「てつだうよ」</b> と やさしいこえを かけようね！" },
	{ grade: 1, genre: "moral", type: "which", text: "いきものを かうときは、まいにち わすれずに 水（みず）や ごはんを あげて、さいごまで せきにんを もつ。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>いきものは <b>おもちゃ ではない</b> から、かぞくとして たいせつに そだてようね！" },
	{ grade: 1, genre: "moral", type: "select", text: "学校（がっこう）の ろうかを あるくときの ただしい ルールは どれかな？", choices: ["みぎがわをしずかにあるく", "ぜんりょくではしる", "おともだちとおしあいをする", "大ごえをだしながらすすむ"], answer: "みぎがわをしずかにあるく", explanation: "せいかいは「みぎがわをしずかにあるく」！<br>はしると <b>おともだちと ぶつかって ケガを しちゃう</b> から、ろうかは しずかに あるこうね！" },
	{ grade: 1, genre: "moral", type: "which", text: "自分が いやなことは、おともだちに されても へいきだから、やってもよい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>じぶんが <b>されて かなしいこと</b> は、おともだちにも ぜったいに しては いけないよ！" },
	{ grade: 1, genre: "moral", type: "select", text: "みんなの こうえんに ある 花（はな）が、きれいに さいています。どうするのが いちばん いいかな？", choices: ["みんなでみて たのしむ", "ぜんぶ ひきぬいて もってかえる", "ふみつけて あそぶ", "ゴミを 上（うえ）から なげすてる"], answer: "みんなでみて たのしむ", explanation: "せいかいは「みんなで見て たのしむ」！<br>こうえんは <b>みんなの ばしょ</b> だから、花（はな）も たいせつに まもって たのしもうね！" },
	{ grade: 1, genre: "moral", type: "which", text: "おともだちと けんかを してしまったとき、じぶんが わるいと おもったら、すなおに「ごめんなさい」と いう。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ゆうきを だして <b>「ごめんなさい」</b> が いえれば、きっと また なかよく なれるよ！" },
	{ grade: 1, genre: "moral", type: "select", text: "きょうしつの つくえや いすを つかうとき、いちばん ただしい こころがけは どれかな？", choices: ["みんなで つかうものだから たいせつにする", "らくがきを たくさんする", "わざと ガタガタ ゆらして こわす", "じぶんの ものだからと もってかえる"], answer: "みんなで つかうものだから たいせつにする", explanation: "せいかいは「みんなで つかうものだから たいせつにする」！<br>学校（がっこう）の ものは <b>みんなで つかう たいせつな もの</b> だから、きずつけないように つかおうね！" },　　
	{ grade: 1, genre: "moral", type: "which", text: "おともだちが はっぴょうして いるときは、おしゃべりを しながら きいてもよい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>おはなして いる 人（ひと）の ほうを <b>しっかり みて、しずかに きく</b> のが ただしい マナーだよ！" },
	{ grade: 1, genre: "moral", type: "select", text: "みちに ゴミが おちていました。ゴミ箱（ばこ）が ちかくに ないとき、どうするのが 一番（いちばん） いいかな？", choices: ["おうちまで もちかえって すてる", "そのまま べつのばしょになげすてる", "みなかったこと にしてはしる", "土の中（つちのなか）にうめてかくす"], answer: "おうちまで もちかえって すてる", explanation: "せいかいは「おうちまで もちかえって すてる」！<br>まちを <b>きれいに する</b> ために、ゴミは じぶんで ちゃんと もちかえろうね！" },
	{ grade: 1, genre: "moral", type: "which", text: "やくそくの じかんや きまり は、だれも みていなければ やぶっても よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>きまり は <b>みんなが きもちよく くらすための おやくそく</b> だから、ひとりの ときも まもろうね！" }
]);

// 🟥 【その他：etc】
targetArray.push(...[
	{ grade: 1, genre: "etc", type: "select", text: "はるに さく、ピンクいろの きれいな 花（はな）で、学校の 入学式（にゅうがくしき）の ころに たくさん さく 木（き）は なあに？", choices: ["さくら", "ひまわり", "もみじ", "あじさい"], answer: "さくら", explanation: "せいかいは「さくら」！<br>はるの おとずれを <b>おいわい</b>して くれるように、きれいに さくよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "けんばんハーモニカを ふくとき、うしろの あなを ぜんぶ ふさがないと 音（おと）が でない。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>けんばんハーモニカは <b>ホースから いきを ふきながら</b> けんばんを おせば、音（おと）が でるよ！" },
	{ grade: 1, genre: "etc", type: "select", text: "ともだちと けんかを してしまったとき、なかよしに もどるために いう ことばは なあに？", choices: ["ごめんなさい", "ばいばい", "ありがとう", "おめでとう"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>すなおな きもちで <b>「ごめんなさい」</b>と いえば、きっと なかなおり できるよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "プールに はいる まえには、かならず じゅんびたいそうを する。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ケガを しないように、<b>あしもと や てくび</b>を しっかり うごかしてから プールに はいろうね！" },
	{ grade: 1, genre: "etc", type: "select", text: "ねんどを まるくて つるつるな カタチに するとき、手（て）の どこを つかって まるめるかな？", choices: ["手（て）のひら", "手（て）のこう", "ひじ", "ゆびのつめ"], answer: "手（て）のひら", explanation: "せいかいは「手（て）のひら」！<br>りょうほうの <b>手（て）のひら</b>で サンドイッチの ように はさんで コロコロ させると まるく なるよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "学校（がっこう）や こうえんや にわに いる、あきに 「リーン、リーン」と きれいな こえで なく 虫（むし）は すずむし である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あきの よるに <b>すずしい 音色（ねいろ）</b>を きかせて くれる 虫（むし）だよ！" },
	{ grade: 1, genre: "etc", type: "direct", text: "学校（がっこう）や こうえんや にわに いる、あきに 「リーン、リーン」と きれいな こえで なく 虫（むし）は なあに？（ひらがな4もじで こたえてね）", choices: [], answer: "すずむし", explanation: "せいかいは「すずむし」！<br>あきの よるに <b>すずしい 音色（ねいろ）</b>を きかせて くれる 虫（むし）だよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "おんがくの じかんに うたう ときは、したを むいて ちいさな こえで もそもそとうたう。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>せすじを のばして、<b>とおくへ とどくような げんきな こえ</b> で うたうと たのしいよ！" },
	{ grade: 1, genre: "etc", type: "select", text: "学校（がっこう）で、つかった つくえの うえ や、きょうしつの ゆか を きれいに おそうじ する どうぐは なあに？", choices: ["ほうき と ぞうきん", "はさみ と のり", "教科書 と ノート", "ランドセル"], answer: "ほうき と ぞうきん", explanation: "せいかいは「ほうき と ぞうきん」！<br>みんなで つかう きょうしつだから、<b>ほうき と ぞうきん</b> で ピカピカに しようね！" },
	{ grade: 1, genre: "etc", type: "which", text: "きゅうしょくを たべる まえ には、せっけん で きれいに 手（て）を あらう。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>バイきんを おうちの 中（なか）に いれないように、<b>せっけん</b> で ピカピカに あらおうね！" },
	{ grade: 1, genre: "etc", type: "select", text: "たいいくのじかんに、せんせいが「あつまれ！」と ふえを ふいたとき、さいしょに することは なあに？", choices: ["かけあしで せいんせいのところに あつまる", "そのばで すわって めをつぶる", "おともだちと おしゃべりをする", "にもつを かたづけに きょうしつにもどる"], answer: "かけあしで せいんせいのところに あつまる", explanation: "せいかいは「かけあしで せいんせいのところに あつまる」！<br>ふえの 音（おと）が きこえたら、<b>すばやく あつまろう</b> ね！" }
]);
// 🟥 【論理的思考力：logical】
targetArray.push(...[
	{ grade: 1, genre: "logical", type: "which", text: "ボウリングで、10本（ぽん）の ピンのうち 4本（ほん） たおれました。のこって たっている ピンの かずは 5本（ほん）である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>10本（ぽん）から 4本（ほん） ひくと、のこりは <b>6本（ぽん）</b> だね！" },
	{ grade: 1, genre: "logical", type: "select", text: "どうぶつたちが かけっこを しました。いぬくんは 2番目（ばんめ）でした。たぬきくんは いぬくんの すぐ うしろでした。たぬきくんは なん番目（ばんめ）に なるかな？", choices: ["1番目（いちばんめ）", "2番目（にばんめ）", "3番目（さんばんめ）", "4番目（よんばんめ）"], answer: "3番目（さんばんめ）", explanation: "せいかいは「3番目（さんばんめ）」！<br>2番目（にばんめ）の <b>すぐ うしろ</b> だから 3番目（さんばんめ） だね！" },
	{ grade: 1, genre: "logical", type: "which", text: "エレベーターが あります。1かいから 3かいまで あがるのに 10びょうかかりました。おなじ はやさで 1かいから 5かいまで あがるのに かかる じかんは 20びょうである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>1かい→3かいは 2かいぶん。1かい→5かいは 4かいぶんだから <b>20びょう</b> だね！" },
	{ grade: 1, genre: "logical", type: "select", text: "15この チョコレートが あります。おともだちに 5こ あげました。おとうさんが 2こ くれました。いま チョコレートは ぜんぶで なんこに なったかな？", choices: ["12こ", "10こ", "17こ", "8こ"], answer: "12こ", explanation: "せいかいは「12こ」！<br>15 − 5 ＋ 2 ＝ <b>12こ</b> だね！" },
	{ grade: 1, genre: "logical", type: "which", text: "とけいの ながい はりが「12」から「6」まで うごきました。じかんが 30ふんたったというのは まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>はんぶん まわると <b>30ふん</b> だよ！" },
	{ grade: 1, genre: "logical", type: "select", text: "あめが 12こ あります。いもうとに 4こ あげました。おかあさんが 3こ くれました。いま あめは ぜんぶで なんこに なったかな？", choices: ["11こ", "8こ", "15こ", "9こ"], answer: "11こ", explanation: "せいかいは「11こ」！<br>12 − 4 ＋ 3 ＝ <b>11こ</b> だね！" },
	{ grade: 1, genre: "logical", type: "which", text: "クッキーの はこに 10まい はいっていました。あさ 3まい たべ、ひる 4まい たべたら、のこりは 5まいである。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>10 − 3 − 4 ＝ <b>3まい</b> だね！" },
	{ grade: 1, genre: "logical", type: "which", text: "ある おみせは、あさ 9じに ひらいて、よる 6じに しまります。この おみせが ひらいている じかんは 10じかんである。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>9じ→12じで 3じかん、12じ→6じで 6じかん。3＋6＝<b>9じかん</b> だね！" },
	{ grade: 1, genre: "logical", type: "which", text: "いけに カモが 6わ いました。3わ どこかへ とんでいき、そのあと 1わ もどってきました。いま カモは 4わである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>6 － 3 ＝ 3わ、そこに 1わ もどるから 3 ＋ 1 ＝ <b>4わ</b> だね！" },
	{ grade: 1, genre: "logical", type: "select", text: "ひきだしの なかに えんぴつが 8本（ぽん） あります。あかえんぴつが 3本（ぼん）、あおえんぴつが 2本（ほん）、のこりは くろえんぴつです。くろえんぴつは なん本（ぼん） あるかな？", choices: ["3本（ぼん）", "2本（ほん）", "5本（ほん）", "4本（ほん）"], answer: "3本（ぼん）", explanation: "せいかいは「3本（ぼん）」！<br>赤（あか）と 青（あお）を あわせて 3 ＋ 2 ＝ 5本（ほん）。ぜんたいから ひくと 8 － 5 ＝ <b>3本（ぼん）</b> だね！" }
]);
// 🟥 【発想力：creative】
targetArray.push(...[
	{ grade: 1, genre: "creative", type: "select", text: "まっしろな かみに、しろい クレヨンで えを かきました。そのあと、どうすれば えが みえるように なるかな？", choices: ["上（うえ）から水（みず）の えのぐを ぬる", "けしゴムで ぜんぶ けす", "ハサミで こまかく きる", "くらい へやに もっていく"], answer: "上（うえ）から水（みず）の えのぐを ぬる", explanation: "せいかいは「上（うえ）から水（みず）の えのぐを ぬる」！<br>クレヨンが <b>えのぐを はじく</b>から、かいた えが パッと うかびあがるよ！" },
	{ grade: 1, genre: "creative", type: "which", text: "「えんぴつ」の うしろに「けしゴム」を くっつけると、いつでも もじが けせる べんりな どうぐになる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ちがう どうぐを <b>ドッキング</b> させることで、あたらしい アイデアが うまれたんだよ！" },
	{ grade: 1, genre: "creative", type: "select", text: "ジュースを のむときに つかう、ほそくて あなが あいた くだを なにというかな？", choices: ["ストロー", "コップ", "スプーン", "フォーク"], answer: "ストロー", explanation: "せいかいは「ストロー」！<br>ストローは むかし、<b>むぎわら</b>を つかって つくられていたんだよ！" },
	{ grade: 1, genre: "creative", type: "which", text: "かみを まあるく つつの かたちに して のぞくと、とおくが よく みえる ぼうえんきょうのような あそびが できる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ただの ひらたい かみでも、<b>かたちを かえる</b>ことで たのしい おもちゃに へんしんするよ！" },
	{ grade: 1, genre: "creative", type: "select", text: "「うちわ」を もっと すずしく するために、でんきで はねを じどうで まわすように ひらめいた かでんは なあに？", choices: ["せんぷうき", "テレビ", "れいぞうこ", "せんたくき"], answer: "せんぷうき", explanation: "せいかいは「せんぷうき」！<br>「あおぐ」という はたらきを <b>でんきの ちから</b>と むすびつけたんだね！" },
	{ grade: 1, genre: "creative", type: "which", text: "ダンボールの はこを くみあわせて へやを つくると、じぶんだけの「ひみつきち」を ひらめくことが できる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ゴミに なる はこでも、<b>はっそうを かえれば</b> すてきな おもちゃに なるんだよ！" },
	{ grade: 1, genre: "creative", type: "which", text: "へやを あかるく するための でんきゅうを はつめいした、ひらめきの てんさいの なまえは「エジソン」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あきらめずに なんかいも じっけんをして、<b>あたらしい あかり</b>を うみだした えらい 人（ひと）だよ！" },
	{ grade: 1, genre: "creative", type: "direct", text: "「糸（いと）」と「虫（むし）」という 2つの ことばを くみあわせると、ある むしの なまえに なるよ。まゆを つくる この むしは なあに？（ひらがな 3もじ）", choices: [], answer: "かいこ", explanation: "せいかいは「かいこ」！<br>かんじで かくと <b>蚕（かいこ）</b>になって、いとを だす むしの ことだよ！" },
	{ grade: 1, genre: "creative", type: "direct", text: "目の上（めのうえ）に、よこに ながく はえていて、あせが 目（め）に はいらないように まもってくれる けの なまえは なあに？（ひらがな 3もじ）", choices: [], answer: "まゆげ", explanation: "せいかいは「まゆげ」！<br>かおの パーツの <b>やくわり</b>を つなげて かんがえると、パッと ひらめくね！" },
	{ grade: 1, genre: "creative", type: "select", text: "えのぐの「青（あお）」と「赤（あか）」を まぜると、どんな いろに なるかな？", choices: ["むらさき", "みどり", "みずいろ", "はいいろ"], answer: "むらさき", explanation: "せいかいは「むらさき」！<br>ちがう いろを <b>くみあわせる</b>ことで、あたらしくて きれいな いろが うまれるよ！" }
]);
// 🟥 【水平思考力：tricky】
targetArray.push(...[
	{ grade: 1, genre: "tricky", type: "which", text: "おじいちゃんが、1日（にち）に 3かい しんぶんを よみます。1週間（しゅうかん）で しんぶんが おうちに とどく かずは 21回である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>しんぶんは <b>よむ かいすう</b> に かんけいなく、おうちに とどくのは 1日（にち）に <b>「1かい（または あさと ゆうがたの 2かい）」</b> だからだよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "ねこが 3びき います。1ぴきの ねこが 1ぴきの ネズミを つかまえるのに 3ふん かかります。3びきの ねこが 3びきの ネズミを どうじに つかまえるには なんふん かかるかな？", choices: ["3ふん", "1ふん", "9ふん", "6ふん"], answer: "3ふん", explanation: "せいかいは「3分」！<br>みんなが <b>どうじに よーいドン！</b> で つかまえるから、じかんは かわらず <b>3ふん</b> だよ！" },
	{ grade: 1, genre: "tricky", type: "which", text: "1本（ぽん）の えんぴつを、まんなかから パキッと 2つに わりました。とがっている しんの ぶぶんは、ぜんぶで 2かしょに なった。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>わった だけだから、もともと とがっていた <b>さいしょの 1かしょ</b> だけだね！はんたいがわは とがっていないよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "いけに カエルが 5ひき いました。そこに てんてきの ヘビが 1ぴき やってきました。カエルは おいけに ぜんぶで なんびき のこっているかな？", choices: ["0ひき", "5ひき", "4ひき", "6ぴき"], answer: "0匹", explanation: "せいかいは「0匹」！<br>ヘビが きたから、カエルたちは びっくりして <b>みんな 水（みず）の中（なか）に にげて</b> しまったよ！" },
	{ grade: 1, genre: "tricky", type: "which", text: "10この リンゴを、2人（り）の こどもに おなじ かずずつ わけます。1人（り） 5こずつりんごをもっている。 まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ひっかけは ありません！ 10を はんぶんに すると <b>5こ</b> だね。たまには すなおな もんだいも でるよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "あなたの おとうさんと おかあさんの あいだに うまれた こどもが います。でも、あなたの きょうだいでは ありません。この こどもは だれかな？", choices: ["じぶん", "いとこ", "おともだち", "だれでもない"], answer: "じぶん", explanation: "せいかいは「じぶん」！<br>あなたの きょうだい ではないなら、それは <b>あなた じしん</b> のことだよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "1本（ぽん）の ひもが あります。ハサミで 1（かい） パチンと きると、ひもは ぜんぶで 何本（なんぼん）に わかれるかな？", choices: ["2本（ほん）", "1本（ぽん）", "3本（ぼん）", "0本（ほん）"], answer: "2本（ほん）", explanation: "せいかいは「2本」！<br>1つの ものを 1かい きると、<b>2つの パーツ</b> に わかれるよね！だまされなかったかな？" }
]);

}
