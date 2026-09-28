// ==========================================
// 💡 一括登録用クイズ（親）
// ==========================================
// 📝 大量に登録したいクイズデータの配列（1レコード1行仕様）

// 配列を空っぽで宣言
export const bulkQuestionsData = [];

// 各学年の「中身」をインポートする（関数やオブジェクトとして読み込む）
import { loadQuestions0 } from './add_quiz_0.js';
import { loadQuestions2 } from './add_quiz_2.js';

// 配列へ追加を実行する
loadQuestions0(bulkQuestionsData);
loadQuestions2(bulkQuestionsData);
