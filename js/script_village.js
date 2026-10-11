// 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from './firebase-config.js';
// 共通ファイルを読み込む1行を追加
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setCompanionSrc, loadGenreMaster, loadGradeMaster, loadCompanionMaster, loadDungeonMaster, 
        setupPlayerMaster, logoutPlayerMaster, prepareTempData,
        animalMasterData, genreMasterData, gradeMasterData, companionMasterData, dungeonMasterData, currentLoginUser, currentPlayerData, tempData } from './game-master.js';

// 起動時にプレイヤー情報を読み込む
window.addEventListener('DOMContentLoaded', async () => {
    const user = new URLSearchParams(location.search).get('user');
    await setupPlayerMaster(user);

    // 仲間設定ポップアップを開く
    document.getElementById('open-companion-setting').addEventListener('click', () => {
        renderCompanionSetting();
        document.getElementById('companion-modal').classList.remove('hidden');
    });

});

// クエスト画面へ戻る
function goQuest() {
    window.location.href = `quest.html?user=${encodeURIComponent(currentLoginUser)}`;
}
.. 仲間設定を閉じる
function closeCompanionModal() {
    document.getElementById('companion-modal').classList.add('hidden');
}

// 仲間一覧を表示
function renderCompanionSetting() {
    const zone = document.getElementById('companion-setting-list');
    zone.innerHTML = "";

    companionMasterData.forEach(comp => {
        const div = document.createElement('div');
        div.className = "companion-row";

        const checked = currentPlayerData.companions.includes(comp.id) ? "checked" : "";

        div.innerHTML = `
            <label>
                <input type="checkbox" value="${comp.id}" ${checked}>
                ${comp.name}
            </label>
        `;

        zone.appendChild(div);
    });
}
