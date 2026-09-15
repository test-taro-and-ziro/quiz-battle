// ==========================================
// 💡【新設】クイズ大量登録（一括インサート）プログラム
// ==========================================
// ? 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 📝 大量に登録したいクイズデータの配列
// ※テスト用にサンプルを記述しています。登録したい問題に合わせて自由に増減・編集してください！
const bulkQuestionsData = [
    {
        grade: 1,
        genre: "math",
        type: "select", // 四択
        text: "1たす2は なにかな？",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        grade: 1,
        genre: "japanese",
        type: "which", // ○×
        text: "「こんにちは」の さいごの文字は「は」である。○か×か？",
        choices: ["○", "×"],
        answer: "○"
    },
    {
        grade: 2,
        genre: "math",
        type: "direct", // 直接入力
        text: "かけざん九九の問題だよ。「二人が（ににんが）」のつぎの数字はなに？",
        choices: [], // 直接入力なので空配列
        answer: "4"
    },
    {
        grade: 3,
        genre: "science",
        type: "select",
        text: "ひまわりの花は、どの方角を向いて咲くことが多いかな？",
        choices: ["東", "西", "南", "北"],
        answer: "東"
    },
    {
        grade: 6,
        genre: "history",
        type: "select",
        text: "1192年（または1185年）に鎌倉幕府を開いたのはだれ？",
        choices: ["源頼朝", "足利尊氏", "織田信長", "徳川家康"],
        answer: "源頼朝"
    }
    // 💡 ここに同じ形式で中身を何十件、何百件とカンマ区切りで並べるだけで大量登録できます！
];

// ボタン押下時に実行される一括登録関数
async function addBulkQuestionsFromAdmin() {
    // 誤操作防止の二段階確認
    if (!confirm(`用意されたクイズ問題（計 ${bulkQuestionsData.length} 問）を一括で追加登録します。よろしいですか？`)) return;

    let successCount = 0;
    let errorCount = 0;

    try {
        // 大量登録中はボタンの連打を防ぐために簡易アラートかコンソールで進行を通知
        console.log("一括登録スタート...");

        // 配列をループして順番に addDoc を実行
        for (const q of bulkQuestionsData) {
            await addDoc(collection(db, "questions"), {
                grade: q.grade,
                genre: q.genre,
                type: q.type,
                text: q.text,
                choices: q.choices,
                answer: q.answer
            });
            successCount++;
        }

        alert(`🎉 一括登録が完了しました！\n成功: ${successCount}件 / 失敗: ${errorCount}件`);

        // クイズ管理画面の一覧テーブルがすでに読み込まれていれば、最新の状態に再描画する
        if (typeof window.renderAdminQuestionList === 'function') {
            await window.renderAdminQuestionList();
        }

    } catch (e) {
        console.error("一括登録中に致命的なエラーが発生しました", e);
        alert(`処理の途中でエラーが発生しました。\nそこまでに登録できた件数: ${successCount}件`);
    }
}

// HTML（onclick）から呼び出せるように公開登録
window.addBulkQuestionsFromAdmin = addBulkQuestionsFromAdmin;
