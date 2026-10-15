// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 🟥 【こくご：japanese】
targetArray.push(...[
    // 送り仮名
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「考」 の送りがなは 「考える」で正しい？", choices: [true, false], answer: true, explanation: "正解は「考える」。<br>『考』に「える」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「改」 の送りがなは 「改める」で正しい？", choices: [true, false], answer: true, explanation: "正解は「改める」。<br>『改』に「める」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「借」 の送りがなは 「借る」で正しい？", choices: [true, false], answer: false, explanation: "正解は「借りる」。<br>『借』に「りる」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「治」 の送りがなは 「治す」で正しい？", choices: [true, false], answer: true, explanation: "正解は「治す」。<br>『治』に「す」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「失」 の送りがなは 「失なう」で正しい？", choices: [true, false], answer: false, explanation: "正解は「失う」。<br>『失』に「う」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「働」 の送りがなは 「働く」で正しい？", choices: [true, false], answer: true, explanation: "正解は「働く」。<br>『働』に「く」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「続」 の送りがなは 「続る」で正しい？", choices: [true, false], answer: false, explanation: "正解は「続ける」。<br>『続』に「ける」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「選」 の送りがなは 「選ぶ」で正しい？", choices: [true, false], answer: true, explanation: "正解は「選ぶ」。<br>『選』に「ぶ」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「伝」 の送りがなは 「伝る」で正しい？", choices: [true, false], answer: false, explanation: "正解は「伝える」。<br>『伝』に「える」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「試」 の送りがなは 「試す」で正しい？", choices: [true, false], answer: true, explanation: "正解は「試す」。<br>『試』に「す」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「焼」 の送りがなは 「焼く」で正しい？", choices: [true, false], answer: true, explanation: "正解は「焼く」。<br>『焼』に「く」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「残」 の送りがなは 「残す」で正しい？", choices: [true, false], answer: true, explanation: "正解は「残す」。<br>『残』に「す」をつけるのが正しい送りがなだよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "送りがなの問題だよ<br>漢字 「照」 の送りがなは 「照らす」で正しい？", choices: [true, false], answer: true, explanation: "正解は「照らす」。<br>『照』に「らす」をつけるのが正しい送りがなだよ。" },
    // 説明文
    { grade: 4, genre: "japanese", type: "select", text: "次の文章を読んで、二つ目の文の役割として <b>正しいもの</b> はどれかな？<br>「植物は光を受けて成長します。そのため、日当たりのよい場所に植えることが大切です。」", choices: ["植物の形の説明", "植物の成長の説明", "植物の歴史の説明", "植物の種類の説明"], answer: "植物の成長の説明", explanation: "正解は「植物の成長の説明」。<br>二つ目の文は、植物の成長に『なぜ光が大切なのか』という理由を説明しているよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "次の文章を読んで、二つ目の文の役割として <b>正しいもの</b> はどれかな？<br>「図書館では静かに本を読みます。そのため、走ったり大声を出したりしてはいけません。」", choices: ["図書館の歴史の説明", "図書館の広さの説明", "静かにする理由の説明", "本の種類の説明"], answer: "静かにする理由の説明", explanation: "正解は「静かにする理由を説明している」。<br>二つ目の文は、『なぜ静かにする必要があるのか』を説明しているよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "次の文章を読んで、主人公の気持ちとして <b>正しいもの</b> はどれかな？<br>「ゆみは、発表の前に手がふるえてきました。みんなの前に立つと、声が小さくなってしまいました。」", choices: ["うれしい", "かなしい", "きんちょう", "てれる"], answer: "きんちょう", explanation: "正解は「きんちょう」。<br>手がふるえる・声が小さくなる様子から、<b>きんちょうしている気持ち</b>が読み取れるよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "次の文章を読んで、主人公が走り出した理由として <b>正しいもの</b> はどれかな？<br>「太郎は、忘れ物に気づいて家へ走ってもどった。」", choices: ["友だちに会いたかったから", "雨がふってきたから", "忘れ物を取りに行くため", "家に帰りたくなったから"], answer: "忘れ物を取りに行くため", explanation: "正解は「忘れ物を取りに行くため」。<br>文章の中で『忘れ物に気づいた』と書かれているので、そのために走ったことがわかるよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "次の文章の要点として <b>正しいもの</b> はどれかな？<br>「早く走るためには、足の力だけでなく、体のバランスも大切です。体がぶれると、スピードが落ちてしまいます。」", choices: ["足の力だけが大切だ", "体のバランスが大切だ", "走るときはぶれてもよい", "スピードは気にしなくてよい"], answer: "体のバランスが大切だ", explanation: "正解は「体のバランスが大切だ」。<br>文章では、バランスの重要性を中心に説明しているよ。" },
    { grade: 4, genre: "japanese", type: "which", text: "次の文章で、主人公の気持ちは『うれしい』である。これは <b>正しい？</b><br>「りさは、テストの点数が思ったより低くて、がっかりした。」", choices: [true, false], answer: false, explanation: "文章の中で『がっかりした』と書かれているので、うれしい気持ちではないよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "次の文章で、主人公の気持ちとして <b>正しいもの</b> はどれかな？<br>「ゆきは、友だちに作った絵をほめられて、顔が明るくなった。」", choices: ["かなしい", "うれしい", "おこっている", "不安（ふあん）"], answer: "うれしい", explanation: "正解は「うれしい」。<br>顔が明るくなる様子から、うれしい気持ちが読み取れるよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "次の文章で、主人公が立ち止まった理由として <b>正しいもの</b> はどれかな？<br>「太郎は、道に落ちている小さな子犬を見つけて、足を止めた。」", choices: ["道がわからなくなったから", "子犬を見つけたから", "雨がふってきたから", "友だちを待っていたから"], answer: "子犬を見つけたから", explanation: "正解は「子犬を見つけたから」。<br>文章に理由がそのまま書かれているよ。" },
    // 手紙文
    { grade: 4, genre: "japanese", type: "select", text: "お礼の手紙を書くとき、書き出しとして <b>正しいもの</b> はどれかな？", choices: ["いつもお世話になっています。", "こんにちは！", "この前はありがとうございました。", "さようなら。"], answer: "この前はありがとうございました。", explanation: "正解は「この前はありがとうございました。」。<br>お礼の手紙では、まず感謝の気持ちを伝える書き出しが大切だよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "お願いの手紙で使う表現として <b>正しいもの</b> はどれかな？", choices: ["ご協力いただけるとうれしいです。", "ごめんなさい。", "本当に助かりました。", "また遊びましょう。"], answer: "ご協力いただけるとうれしいです。", explanation: "正解は「ご協力いただけるとうれしいです。」。<br>お願いの手紙では、ていねいに頼む表現を使うよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "手紙の結びの言葉として <b>正しいもの</b> はどれかな？", choices: ["これからもよろしくお願いします。", "さようなら。", "またね！", "お元気ですか。"], answer: "これからもよろしくお願いします。", explanation: "正解は「これからもよろしくお願いします。」。<br>結びの言葉では、相手への気持ちを ていねいに伝えるよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "先生にあてた手紙の書き方として <b>ふさわしいもの</b> はどれかな？", choices: ["いつもありがとうございます。", "やっほー！", "また遊ぼうね。", "元気？"], answer: "いつもありがとうございます。", explanation: "正解は「いつもありがとうございます。」。<br>先生には ていねいな言葉づかいで書くよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "春の季節のあいさつとして <b>正しいもの</b> はどれかな？", choices: ["暑い日が続いていますね。", "寒さがきびしくなってきました。", "桜がきれいに咲き始めましたね。", "今年もよろしくお願いします。"], answer: "桜がきれいに咲き始めましたね。", explanation: "正解は「桜がきれいに咲き始めましたね。」。<br>春の季節のあいさつとして ぴったりだよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "手紙の順番として <b>正しいもの</b> はどれかな？", choices: ["あいさつ → 本文 → 結び", "本文 → 結び → あいさつ", "結び → あいさつ → 本文", "あいさつ → 結び → 本文"], answer: "あいさつ → 本文 → 結び", explanation: "正解は「あいさつ → 本文 → 結び」。<br>手紙は この順番で書くのが基本だよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "話し合いで司会がすることとして <b>正しいもの</b> はどれかな？", choices: ["自分の意見だけを言う", "みんなの意見をまとめる", "反対意見を言わせない", "話し合いを早く終わらせる"], answer: "みんなの意見をまとめる", explanation: "正解は「みんなの意見をまとめる」。<br>司会は話し合いが進むように、意見を整理する役目があるよ。" },
    // 話し合い
    { grade: 4, genre: "japanese", type: "select", text: "話し合いで意見を言うとき、大切なこととして <b>正しいもの</b> はどれかな？", choices: ["理由をそえて話す", "大きな声で話す", "反対意見を言わない", "早く話し終える"], answer: "理由をそえて話す", explanation: "正解は「理由をそえて話す」。<br>意見には理由をつけると、聞き手にわかりやすくなるよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "話し合いでメモを取るとき、大切なこととして <b>正しいもの</b> はどれかな？", choices: ["全部の言葉をそのまま書く", "大事なところだけを短く書く", "メモを取らずに聞く", "絵をかいてまとめる"], answer: "大事なところだけを短く書く", explanation: "正解は「大事なところだけを短く書く」。<br>メモは短くまとめると、あとで見やすくなるよ。" },
    { grade: 4, genre: "japanese", type: "select", text: "発表のはじめに言うこととして <b>正しいもの</b> はどれかな？", choices: ["まとめ", "理由", "あいさつ", "質問"], answer: "あいさつ", explanation: "正解は「あいさつ」。<br>発表は『はじめのあいさつ → 内容 → まとめ』の順で話すよ。その後に質問タイムだね" },
    { grade: 4, genre: "japanese", type: "select", text: "話し合いで大切な聞き方として <b>正しいもの</b> はどれかな？", choices: ["話の途中で口をはさむ", "最後まで聞く", "反対意見を言わせない", "自分の意見だけを考える"], answer: "最後まで聞く", explanation: "正解は「最後まで聞く」。<br>話し合いでは、相手の話をしっかり聞くことが大切だよ。" }
]);
// 🟥 【さんすう：Math】
targetArray.push(...[
    { grade: 4, genre: "math", type: "select", text: "次の数「1,000,000,000」の読み方として <b>正しいもの</b> はどれかな？", choices: ["一億", "十億", "一兆", "百億"], answer: "十億", explanation: "正解は「十億」。<br>1,000,000,000 は 10億だよ。" },
    { grade: 4, genre: "math", type: "select", text: "「3億5万」を数字で表すと <b>正しいもの</b> はどれかな？", choices: ["300,005", "30,005,000", "300,050,000", "305,000,000"], answer: "300,050,000", explanation: "正解は「300,050,000」。<br>3億＝300,000,000 と 5万＝50,000 を合わせるよ。" },
    { grade: 4, genre: "math", type: "select", text: "「2兆300億」を数字で表すと <b>正しいもの</b> はどれかな？", choices: ["2,000,300,000,000", "2,300,000,000,000", "2,030,000,000,000", "2,003,000,000,000"], answer: "2,030,000,000,000", explanation: "正解は「2,030,000,000,000」。<br>2兆＝2,000,000,000,000 と 300億＝30,000,000,000 を合わせるよ。" },
    { grade: 4, genre: "math", type: "select", text: "次の中で <b>一番大きい数</b> はどれかな？", choices: ["5億", "50,000万", "0.5兆", "400,000,000"], answer: "0.5兆", explanation: "正解は「0.5兆」。<br>0.5兆＝5,000億で、他より大きいよ。" },
    { grade: 4, genre: "math", type: "select", text: "次の数「45,000,000,000」の桁数（けたすう）として <b>正しいもの</b> はどれかな？", choices: ["7桁（けた）", "9桁（けた）", "11桁（けた）", "13桁（けた）"], answer: "11桁（けた）", explanation: "正解は「11桁（けた）」。<br>45,000,000,000 は 11桁（けた）の数だよ。" },
    { grade: 4, genre: "math", type: "select", text: "「8億」を「万」のくらいで表すと どうなるかな？ <b>正しいもの</b> を選ぼう。", choices: ["8,000万", "80,000万", "800万", "800,000万"], answer: "80,000万", explanation: "正解は「80,000万」。<br>1億＝10,000万なので、8億＝80,000万だよ。" }
]);

}
