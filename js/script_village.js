// 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from './firebase-config.js';
// 共通ファイルを読み込む1行を追加
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setCompanionSrc, loadGenreMaster, loadGradeMaster, loadCompanionMaster, loadDungeonMaster, 
        setupPlayerMaster, logoutPlayerMaster, prepareTempData,
        animalMasterData, genreMasterData, gradeMasterData, companionMasterData, dungeonMasterData, currentLoginUser, currentPlayerData, tempData } from './game-master.js';

// ★ グローバル変数として宣言（必須）
let tempEquipment = [];

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

async function renderCompanionSetting() {

    await loadCompanionMaster();

    const friends = currentPlayerData.companions || [];
    const equipment = tempEquipment; // 一時保存用

    const equipmentZone = document.getElementById("equipment-list");
    const companionsZone = document.getElementById("companions-list");

    equipmentZone.innerHTML = "";
    companionsZone.innerHTML = "";

    // 上：連れていく仲間（横並び）
    equipment.forEach(id => {
        const comp = companionMasterData.find(c => c.id === id);
        if (!comp) return;

        equipmentZone.innerHTML += `
            <div class="companion-card selected" onclick="toggleSelect('${id}')">
                <img src="images/sub/${comp.img}">
                <div class="companion-info">
                    <div>${comp.name}</div>
                </div>
            </div>
        `;
    });

    // 下：友達になった仲間（縦並び）
    friends.forEach(id => {
        const comp = companionMasterData.find(c => c.id === id);
        if (!comp) return;

        const goods = comp.goods ? comp.goods.join(" / ") : "";
        const genius = comp.genius ? comp.genius.join(" / ") : "";

        const isSelected = equipment.includes(id);

        companionsZone.innerHTML += `
            <div class="companion-card ${isSelected ? "selected" : ""}" onclick="toggleSelect('${id}')">
                <img src="images/sub/${comp.img}">
                <div class="companion-info">
                    <div>${comp.name}</div>
                    <div>得意：${goods}</div>
                    <div>天才：${genius}</div>
                </div>
            </div>
        `;
    });
}

function toggleSelect(companionId) {
    const equipment = tempEquipment; // 一時保存用
    const isSelected = equipment.includes(companionId);

    // 選択済み → 外す
    if (isSelected) {
        tempEquipment = equipment.filter(id => id !== companionId);
        renderCompanionSetting();
        return;
    }

    // 未選択 → 追加（最大2人）
    if (equipment.length >= 2) {
        alert("つれていける仲間は 2人までだよ！");
        return;
    }

    tempEquipment = [...equipment, companionId];
    renderCompanionSetting();
}
async function saveCompanionSetting() {
    const userRef = doc(db, "users", currentPlayerData.docId);

    await updateDoc(userRef, {
        equipment: tempEquipment
    });

    currentPlayerData.equipment = tempEquipment;

    alert("保存したよ！");
    closeCompanionModal();
}

// ★ HTML の onclick から呼べるようにする
window.goQuest = goQuest;
window.closeCompanionModal = closeCompanionModal;
window.toggleSelect = toggleSelect;
