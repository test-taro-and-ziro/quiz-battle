// ==========================================
// Firebase 共通設定・初期化ファイル
// ==========================================
import { initializeApp } from 'https://gstatic.com';
import { getFirestore } from 'https://gstatic.com';

const firebaseConfig = {
    apiKey: "AIzaSyBUfZOKhw9nHc5K6sq7pMWH2eeVixVx3wI",
    authDomain: "quiz-battle-b8b48.firebaseapp.com",
    projectId: "quiz-battle-b8b48",
    storageBucket: "quiz-battle-b8b48.firebasestorage.app",
    messagingSenderId: "883874950005",
    appId: "1:883874950005:web:08b22a374ccb1e6133013c"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// 💡 外部のJSファイルからでもデータベースを扱えるように export（書き出し）する
export const db = getFirestore(app);
