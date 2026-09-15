// ==========================================
// 💡 一括登録用クイズ
// ==========================================

// 📝 大量に登録したいクイズデータの配列（1レコード1行仕様）

// 幼児
export const bulkQuestionsData = [
    { grade: 0, genre: "moral", type: "select", text: "ともだちの おもちゃを つかいたいとき、なんて 言う？", choices: ["かして,という", "だまって とる", "おこる", "なきだす"], answer: "かして,という", explanation: "せいかいは「かして,という」だよ！<br>だまってとるとおともだちがかなしむから、<b>「かして」</b>といってやさしくじゅんばんをまとうね。" },
    { grade: 0, genre: "math", type: "select", text: "りんごが 3こ あります。2こ もらうと、ぜんぶで なんこ？", choices: ["5こ", "4こ", "1こ", "6こ"], answer: "5こ", explanation: "せいかいは「5こ」だよ！<br>あわせるからたしざんだね。<b>3 ＋ 2 ＝ 5</b> になるよ！" },
    { grade: 0, genre: "math", type: "select", text: "「8」の つぎに おおきい かずは なに？", choices: ["9", "5", "11", "6"], answer: "9", explanation: "せいかいは「9」だよ！<br>1,2,3,4,5,6,7,8……と数えていくと、8のつぎは<b>「9」</b>だね！" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを たべるとき、さいしょに 言う あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "ありがとう"], answer: "いただきます", explanation: "せいかいは「いただきます」だよ！<br>たべのものいのちや、つくってくれたひとに<span style='color:#ff7675; font-weight:bold;'>「ありがとう」のきもち</span>をこめていうたいせつなあいさつだね。" },
    { grade: 0, genre: "math", type: "direct", text: "1 + 1 は？", choices: [], answer: "2", explanation: "せいかいは「2」！<br><b>1 ＋ 1 ＝ 2</b>、さんすうのきほんだね" }
];
// 小学4年生
bulkQuestionsData.push(
    { grade: 4, genre: "math", type: "select", text: "三角形の面積を求める公式は？", choices: ["底辺 × 高さ", "半径 × 半経 × 3.14", "縦 × 横", "底辺 × 高さ ÷ 2"], answer: "底辺 × 高さ ÷ 2", explanation: "正解は「底辺 × 高さ ÷ 2」だよ！<br>四角形の面積の半分になるから、さいごの<b>「÷ 2」</b>を絶対に忘れないようにしよう！" },
    { grade: 4, genre: "moral", type: "select", text: "図書館など、みんなが使う場所での正しい過ごし方は？", choices: ["静かに過ごす", "大声で走る", "お菓子を食べる", "ゲームを大音量でする"], answer: "静かに過ごす", explanation: "正解は「静かに過ごす」です。<br>みんなが気持ちよく本を読めるように、公共の場所では<span style='color:#2ecc71; font-weight:bold;'>マナーを守って静かに</span>しようね。" },
    { grade: 4, genre: "math", type: "select", text: "時速60kmの車が、2時間で進む距離は？", choices: ["120km", "30km", "60km", "180km"], answer: "120km", explanation: "正解は「120km」だよ！<br>「速さ × 時間 ＝ 距離」だから、<b>60 × 2 ＝ 120</b> という計算になるね。" },
    { grade: 4, genre: "moral", type: "select", text: "SNSで友達の悪口を書いている人を見つけました。適切な行動は？", choices: ["関わらず、大人や先生に相談する", "自分も一緒に書き込む", "その人を強く責め立てる", "面白そうなので友達に拡散する"], answer: "関わらず、大人や先生に相談する", explanation: "正解は「関わらず、大人や先生に相談する」です。<br>トラブルに巻き込まれないよう自分は関わらず、すぐに<span style='color:#ff7675; font-weight:bold;'>大人や先生に報告</span>しよう。" },
    { grade: 4, genre: "moral", type: "select", text: "「責任（せきにん）を持つ」とはどういうこと？", choices: ["自分の失敗を認め、次につなげること", "絶対に失敗しないこと", "誰かのせいにすること", "嫌なことから逃げること"], answer: "自分の失敗を認め、次につなげること", explanation: "正解は「自分の失敗を認め、次につなげること」です。<br>失敗しても他人のせいにせず、<b>自分の行動を引き受けること</b>が本当にカッコいい大人への一歩だよ。" },
    { grade: 4, genre: "math", type: "direct", text: "25 × 4 の答えはいくつ？", choices: [], answer: "100", explanation: "正解は「100」だよ！<br><b>25 × 4 ＝ 100</b> は算数でとってもよく使う計算だから、セットで覚えておくと便利だよ！" },
    { grade: 4, genre: "moral", type: "which", text: "友達が困っているときは、声をかけずに放っておくのが正しい行動である。○か×か？", choices: ["○", "×"], answer: "×", explanation: "正解は×（バツ）だよ！<br>なにか手伝えることがないか、<b>「どうしたの？」</b>と優しく声をかけてあげよう。" },
    { grade: 4, genre: "japanese", type: "select", text: "「他人の行動を見て、自分の行いを改める」という意味の四字熟語は？", choices: ["反面教師", "単刀直入", "以心伝心", "弱肉強食"], answer: "反面教師", explanation: "正解は「反面教師」だよ！<br>悪い見本（反面）を、自分を教えてくれる<b>「教師」</b>だと思って学びにするという意味だよ。" },
    { grade: 4, genre: "math", type: "select", text: "1リットルは何ミリリットル（ml）？", choices: ["1000ml", "100ml", "10ml", "10000ml"], answer: "1000ml", explanation: "正解は「1000ml」だよ！<br>「m（ミリ）」には<b>1000分の1</b>という意味があるから、1000ml集まるとちょうど1Lになるんだよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "次のうち、「敬語（尊敬語）」として正しいものはどれ？", choices: ["先生がお見えになる", "先生が来る", "先生が参る", "先生が来られる"], answer: "先生がお見えになる", explanation: "正解は「先生がお見えになる」だよ！<br>相手を高める最高の表現が<b>「お見えになる」</b>だよ。「参る」は自分がへりくだる謙譲語だから間違いやすいね。" },
    { grade: 4, genre: "japanese", type: "select", text: "「一生懸命」と同じ意味の言葉はどれ？", choices: ["必死になって", "てきとうに", "のんびりと", "おこりながら"], answer: "必死になって", explanation: "「一生懸命」は、命をかけるくらい<span style='color:red; font-weight:bold;'>全力でがんばる</span>という意味の四字熟語だよ。" },
    { grade: 4, genre: "math", type: "select", text: "三角形の面積を求める公式はどれ？", choices: ["底辺×高さ÷2", "半径×半径×3.14", "縦×横", "底辺×高さ×2"], answer: "底辺×高さ÷2", explanation: "正解は「底辺×高さ÷2」だよ！<br>「÷2」をするのを<b>絶対に忘れないように</b>しようね！" },
    { grade: 4, genre: "japanese", type: "select", text: "「（ ）も歩けば棒に当たる」空欄に入る動物は？", choices: ["犬", "猫", "猿", "鳥"], answer: "犬", explanation: "正解は「犬」だよ！<br><b>「犬も歩けば棒に当たる」</b>は、何か行動を起こせば、思いがけない幸運（または災難）に遭うということわざだよ。" }
);
