// ==========================================
// 💡【新設】クイズ大量登録（一括インサート）プログラム
// ==========================================
// ? 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 📝 大量に登録したいクイズデータの配列（1レコード1行仕様）
const bulkQuestionsData = [
    { grade: 0, genre: "moral", type: "select", text: "ともだちの おもちゃを つかいたいとき、なんて 言う？", choices: ["かして、という", "だまって とる", "おこる", "なきだす"], answer: "かして、という", explanation: "" },
    { grade: 4, genre: "math", type: "select", text: "三角形の面積を求める公式は？", choices: ["底辺 × 高さ", "半径 × 半経 × 3.14", "縦 × 横", "底辺 × 高さ ÷ 2"], answer: "底辺 × 高さ ÷ 2", explanation: "" },
    { grade: 4, genre: "moral", type: "select", text: "図書館など、みんなが使う場所での正しい過ごし方は？", choices: ["静かに過ごす", "大声で走る", "お菓子を食べる", "ゲームを大音量でする"], answer: "静かに過ごす", explanation: "" },
    { grade: 4, genre: "math", type: "select", text: "時速60kmの車が、2時間で進む距離は？", choices: ["120km", "30km", "60km", "180km"], answer: "120km", explanation: "" },
    { grade: 4, genre: "moral", type: "select", text: "SNSで友達の悪口を書いている人を見つけました。適切な行動は？", choices: ["関わらず、大人や先生に相談する", "自分も一緒に書き込む", "その人を強く責め立てる", "面白そうなので友達に拡散する"], answer: "関わらず、大人や先生に相談する", explanation: "" },
    { grade: 4, genre: "moral", type: "select", text: "「責任（せきにん）を持つ」とはどういうこと？", choices: ["自分の失敗を認め、次につなげること", "絶対に失敗しないこと", "誰かのせいにすること", "嫌なことから逃げること"], answer: "自分の失敗を認め、次につなげること", explanation: "" },
    { grade: 4, genre: "math", type: "direct", text: "25 × 4 の答えはいくつ？", choices: [], answer: "100", explanation: "" },
    { grade: 4, genre: "moral", type: "which", text: "友達が困っているときは、声をかけずに放っておくのが正しい行動である。○か×か？", choices: ["○", "×"], answer: "×", explanation: "正解は×（バツ）だよ！<br>なにか手伝えることがないか、<b>「どうしたの？」</b>と優しく声をかけてあげよう。" },
    { grade: 0, genre: "math", type: "select", text: "りんごが 3こ あります。2こ もらうと、ぜんぶで なんこ？", choices: ["5こ", "4こ", "1こ", "6こ"], answer: "5こ", explanation: "" },
    { grade: 4, genre: "japanese", type: "select", text: "「他人の行動を見て、自分の行いを改める」という意味の四字熟語は？", choices: ["反面教師", "単刀直入", "以心伝心", "弱肉強食"], answer: "反面教師", explanation: "" },
    { grade: 4, genre: "math", type: "select", text: "1リットルは何ミリリットル（ml）？", choices: ["1000ml", "100ml", "10ml", "10000ml"], answer: "1000ml", explanation: "" },
    { grade: 0, genre: "math", type: "select", text: "「8」の つぎに おおきい かずは なに？", choices: ["9", "5", "11", "6"], answer: "9", explanation: "" },
    { grade: 4, genre: "japanese", type: "select", text: "次のうち、「敬語（尊敬語）」として正しいものはどれ？", choices: ["先生がお見えになる", "先生が来る", "先生が参る", "先生が来られる"], answer: "先生がお見えになる", explanation: "" },
    { grade: 0, genre: "moral", type: "select", text: "ごはんを たべるとき、さいしょに 言う あいさつは？", choices: ["ごちそうさま", "いただきます", "こんにちは", "ありがとう"], answer: "いただきます", explanation: "" },
    { grade: 4, genre: "japanese", type: "select", text: "「一生懸命」と同じ意味の言葉はどれ？", choices: ["必死になって", "てきとうに", "のんびりと", "おこりながら"], answer: "必死になって", explanation: "「一生懸命」は、命をかけるくらい<span style='color:red; font-weight:bold;'>全力でがんばる</span>という意味の四字熟語だよ。" },
    { grade: 4, genre: "math", type: "select", text: "三角形の面積を求める公式はどれ？", choices: ["底辺×高さ÷2", "半径×半径×3.14", "縦×横", "底辺×高さ×2"], answer: "底辺×高さ÷2", explanation: "正解は「底辺×高さ÷2」だよ！<br>「÷2」をするのを<b>絶対に忘れないように</b>しようね！" },
    { grade: 4, genre: "japanese", type: "select", text: "「（ ）も歩けば棒に当たる」空欄に入る動物は？", choices: ["犬", "猫", "猿", "鳥"], answer: "犬", explanation: "" },
    { grade: 0, genre: "math", type: "direct", text: "1 + 1 は？", choices: [], answer: "2", explanation: "" }
];

// 一括登録関数
async function addBulkQuestionsFromAdmin() {
    if (!confirm(`用意されたクイズ問題（計 ${bulkQuestionsData.length} 問）を一括で追加登録します。よろしいですか？`)) return;

    let successCount = 0;
    let errorCount = 0;

    try {
        console.log("一括バルク登録スタート...");

        for (const q of bulkQuestionsData) {
            await addDoc(collection(db, "questions"), {
                grade: q.grade,
                genre: q.genre,
                type: q.type,
                text: q.text,
                choices: q.choices,
                answer: q.answer,
                explanation: q.explanation || "" // 💡 explanation フィールドを追加して保存
            });
            successCount++;
        }

        alert(`🎉 一括登録が完了しました！\n成功: ${successCount}件 / 失敗: ${errorCount}件`);

        // クイズ一覧テーブルを最新に更新
        if (typeof window.renderAdminQuestionList === 'function') {
            await window.renderAdminQuestionList();
        }

    } catch (e) {
        console.error("一括登録中に致命的なエラーが発生しました", e);
        alert(`一括インサートの途中でエラーが発生しました。\n登録済みの件数: ${successCount}件`);
    }
}

// 📄 js/sub_js/add_quiz.js の一番下に以下の関数を追加します

// 🔥 【新設】クイズコレクションの全件一括削除プログラム
async function deleteAllQuestionsFromAdmin() {
    // 誤操作によるデータ全消去を防ぐための厳格な三段階確認
    if (!confirm("⚠️ 【警告】本当にすべてのクイズ問題を削除しますか？\nこの操作は取り消せません。")) return;
    const finalCheck = prompt("削除を確定するには、半角で「del」と入力してください。");
    if (finalCheck !== "del") {
        alert("文字が一致しなかったため、削除をキャンセルしました。");
        return;
    }

    try {
        // 現在画面に表示されている、またはDBにあるすべてのクイズドキュメントを取得
        const querySnapshot = await getDocs(collection(db, "questions"));
        let deleteCount = 0;

        // ループで1件ずつ確実に削除
        for (const docSnap of querySnapshot) {
            await deleteDoc(doc(db, "questions", docSnap.id));
            deleteCount++;
        }

        alert(`🗑️ すべてのクイズ問題（計 ${deleteCount} 件）を完全に削除しました。`);

        // クイズ一覧テーブルを最新の空状態に再描画
        if (typeof window.renderAdminQuestionList === 'function') {
            await window.renderAdminQuestionList();
        }

    } catch (e) {
        console.error("一括削除中にエラーが発生しました", e);
        alert("削除処理の途中でエラーが発生しました。一部のデータが残っている可能性があります。");
    }
}

// HTML（onclick）から呼び出せるように追加公開
window.addBulkQuestionsFromAdmin = addBulkQuestionsFromAdmin;
window.deleteAllQuestionsFromAdmin = deleteAllQuestionsFromAdmin;
