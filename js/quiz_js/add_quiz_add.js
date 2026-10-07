// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 🟥 【こくご：japanese】
targetArray.push(...[
{ grade: 4, genre: "japanese", type: "which", text: "むずかしいしゅくだいに「手をやく」というのは、やさしいという意味である。まるかばつか？", choices: [true, false], answer: false, explanation: "正解は「×」。「手をやく」とは、<b>むずかしくてこまること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "長い時間歩いて「足がぼうになる」とは、足がほんとうに木になることである。まるかばつか？", choices: [true, false], answer: false, explanation: "正解は「×」。「足がぼうになる」とは、<b>歩きつかれて足がこわばること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "びっくりする話を聞いて「耳をうたがう」とは、信じられない気持ちである。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「耳をうたがう」とは、聞いた話が<b>信じられないようなこと</b>だったときに使う言葉だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "「口がすべる」とは、言ってはいけないことをうっかり言うことである。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「口がすべる」とは、秘密にしなくてはいけないことを<b>うっかり言ってしまうこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "「さじをなげる」とは、どうすることもできずあきらめる気持ちである。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「さじをなげる」とは、どうやっても解決できない問題を<b>あきらめること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "「手をかす」人は、相手を手伝う気持ちがある。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「手をかす」とは、こまっている人を<b>手伝うこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "「目を離す」とは、注意がそれてしまう。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「目を離す」とは、集中して見ていたものから<b>注意をそらすこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "「足を運ぶ」とは、わざわざその場所に行くことである。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「足を運ぶ」とは、<b>その場所に行くこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "「耳をうたがう」ような話とは、信じられない話である。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「耳をうたがう」とは、聞いた話が<b>信じられないようなこと</b>だったときに使う言葉だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "「頭をかかえる」ような問題は、どうしてよいかわからない問題である。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「頭をかかえる」とは、むずかしい問題が起きて<b>こまっていること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "which", text: "「さじをなげる」とは、どうすることもできずあきらめる気持ちである。まるかばつか？", choices: [true, false], answer: true, explanation: "正解は「○」。「さじをなげる」とは、どうやっても解決できない問題を<b>あきらめること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "お友だちがこまっていたので、ぼくは「手をかす」ことにした。どんな行動かな？", choices: ["手伝うこと", "見ないふりをすること", "じゃますること", "にげること"], answer: "手伝うこと", explanation: "正解は「手伝うこと」。「手をかす」とは、こまっている人を<b>手伝うこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "そうじを「手を抜く」と、どうなるかな？", choices: ["きれいにならない", "もっときれいになる", "ほめられる", "早く終わるが完ぺき"], answer: "きれいにならない", explanation: "正解は「きれいにならない」。「手を抜く」とは、全力を出さずに<b>いいかげんにすること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "おじいちゃんの家まで「足を運ぶ」とは、どんなこと？", choices: ["家に行くこと", "走りまわること", "足をけがすること", "家にこもること"], answer: "家に行くこと", explanation: "正解は「家に行くこと」。「足を運ぶ」とは、<b>その場所に行くこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "先生の話に「耳をかたむける」とは、どんなこと？", choices: ["熱心に聞くこと", "耳をふさぐこと", "聞かないこと", "さわぐこと"], answer: "熱心に聞くこと", explanation: "正解は「熱心に聞くこと」。「耳をかたむける」とは、お話している人の声を<b>熱心に聞くこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "とてもおどろいたとき、「目を丸くする」とはどんなようす？", choices: ["目を大きくする", "目をとじる", "泣く", "目がいたくなる"], answer: "目を大きくする", explanation: "正解は「目を大きくする」。「目を丸くする」とは、<b>おどろくこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "むずかしい問題に「頭をかかえる」とは、どんな気持ち？", choices: ["どうしてよいかこまる", "うれしい", "すぐ答えがわかる", "やる気がない"], answer: "どうしてよいかこまる", explanation: "正解は「どうしてよいかこまる」。「頭をかかえる」とは、むずかしい問題が起きて<b>こまっていること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "プレゼントが来るのを「首を長く」するとは、どんな気持ち？", choices: ["心待ちにする", "こわがる", "わすれる", "にげる"], answer: "心待ちにする", explanation: "正解は「心待ちにする」。「首を長く」とは、<b>心待ちにしていること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "けんかを「水にながす」とは、どんな行動？", choices: ["なかったことにして仲直りする", "もっと怒る", "ずっと覚えておく", "ゆるさない"], answer: "なかったことにして仲直りする", explanation: "正解は「なかったことにして仲直りする」。「水にながす」とは、いろいろあったを<b>なかったことにすること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "おどろきすぎて「色をうしなう」とは、どんなようす？", choices: ["顔色がなくなる", "顔が赤くなる", "顔が黒くなる", "顔が青くなる"], answer: "顔色がなくなる", explanation: "正解は「顔色がなくなる」。「色をうしなう」とは、<b>顔色がなくなること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "とても悲しくて「ごうきゅうする」とは、どんな泣き方？", choices: ["大声で泣く", "少し泣く", "泣かない", "笑いながら泣く"], answer: "大声で泣く", explanation: "正解は「大声で泣く」。「ごうきゅうする」とは、<b>大声で泣くこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "「手をやく」ようなしゅくだいとは、どんなもの？", choices: ["むずかしくてこまる", "やさしい", "すぐ終わる", "楽しい"], answer: "むずかしくてこまる", explanation: "正解は「むずかしくてこまる」。「手をやく」とは、<b>むずかしくてこまること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "「手を抜く」と、どんな結果になりやすい？", choices: ["しあげがあまくなる", "もっとよくなる", "ほめられる", "完ぺきになる"], answer: "しあげがあまくなる", explanation: "正解は「しあげがあまくなる」。「手を抜く」とは、全力を出さずに<b>いいかげんにすること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "「足がぼうになる」ほど歩いたとき、どんなようす？", choices: ["足がこわばる", "足が太くなる", "足がなくなる", "足が速くなる"], answer: "足がこわばる", explanation: "正解は「足がこわばる」。「足がぼうになる」とは、<b>歩きつかれて足がこわばること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "先生の話に「耳をかたむける」と、どんなよいことがある？", choices: ["よく理解できる", "聞こえなくなる", "ねむくなる", "話がきらいになる"], answer: "よく理解できる", explanation: "正解は「よく理解できる」。「耳をかたむける」とは、お話している人の声を<b>熱心に聞くこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "「目を丸くする」ほどおどろいたとき、人はどんな顔になる？", choices: ["目が大きくなる", "目がとじる", "目が赤くなる", "目が黒くなる"], answer: "目が大きくなる", explanation: "正解は「目が大きくなる」。「目を丸くする」とは、<b>おどろくこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "「目を離す」と、どんなことがおこりやすい？", choices: ["大事なものを見失う", "よく見える", "集中できる", "すぐ気づく"], answer: "大事なものを見失う", explanation: "正解は「大事なものを見失う」。「目を離す」とは、集中して見ていたものから<b>注意をそらすこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "「首を長く」するほど待っているとき、人はどんな気持ち？", choices: ["まだかなと心待ちにする", "すぐあきらめる", "気にしない", "こわがる"], answer: "まだかなと心待ちにする", explanation: "正解は「まだかなと心待ちにする」。「首を長く」とは、<b>心待ちにしていること</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "「口がすべる」と、どんなことがおこる？", choices: ["言ってはいけないことを言う", "声が出なくなる", "歌がうまくなる", "話さなくなる"], answer: "言ってはいけないことを言う", explanation: "正解は「言ってはいけないことを言う」。「口がすべる」とは、秘密にしなくてはいけないことを<b>うっかり言ってしまうこと</b>だよ！" },
{ grade: 4, genre: "japanese", type: "select", text: "「水にながす」と、どんなよいことがある？", choices: ["けんかが終わって仲直りできる", "もっと怒る", "ずっと覚えておく", "ゆるさない"], answer: "けんかが終わって仲直りできる", explanation: "正解は「けんかが終わって仲直りできる」。「水にながす」とは、いろいろあったを<b>なかったことにすること</b>だよ！" }
]);

}
