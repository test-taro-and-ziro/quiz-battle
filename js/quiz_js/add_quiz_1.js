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
	{ grade: 1, genre: "japanese", type: "select", text: "「きりん」の 数えかた（かぞえかた）は なあに？", choices: ["〜頭（とう）", "〜匹（ひき）", "〜羽（わ）", "〜本（本）"], answer: "〜頭（とう）", explanation: "せいかいは「〜頭（とう）」！<br>大きい どうぶつは <b>「頭（とう）」</b> と数える（かぞえる）ことが 多いよ！" },
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
	{ grade: 1, genre: "etc", type: "select", text: "はるに さく、ピンク色の きれいな はなで、がっこうの 入学式（にゅうがくしき）の ころに たくさん さく き（木）は なあに？", choices: ["さくら", "ひまわり", "もみじ", "あじさい"], answer: "さくら", explanation: "せいかいは「さくら」！<br>はるの おとずれを <b>お祝い（おいわい）</b>して くれるように、きれいに さくよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "ピアニカ（鍵盤ハーモニカ）を ふくとき、うしろの あなを ぜんぶ ふさがないと おとが でない。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>ピアニカは <b>ホースから いきを ふきながら</b> けんばん（鍵盤）を おせば、おとが でるよ！" },
	{ grade: 1, genre: "etc", type: "select", text: "ともだちと けんか（喧嘩）を してしまったとき、仲良し（なかよし）に もどるために いう ことばは なあに？", choices: ["ごめんなさい", "ばいばい", "ありがとう", "おめでとう"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>すなおな きもちで <b>「ごめんなさい」</b>と いえば、きっと なかなおり できるよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "プールに はいる まえ（前）には、かならず 準備（じゅんび）たいそうを する。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ケガを しないように、<b>あしもと や てくび</b>を しっかり うごかしてから プールに はいろうね！" },
	{ grade: 1, genre: "etc", type: "select", text: "ねんど（粘土）を まるくて つるつるな カタチに するとき、手の どこを つかって 丸める（まるめる）かな？", choices: ["手のひら", "手のこう", "ひじ", "ゆびのつめ"], answer: "手のひら", explanation: "せいかいは「手のひら」！<br>両方（りょうほう）の <b>手のひら</b>で サンドイッチの ように はさんで コロコロ させると 丸く（まるく） なるよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "がっこうの こうえんや 庭（にわ）に いる、あきに 「リーン、リーン」と きれいな こえ（声）で なく むし（虫）は すずむし である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あきの よるに <b>すずしい 音色（ねいろ）</b>を きかせて くれる むし（虫）だよ！" },
	{ grade: 1, genre: "etc", type: "select", text: "たいいく（体育）のじかんに、せんせい（先生）が「あつまれ！」と フエ（笛）を ふいたとき、さいしょに することは なあに？", choices: ["走って先生の前に並ぶ", "その場で座って目をつぶる", "お友達とおしゃべりをする", "荷物を片付けに教室へ戻る"], answer: "走って先生の前に並ぶ", explanation: "せいかいは「走って先生の前に並ぶ」！<br>フエの 音（おと）が 聞こえたら（きこえたら）、<b>すばやく 集まって（あつまって）</b> 整列（せいれつ） しようね！" },
	{ grade: 1, genre: "etc", type: "which", text: "おんがく（音楽）の じかんに うたう ときは、したを むいて ちいさな お声（こえ）で もそもそとうたう。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>せすじを のばして、<b>とおくへ とどくような げんきな お声</b> で うたうと たのしいよ！" },
	{ grade: 1, genre: "etc", type: "select", text: "がっこうで、つかった つくえ（机）の うえ や、お教室（きょうしつ）の ゆか を きれいに おそうじ する どうぐは なあに？", choices: ["ほうき と ぞうきん", "はさみ と のり", "教科書 と ノート", "ランドセル"], answer: "ほうき と ぞうきん", explanation: "せいかいは「ほうき と ぞうきん」！<br>みんなで つかう お教室だから、<b>ほうき と ぞうきん</b> で ピカピカに しようね！" },
	{ grade: 1, genre: "etc", type: "which", text: "きゅうしょく（給食）を たべる まえ には、せっけん で きれいに 手を あらう。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>バイきん（菌）を おうちの なかに いれないように、<b>せっけん</b> で ピカピカに あらおうね！" },
	{ grade: 1, genre: "etc", type: "select", text: "はるに さく、ピンク色の きれいな はなで、がっこうの 入学式（にゅうがくしき）の ころに たくさん さく き（木）は なあに？", choices: ["さくら", "ひまわり", "もみじ", "あじさい"], answer: "さくら", explanation: "せいかいは「さくら」！<br>はるの おとずれを <b>お祝い（おいわい）</b>して くれるように、きれいに さくよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "ピアニカ（鍵盤ハーモニカ）を ふくとき、うしろの あなを ぜんぶ ふさがないと おとが でない。まるか ばつか？", choices: [false, true], answer: false, explanation: "せいかいは「ばつ」！<br>ピアニカは <b>ホースから いきを ふきながら</b> けんばん（鍵盤）を おせば、おとが でるよ！" },
	{ grade: 1, genre: "etc", type: "select", text: "ともだちと けんか（喧嘩）を してしまったとき、仲良し（なかよし）に もどるために いう ことばは なあに？", choices: ["ごめんなさい", "ばいばい", "ありがとう", "おめでとう"], answer: "ごめんなさい", explanation: "せいかいは「ごめんなさい」！<br>すなおな きもちで <b>「ごめんなさい」</b>と いえば、きっと なかなおり できるよ！" },
	{ grade: 1, genre: "etc", type: "which", text: "プールに はいる まえ（前）には、からだを ならすために、かならず 準備（じゅんび）たいそうを する。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ケガを しないように、<b>あしもと や てくび</b>を しっかり うごかしてから プールに はいろうね！" },
	{ grade: 1, genre: "etc", type: "select", text: "ねんど（粘土）を まるくて つるつるな カタチに するとき、手の どこを つかって 丸める（まるめる）かな？", choices: ["手のひら", "手のこう", "ひじ", "ゆびのつめ"], answer: "手のひら", explanation: "せいかいは「手のひら」！<br>両方（りょうほう）の <b>手のひら</b>で サンドイッチの ように はさんで コロコロ させると 丸く（まるく） なるよ！" },
	{ grade: 1, genre: "etc", type: "direct", text: "がっこうの こうえんや 庭（にわ）に いる、あきに 「リーン、リーン」と きれいな こえ（声）で なく むし（虫）は なあに？（ひらがな4もじで こたえてね）", choices: [], answer: "すずむし", explanation: "せいかいは「すずむし」！<br>あきの よるに <b>すずしい 音色（ねいろ）</b>を きかせて くれる むし（虫）だよ！" },
	{ grade: 1, genre: "etc", type: "select", text: "たいいく（体育）のじかんに、せんせい（先生）が「あつまれ！」と フエ（笛）を ふいたとき、さいしょに することは なあに？", choices: ["走って先生の前に並ぶ", "その場で座って目をつぶる", "お友達とおしゃべりをする", "荷物を片付けに教室へ戻る"], answer: "走って先生の前に並ぶ", explanation: "せいかいは「走って先生の前に並ぶ」！<br>フエの 音（おと）が 聞こえたら（きこえたら）、<b>すばやく 集まって（あつまって）</b> 整列（せいれつ） しようね！" }
]);
// 🟥 【論理的思考力：logical】
targetArray.push(...[
	{ grade: 1, genre: "logical", type: "which", text: "ボウリングで、10本の ピンのうち 4本 たおれました。のこって 立って（たって）いる ピンの かずは 5本である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>10本から 4本 ひくと、のこりは <b>6本</b> だね。つじつまが あわないよ！" },
	{ grade: 1, genre: "logical", type: "select", text: "どうぶつたちが かけっこを しました。いぬくんは 2い（2位）でした。たぬきくんは いぬくんの すぐうしろでした。たぬきくんは 何位（なんい）に なるかな？", choices: ["3位", "1位", "4位", "2位"], answer: "3位", explanation: "せいかいは「3位」！<br>2位の <b>すぐ うしろ</b> だから、2の つぎの <b>3位</b> に なるね！" },
	{ grade: 1, genre: "logical", type: "which", text: "エレベーターが あります。1かい（1階）から 3かいまで あがるのに 10びょう（秒） かかりました。同じ はやさで 1かいから 5かいまで あがるのに かかる 時間は 20びょうである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>1かいから 3かいまでは 2階分（かいぶん） あがります（10びょう）。1かいから 5かいまでは 4階分 あがるので、10 ＋ 10 ＝ <b>20びょう</b> で つじつまが あうよ！" },
	{ grade: 1, genre: "logical", type: "select", text: "15個（こ）の チョコレートが あります。おともだちに 5個 あげました。おとうさんが 2個 くれました。いま チョコレートは ぜんぶで 何個（なんこ）に なったかな？", choices: ["12個", "10個", "17個", "8個"], answer: "12個", explanation: "せいかいは「12個」！<br>15個から 5個 ひくと 10個。そこに 2個 たすから、10 ＋ 2 ＝ <b>12個</b> だね！" },
	{ grade: 1, genre: "logical", type: "which", text: "とけいの ながい はりが「12」から「6」まで うごきました。時間が 30分（ぷん） たったというのは まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>時計の はりが 半分（はんぶん） まわると、ぴったり <b>30分</b> たったことに なるよ！" },
	{ grade: 1, genre: "logical", type: "select", text: "あめ玉が 12個 あります。いもうとに 4個 あげました。お母さんが 3個 くれました。いま あめ玉は ぜんぶで 何個に なったかな？", choices: ["11個", "8個", "15個", "9個"], answer: "11個", explanation: "せいかいは「11個」！<br>12 － 4 ＝ 8個。そこに 3個 たすから、8 ＋ 3 ＝ <b>11個</b> に なるよ！" },
	{ grade: 1, genre: "logical", type: "which", text: "クッキーの はこに 10枚（まい） 入っていました。あさ 3枚 たべ、ひる 4枚 たべたら、のこりは 5枚である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>たべたのは あわせて 3 ＋ 4 ＝ 7枚。のこりは 10 － 7 ＝ <b>3枚</b> に なるよ！" },
	{ grade: 1, genre: "logical", type: "select", text: "ある おみせ（お店）は、あさ 9じ（時）に ひらいて、よる 6じに しまります。この おみせが ひらいている じかんは 何時間かな？", choices: ["9じ間", "10時間", "8時間", "6時間"], answer: "9じ間", explanation: "せいかいは「9じ間」！<br>9じから 12じまでで 3時間。12じから 6じまでで 6時間。3 ＋ 6 ＝ <b>9じ間</b> だね！" },
	{ grade: 1, genre: "logical", type: "which", text: "お池（おいけ）に カモが 6羽（わ） いました。3羽 どこかへ 飛んで（とんで）いき、そのあと 1羽 もどってきました。いま カモは 4羽である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>6 － 3 ＝ 3羽、そこに 1羽 もどるから 3 ＋ 1 ＝ <b>4羽</b> で けいさんが 合うよ！" },
	{ grade: 1, genre: "logical", type: "select", text: "ひき出しの なかに えんぴつが 8本 あります。赤えんぴつが 3本（ぼん）、青えんぴつが 2本、のこりは 黒えんぴつです。黒えんぴつは 何本 あるかな？", choices: ["3本（ぼん）", "2本", "5本", "4本"], answer: "3本（ぼん）", explanation: "せいかいは「3本（ぼん）」！<br>赤と 青を あわせて 3 ＋ 2 ＝ 5本。全体から ひくと 8 － 5 ＝ <b>3本（ぼん）</b> だね！" },
	{ grade: 1, genre: "logical", type: "direct", text: "どうぶつたちが かけっこを しました。いぬくんは 2い（2位）でした。たぬきくんは いぬくんの すぐうしろでした。たぬきくんは なんい（何位）かな？（すうじで こたえてね）", choices: [], answer: "3", explanation: "せいかいは「3」！<br>2い（2位）の <b>すぐ うしろ</b> だから、2の つぎの <b>3い（3位）</b> に なるね！" },
	{ grade: 1, genre: "logical", type: "which", text: "ボウリングで、10本の ピンのうち 4本 たおれました。のこって 立って（たって）いる ピンの かずは 5本である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>10本から 4本 ひくと、のこりは <b>6本</b> だね。つじつまが あわないよ！" },
	{ grade: 1, genre: "logical", type: "direct", text: "15個（こ）の チョコレートが あります。おともだちに 5個 あげました。おとうさんが 2個 くれました。いま チョコレートは ぜんぶで 何個（なんこ）に なったかな？（すうじで こたえてね）", choices: [], answer: "12", explanation: "せいかいは「12」！<br>15個から 5個 ひくと 10個。そこに 2個 たすから、10 ＋ 2 ＝ <b>12個</b> だね！" },
	{ grade: 1, genre: "logical", type: "which", text: "エレベーターが あります。1かい（1階）から 3かいまで あがるのに 10びょう（秒） かかりました。同じ はやさで 1かいから 5かいまで あがるのに かかる 時間は 20びょうである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>1かいから 3かいまでは 2階分（かいぶん） あがります（10びょう）。1かいから 5かいまでは 4階分 あがるので、10 ＋ 10 ＝ <b>20びょう</b> で つじつまが あうよ！" },
	{ grade: 1, genre: "logical", type: "which", text: "時計の ながい はりが「12」から「6」まで うごきました。時間が 30分 たったというのは まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>時計の はりが 半分 まわると、ぴったり <b>30分</b> たったことに なるよ！" },
	{ grade: 1, genre: "logical", type: "which", text: "ある おみせ（お店）は、あさ 9じ（時）に ひらいて、よる 6じに しまります。この おみせが ひらいている じかんは 10時間である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>9じから 12じまでで 3時間。12じ（ごご0じ）から 6じまでで 6時間。3 ＋ 6 ＝ <b>9じ間</b> だから つじつまが あわないね！" }
]);
// 🟥 【発想力：creative】
targetArray.push(...[
	{ grade: 1, genre: "creative", type: "select", text: "まっしろな かみ（紙）に、しろい クレヨンで えを 書きました。そのあと、どうすれば えが 見える（みえる）ように なるかな？", choices: ["上から水（みず）の絵の具をぬる", "消しゴムでぜんぶ消す", "ハサミで細かく切る", "暗い部屋に持っていく"], answer: "上から水（みず）の絵の具をぬる", explanation: "せいかいは「上から水（みず）の絵の具をぬる」！<br>クレヨンが <b>絵の具を はじく</b>から、書いた えが パッと うかびあがるよ！" },
	{ grade: 1, genre: "creative", type: "which", text: "「えんぴつ」の うしろに「消しゴム」を くっつけると、いつでも 文字（もじ）が 消せる 便利な どうぐになる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ちがう 道具を <b>ドッキング（合体）</b> させることで、あたらしい アイデアが 生まれたんだよ！" },
	{ grade: 1, genre: "creative", type: "select", text: "ジュースを のむときに つかう、ほそくて あなが あいた クダ（管）を なにというかな？", choices: ["ストロー", "コップ", "スプーン", "フォーク"], answer: "ストロー", explanation: "せいかいは「ストロー」！<br>ストローは むかし、<b>「むぎわら（藁）」</b>を つかって 作られて（つくられて）いたんだよ！" },
	{ grade: 1, genre: "creative", type: "which", text: "紙（かみ）を まあるく 筒（つつ）の カタチに して のぞくと、遠くが（とおくが） よく 見える（みえる） 望遠鏡（ぼうえんきょう）のような 遊びが できる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ただの 平らな（たいらな） 紙でも、<b>カタチを 変える（かえる）</b> ことで 楽しい おもちゃに変身するよ！" },
	{ grade: 1, genre: "creative", type: "select", text: "「うちわ」を もっと 涼しく（すずしく） するために、でんきで 羽（はね）を 自動（じどう）で ぶーんと 回す（まわす）ように ひらめいた 家電（かでん）は なあに？", choices: ["せんぷうき", "テレビ", "冷蔵庫", "洗濯機"], answer: "せんぷうき", explanation: "せいかいは「せんぷうき」！<br>「あおぐ」という 役割（やくわり）を <b>電気のちから</b> と 結びつけたんだね！" },
	{ grade: 1, genre: "creative", type: "which", text: "「ダンボールの箱（はこ）」を 組み合わせて（くみあわせて） お部屋（おへや）を 作ると（つくる）、自分だけの「ひみつ基地（きち）」を ひらめくことができる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ゴミに なる 箱でも、<b>発想（はっそう）を 変えれば</b> 素敵なおもちゃに なるんだよ！" },
	{ grade: 1, genre: "creative", type: "select", text: "「雨（あめ）」が たくさん ふる 日に、お外（おそと）で 遊ぶ（あそぶ） どうぐの「かさ（傘）」を 使って（つかって）、どんな 楽しい 遊びが ひらめくかな？", choices: ["パラシュートみたいにふわっと跳ぶごっこ", "かさの上でボールをまわす芸", "かさの中に雨水（みず）をためる実験", "かさをバットにして野球をする"], answer: "かさの中に雨水（みず）をためる実験", explanation: "せいかいは「かさの中に雨水（みず）をためる実験」！<br>雨を防ぐ（ふせぐ）だけでなく、<b>「雨をあつめる」</b> という 逆の発想（ぎゃくのはっそう）が ひらめきだね！" },
	{ grade: 1, genre: "creative", type: "which", text: "お部屋を 明るく するための 電球を発明した、ひらめきの 天才の名前は「エジソン」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>あきらめずに 何回も 実験をして、<b>新しい 灯り（あかり）</b> を 生み出した 偉い（えらい） 人だよ！" },
	{ grade: 1, genre: "creative", type: "direct", text: "「いと（糸）」と「むし（虫）」という 2つの ことばを くみあわせると、ある むしの なまえに なります。まゆを 作る（つくる） この むしは なあに？（ひらがな3もじ）", choices: [], answer: "かいこ", explanation: "せいかいは「かいこ」！<br>かんじで と（かくと）<b>「蚕（かいこ）」</b>になって、糸を だす 虫の ことなんだよ！" },
	{ grade: 1, genre: "creative", type: "direct", text: "「め（目）」の うえ（上）に、よこに ながく はえている、あせが 目に はいらないように 守って（まもって）くれる 毛（け）の なまえは なあに？（ひらがな3もじで こたえてね）", choices: [], answer: "まゆげ", explanation: "せいかいは「まゆげ」！<br>お顔（かお）の パーツの <b>やくわり（役割）</b>を つなげて 考えると、パッと ひらめくね！" },
	{ grade: 1, genre: "creative", type: "select", text: "ジュースを のむときに つかう、ほそくて あなが あいた クダ（管）を なにというかな？（カタカナ5もじ）", choices: ["ストロー", "コップ", "スプーン", "フォーク"], answer: "ストロー", explanation: "せいかいは「ストロー」！<br>ストローは むかし、<b>「むぎわら（藁）」</b>を つかって 作られて（つくられて）いたんだよ！" },
	{ grade: 1, genre: "creative", type: "select", text: "まっしろな かみ（紙）に、しろい クレヨンで えを 書きました（かきました）。そのあと、どうすれば えが 見える（みえる）ように なるかな？", choices: ["上から水（みず）の絵の具をぬる", "消しゴムでぜんぶ消す", "ハサミで細かく切る", "暗い部屋に持っていく"], answer: "上から水（みず）の絵の具をぬる", explanation: "せいかいは「上から水（みず）の絵の具をぬる」！<br>クレヨンが <b>絵の具を はじく</b>から、書いた（かいた） えが パッと うかびあがるよ！" },
	{ grade: 1, genre: "creative", type: "select", text: "お部屋を 明るく するための 電球を発明した、世界で 一（いち）番 有名な ひらめきの 天才の名前はどれかな？", choices: ["エジソン", "ニュートン", "ノーベル", "アインシュタイン"], answer: "エジソン", explanation: "せいかいは「エジソン」！<br>「失敗は 成功の もと」と 信じて、たくさんの <b>ひらめきを 形に</b> した 人だよ！" },
	{ grade: 1, genre: "creative", type: "select", text: "えのぐの「あお（青）」と「あか（赤）」を しっかり まぜると、どんな いろに なるかな？", choices: ["むらさき（紫）", "みどり（緑）", "みずいろ（水（みず）色）", "はいいろ（灰色）"], answer: "むらさき（紫）", explanation: "せいかいは「むらさき（紫）」！<br>ちがう いろを <b>くみあわせる</b>ことで、あたらしくて きれいな いろが 生まれる（うまれる）よ！" }
]);
// 🟥 【水（みず）平思考力：tricky】
targetArray.push(...[
	{ grade: 1, genre: "tricky", type: "which", text: "おじいちゃんが、1日に 3回 新聞（しんぶん）を 読みます。1週間（いっしゅうかん）で 新聞が おうちに 届く（とどく） 回かずは 21回である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>新聞は <b>よむ 回数（かいすう）</b> に 関係なく（かんけいなく）、おうちに 届くのは 1日に <b>「1回（または朝夕2回）」</b> だからだよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "ねこ（猫）が 3匹 います。1匹の ねこが 1匹の ネズミを つかまえるのに 3分 かかります。3匹の ねこが 3匹の ネズミを 同時に（どうじに） つかまえるには 何分 かかるかな？", choices: ["3分", "1分", "9分", "6分"], answer: "3分", explanation: "せいかいは「3分」！<br>みんなが <b>同時に よーいドン！</b> で つかまえるから、時間は かわらず <b>3分</b> だよ！" },
	{ grade: 1, genre: "tricky", type: "which", text: "1本の 鉛筆（えんぴつ）を、真ん中（まんなか）から パキッと 2つに 割りました（わりました）。尖って（とがって）いる 芯（しん）の ぶぶんは、全部で 2箇所に なった。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>割った（わった） だけだから、もともと 尖って（とがって）いた <b>最初の 1箇所</b> だけだね！はんたい側（はんたいがわ）は 尖っていないよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "お池（おいけ）に カエルが 5匹 いました。そこに 天敵（てんてき）の ヘビが 1匹 やってきました。カエルは お池に ぜんぶで 何匹（なんびき） 残って（のこって）いるかな？", choices: ["0匹", "5匹", "4匹", "6匹"], answer: "0匹", explanation: "せいかいは「0匹」！<br>ヘビが きたから、カエルたちは びっくりして <b>みんな 水（みず）の中に 逃げて（にげて）</b> しまったよ！" },
	{ grade: 1, genre: "tricky", type: "which", text: "10個（こ）の リンゴを、2人の 子どもに 同じ（おなじ） 数ずつ 分けます。1人 5個に なるというのは まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ひっかけは ありません！ 10を 半分に すると <b>5個</b> だね。たまには 素直な（すなおな） 問題も 出るよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "あなたの お父さんと お母さんの あいだに 生まれた 子どもが います。でも、あなたの 兄弟（きょうだい）では ありません。この 子どもは 誰かな？", choices: ["自分（じぶん）", "いとこ", "お友達", "だれでもない"], answer: "自分（じぶん）", explanation: "せいかいは「自分（じぶん）」！<br>あなたの 兄弟ではないなら、それは <b>あなた 自身（じしん）</b> のことだよ！" },
	{ grade: 1, genre: "tricky", type: "which", text: "カゴの なかに、みかんが 4個 あります。4人の 子どもに 1個ずつ 分けました（わけました）。カゴの なかには もう みかんは 1個も 残って（のこって）いない。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>最後の（さいごの） 1人に、<b>カゴに いれた まま</b> みかんを わたせば、カゴの中に 1個 残る（のこる）という ひっかけだよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "1本の ひもが あります。ハサミで 1回（いっかい） パチンと 切ると（きると）、ひもは 全部で（ぜんぶで） 何本に わかれるかな？", choices: ["2本", "1本", "3本（ぼん）", "0本"], answer: "2本", explanation: "せいかいは「2本」！<br>1つの ものを 1回 切ると、<b>2つの パーツ（本）</b> に わかれるよね！だまされなかったかな？" },
	{ grade: 1, genre: "tricky", type: "direct", text: "おじいちゃんが、1日に 3回（さんかい） 新聞（しんぶん）を 読みます（よみます）。1週間（いっしゅうかん）で なんかい（何回） 新聞を よむかな？（ひらがな3もじで こたえてね：○○○）", choices: [], answer: "1かい", explanation: "せいかいは「1かい」！<br>新聞（しんぶん）は <b>「よむ（よむ）」</b> のではなく、1日に <b>「1回（1かい）」</b> おうちに 届く（とどく） ものだからだよ！" },
	{ grade: 1, genre: "tricky", type: "direct", text: "お池（おいけ）に カエルが 5匹（ごひき） いました。そこに ヘビが 1匹 やってきました。カエルは ぜんぶで 何匹（なんびき）に なったかな？（ひらがな3もじで こたえてね：○○○）", choices: [], answer: "0ひき", explanation: "せいかいは「0ひき（ゼロひき）」！<br>天敵（てんてき）の <b>ヘビが きたから</b>、カエルたちは びっくりして <b>みんな 逃げて（にげて）</b> しまったよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "10個（こ）の リンゴを、2人の 子どもに 同じ（おなじ） 数ずつ（かずずつ） 分けます（わけます）。1人 なん個（こ）に なるかな？", choices: ["5個", "2個", "10個", "0個"], answer: "5個", explanation: "せいかいは「5個」！<br>ひっかけは ありません！ 10を 半分に（はんぶんに） すると <b>5個</b> だね。たまには 素直な（すなおな） 問題も 出るよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "ねこ（猫）が 3匹（さんびき） います。1匹の ねこが 1匹の ネズミを つかまえるのに 3分（さんぷん） かかります。3匹の ねこが 3匹の ネズミを 同時に（どうじに） つかまえるには 何分（なんぷん） かかるかな？", choices: ["3分", "1分", "9分", "6分"], answer: "3分", explanation: "せいかいは「3分」！<br>みんなが <b>同時に（どうじに） よーいドン！</b> で つかまえるから、時間は かわらず <b>3分</b> だよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "あなたの お父さんと お母さんの あいだに 生まれた 子どもが います。でも、あなたの お兄ちゃんでも、お姉ちゃんでも、弟でも、妹でも ありません。この 子どもは 誰かな？", choices: ["自分（じぶん）", "いとこ", "お友達", "だれでもない"], answer: "自分（じぶん）", explanation: "せいかいは「自分（じぶん）」！<br>あなたの 兄弟ではないなら、それは <b>あなた 自身</b> のことだよ！" },
	{ grade: 1, genre: "tricky", type: "select", text: "1本の 鉛筆（えんぴつ）を、真ん中（まんなか）から パキッと 2つに 割りました。尖って（とがって）いる 芯（しん）の ぶぶんは、全部で 何箇所に なったかな？", choices: ["1箇所", "2箇所", "0箇所", "4箇所"], answer: "1箇所", explanation: "せいかいは「1箇所」！<br>割った だけだから、もともと 尖っていた <b>最初の 1箇所</b> だけだね！はんたい側は 尖っていないよ！" }
]);

}
