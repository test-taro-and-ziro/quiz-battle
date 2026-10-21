// ==========================================
// 💡 一括登録用クイズ（親）
// ==========================================
// 📝 大量に登録したいクイズデータの配列（1レコード1行仕様）

// 配列を空っぽで宣言
export const bulkQuestionsData = [];

// 各学年の「中身」をインポートする（関数やオブジェクトとして読み込む）
//import { loadQuestions0 } from './add_quiz_0.js';
//import { loadQuestions1 } from './add_quiz_1.js';
//import { loadQuestions2 } from './add_quiz_2.js';
//import { loadQuestions3 } from './add_quiz_3.js';
//import { loadQuestions4 } from './add_quiz_4.js';
//import { loadQuestions5 } from './add_quiz_5.js';
//import { loadQuestions6 } from './add_quiz_6.js';
import { loadQuestions_custom } from './add_quiz_custom.js';
import { loadQuestions_add } from './add_quiz_add.js';

// 配列へ追加を実行する
//loadQuestions0(bulkQuestionsData);
//loadQuestions1(bulkQuestionsData);
//loadQuestions2(bulkQuestionsData);
//loadQuestions3(bulkQuestionsData);
//loadQuestions4(bulkQuestionsData);
//loadQuestions5(bulkQuestionsData);
//loadQuestions6(bulkQuestionsData);
loadQuestions_custom(bulkQuestionsData);
loadQuestions_add(bulkQuestionsData);
