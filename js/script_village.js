// 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from './firebase-config.js';
// 共通ファイルを読み込む1行を追加
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setCompanionSrc, loadGenreMaster, loadGradeMaster, loadCompanionMaster, loadDungeonMaster, 
        setupPlayerMaster, logoutPlayerMaster, prepareTempData,
        animalMasterData, genreMasterData, gradeMasterData, companionMasterData, dungeonMasterData, currentLoginUser, currentPlayerData, tempData } from './game-master.js';

// 起動時にプレイヤー情報を読み込む
window.addEventListener('DOMContentLoaded', async () => {

    // URLの「?temp=ドキュメントID」からプレイヤーの名前を読み取る
    const urlParams = new URLSearchParams(window.location.search);
    const docid = urlParams.get('temp');
    if (!docid) {
        alert("ゲームデータが見つかりません。もういちどログインしてね！");
        window.location.href = 'index.html';
        return;
    }
    // ★ temp コレクション読み取り（共通関数）
    await prepareTempData(docid); // docID で読み取れる
    if (!tempData) {
        // 名前が取れなければ安全のためにトップ画面に戻す
        alert("もういちどログインしなおしてね！");
        window.location.href = 'index.html';
        return;
    }

    // ユーザ情報を取得する
    await setupPlayerMaster(tempData.name);

    // 仲間設定ポップアップを開く
    document.getElementById('open-companion-setting').addEventListener('click', () => {
        renderCompanionSetting();
        document.getElementById('companion-modal').classList.remove('hidden');
    });

});

// クエスト画面へ戻る
function goQuest() {
    window.location.href = `quest.html?temp=${encodeURIComponent(tempData.id)}`;
}
// 仲間設定を閉じる
function closeCompanionModal() {
    document.getElementById('companion-modal').classList.add('hidden');
}

// 仲間一覧を表示
async function renderCompanionSetting() {
    const zone = document.getElementById('companion-setting-list');
    zone.innerHTML = "";

    await loadCompanionMaster();

    const friends = currentPlayerData.companions || [];   // 友達になった仲間（全員）
    const equipment = currentPlayerData.equipment || [];  // 連れていく仲間（最大2人）

    friends.forEach(id => {

        const comp = companionMasterData.find(c => c.id === id);
        if (!comp) return;

        const isOn = equipment.includes(id);

        const div = document.createElement('div');
        div.className = "companion-row";

        div.innerHTML = `
            <label class="companion-label">
                <img src="images/sub/${comp.img}" class="companion-img">
                <input type="checkbox" value="${comp.id}" ${isOn ? "checked" : ""}>
                <span>${comp.name}</span>
            </label>
        `;

        zone.appendChild(div);
    });

    // チェックイベント
    zone.querySelectorAll("input[type='checkbox']").forEach(chk => {
        chk.addEventListener("change", () => {
            toggleEquipment(chk.value);
        });
    });
}

async function toggleEquipment(companionId) {

    const userRef = doc(db, "users", currentPlayerData.docId);
    const current = currentPlayerData.equipment || [];

    // ON → OFF（外す）
    if (current.includes(companionId)) {
        const newList = current.filter(id => id !== companionId);
        await updateDoc(userRef, { equipment: newList });
        currentPlayerData.equipment = newList;
        renderCompanionSetting();
        return;
    }

    // OFF → ON（追加）
    if (current.length >= 2) {
        alert("つれていける仲間は 2人までだよ！");
        return;
    }

    const newList = [...current, companionId];
    await updateDoc(userRef, { equipment: newList });
    currentPlayerData.equipment = newList;

    renderCompanionSetting();
}

// ★ HTML の onclick から呼べるようにする
window.goQuest = goQuest;
window.closeCompanionModal = closeCompanionModal;
