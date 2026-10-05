// ==========================================
// 6️⃣【仲間管理】専用プログラム
// ==========================================

// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from '../firebase-config.js';
// 💡 共通ファイルを読み込む1行を追加
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setCompanionSrc, loadGenreMaster, loadGradeMaster, loadCompanionMaster, loadDungeonMaster, 
        setupPlayerMaster, logoutPlayerMaster,
        animalMasterData, genreMasterData, gradeMasterData, companionMasterData, dungeonMasterData, currentLoginUser, currentPlayerData } from '../game-master.js';

// 仲間一覧キャッシュ
let companionsCache = {};

// ==========================================
// 仲間一覧を読み込み & 描画
// ==========================================
async function renderAdminCompanionList() {
    
    await loadGenreMaster(); // ジャンル情報

    const querySnapshot = await getDocs(collection(db, "companions"));
    const tbody = document.getElementById("admin-companion-list");
    tbody.innerHTML = "";

    companionsCache = {}; // 初期化

    querySnapshot.forEach((docSnap) => {
        const id = docSnap.id;
        const data = docSnap.data();

        companionsCache[id] = {
            name: data.name || "",
            img: data.img || "",
            good: data.good || [],
            genius: data.genius || []
        };

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><input type="text" id="com-name-${id}" value="${data.name || ""}"></td>
            <td><input type="text" id="com-id-${id}" value="${data.id || ""}"></td>
            <td><input type="text" id="com-img-${id}" value="${data.img || ""}"></td>

            <!-- 得意科目リスト -->
            <td>
                <div id="good-list-${id}" class="genre-list"></div>
                <button onclick="addGoodItem('${id}')" class="btn-add">＋追加</button>
            </td>
            <!-- 天才科目リスト -->
            <td>
                <div id="genius-list-${id}" class="genre-list"></div>
                <button onclick="addGeniusItem('${id}')" class="btn-add">＋追加</button>
            </td>

            <td>
                <button onclick="saveAdminCompanion('${id}')">保存</button>
                <button onclick="deleteAdminCompanion('${id}')" style="background:#e53e3e;">削除</button>
            </td>
        `;

        tbody.appendChild(tr);

        // リスト描画
        renderGoodList(id);
        renderGeniusList(id);
    });
}

// ==========================================
// 得意科目（good）リスト描画
// ==========================================
function renderGoodList(id) {
    const container = document.getElementById(`good-list-${id}`);
    container.innerHTML = "";

    companionsCache[id].good.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "genre-row";

        row.innerHTML = `
            <input type="text" id="good-${id}-${index}" value="${item}">
            <button class="btn-delete" onclick="deleteGoodItem('${id}', ${index})">×</button>
        `;
        container.appendChild(row);
    });
}

// ==========================================
// 天才科目（genius）リスト描画
// ==========================================
function renderGeniusList(id) {
    const container = document.getElementById(`genius-list-${id}`);
    container.innerHTML = "";

    companionsCache[id].genius.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "genre-row";

        row.innerHTML = `
            <input type="text" id="genius-${id}-${index}" value="${item}">
            <button class="btn-delete" onclick="deleteGeniusItem('${id}', ${index})">×</button>
        `;
        container.appendChild(row);
    });
}

// ==========================================
// 行追加（good / genius）
// ==========================================
window.addGoodItem = function(id) {
    companionsCache[id].good.push("");
    renderGoodList(id);
};

window.addGeniusItem = function(id) {
    companionsCache[id].genius.push("");
    renderGeniusList(id);
};

// ==========================================
// 行削除（good / genius）
// ==========================================
window.deleteGoodItem = function(id, index) {
    companionsCache[id].good.splice(index, 1);
    renderGoodList(id);
};

window.deleteGeniusItem = function(id, index) {
    companionsCache[id].genius.splice(index, 1);
    renderGeniusList(id);
};

// ==========================================
// 保存処理（リスト → 配列に再構築）
// ==========================================
async function saveAdminCompanion(id) {
    try {
        const name = document.getElementById(`com-name-${id}`).value.trim();
        const img = document.getElementById(`com-img-${id}`).value.trim();
        const newId = document.getElementById(`com-id-${id}`).value.trim();

        const goodInputs = [...document.querySelectorAll(`#good-list-${id} input`)];
        const good = goodInputs.map(i => i.value.trim()).filter(v => v !== "");

        const geniusInputs = [...document.querySelectorAll(`#genius-list-${id} input`)];
        const genius = geniusInputs.map(i => i.value.trim()).filter(v => v !== "");

        await updateDoc(doc(db, "companions", id), {
            name,
            img,
            id: newId,
            good,
            genius
        });

        alert("仲間データを保存しました！");
    } catch (e) {
        console.error(e);
        alert("保存に失敗しました");
    }
};

// ==========================================
// 仲間削除
// ==========================================
async function deleteAdminCompanion(id) {
    if (!confirm("本当に削除しますか？")) return;

    await deleteDoc(doc(db, "companions", id));
    alert("削除しました！");
    renderAdminCompanionList();
};

// ==========================================
// 新規追加
// ==========================================
async function addCompanionFromAdmin(){
    try {
        const name = document.getElementById("new-comp-name").value.trim();
        const id = document.getElementById("new-comp-id").value.trim();
        const img = document.getElementById("new-comp-img").value.trim();

        const good = document.getElementById("new-comp-good")
            .value.split("\n")
            .map(v => v.trim())
            .filter(v => v !== "");

        const genius = document.getElementById("new-comp-genius")
            .value.split("\n")
            .map(v => v.trim())
            .filter(v => v !== "");

        await setDoc(doc(db, "companions", id), {
            name,
            img,
            id,
            good,
            genius
        });

        alert("新しい仲間を追加しました！");
        renderAdminCompanionList();

    } catch (e) {
        console.error(e);
        alert("追加に失敗しました");
    }
};

// 親ファイルやHTMLへのグローバル公開登録
window.renderAdminCompanionList = renderAdminCompanionList;
window.saveAdminCompanion = saveAdminCompanion;
window.deleteAdminCompanion = deleteAdminCompanion;
window.addCompanionFromAdmin = addCompanionFromAdmin;
