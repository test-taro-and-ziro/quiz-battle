// ==========================================
// Firebase 共通設定・初期化ファイル
// ==========================================
// バージョン（例: 10.13.0）や拡張子（.js）まで正しく記述します
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js';
import { 
  getFirestore, 
  collection, // データI/Oで使用する大きい箱
  doc,    // データI/Oで使用する小さい箱
  addDoc, // 場所を自動生成させてデータを保存
  getDocs, // すべてのデータを読み込む
  setDoc, // 指定した場所にデータを書き込む
  getDoc, // 指定した場所のデータを読み込む
  updateDoc,  // 更新機能
  deleteDoc  // 削除機能
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';

// ご自身のFirebaseプロジェクトの設定値
const firebaseConfig = {
    apiKey: "AIzaSyBUfZOKhw9nHc5K6sq7pMWH2eeVixVx3wI",
    authDomain: "quiz-battle-b8b48.firebaseapp.com",
    projectId: "quiz-battle-b8b48",
    storageBucket: "quiz-battle-b8b48.firebasestorage.app",
    messagingSenderId: "883874950005",
    appId: "1:883874950005:web:08b22a374ccb1e6133013c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 💡 外部のJSファイルからでもデータベースを扱えるように export（書き出し）する
export const db = getFirestore(app);
