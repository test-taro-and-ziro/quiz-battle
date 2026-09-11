// ==========================================
// クエスト選択画面（quest.html）専用プログラム
// ==========================================

// 共通設定ファイルから db を読み込む
import { db } from './firebase-config.js';
import { doc, getDoc } from 'https://gstatic.com';

let currentUser = null;

// 💡 画面が起動した時の処理
window.addEventListener('DOMContentLoaded', async () => {
    // 1. URLの「?user=おなまえ」からプレイヤーの名前を読み取る
    const urlParams = new URLSearchParams(window.location.search);
    currentUser = urlParams.get('user');

    if (!currentUser) {
        // 名前が取れなければ安全のためにトップ画面に戻す
        alert("もういちどログインしなおしてね！");
        window.location.href = 'index.html';
        return;
    }

    // 2. プレイヤーの名前を使って、Firebaseからキャラクター情報を読み込む
    await loadPlayerStatus();
});

// 💡 Firebaseからデータを読み込んで、左上の半透明の箱に表示する関数
async function loadPlayerStatus() {
    try {
        const docRef = doc(db, "users", currentUser);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();

            // ① おなまえを表示
            document.getElementById('player-name').textContent = currentUser;

            // ② ランク（学年）を表示 (0=幼児、それ以外=数字+年生)
            const displayGrade = userData.grade === 0 ? "幼児" : userData.grade + "年生";
            document.getElementById('player-grade').textContent = "ランク: " + displayGrade;

            // ③ キャラクター絵を表示
            const avatarImg = document.getElementById('player-avatar');
            if (userData.char_image) {
                avatarImg.src = "images/" + userData.char_image;
            } else {
                avatarImg.src = "images/placeholder.png";
            }
        } else {
            console.error("ユーザーデータが見つかりません");
        }
    } catch (e) {
        console.error("ステータス読み込みエラー:", e);
    }
}

// 💡 地図上のスタンプ（森・泉・洞窟）が押されたときの処理
function selectQuest(questName) {
    // 選択されたクエストの名前を小窓にセット
    document.getElementById('selected-quest-name').textContent = questName;
    
    // ジャンルを選ぶ小さな小窓（モーダル）をパッと表示する
    document.getElementById('genre-modal-overlay').style.display = 'flex';
}

// 💡 小窓の「えらびなおす」が押されたときの処理
function cancelQuestSelect() {
    // 小窓を非表示にする
    document.getElementById('genre-modal-overlay').style.display = 'none';
}

// 💡 ジャンル（さんすう・こくご）ボタンが押されたときの処理（game.html へ遷移）
function goToGame(genre) {
    const questName = document.getElementById('selected-quest-name').textContent;
    
    // 次のゲーム本編（game.html）へ「ユーザー名」「選んだクエスト」「ジャンル」をすべて引き継いでジャンプ！
    window.location.href = `game.html?user=${encodeURIComponent(currentUser)}&quest=${encodeURIComponent(questName)}&genre=${encodeURIComponent(genre)}`;
}

// HTMLの onclick から呼び出せるように window オブジェクトに登録 [js]
window.selectQuest = selectQuest;
window.cancelQuestSelect = cancelQuestSelect;
window.goToGame = goToGame;
