// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 追加クイズ
targetArray.push(...[
// ネットやスマホの危険
{ grade: 4, genre: "etc", type: "select", text: "ネットやスマホでの、<b>きけん</b>なこととして ただしくないものはどれ？", choices: ["歩きながら使う", "ネット情報をすぐ信じる", "夜おそくまで使う", "いすにすわって使う"], answer: "いすにすわって使う", explanation: "せいかいは「いすにすわって使う」。<br>歩きスマホは事故につながるし、ネット情報をすぐ信じるとだまされることがあるよ。夜おそくまで使うと体調をくずすこともあるから、<b>きけん</b>だよ。" },
{ grade: 4, genre: "etc", type: "select", text: "「夜おそくまでスマホを使う」と、どんな<b>きけん</b>があるかな？", choices: ["ねむれなくなる", "おなかがすく", "人とぶつかる", "手がつかれる"], answer: "ねむれなくなる", explanation: "せいかいは「ねむれなくなる」。<br>夜おそくまでスマホを使うと、ねむれなくなって生活のリズムがくずれるよ。目がつかれることや、使いすぎになることもあるんだ。" },
{ grade: 4, genre: "etc", type: "select", text: "「イライラした気もちでスマホを使う」と、どんな<b>きけん</b>があるかな？", choices: ["相手をきずつけてしまう", "ねむれなくなる", "スマホが熱くなってやけどする", "先生におこられる"], answer: "相手をきずつけてしまう", explanation: "せいかいは「相手をきずつけてしまう」。<br>イライラしたままスマホを使うと、強い言葉を送ってしまったり、トラブルになったり、相手をきずつけてしまうことがあるよ。" },
{ grade: 4, genre: "etc", type: "select", text: "スマホで「ふざけた写真」をとると、どんな<b>きけん</b>があるかな？", choices: ["見た人をいやな気もちにする", "スマホから火が出る", "人とぶつかる", "カメラがこわれる"], answer: "見た人をいやな気もちにする", explanation: "せいかいは「見た人をいやな気もちにする」。<br>ふざけた写真は、だれかをいやな気もちにさせたり、ネットに広がってトラブルになることがあるよ。" },
{ grade: 4, genre: "etc", type: "select", text: "「ネットの情報をすぐに信じる」と、どんな<b>きけん</b>があるかな？", choices: ["まちがったことをしてトラブルになる", "スマホから火が出る", "ねむれなくなる", "カメラがこわれる"], answer: "まちがったことをしてトラブルになる", explanation: "せいかいは「まちがったことをしてトラブルになる」。<br>ネットの情報にはまちがったものもあるよ。すぐに信じると、だまされたり、まちがった行動をしてトラブルになることがあるんだ。" },
{ grade: 4, genre: "etc", type: "select", text: "「スマホを歩きながら使う」と、どんな<b>きけん</b>があるかな？", choices: ["人とぶつかる", "スマホから火が出る", "見た人をいやな気もちにする", "カメラがこわれる"], answer: "人とぶつかる", explanation: "せいかいは「人とぶつかる」。<br>歩きスマホは前が見えなくなるので、人とぶつかったり、転んだりしてけがをすることがあるよ。" },
// 単位
{ grade: 3, genre: "math", type: "select", text: "1時間は、何分かな？", choices: ["60分", "100分", "30分", "10分"], answer: "60分", explanation: "せいかいは「60分」！<br><b>時間は時・分・秒で表す単位（たんい）</b>で、テレビの時間や授業の時間をはかるときに使うよ。" },
{ grade: 3, genre: "math", type: "select", text: "1分は、何秒かな？", choices: ["60秒", "10秒", "100秒", "30秒"], answer: "60秒", explanation: "せいかいは「60秒」！<br><b>秒はより細かい時間をはかる単位（たんい）</b>で、かけっこやストップウォッチで使うよ。" },
{ grade: 3, genre: "math", type: "select", text: "1センチメートル（cm）は、何ミリメートル（mm）かな？", choices: ["10mm", "100mm", "1mm", "1,000mm"], answer: "10mm", explanation: "せいかいは「10mm」！<br><b>ミリメートルは より細かい長さを表す単位（たんい）</b>で、えんぴつの太さなどをはかるときに使うよ。" },
{ grade: 3, genre: "math", type: "select", text: "1メートル（m）は、何センチメートル（cm）かな？", choices: ["100cm", "10cm", "1,000cm", "1cm"], answer: "100cm", explanation: "せいかいは「100cm」！<br><b>メートルは 長さを表す単位（たんい）</b>で、身長やものの長さをはかるときに使うよ。" },
{ grade: 3, genre: "math", type: "select", text: "1リットル（L）は、何ミリリットル（ml）かな？", choices: ["1,000ml", "100ml", "10ml", "10,000ml"], answer: "1,000ml", explanation: "せいかいは「1,000ml」！<br><b>リットルは 水やジュースの量をはかる単位（たんい）</b>で、ペットボトルの大きさなどに使うよ。" },
// 単位
{ grade: 4, genre: "math", type: "which", text: "1億（おく）は、1万が 1,000 こ 集まった数である。まるかばつか？", choices: [true, false], answer: false, explanation: "せいかいは「ばつ」！<br>1億は、「1万 が 1,000 こ」ではなく、「1万 が 10,000 こ」 集まった数だよ。" },
{ grade: 4, genre: "math", type: "select", text: "1キロメートル（km）は、何メートル（m）かな？", choices: ["1,000m", "100m", "10m", "10,000m"], answer: "1,000m", explanation: "せいかいは「1,000m」！<br><b>キロメートルは 遠い距離をはかる単位（たんい）</b>で、学校までの道のりなどを表すときに使うよ。" },
{ grade: 4, genre: "math", type: "select", text: "1キログラム（kg）は、何グラム（g）かな？", choices: ["1,000g", "100g", "10g", "10,000g"], answer: "1,000g", explanation: "せいかいは「1,000g」！<br><b>グラムやキログラムは重さをはかる単位（たんい）</b>で、食べ物の重さや体重をはかるときに使うよ。" },
{ grade: 4, genre: "math", type: "select", text: "1トン（t）は、何キログラム（kg）かな？", choices: ["1,000kg", "100kg", "10kg", "10,000kg"], answer: "1,000kg", explanation: "せいかいは「1,000kg」！<br><b>トンはとても大きな重さを表す単位（たんい）</b>で、車や大きなものの重さをはかるときに使うよ。" },
{ grade: 4, genre: "math", type: "select", text: "1平方メートル（㎡）は、何平方センチメートル（㎠）かな？", choices: ["10,000㎠", "100㎠", "1,000㎠", "100,000㎠"], answer: "10,000㎠", explanation: "せいかいは「10,000㎠」！<br><b>平方メートルは広さを表す単位（たんい）</b>で、部屋の広さなどをはかるときに使うよ。" },
{ grade: 4, genre: "math", type: "select", text: "1アール（a）は、何平方メートル（㎡）かな？", choices: ["100㎡", "10㎡", "1,000㎡", "1㎡"], answer: "100㎡", explanation: "せいかいは「100㎡」！<br><b>アールは土地の広さを表す単位（たんい）</b>で、畑や田んぼの広さをはかるときに使うよ。" },
{ grade: 4, genre: "math", type: "select", text: "1ヘクタール（ha）は、何アール（a）かな？", choices: ["100a", "10a", "1,000a", "1a"], answer: "100a", explanation: "せいかいは「100a」！<br><b>ヘクタールはとても広い土地の広さを表す単位（たんい）</b>で、公園や森の広さを表すときに使うよ。" },
{ grade: 4, genre: "math", type: "select", text: "1立方メートル（㎥）は、何立方センチメートル（㎤）かな？", choices: ["1,000,000㎤", "10,000㎤", "1,000㎤", "100㎤"], answer: "1,000,000㎤", explanation: "せいかいは「1,000,000㎤」！<br><b>立方メートルは体積を表す単位（たんい）</b>で、水そうの大きさや部屋の体積をはかるときに使うよ。" },
// 折れ線グラフとデータの整理
{ grade: 4, genre: "math", type: "select", text: "あるスーパーの来店者数の記録です。<br>朝9時に開店し、10時から12時にかけて来店者数がゆっくりふえます。午後になると14時にいちど少なくなりますが、17時からまたふえはじめ、19時に1日の中でいちばん多くなります。<br>さて、もっとも来店者数が多い時間は何時ですか？", choices: ["12時","14時","17時","19時"], answer: "19時", explanation: "せいかいは「19時」！文章に『19時に1日の中でいちばん多くなる』と書かれているよ。" },
{ grade: 4, genre: "math", type: "select", text: "あるスーパーの来店者数の記録です。<br>朝9時に開店し、10時から12時にかけて来店者数がゆっくりふえます。午後になると14時にいちど少なくなりますが、17時からまたふえはじめ、19時に1日の中でいちばん多くなります。<br>さて、来店者数がへりはじめるのは何時ですか？", choices: ["10時","12時","14時","17時"], answer: "14時", explanation: "せいかいは「14時」！文章に『14時にいちど少なくなる』と書かれているので、この時間がへりはじめるタイミングだよ。" },
{ grade: 4, genre: "math", type: "select", text: "あるスーパーの来店者数の記録です。<br>朝9時に開店し、10時から12時にかけて来店者数がゆっくりふえます。午後になると14時にいちど少なくなりますが、17時からまたふえはじめ、19時に1日の中でいちばん多くなります。<br>さて、最初に来店者数がふえはじめるのは何時ですか？", choices: ["9時","10時","12時","17時"], answer: "10時", explanation: "せいかいは「10時」！文章に『10時から12時にかけてゆっくりふえる』と書かれているので、最初にふえはじめるのは10時だよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある図書館の来館者数の記録です。<br>朝9時に開館し、10時に少しふえますが、11時にいちばん少なくなります。その後、午後になると来館者数はゆっくりふえ、15時にピークとなります。<br>さて、もっとも来館者数が少ない時間は何時ですか？", choices: ["9時","10時","11時","15時"], answer: "11時", explanation: "せいかいは「11時」！文章に『11時にいちばん少なくなる』と書かれているよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある図書館の来館者数の記録です。<br>朝9時に開館し、10時に少しふえますが、11時にいちばん少なくなります。その後、午後になると来館者数はゆっくりふえ、15時にピークとなります。<br>さて、来館者数がふえはじめるのは何時ですか？", choices: ["9時","10時","11時","15時"], answer: "10時", explanation: "せいかいは「10時」！文章に『10時に少しふえる』と書かれているので、この時間がふえはじめるタイミングだよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある図書館の来館者数の記録です。<br>朝9時に開館し、10時に少しふえますが、11時にいちばん少なくなります。その後、午後になると来館者数はゆっくりふえ、15時にピークとなります。<br>さて、もっとも来館者数が多い時間は何時ですか？", choices: ["10時","11時","15時","9時"], answer: "15時", explanation: "せいかいは「15時」！文章に『15時にピークとなります』と書かれているので、この時間が最大値だよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある公園の来園者数の記録です。<br>朝8時に開園し、9時はまだ少ないですが、10時にふえはじめ、11時に午前中でいちばん多くなります。午後になるといったん少なくなり、夕方にまたふえます。<br>さて、午前中で来園者数がもっとも多い時間は何時ですか？", choices: ["9時","10時","11時","12時"], answer: "11時", explanation: "せいかいは「11時」！文章に『11時に午前中でいちばん多くなる』と書かれているよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある公園の来園者数の記録です。<br>朝8時に開園し、9時はまだ少ないですが、10時にふえはじめ、11時に午前中でいちばん多くなります。午後になるといったん少なくなり、夕方にまたふえます。<br>さて、来園者数がふえはじめるのは何時ですか？", choices: ["8時","9時","10時","11時"], answer: "10時", explanation: "せいかいは「10時」！文章に『10時にふえはじめ』と書かれているので、この時間がふえはじめるタイミングだよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある公園の来園者数の記録です。<br>朝8時に開園し、9時はまだ少ないですが、10時にふえはじめ、11時に午前中でいちばん多くなります。午後になるといったん少なくなり、夕方にまたふえます。<br>さて、午前中で来園者数がもっとも少ない時間は何時ですか？", choices: ["8時","9時","10時","11時"], answer: "9時", explanation: "せいかいは「9時」！文章に『9時はまだ少ない』と書かれているので、午前中の最小値だよ。" },
{ grade: 4, genre: "math", type: "select", text: "あるプールの入場者数の記録です。<br>朝9時に開場し、10時に少しふえますが、11時に午前中でいちばん少なくなります。その後、午後になると入場者数はどんどんふえ、16時にピークとなります。<br>さて、午前中で入場者数がもっとも少ない時間は何時ですか？", choices: ["9時","10時","11時","12時"], answer: "11時", explanation: "せいかいは「11時」！文章に『11時に午前中でいちばん少なくなる』と書かれているよ。" },
{ grade: 4, genre: "math", type: "select", text: "あるプールの入場者数の記録です。<br>朝9時に開場し、10時に少しふえますが、11時に午前中でいちばん少なくなります。その後、午後になると入場者数はどんどんふえ、16時にピークとなります。<br>さて、入場者数がふえはじめるのは何時ですか？", choices: ["9時","10時","11時","16時"], answer: "10時", explanation: "せいかいは「10時」！文章に『10時に少しふえます』と書かれているので、この時間がふえはじめるタイミングだよ。" },
{ grade: 4, genre: "math", type: "select", text: "あるプールの入場者数の記録です。<br>朝9時に開場し、10時に少しふえますが、11時に午前中でいちばん少なくなります。その後、午後になると入場者数はどんどんふえ、16時にピークとなります。<br>さて、もっとも入場者数が多い時間は何時ですか？", choices: ["10時","11時","12時","16時"], answer: "16時", explanation: "せいかいは「16時」！文章に『16時にピークとなります』と書かれているので、この時間が最大値だよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある映画館の入場者数の記録です。<br>朝10時に開館し、11時から13時にかけて入場者数がゆっくりふえます。午後になると14時はいったん少なくなりますが、16時からまたふえはじめ、18時にこの日の中でいちばん多くなります。その後は少しずつへり、22時に閉館します。<br>さて、もっとも入場者数が多い時間は何時ですか？", choices: ["13時","14時","18時","22時"], answer: "18時", explanation: "せいかいは「18時」！文章に『18時にこの日の中でいちばん多くなる』と書かれているよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある映画館の入場者数の記録です。<br>朝10時に開館し、11時から13時にかけて入場者数がゆっくりふえます。午後になると14時はいったん少なくなりますが、16時からまたふえはじめ、18時にこの日の中でいちばん多くなります。その後は少しずつへり、22時に閉館します。<br>さて、入場者数がへりはじめるのは何時ですか？", choices: ["13時","14時","18時","22時"], answer: "14時", explanation: "せいかいは「14時」！文章に『14時はいったん少なくなります』と書かれているので、この時間がへりはじめるタイミングだよ。" },
{ grade: 4, genre: "math", type: "select", text: "ある映画館の入場者数の記録です。<br>朝10時に開館し、11時から13時にかけて入場者数がゆっくりふえます。午後になると14時はいったん少なくなりますが、16時からまたふえはじめ、18時にこの日の中でいちばん多くなります。その後は少しずつへり、22時に閉館します。<br>さて、入場者数がふえはじめるのは何時ですか？", choices: ["10時","11時","13時","16時"], answer: "11時", explanation: "せいかいは「11時」！文章に『11時から13時にかけてゆっくりふえます』と書かれているので、この時間がふえはじめるタイミングだよ。" },
// Unit 1: Hello, world!（2時間）：世界の挨拶や自己紹介、好き嫌いの表現
{ grade: 4, genre: "english", type: "select", text: "世界のあいさつの問題です。<br>英語で「こんにちは」はどれかな？", choices: ["Hello","Good night","Thank you","See you"], answer: "Hello", explanation: "せいかいは「Hello」！<br>英語で「こんにちは」の基本のあいさつだよ。" },
{ grade: 4, genre: "english", type: "select", text: "自己紹介の表現の問題です。<br>「わたしの名前は太郎です。」を英語で言うとどれかな？", choices: ["I am Taro.","You are Taro.","My book is Taro.","I like Taro."], answer: "I am Taro.", explanation: "せいかいは「I am Taro.」！<br>名前を言うときは I am ～. を使うよ。" },
{ grade: 4, genre: "english", type: "select", text: "好き・きらいの表現の問題です。<br>「わたしはりんごが好きです。」を英語で言うとどれかな？", choices: ["I like apples.","I don't like apples.","I am apples.","You like apples."], answer: "I like apples.", explanation: "せいかいは「I like apples.」！<br>好きなものを言うときは I like ～. を使うよ。" },
// Unit 2: Let's play cards.（4時間）：天気（sunny, rainy等）のたずね方と、遊びの誘い方
{ grade: 4, genre: "english", type: "select", text: "天気の表現の問題です。<br>英語で「晴れ」はどれかな？", choices: ["sunny","rainy","cloudy","windy"], answer: "sunny", explanation: "せいかいは「sunny」！<br>英語で晴れを表すことばだよ。" },
{ grade: 4, genre: "english", type: "select", text: "遊びの誘い方の問題です。<br>「いっしょにカードで遊ぼう。」を英語で言うとどれかな？", choices: ["Let’s play cards.","Let’s eat lunch.","Let’s run.","Let’s read a book."], answer: "Let’s play cards.", explanation: "せいかいは「Let’s play cards.」！<br>Let’s ～. は『～しよう』という誘いの表現だよ。" },
{ grade: 4, genre: "english", type: "select", text: "天気をたずねる表現の問題です。<br>「天気はどうですか？」を英語で言うとどれかな？", choices: ["How’s the weather?","What’s your name?","Do you like cards?","Where are you from?"], answer: "How’s the weather?", explanation: "せいかいは「How’s the weather?」！<br>天気をたずねるときの基本の表現だよ。" },
// Unit 3: I like Mondays.（3時間）：曜日（Monday, Sunday等）の英語表現
{ grade: 4, genre: "english", type: "select", text: "曜日の表現の問題です。<br>英語で「月曜日」はどれかな？", choices: ["Monday","Sunday","Friday","Tuesday"], answer: "Monday", explanation: "せいかいは「Monday」！<br>英語で月曜日を表すことばだよ。" },
{ grade: 4, genre: "english", type: "select", text: "曜日の表現の問題です。<br>英語で「日曜日」はどれかな？", choices: ["Sunday","Monday","Thursday","Saturday"], answer: "Sunday", explanation: "せいかいは「Sunday」！<br>英語で日曜日を表すことばだよ。" },
{ grade: 4, genre: "english", type: "select", text: "曜日の表現の問題です。<br>英語で「金曜日」はどれかな？", choices: ["Friday","Tuesday","Wednesday","Sunday"], answer: "Friday", explanation: "せいかいは「Friday」！<br>英語で金曜日を表すことばだよ。" },
// Unit 4: What time is it?（4時間）：時刻の読み方と、毎日の生活時間
{ grade: 4, genre: "english", type: "select", text: "時刻の表現の問題です。<br>英語で「3時」はどれかな？", choices: ["three o'clock","five o'clock","ten o'clock","one o'clock"], answer: "three o'clock", explanation: "せいかいは「three o'clock」！<br>英語で時刻を言うときは o'clock を使うよ。" },
{ grade: 4, genre: "english", type: "select", text: "生活時間の問題です。<br>「わたしは7時におきます。」を英語で言うとどれかな？", choices: ["I get up at seven.","I go to bed at seven.","I study at seven.","I play at seven."], answer: "I get up at seven.", explanation: "せいかいは「I get up at seven.」！<br>get up は『起きる』という意味だよ。" },
{ grade: 4, genre: "english", type: "select", text: "時刻をたずねる表現の問題です。<br>「今何時ですか？」を英語で言うとどれかな？", choices: ["What time is it?","How are you?","Where are you?","Do you like apples?"], answer: "What time is it?", explanation: "せいかいは「What time is it?」！<br>時刻をたずねるときの基本の表現だよ。" },
// Unit 5: Do you have a pen?（4時間）：文房具や持ち物の名前、持っているかのたずね方
{ grade: 4, genre: "english", type: "select", text: "文房具の名前の問題です。<br>英語で「えんぴつ」はどれかな？", choices: ["pencil","pen","eraser","ruler"], answer: "pencil", explanation: "せいかいは「pencil」！<br>英語でえんぴつを表すことばだよ。" },
{ grade: 4, genre: "english", type: "select", text: "持ち物をたずねる表現の問題です。<br>「あなたはペンを持っていますか？」を英語で言うとどれかな？", choices: ["Do you have a pen?","Do you like a pen?","Are you a pen?","You have a pen."], answer: "Do you have a pen?", explanation: "せいかいは「Do you have a pen?」！<br>Do you have ～? は『～を持っていますか？』という表現だよ。" },
{ grade: 4, genre: "english", type: "select", text: "文房具の名前の問題です。<br>英語で「消しゴム」はどれかな？", choices: ["eraser","pen","pencil","bag"], answer: "eraser", explanation: "せいかいは「eraser」！<br>英語で消しゴムを表すことばだよ。" },
// Unit 6: Alphabet（4時間）：アルファベットの小文字の形と音に慣れる
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「A」の小文字はどれかな？", choices: ["a","y","b","d"], answer: "a", explanation: "せいかいは「a」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「C」の小文字はどれかな？", choices: ["c","z","d","t"], answer: "c", explanation: "せいかいは「c」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「E」の小文字はどれかな？", choices: ["e","t","q","i"], answer: "a", explanation: "せいかいは「e」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「G」の小文字はどれかな？", choices: ["g","h","m","e"], answer: "a", explanation: "せいかいは「g」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「I」の小文字はどれかな？", choices: ["i","l","t","a"], answer: "a", explanation: "せいかいは「i」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「L」の小文字はどれかな？", choices: ["l","n","o","r"], answer: "a", explanation: "せいかいは「l」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「N」の小文字はどれかな？", choices: ["n","s","w","y"], answer: "a", explanation: "せいかいは「n」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「P」の小文字はどれかな？", choices: ["p","k","n","b"], answer: "a", explanation: "せいかいは「p」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「S」の小文字はどれかな？", choices: ["s","v","c","w"], answer: "a", explanation: "せいかいは「s」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「T」の小文字はどれかな？", choices: ["t","u","p","u"], answer: "a", explanation: "せいかいは「t」！<br>小文字の形をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "アルファベットの問題です。<br>「Z」の小文字はどれかな？", choices: ["z","g","j","k"], answer: "a", explanation: "せいかいは「z」！<br>小文字の形をしっかりおぼえよう。" },
// Unit 7: What do you want?（4時間）：食べ物や欲しいものの伝え方
{ grade: 4, genre: "english", type: "select", text: "食べ物の表現の問題です。<br>英語で「りんご」はどれかな？", choices: ["apple","banana","orange","grape"], answer: "apple", explanation: "せいかいは「apple」！<br>食べ物の名前をしっかりおぼえよう。" },
{ grade: 4, genre: "english", type: "select", text: "ほしいものをたずねる表現の問題です。<br>「あなたは何がほしいですか？」を英語で言うとどれかな？", choices: ["What do you want?","Do you want apples?","I want apples.","Where are you from?"], answer: "What do you want?", explanation: "せいかいは「What do you want?」！<br>ほしいものをたずねるときの基本の表現だよ。" },
{ grade: 4, genre: "english", type: "select", text: "ほしいものを伝える表現の問題です。<br>「わたしはジュースがほしいです。」を英語で言うとどれかな？", choices: ["I want juice.","I have juice.","Do you want juice?","I like juice."], answer: "I want juice.", explanation: "せいかいは「I want juice.」！<br>want は『ほしい』という意味だよ。" },
// Unit 8: This is my favorite place.（5時間）：学校の場所や好きなたてもの、学校の教科名
{ grade: 4, genre: "english", type: "select", text: "学校の場所の問題です。<br>英語で「図書室」はどれかな？", choices: ["library","gym","classroom","office"], answer: "library", explanation: "せいかいは「library」！<br>学校の場所を表す基本のことばだよ。" },
{ grade: 4, genre: "english", type: "select", text: "好きなたてものを言う表現の問題です。<br>「ここはわたしのお気に入りの場所です。」を英語で言うとどれかな？", choices: ["This is my favorite place.","I like apples.","Do you have a pen?","Where are you from?"], answer: "This is my favorite place.", explanation: "せいかいは「This is my favorite place.」！<br>favorite は『お気に入り』という意味だよ。" },
{ grade: 4, genre: "english", type: "select", text: "学校の教科名の問題です。<br>英語で「理科」はどれかな？", choices: ["science","math","music","art"], answer: "science", explanation: "せいかいは「science」！<br>学校の教科名をしっかり覚えておこう。" },
{ grade: 4, genre: "english", type: "select", text: "学校の教科名の問題です。<br>英語で「算数」はどれかな？", choices: ["science","math","music","art"], answer: "science", explanation: "せいかいは「math」！<br>学校の教科名をしっかり覚えておこう。" },
// Unit 9: This is my day.（5時間）：一日の生活の流れ（日課）を簡単な英語で発表する
{ grade: 4, genre: "english", type: "select", text: "一日の生活の流れの問題です。<br>「わたしは7時におきます。」を英語で言うとどれかな？", choices: ["I get up at seven.","I go to school at seven.","I eat breakfast at seven.","I go to bed at seven."], answer: "I get up at seven.", explanation: "せいかいは「I get up at seven.」！<br>get up は『起きる』という意味だよ。" },
{ grade: 4, genre: "english", type: "select", text: "一日の生活の流れの問題です。<br>「わたしは学校へ行きます。」を英語で言うとどれかな？", choices: ["I go to school.","I get up.","I go home.","I play soccer."], answer: "I go to school.", explanation: "せいかいは「I go to school.」！<br>学校へ行くときの基本の表現だよ。" },
{ grade: 4, genre: "english", type: "select", text: "一日の生活の流れの問題です。<br>「わたしは9時にねます。」を英語で言うとどれかな？", choices: ["I go to bed at nine.","I get up at nine.","I study at nine.","I go home at nine."], answer: "I go to bed at nine.", explanation: "せいかいは「I go to bed at nine.」！<br>go to bed は『ねる』という意味だよ。" },  
]);

}
