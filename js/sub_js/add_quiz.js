// ==========================================
// 💡【新設】クイズ大量登録（一括インサート）プログラム
// ==========================================
// ? 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 📝 大量に登録したいクイズデータの配列（HTML装飾をあらかじめ組み込んでいます）
const bulkQuestionsData = [
    {
        grade: 4,
        genre: "math",
        type: "select", // 四択
        text: "三角形の面積を求める公式はどれ？",
        choices: ["底辺×高さ÷2", "半径×半径×3.14", "縦×横", "底辺×高さ×2"],
        answer: "底辺×高さ÷2",
        explanation: "正解は「底辺×高さ÷2」だよ！<br>「÷2」をするのを<b>絶対に忘れないように</b>しようね！"
    },
    {
        grade: 4,
        genre: "japanese",
        type: "select", // 四択
        text: "「一生懸命」と同じ意味の言葉はどれ？",
        choices: ["必死になって", "てきとうに", "のんびりと", "おこりながら"],
        answer: "必死になって",
        explanation: "「一生懸命」は、命をかけるくらい<span style='color:red; font-weight:bold;'>全力でがんばる</span>という意味の四字熟語だよ。"
    },
    {
        grade: 4,
        genre: "moral",
        type: "which", // ○×
        text: "友達が困っているときは、声をかけずに放っておくのが正しい行動である。○か×か？",
        choices: ["○", "×"],
        answer: "×",
        explanation: "正解は×（バツ）だよ！<br>なにか手伝えることがないか、<b>「どうしたの？」</b>と優しく声をかけてあげよう。"
    }
    // 💡 今後、データをさらに大量投入したい場合は、この下に同じ形式で追加していけます！
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

// HTMLへの公開
window.addBulkQuestionsFromAdmin = addBulkQuestionsFromAdmin;

