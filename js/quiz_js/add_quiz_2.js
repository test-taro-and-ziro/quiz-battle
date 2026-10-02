// ==========================================
// 👶 小学校2年生向け（grade: 2）クイズデータ追加
// 💡 親から配列を関数として受け取る
export function loadQuestions2(targetArray) {
	
// 🟥 【こくご：japanese】
targetArray.push(...[
	{ grade: 2, genre: "japanese", type: "select", text: "「新（あたら）しい」の はんたいの ことばは どれかな？", choices: ["古（ふる）い", "うつくしい", "ながい", "たかい"], answer: "古（ふる）い", explanation: "せいかいは「古（ふる）い」！<br>新（あたら）しい ⇔ <b>古（ふる）い</b> は はんたいの いみだよ！" },
	{ grade: 2, genre: "japanese", type: "select", text: "草 や 花 の うえに ついている ぶしゅの なまえは なあに？", choices: ["くさかんむり", "さんずい", "きへん", "にんべん"], answer: "くさかんむり", explanation: "せいかいは「くさかんむり」！<br>しょくぶつに かんけいする かんじには <b>くさかんむり</b> が つくよ！" },
	{ grade: 2, genre: "japanese", type: "which", text: "「聞（き）く」という かんじの なかには、耳 が はいっている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>もんの なかで <b>耳</b> を すます かたちから できた かんじだよ！" },
	{ grade: 2, genre: "japanese", type: "which", text: "「話す（はなす）」の はんたいは「言う（いう）」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>「話す（はなす）」の はんたいは <b>黙る（だまる）</b> が ちかいよ！" },
	{ grade: 2, genre: "japanese", type: "select", text: "しゅご（だれが・なにが）を えらんでね。【犬 が げんきに はしる。】", choices: ["犬 が", "げんきに", "はしる", "なし"], answer: "犬 が", explanation: "せいかいは「犬 が」！<br>ぶんの なかで <b>〜が・〜は</b> に あたる ところを しゅご と いうよ！" },
	{ grade: 2, genre: "japanese", type: "which", text: "「海（うみ）」の ひだりがわに ある ぶしゅは「さんずい」である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>みずに かんけいする かんじには <b>さんずい</b> が つくよ！" },
	{ grade: 2, genre: "japanese", type: "select", text: "「日記（にっき）」の「記（き）」の よみかたは なあに？【たのしい おもいでを ノートに ○す】", choices: ["しるす", "はなす", "よむ", "かく"], answer: "しるす", explanation: "せいかいは「しるす」！<br>にっきに きろくして <b>かきしるす</b> という いみだよ！" },
	{ grade: 2, genre: "japanese", type: "which", text: "「北（きた）」の はんたいの ほうがくは「東（ひがし）」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>北（きた）の はんたいは <b>南（みなみ）</b> だよ！" },
	{ grade: 2, genre: "japanese", type: "select", text: "「海（うみ）」の 左 がわに ついている ぶしゅ は どれかな？", choices: ["さんずい", "くさかんむり", "きへん", "にんべん"], answer: "さんずい", explanation: "せいかいは「さんずい」！<br>水 に かんけいする 漢字 に よく つくよ！" },
	{ grade: 2, genre: "japanese", type: "select", text: "「話す（はなす）」の かんじ に ふくまれている ぶしゅ は どれ？", choices: ["ごんべん", "さんずい", "くさかんむり", "てへん"], answer: "ごんべん", explanation: "せいかいは「ごんべん」！<br>ことば に かんけいする 漢字 に つくよ！" },
	{ grade: 2, genre: "japanese", type: "which", text: "「記（き）」という かんじ は、なにか を しるす とき に つかう。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>日記（にっき）など で つかう 漢字 だよ！" },
	{ grade: 2, genre: "japanese", type: "select", text: "「林（はやし）」という かんじ は、木 が いくつ ならんでいる すがた かな？", choices: ["2本", "3本", "4本", "1本"], answer: "2本", explanation: "せいかいは「2本」！<br>木 が 2つ ならんだ かたち だよ！" },
	{ grade: 2, genre: "japanese", type: "which", text: "「明（あか）るい」という かんじ は、日 と 月 が くみあわさって できている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>日 と 月 が そろって あかるさ を あらわすよ！" },
	{ grade: 2, genre: "japanese", type: "select", text: "「空（そら）」の かんじ に ふくまれている ぶしゅ は どれ？", choices: ["あなかんむり", "くさかんむり", "ごんべん", "てへん"], answer: "あなかんむり", explanation: "せいかいは「あなかんむり」！<br>あな の かたち から できた 部首 だよ！" },
	{ grade: 2, genre: "japanese", type: "direct", text: "「木」が 3つ あつまった かんじ を なんと よむ？（ひらがな3もじ）", choices: [], answer: "もり", explanation: "せいかいは「もり」！<br>木 が 3つ あつまって できた 漢字 だよ！" },
	{ grade: 2, genre: "japanese", type: "which", text: "「体（からだ）」という かんじ は、にんべん が ついている。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>にんべん は 人 に かんけいする 漢字 に つくよ！" },
	{ grade: 2, genre: "japanese", type: "select", text: "「村」という かんじ の 左 がわ に ついている ぶしゅ は なに？", choices: ["きへん", "さんずい", "ごんべん", "くさかんむり"], answer: "きへん", explanation: "せいかいは「きへん」！<br>木 に かんけいする 漢字 に つくよ！" }
]);
// 🟦 【さんすう：math】
targetArray.push(...[
	{ grade: 2, genre: "math", type: "select", text: "かけ算（さん）の 九九（くく）クイズ！【 2 × 4 が 8、2 × 5 が 10、2 × 6 が 12 】では、2 × 7 は いくつかな？", choices: ["14", "16", "15", "12"], answer: "14", explanation: "せいかいは「14」！<br>2の だんは 2ずつ ふえていくから、12＋2＝<b>14</b> だね！" },
	{ grade: 2, genre: "math", type: "which", text: "長さ（ながさ）の たんいの クイズです。「1センチメートル」は「10ミリメートル」と 同じ 長さである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>じょうぎの 小さな 10めもりぶんが <b>1センチメートル</b> になるよ！" },
	{ grade: 2, genre: "math", type: "select", text: "【 130 ➔ 140 ➔ 150 ➔ 〇 ➔ 170 】〇に 入る 正しい 数は どれかな？", choices: ["160", "155", "165", "200"], answer: "160", explanation: "せいかいは「160」！<br>10ずつ ふえる きそくに なっているから、150の つぎは <b>160</b> だよ！" },
	{ grade: 2, genre: "math", type: "which", text: "「1じかん」は「60分（ふん）」ですが、「1分（ふん）」は「100びょう」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>「1分（ふん）」は 100びょうではなく <b>60びょう</b> だよ！とけいの 長い（ながい） はりが 1めもり うごく じかんだね！" },
	{ grade: 2, genre: "math", type: "select", text: "ひっ算（さん）の けいさんクイズ！【 45＋28＝〇 】〇に はいる かずは なあに？", choices: ["73", "63", "72", "65"], answer: "73", explanation: "せいかいは「73」！<br>一のくらい（5＋8＝13）で 1くり上がって、十のくらいは 1＋4＋2＝7。あわせて <b>73</b> だね！" },
	{ grade: 2, genre: "math", type: "which", text: "水の かさを あらわす たんいクイズ！「1リットル」は「1000ミリリットル」と 同じ（おなじ） りょうである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ミリは「1000分の1」という いみだから、1000あつまると <b>1リットル</b> になるよ！" },
	{ grade: 2, genre: "math", type: "select", text: "九九（くく）の クイズ！5の だんで、答え（こたえ）が「35」に なるのは 5に なにを かけた ときかな？", choices: ["7", "6", "8", "5"], answer: "7", explanation: "せいかいは「7」！<br>5 × 7 <b>35</b> だね！" },
	{ grade: 2, genre: "math", type: "which", text: "三角形（さんかっけい）の カタチの へんの 数（かず）は、ちょうてんの 数より 多い。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>三角形（さんかっけい）は へんも 3本、ちょうてんも 3つで <b>同じ（おなじ）</b> だよ！" },
	{ grade: 2, genre: "math", type: "select", text: "はこの 中に クッキーが 24こ 入っています。1人に 4こずつ くばると、なん人に くばれるかな？", choices: ["6人", "5人", "7人", "8人"], answer: "6人", explanation: "せいかいは「6人」！<br>九九（くく）の 4の だんで、4×<b>6</b>＝24 だから 6人に くばれるよ！" },
	{ grade: 2, genre: "math", type: "which", text: "ひき算（さん）クイズ！【 82−37＝45 】この けいさんの 答え（こたえ）は 正しい。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>一のくらいは 12−7＝5、十のくらいは 7−3＝4。あわせて <b>45</b> で あっているよ！" },
	{ grade: 2, genre: "math", type: "select", text: "15＋8 の 答え（こたえ）は どれかな？", choices: ["23", "22", "24", "21"], answer: "23", explanation: "せいかいは「23」！<br>15に 8を たすと <b>23</b> だよ！" },
	{ grade: 2, genre: "math", type: "which", text: "12−7 の 答え（こたえ）は 5 である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>12から 7を ひくと <b>5</b> だよ！" },
	{ grade: 2, genre: "math", type: "select", text: "9＋6 の 答え（こたえ）は どれかな？", choices: ["14", "15", "13", "16"], answer: "15", explanation: "せいかいは「15」！<br>9に 6を たすと <b>15</b> だね！" },
	{ grade: 2, genre: "math", type: "which", text: "20−9 の 答え（こたえ）は 11 である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>20から 9を ひくと <b>11</b> だよ！" },
	{ grade: 2, genre: "math", type: "select", text: "7＋8 の 答え（こたえ）は どれ？", choices: ["14", "15", "16", "13"], answer: "15", explanation: "せいかいは「15」！<br>7に 8を たすと <b>15</b> だよ！" },
	{ grade: 2, genre: "math", type: "which", text: "18−5 の 答え（こたえ）は 13 である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>18から 5を ひくと <b>13</b> だよ！" },
	{ grade: 2, genre: "math", type: "select", text: "25＋7 の 答え（こたえ）は どれかな？", choices: ["31", "32", "33", "30"], answer: "32", explanation: "せいかいは「32」！<br>25に 7を たすと <b>32</b> だね！" },
	{ grade: 2, genre: "math", type: "which", text: "30−18 の 答え（こたえ）は 12 である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>30から 18を ひくと <b>12</b> だよ！" },
	{ grade: 2, genre: "math", type: "select", text: "14＋9 の 答え（こたえ）は どれ？", choices: ["22", "23", "24", "21"], answer: "23", explanation: "せいかいは「23」！<br>14に 9を たすと <b>23</b> だよ！" },
	{ grade: 2, genre: "math", type: "which", text: "27−8 の 答え（こたえ）は 19 である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>27から 8を ひくと <b>19</b> だよ！" }
]);
// 🟦 【理科：science】
targetArray.push(...[
	{ grade: 2, genre: "science", type: "select", text: "いきもの かんさつクイズ！カブトムシのせいちゅうの足はぜんぶでなん本あるかな？", choices: ["6本", "4本", "8本", "2本"], answer: "6本", explanation: "せいかいは「6本」！<br>虫のなかまはからだが3つにわかれていて足が<b>6本</b>あるよ！" },
	{ grade: 2, genre: "science", type: "which", text: "タンポポの黄色い（きいろい）花が咲いたあとには白いわたげができる。まるかばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>白い<b>わたげ</b>の下にはタネがついていて風（かぜ）にのってとおくへとぶよ！" },
	{ grade: 2, genre: "science", type: "select", text: "ザリガニが後ろ（うしろ）に にげるときの およぎかたの とくちょうはどれかな？", choices: ["しっぽをグッとまるめる", "ハサミを大きくふる", "足をいっせいにうごかす", "よこにカニあるきする"], answer: "しっぽをグッとまるめる", explanation: "せいかいは「しっぽをグッとまるめる」！<br>おなかの下にある<b>しっぽをつよくまるめる</b>ことで 水をおしだし うしろにすばやくすすむよ！" },
	{ grade: 2, genre: "science", type: "which", text: "カマキリの幼虫（ようちゅう）には 最初（さいしょ）から 大きな はねが はえている。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>カマキリの 赤ちゃんには <b>はねが ありません</b>。脱皮（だっぴ）を くりかえして 大人になると はねが はえるよ！" },
	{ grade: 2, genre: "science", type: "select", text: "夏の夜（なつのよる）に おしりを 光（ひか）らせて とぶ 虫の 名前は なにかな？", choices: ["ホタル", "セミ", "カブトムシ", "クワガタ"], answer: "ホタル", explanation: "せいかいは「ホタル」！<br>水が きれいな ばしょで なかまと おしゃべりする ように <b>光（ひかり）を てんめつ</b>させて とぶよ！" },
	{ grade: 2, genre: "science", type: "which", text: "モンシロチョウの 青虫（あおむし）は キャベツの はっぱを たべる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>青虫（あおむし）は <b>キャベツ</b>の はっぱが 大すきで たくさん たべて 大きな さなぎに なるよ！" },
	{ grade: 2, genre: "science", type: "select", text: "アサガオの くきが しちゅうに まきつく ほうこうは どっちかな？", choices: ["左まき", "右まき", "まっすぐ 上に 行く", "決まっていない"], answer: "左まき", explanation: "せいかいは「左まき」！<br>アサガオの つるは 上から 見て とけいと はんたいの <b>左まき</b>に まきつくよ！" },
	{ grade: 2, genre: "science", type: "which", text: "カエルは 冬（ふゆ）の さむい じきに 土の 中で ねむって すごす。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>これを <b>とうみん</b>と いい、たべものが ない 冬（ふゆ）の あいだ 春（はる）を まつよ！" },
	{ grade: 2, genre: "science", type: "select", text: "犬や 猫（ねこ）の 赤ちゃんは 生まれた あと 最初（さいしょ）に なにを のんで 大きく なるかな？", choices: ["お乳（ミルク）", "お水", "草の スープ", "ジュース"], answer: "お乳（ミルク）", explanation: "せいかいは「お乳（ミルク）」！<br>赤ちゃんを <b>お乳で そだてる</b> いきものを 哺乳類（ほにゅうるい）と いうよ！" },
	{ grade: 2, genre: "science", type: "which", text: "アサガオの 花は お昼（ひる）の いちばん あつい じかんに さく。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>アサガオは <b>朝（あさ）の はやい じかん</b>に ひらきはじめて 朝（あさ）に きれいに さくよ！" }
]);
// 🟦 【社会：social】
targetArray.push(...[
	{ grade: 2, genre: "social", type: "select", text: "みんなが すんでいる ちいきに ある、むかしの どうぐや まちの れきしを かざってあって、べんきょうに いける たてものは なにかな？", choices: ["はくぶつかん・しりょうかん", "えいがかん", "ゆうえんち", "ぎんこう"], answer: "はくぶつかん・しりょうかん", explanation: "せいかいは「博物館（はくぶつかん）・資料館」！<br>むかしの どうぐや まちの うつりかわりを 見学（けんがく）できるよ！" },
	{ grade: 2, genre: "social", type: "which", text: "私たちが 毎日（まいにち） つかう おさつや 硬貨（こうか）は、家（いえ）で 自由（じゆう）に いんさつして 作ってよい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>お金は 国（くに）の とくべつな こうじょうだけで、ルールに したがって つくられているよ！" },
	{ grade: 2, genre: "social", type: "select", text: "まちの 中を かんさつする クイズ！ 道路（どうろ）に ある、車が スピードを 出しすぎないように ちゅういを うながす 青い まるい かんばんは なにかな？", choices: ["どうろひょうしき", "おみせのかんばん", "ポスター", "地図（ちず）"], answer: "どうろひょうしき", explanation: "せいかいは「どうろひょうしき」！<br>人や 車が あんぜんに とおれるように、いろいろな やくそくが かいてある かんばんだよ！" },
	{ grade: 2, genre: "social", type: "which", text: "まちに ある ゆうびんポストの 色は、日本の どこでも きほんてきに あか色である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>とおくから 見ても すぐ わかるように、めだつ あか色に とういつされているよ！" },
	{ grade: 2, genre: "social", type: "select", text: "ちいきの ニュースや たいせつな おしらせが かいてあって、家（いえ）に とどく 大きな 紙の束（かみのたば）は なにかな？", choices: ["しんぶん", "きょうかしょ", "えほん", "ノート"], answer: "しんぶん", explanation: "せいかいは「しんぶん」！<br>せかいや 日本、そして ちいきの できごとが たくさん かいてある じょうほうの かみだよ！" },
	{ grade: 2, genre: "social", type: "which", text: "お店で かいものを した ときに もらう レシートは、いらないから ゆかに すててよい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>レシートは 買い物の きろくだから、家に もちかえるか お店の ごみばこに すてようね！" },
	{ grade: 2, genre: "social", type: "select", text: "まちに ある、本を だれでも むりょうで かりて よむことが できる しずかな こうきょうの たてものは どこかな？", choices: ["としょかん", "本屋（ほんや）さん", "学校（がっこう）", "おもちゃ屋さん"], answer: "としょかん", explanation: "せいかいは「としょかん」！<br>たくさんの 本が あって、やくそくを まもれば だれでも かりて よめるよ！" },
	{ grade: 2, genre: "social", type: "which", text: "私たちが 毎日 のむ すいどうすいは、川の 水を そのまま きれいにしないで 家（いえ）に おくっている。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>じょうすいじょうで バイキンや どろを きれいにしてから あんぜんな 水に して とどけているよ！" },
	{ grade: 2, genre: "social", type: "select", text: "秋（あき）に なると、ちいきの 人たちが あつまって、みこしを かついだり やたいが でたりする たのしい 行事（ぎょうじ）は なにかな？", choices: ["おまつり）", "うんどうかい", "にゅうがくしき", "えんそく"], answer: "おまつり", explanation: "せいかいは「おまつり」！<br>ちいきの 人たちが なかよく なり、かみさまに かんしゃする むかしからの 行事（ぎょうじ）だよ！" },
	{ grade: 2, genre: "social", type: "which", text: "火事（かじ）を 見つけたり、きゅうびょうの 人が いた ときに 電話（でんわ）で かける ばんごうは 119番（ばん）である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>しょうぼうしょにつながり、しょうぼう車や きゅうきゅう車が たすけに きてくれる ばんごうだよ！" }
]);
// 🟥 【英語：english】
targetArray.push(...[
	{ grade: 2, genre: "english", type: "select", text: "「11」から「20」までの 数字クイズ！ 「12」は 英語（えいご）で なんと いうかな？", choices: ["twelve（トゥエルブ）", "eleven（イレブン）", "thirteen（サーティーン）", "twenty（トゥエンティ）"], answer: "twelve（トゥエルブ）", explanation: "せいかいは「twelve（トゥエルブ）」！<br>とけいの いちばん 上に ある 数字も <b>twelve</b> だね！" },
	{ grade: 2, genre: "english", type: "which", text: "「お父さん」は 英語（えいご）で「mother（マザー）」という。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>「お父さん」は <b>father（ファザー）</b> というよ！mother は「お母さん」だね！" },
	{ grade: 2, genre: "english", type: "select", text: "「にちようび」は 英語（えいご）で なんというかな？", choices: ["Sunday（サンデー）", "Monday（マンデー）", "Friday（フライデー）", "Saturday（サタデー）"], answer: "Sunday（サンデー）", explanation: "せいかいは「Sunday（サンデー）」！<br>（たいよう：sun）の 日だから <b>Sunday</b> とおぼえると わかりやすいよ！" },
	{ grade: 2, genre: "english", type: "which", text: "英語（えいご）で「milk（ミルク）」と かいたら、私たちが 毎日（まいにち） のむ「ぎゅうにゅう」のことである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>白い（しろい） からだによい のみものは <b>milk</b> だね！" },
	{ grade: 2, genre: "english", type: "select", text: "学校（がっこう）の 教室（きょうしつ）に ある、みんなが つかう「つくえ」は 英語（えいご）で なんというかな？", choices: ["desk（デスク）", "chair（チェアー）", "notebook", "pencil"], answer: "desk（デスク）", explanation: "せいかいは「desk（デスク）」！<br>「つくえ」は <b>desk</b>、「いす」は <b>chair</b> というよ！" },
	{ grade: 2, genre: "english", type: "which", text: "「ノート」は 英語（えいご）で「pencil（ペンシル）」と かく。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>「ノート」は 英語（えいご）で <b>notebook</b> というよ！pencil は「えんぴつ」のことだね！" },
	{ grade: 2, genre: "english", type: "select", text: "どうぶつ村の「きつね」は 英語（えいご）で なんというかな？", choices: ["fox（フォックス）", "wolf（ウルフ）", "monkey（モンキー）", "deer（ディア）"], answer: "fox（フォックス）", explanation: "せいかいは「fox（フォックス）」！<br>お耳が とがった カッコいい <b>fox</b> だね！" },
	{ grade: 2, genre: "english", type: "which", text: "「もも」は 英語（えいご）で「peach（ピーチ）」という。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>ピンク色の あまくて おいしい くだものは <b>peach</b> だよ！" },
	{ grade: 2, genre: "english", type: "select", text: "「10、20、30、40、〇」 〇に はいる 「50」の 英語（えいご）の よみかたは なあに？", choices: ["fifty（フィフティ）", "fifteen（フィフティーン）", "forty（フォーティ）", "five（ファイブ）"], answer: "fifty（フィフティ）", explanation: "せいかいは「fifty（フィフティ）」！<br>15の 「fifteen」と まちがえやすいから きをつけようね！" },
	{ grade: 2, genre: "english", type: "which", text: "「おともだち」は 英語（えいご）で「friend（フレンド）」という。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>なかよしの おともだちの ことは <b>friend</b> とよぶよ！" }
]);
// 🟥 【道徳：moral】
targetArray.push(...[
	{ grade: 2, genre: "moral", type: "select", text: "おともだちが わすれものを して こまっているとき、あなたなら どうするかな？", choices: ["自分のものを「一緒に使おう」と貸してあげる", "「だらしないぞ」とからかう", "先生（せんせい）に言いつけて怒らせる", "関係ない（かんけいない）と知らん顔をする"], answer: "自分のものを「一緒に使おう」と貸してあげる", explanation: "せいかいは「自分のものを「一緒に使おう」と貸してあげる」！<br>困った ときは <b>お互い様（おたがいさま）</b> だから、優しく（やさしく） 助け合おう（たすけあおう）ね！" },
	{ grade: 2, genre: "moral", type: "which", text: "おうちの 人が、自分の ために 毎日（まいにち） ごはんを 作ったり（つくったり） お洗濯（せんたく）をしてくれるのは、当たり前（あたりまえ）だから 感謝（かんしゃ）しなくてもよい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>家族（かぞく）の ために 頑張って（がんばって）くれている 人に、<b>「いつも ありがとう」</b> の 気持ち（きもち）を 伝えよう（つたえよう）ね！" },
	{ grade: 2, genre: "moral", type: "select", text: "みんなで 使う（つかう） 公園（こうえん）の 遊具（ゆうぐ）に、誰かが（だれかが） 落書き（らくがき）を していました。どう思う（おもう）かな？", choices: ["みんなの場所だから、汚されて悲しい気持ちになる", "かっこいいから自分ももっと書こうと思う", "自分には関係ないからどうでもいいと思う", "遊具が壊れなくてよかったと安心する"], answer: "みんなの場所だから、汚されて悲しい気持ちになる", explanation: "せいかいは「みんなの場所だから、汚されて悲しい気持ちになる」！<br>みんなの 公園は <b>みんなで 綺麗に（きれいに） 使う（つかう）</b> のが、大切な（たいせつな） ルールだよ！" },
	{ grade: 2, genre: "moral", type: "which", text: "お友達の 良い（よい） ところや、頑張って（がんばって）いる 姿（すがた）を見つけたら、言葉（ことば）に 出して 褒める（ほめる）。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>お友達の <b>素敵な（すてきな） ところ</b> を 認め合う（みとめあう）と、クラスが もっと 仲良し（なかよし）に なるよ！" },
	{ grade: 2, genre: "moral", type: "select", text: "お店（おみせ）の レジでお金を 払う（はらう）とき、長い（ながい） 列（れつ）が できていました。どうするのが 正しいかな？", choices: ["自分の順番がくるまで、後ろに並んで待つ", "「急いでいるんだ」と言って割り込む", "前の人を押してどかせる", "買い物をするのを諦めて帰る"], answer: "自分の順番がくるまで、後ろに並んで待つ", explanation: "せいかいは「自分の順番がくるまで、後ろに並んで待つ」！<br>公共の（こうきょうの） 場所（ばしょ）では、<b>順番（じゅんばん）を 守る（まもる）</b> のが みんなの 大切な 約束（やくそく）だよ！" },
	{ grade: 2, genre: "moral", type: "which", text: "自分が 失敗（しっぱい）をして しまったときは、言い訳（いいわけ）を したり 嘘（うそ）を ついたりして 隠す（かくす）ほうが よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>失敗は 誰でも（だれでも） するものだから、<b>正直に（しょうじきに） お話をして（おはなして）</b> 反省（はんせい）する 態度（たいど）が 大切だよ！" },
	{ grade: 2, genre: "moral", type: "select", text: "クラスで 係（かかり）の お仕事を 決めました（きめました）。自分の やりたかった 係に なれなかったとき、どんな 気持ちで 取り組む（とりくむ）と いいかな？", choices: ["決まった係の仕事を、責任を持って一生懸命やる", "悔しいからわざとサボる", "別の人に自分の仕事を全部押し付ける", "怒って学校を休む"], answer: "決まった係の仕事を、責任を持って一生懸命やる", explanation: "せいかいは「決まった係の仕事を、責任を持って一生懸命やる」！<br>どんな お仕事でも <b>みんなの ために なる 大切な 役割（やくわり）</b> だから、最後まで 頑張ろうね！" },
	{ grade: 2, genre: "moral", type: "which", text: "お年寄り（おとしより）や、小さな（ちいさな） 子どもが 困って（こまって）いるのを見つけたら、進んで（すすんで） 声を かけて 助ける（たすける）。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>地域の（ちいきの） 仲間（なかま）として、<b>弱い（よわい） 立場の（たちばの） 人を 思いやる（おもいやる）</b> 行動（こうどう）は 素晴らしい（すばらしい）ことだよ！" },
	{ grade: 2, genre: "moral", type: "select", text: "学校（がっこう）の 水道（すいどう）を 使った（つかった） あと、お水（みず）が ポタポタ 垂れて（たれて）いました。どうするのが 一番（いちばん） いいかな？", choices: ["ギュッと蛇口（じゃぐち）を閉めて、お水を大切にする", "「誰かが閉めるだろう」と無視する", "もっとたくさん出るようにひねる", "水道を壊して遊ぶ"], answer: "ギュッと蛇口（じゃぐち）を閉めて、お水を大切にする", explanation: "せいかいは「ギュッと蛇口（じゃぐち）を閉めて、お水を大切にする」！<br>地球の（ちきゅうの） <b>資源（しげん：水や電気）を 大切に（たいせつに） 使う（つかう）</b> ことは、みんなの 役目（やくめ）だよ！" },
	{ grade: 2, genre: "moral", type: "which", text: "お友達の 秘密（ひみつ：他の人に言わないでと言われたこと）は、面白そう（おもしろそう）だから クラスの 全員に（ぜんいんに） 言いふらしても よい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>約束（やくそく）を 破ると（やぶると）、お友達を <b>深く（ふかく） 傷つけ（きずつつけ）、信頼（しんらい）を 失って（うしなって）しまう</b> よ！" }
]);
// 🟥 【その他：etc】
targetArray.push(...[
	{ grade: 2, genre: "etc", type: "which", text: "はさみで かみを きるとき、はさみを うごかすよりも、かみを うごかした ほうが キレイに きれる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br><b>かみ</b>を うごかしながら きると、カーブも きれいに きれるよ！" },
	{ grade: 2, genre: "etc", type: "select", text: "ミニトマトの なえを そだてるとき、黄色い（きいろい） 花が さいた あとに できるものは なあに？", choices: ["みどり色の小さな実（み）", "あかい大きなスイカ", "きみどり色の長いはっぱ", "あおいあさがおの花"], answer: "みどり色の小さな実（み）", explanation: "せいかいは「みどり色の小さな実（み）」！<br>さいしょは <b>みどり色の 小さな 実（み）</b>が できて、それが だんだん 赤く なるんだよ！" },
	{ grade: 2, genre: "etc", type: "direct", text: "秋（あき）に なると、こうえん などで ひろうことができる、ぼうしを かぶった まるくて ちゃいろい 木（き）の 実（み）は なあに？（ひらがな4もじで こたえてね）", choices: [], answer: "どんぐり", explanation: "せいかいは「どんぐり」！<br>秋（あき）に なると、たくさん <b>どんぐり</b>が おちているのを見つけられるよ！" },
	{ grade: 2, genre: "etc", type: "select", text: "おんがくの じゅぎょうで、「おんど」に あわせて てびょうしを するとき、どんな リズムが おおいかな？", choices: ["えがおでげんきに「パン、パン」", "おやすみ前の「トントン」", "ものすごくはやい「パラパラ」", "おそうしきのときの「ポクポク」"], answer: "えがおでげんきに「パン、パン」", explanation: "せいかいは「えがおでげんきに「パン、パン」」！<br>日本の <b>おまつり</b>の おんがくなどは、みんなで たのしく てびょうしを するよ！" },
	{ grade: 2, genre: "etc", type: "which", text: "たいいくの マットうんどうで、うしろまわりを するときは、手のひらを てんじょうに むける。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>耳の（みみの） よこに <b>手のひらを 上に むけて</b> じゅんびすると、マットを しっかり おせるよ！" },
	{ grade: 2, genre: "etc", type: "select", text: "ザリガニを いきもの かんさつのために かうとき、水そうに いれる 水のりょうは どれくらいが いいかな？", choices: ["ザリガニのせなかがすこしでるくらい", "水そうのいちばん上までいっぱい", "水は入れずにすなだけにする", "ザリガニがおよげるくらいふかく"], answer: "ザリガニのせなかがすこしでるくらい", explanation: "せいかいは「ザリガニのせなかがすこしでるくらい」！<br>ザリガニは <b>空気（くうき）を すう</b> ひつようが あるから、水は あさく して、もぐれる かくれがを いれようね！" },
	{ grade: 2, genre: "etc", type: "direct", text: "がようしに クレヨンで 絵（え）を かいた あと、その上から 水で うすめた 絵の具（えのぐ）を ぬると、どうなるかな？（ひらがな3もじで こたえてね：○○く）", choices: [], answer: "はじく", explanation: "せいかいは「はじく」！<br>クレヨンには <b>油（あぶら）</b>が はいって いるから、水の 絵の具（えのぐ）を パッとはじいて、ふしぎな もように なるよ！" },
	{ grade: 2, genre: "etc", type: "select", text: "たいいくの なわとび で、「まえとび」を じょうずに とぶ ための いちばん たいせつな コツ は どれかな？", choices: ["リズムよくおなじばしょでとぶ", "できるだけたかく大ジャンプする", "はしりまわりながらとぶ", "めをつぶってちからいっぱいたたく"], answer: "リズムよくおなじばしょでとぶ", explanation: "せいかいは「リズムよくおなじばしょでとぶ」！<br>からだが ブレないように、<b>リズムよく トントン とぶ</b> のが じょうずになる ひけつだよ！" },
	{ grade: 2, genre: "etc", type: "which", text: "おうちの おてつだいで、ごはんの まえ に おおはしやおさらを ならべるのも「生活（せいかつ）」のおべんきょうである。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>おうちの なかでの <b>じぶんの おしごと（やくわり）</b> を がんばるのも、りっぱな おべんきょうなんだよ！" },
	{ grade: 2, genre: "etc", type: "select", text: "おんがくで つかう「タンバリン」を えんそうするとき、正しい 音の 出しかたは どれかな？", choices: ["手でたたく、またはふってならす", "足でちからいっぱいふんづける", "つくえにガンガンぶつける", "お口にくわえていきをふきこむ"], answer: "手でたたく、またはふってならす", explanation: "せいかいは「手でたたく、またはふってならす」！<br>手のひらで <b>トントンと たたいたり</b>、しゃかしゃかと <b>ふったり</b> して キレイな音を 出そうね！" },
	{ grade: 2, genre: "etc", type: "which", text: "たいいくで はしるとき、おともだちのふくを ひっぱって じゃまを してもよい。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>みんなで <b>ルールを まもって</b> いっしょうけんめい はしるのが、いちばん きもちいいんだよ！" }
]);
// 🟥 【論理的思考力：logical】
targetArray.push(...[
	{ grade: 2, genre: "logical", type: "select", text: "Aさん、Bさん、Cさんの 3人が はなしを しています。1人だけ うそを ついています。A「Bさんは うそを ついている」 B「Cさんは うそを ついていない」 C「私は うそを ついていない」 うそつきは だれかな？", choices: ["Aさん", "Bさん", "Cさん", "わからない"], answer: "Aさん", explanation: "せいかいは「Aさん」！<br>Aさんが うそを ついているとすると、Bさんと Cさんの はなしが どちらも つじつまが あうから、Aさん 1人だけが うそつきに なるよ！" },
	{ grade: 2, genre: "logical", type: "direct", text: "みかんの はこが あります。上から かぞえても、下から かぞえても、イチゴの はこは 3番目（3ばんめ）に あります。はこは ぜんぶで なんこ あるかな？（すうじで 答えてね）", choices: [], answer: "5", explanation: "せいかいは「5」！<br>イチゴの 上に 2こ、下に 2こ あるから、2 ＋ 1 ＋ 2 ＝ <b>5こ</b> に なるよ！" },
	{ grade: 2, genre: "logical", type: "select", text: "赤、青、白の ボールが 1こずつ あります。たろうくん、じろうくん、さぶろうくんが 1こずつ もちました。たろう「ぼくは白じゃない」 じろう「ぼくは赤をもったよ」 さぶろうくんの ボールはなにいろかな？", choices: ["白", "赤", "青"], answer: "白", explanation: "せいかいは「白」！<br>じろうくんが「赤」だから、のこるは 青と 白。たろうくんは「白じゃない」ので 青。消去法（しょうきょほう）で さぶろうくんが <b>「白」</b>を もっているよ！" },
	{ grade: 2, genre: "logical", type: "direct", text: "1本の 長い（ながい） まるたを、3つに 切り（きり）わけたいと おもいます。のこぎりで なんかい 切れば（きれば） いいかな？（すうじで 答えてね）", choices: [], answer: "2", explanation: "せいかいは「2」！<br>まるたを <b>2回（かい） チョキチョキと 切る（切る）</b>だけで、3つの パーツに わける） ことができるよ！" },
	{ grade: 2, genre: "logical", type: "select", text: "りんご、なし、ぶどうの くだものが あります。Aさん、Bさん、Cさんが 1つずつ たべました。A「私はぶどうじゃない」 B「私はなしをたべたよ」 Cさんが 食べたものは なにかな？", choices: ["りんご", "なし", "ぶどう"], answer: "ぶどう", explanation: "せいかいは「ぶどう」！<br>Bさんが「なし」だから、のこるは りんごとぶどう。Aさんは「ぶどうじゃない」のでりんご。消去法（しょうきょほう）で Cさんが <b>ぶどう</b> になるよ！" },
	{ grade: 2, genre: "logical", type: "select", text: "金（金）、銀（銀）、銅（銅）の メダルが あります。Aくん、Bくん、Cくんが 1こずつ もらいました。A「僕は金じゃない」 B「僕は銅をもらったよ」 Cくんの メダルは なにかな？", choices: ["金", "銀", "銅"], answer: "金", explanation: "せいかいは「金（きん）」！<br>Bくんが「銅」だから、のこるは 金と 銀。Aくんは「金じゃない」ので 銀。消去法で Cくんが <b>「金」</b>に なるよ！" },
	{ grade: 2, genre: "logical", type: "which", text: "1本の ひもを 4回（かい） ハサミで 切り（きり）ました。ひもは ぜんぶで 4本に わかれた。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>1本の ひもを 4回 切ると、切った 回数（かいすう）より 1つ 多い <b>5本</b> に わかれるよ！" },
	{ grade: 2, genre: "logical", type: "select", text: "たろうくん、じろうくん、さぶろうくんの 3人で せ くらべを しました。たろうくんは じろうくんより たかいです。じろうくんは さぶろうくんとおなじ たかさです。いちばん せが たかいのは だれかな？", choices: ["たろうくん", "じろうくん", "さぶろうくん", "おなじたかさ"], answer: "たろうくん", explanation: "せいかいは「たろうくん」！<br>じろうくんと さぶろうくんは おなじ たかさなので<b>たろうくんが いちばん たかい</b> ことになるよ！" },
	{ grade: 2, genre: "logical", type: "which", text: "おかしの はこが 6こ よこいちれつに ならんでいます。左から かぞえて 4番目の はこは、右から かぞえると 3番目である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>4番目の はこの 右がわには 2こ のこっているので、右から かぞえると 2 ＋ 1 ＝ <b>3番目</b> になるよ！" },
	{ grade: 2, genre: "logical", type: "which", text: "ノートを 4冊（さつ） かいました。1冊 100円（えん）です。500円玉を 1枚（まい） 出したら、おつりは 200円である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>ノートの だいきんは 400円だから、おつりは 500 － 400 ＝ <b>100円</b> に なるよ！" }
]);
// 🟥 【発想力：creative】
targetArray.push(...[
	{ grade: 2, genre: "creative", type: "select", text: "「かさ」の カタチを よく かんさつしてみましょう。こうえんに はえている どの いきものの カタチと そっくりかな？", choices: ["キノコ", "ひまわり", "チューリップ", "サボテン"], answer: "キノコ", explanation: "せいかいは「キノコ」！<br>どちらも <b>上が まるく ひろがっていて、一本の ぼうで ささえている</b> きょうつうの カタチだね！" },
	{ grade: 2, genre: "creative", type: "select", text: "かべに、カレンダーを かざりたいけれど、テープが ありません。かわりに つかえる、先（さき）が とがっていて おしりで グッと おす どうぐは なあに？", choices: ["がびょう", "クリップ", "はさみ", "ものさし"], answer: "がびょう", explanation: "せいかいは「がびょう」！<br>テープが なくても、<b>小さな はりが ついた おしピン</b>を つかうという あたらしい アイデアだね！" },
	{ grade: 2, genre: "creative", type: "direct", text: "アイスクリームを たべるとき、スプーンが なくて こまりました。おうちにある「かたいもの」で かわりに つかえる たいらな おかしは なあに？（ひらがな5文字）", choices: [], answer: "ビスケット", explanation: "せいかいは「ビスケット」！<br>スプーンが なくても、<b>クッキーや ビスケット</b>で すくって たべれば、いっしょに たべられて おいしいよ！" },
	{ grade: 2, genre: "creative", type: "which", text: "「しょくパン」の 白い ぶぶんを まるめて つかうと、けしゴムの かわりに えんぴつの 字を けすことができる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>むかしの 人は、<b>けしゴムが ないとき</b> に しょくパンを むすびつけて 字を けしていたんだよ！" },
	{ grade: 2, genre: "creative", type: "which", text: "「かがみ」の むきをかえて たいようの 光（ひかり）を はんしゃさせると、ひかげに 光を おくる あそびができる。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br>光（ひかり）を <b>あやつる どうぐ</b> として かがみを むすびつける たのしい ひらめきだよ！" },
	{ grade: 2, genre: "creative", type: "select", text: "すなばで あそんだ あと、手が どろどろに なりました。お水だけでは どろが おちにくいとき、あわを たくさん 出して よこれを おとす どうぐは なあに？", choices: ["せっけん", "のり", "けしゴム", "クレヨン"], answer: "せっけん", explanation: "せいかいは「せっけん」！<br>お水と <b>「せっけん」の あわ</b>を つけることで、あぶらや どろの よごれが パッと おちるよ！" },
	{ grade: 2, genre: "creative", type: "select", text: "夜（よる）におそとを あるくとき、くらくて 前が 見えません。手で もって 前を ピカッと てらす べんりな どうぐは なあに？", choices: ["かいちゅうでんとう", "ろうそく", "スマホ", "お月さま"], answer: "かいちゅうでんとう", explanation: "せいかいは「かいちゅうでんとう」！<br>小さな でんきゅうと <b>でんち</b>を むすびつけることで、もちはこべる あかりが ひらめいたんだよ！" }
]);
// 🟥 【水平思考力：tricky】
targetArray.push(...[
	{ grade: 2, genre: "tricky", type: "which", text: "100円 玉と 50円玉を 合わせて 2枚（まい） あります。そのうちの 1枚は 100円玉では ありません。もう1枚は 100円玉である。まるか ばつか？", choices: [true, false], answer: true, explanation: "せいかいは「まる」！<br><b>「そのうちの 1枚（50円玉のこと）は 100円玉ではない」</b> ということだから、もう1枚は ちゃんと <b>100円玉</b> だよ！" },
	{ grade: 2, genre: "tricky", type: "which", text: "キリン、ゾウ、チーターが はしっています。いちばん 耳が 長い（ながい） どうぶつは「ゾウ」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>ゾウの 耳は『大きい（おおきい）』けれど、<b>『長い（ながい）』</b>のは <b>キリン（またはウサギ）</b> だよ！ことばの ひっかけだね！" },
	{ grade: 2, genre: "tricky", type: "which", text: "スイカ、メロン、イチゴが あります。このなかで いちばん 大きな 木に なるのは「スイカ」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>スイカも メロンも イチゴも、ぜんぶ 木ではなく <b>はたけの 草に なる</b> くだものだよ！" },
	{ grade: 2, genre: "tricky", type: "which", text: "ウサギ、パンダ、カエルが プールのレースを しています。いちばん およぐのが はやい どうぶつは「カエル」である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>カエルは およぎが じょうずだけど、この中なら <b>パンダ（じつはおよぎがとくい）</b> のほうが スピードが はやいという いがいな クイズでした！" },
	{ grade: 2, genre: "tricky", type: "direct", text: "とりが 3羽（わ） でんせんに とまっていました。りょうしが てっぽうで 1羽を うちおとしました。でんせんには のこり なんわ 止まっているかな？（すうじで 答えてね）", choices: [], answer: "0", explanation: "せいかいは「0」！<br>てっぽうの <b>「バーン！」という 大きな 音</b>に びっくりして、うたれなかった のこりの 鳥（とり）も <b>すべて にげて</b> いっちゃったよ！" },
	{ grade: 2, genre: "tricky", type: "direct", text: "1組の 教室（きょうしつ）に、せいとが 10人 いました。先生が「全員（ぜんいん）、ろうかに 出なさい！」と言いました。教室には なんにん のこっているかな？（すうじで 答えてね）", choices: [], answer: "1", explanation: "せいかいは「1」！<br>せいとは 全員（ぜんいん） 出たけれど、命令（めいれい）した <b>「先生（せんせい）」が 1人</b> 教室（きょうしつ）に のこっているよ！" },
	{ grade: 2, genre: "tricky", type: "select", text: "ある お池（おいけ）に、白い 鳥（とり）が 5羽（わ） およいでいました。そのうち 2羽が、パタパタと お空へ とんでいきました。お池には のこり なんわの 鳥が およいでいるかな？", choices: ["3羽", "5羽", "0羽", "2羽"], answer: "3羽", explanation: "せいかいは「3羽（わ）」！<br>5 から 2を ひくのと おなじだから、5 － 2 ＝ <b>3羽</b> だよ！" },
	{ grade: 2, genre: "tricky", type: "which", text: "日本（にほん）で いちばん たかい 山は「富士山（ふじさん）」です。では、富士山が はっけんされる 前に、日本で いちばん たかかった 山は 別の山である。まるか ばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>人に <b>はっけんされる 前から</b>、日本で いちばん たかい 山は ずっと <b>富士山</b> だったよ！" },
	{ grade: 2, genre: "tricky", type: "select", text: "タロウくんには 3人の 兄弟（きょうだい）が います。1人目は「一郎」、2人目は「次郎」、3人目は「三郎」です。では、4人目の 兄弟の名前は なにかな？", choices: ["タロウ", "四郎", "小五郎", "なし"], answer: "タロウ", explanation: "せいかいは「タロウ」！<br>最初（さいしょ）に<b>「タロウくんには 3人の 兄弟がいる」</b>と 言っているから、4人目は <b>タロウくん 自身</b> だよ！" }
]);

}
