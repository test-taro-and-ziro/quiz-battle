// ==========================================
// 💡 一括登録用クイズ（親）
// ==========================================
// 📝 大量に登録したいクイズデータの配列（1レコード1行仕様）

// 配列を空っぽで宣言
export const bulkQuestionsData = [];

// 各学年の「中身」をインポートする（関数やオブジェクトとして読み込む）
//import { loadQuestions0 } from './add_quiz_0.js';
//import { loadQuestions2 } from './add_quiz_2.js';
//import { loadQuestions4 } from './add_quiz_4.js';
//import { loadQuestions5 } from './add_quiz_5.js';
//import { loadQuestionsetc } from './add_quiz_etc.js';

import { loadQuestions_add } from './add_quiz_add.js';

// 配列へ追加を実行する
//loadQuestions0(bulkQuestionsData);
//loadQuestions2(bulkQuestionsData);
//loadQuestions4(bulkQuestionsData);
//loadQuestions5(bulkQuestionsData);
//loadQuestionsetc(bulkQuestionsData);

loadQuestions_add(bulkQuestionsData);
