// ==========================================
// 🎒 小クイズデータ追加
// ==========================================
// 💡 親から配列を関数として受け取る
export function loadQuestions_add(targetArray) {

// 追加クイズ
targetArray.push(...[
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
