// ==========================================
// 7️⃣【💡新設：ダンジョン管理】専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 一覧描画
async function renderAdminDungeonList() {
    const tbody = document.getElementById('admin-dungeon-list');
    const formRewardsArea = document.getElementById('new-dunj-rewards-area'); 
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="6">ダンジョンデータを読み込み中...</td></tr>';

    try {
        // 💡 対策：コレクション名が「genres」または「genre」のどちらでも対応できるように安全に取得を試みる
        let genreSnapshot = null;
        try {
            genreSnapshot = await getDocs(collection(db, "genres"));
        } catch (err) {
            console.warn("genresコレクションの取得に失敗したため、genreで再試行します", err);
            genreSnapshot = await getDocs(collection(db, "genre"));
        }

        const genreList = [];
        if (genreSnapshot) {
            genreSnapshot.forEach(d => {
                const gData = d.data();
                // データベース上のフィールド名が label/value であるか確認
                if (gData.value && gData.label) {
                    genreList.push({ value: gData.value, label: gData.label });
                }
            });
        }

        // 💡 バックアップ対策：もし科目マスターが1件も取得できなかった場合は、デフォルトの3科目を適用する
        if (genreList.length === 0) {
            console.log("科目マスターが空のため、デフォルトの3科目をセットします。");
            genreList.push({ value: "japanese", label: "こくご" });
            genreList.push({ value: "math", label: "さんすう" });
            genreList.push({ value: "moral", label: "どうとく" });
        }

        // 新規追加フォーム側の報酬入力欄を動的に作り替える
        if (formRewardsArea) {
            formRewardsArea.innerHTML = ''; 
            genreList.forEach(g => {
                const div = document.createElement('div');
                div.style.flex = "1";
                div.style.minWidth = "120px";
                div.innerHTML = `
                    <label style="font-size:12px; display:block; margin-bottom:2px;">${g.label}報酬</label>
                    <input type="text" class="new-dunj-rew-input" data-genre="${g.value}" placeholder="例: T1" style="width:100%; padding: 4px; box-sizing: border-box;">
                `;
                formRewardsArea.appendChild(div);
            });
        }

        // ダンジョンデータを読み込む
        const querySnapshot = await getDocs(collection(db, "dungeons"));
        tbody.innerHTML = '';

        const dungeonList = [];
        querySnapshot.forEach(docSnap => {
            dungeonList.push({ id: docSnap.id, ...docSnap.data() });
        });
        dungeonList.sort((a, b) => (a.order || 0) - (b.order || 0));

        dungeonList.forEach((data) => {
            const id = data.id; 
            const rewards = data.rewards || {};

            // 一覧表の中の報酬入力欄を科目リストから組み立てる
            let rewardsHTML = '<div style="display:flex; gap:5px; flex-direction:column; font-size:12px;">';
            genreList.forEach(g => {
                const currentRewardValue = rewards[g.value] || ''; 
                rewardsHTML += `
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <span style="min-width: 50px; display: inline-block;">${g.label}:</span>
                        <input type="text" class="ad-dunj-rew-dynamic-${id}" data-genre="${g.value}" value="${currentRewardValue}" style="width:70px; padding:2px;">
                    </div>
                `;
            });
            rewardsHTML += '</div>';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${id}</strong></td>
                <td><input type="text" id="ad-dunj-name-${id}" value="${data.name || ''}" style="width:120px;"></td>
                <td><input type="number" id="ad-dunj-norma-${id}" value="${data.norma || 0}" style="width:80px;"></td>
                <td><input type="number" id="ad-dunj-order-${id}" value="${data.order || 0}" style="width:60px;"></td>
                <td>${rewardsHTML}</td>
                <td>
                    <button onclick="saveAdminDungeon('${id}')">保存</button>
                    <button onclick="deleteAdminDungeon('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6">ダンジョンマスターデータがありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="6" style="color:red;">ダンジョンデータの取得に失敗しました。</td></tr>';
    }
}

// 個別編集・保存
async function saveAdminDungeon(id) {
    const name = document.getElementById(`ad-dunj-name-${id}`).value.trim();
    const norma = parseInt(document.getElementById(`ad-dunj-norma-${id}`).value);
    const order = parseInt(document.getElementById(`ad-dunj-order-${id}`).value);

    if (!name || isNaN(norma) || isNaN(order)) {
        alert("名前、ノルマ、表示順は正しく入力してください。");
        return;
    }

    const rewards = {};
    const rewardInputs = document.querySelectorAll(`.ad-dunj-rew-dynamic-${id}`);
    rewardInputs.forEach(input => {
        const genreKey = input.getAttribute('data-genre');
        rewards[genreKey] = input.value.trim();
    });

    try {
        await updateDoc(doc(db, "dungeons", id), {
            name: name,
            norma: norma,
            order: order,
            rewards: rewards 
        });
        alert("ダンジョンマスターデータを更新しました！🎉");
        await renderAdminDungeonList();
    } catch (e) {
        console.error(e);
        alert("更新に失敗しました。");
    }
}

// ダンジョンマスターの削除
async function deleteAdminDungeon(id) {
    if (!confirm(`本当にダンジョン「${id}」を削除しますか？`)) return;
    try {
        await deleteDoc(doc(db, "dungeons", id));
        await renderAdminDungeonList();
        alert("ダンジョンデータを削除しました。");
    } catch (e) {
        console.error(e);
        alert("削除に失敗しました。");
    }
}

// 新しいダンジョンの追加
async function addDungeonFromAdmin() {
    const docId = document.getElementById('new-dunj-docid').value.trim();
    const name = document.getElementById('new-dunj-name').value.trim();
    const norma = parseInt(document.getElementById('new-dunj-norma').value);
    const order = parseInt(document.getElementById('new-dunj-order').value);

    if (!docId || !name || isNaN(norma) || isNaN(order)) {
        alert("ドキュメントID、名前、ノルマ、表示順を入力してね！");
        return;
    }

    const rewards = {};
    const newRewardInputs = document.querySelectorAll('.new-dunj-rew-input');
    newRewardInputs.forEach(input => {
        const genreKey = input.getAttribute('data-genre');
        rewards[genreKey] = input.value.trim();
    });

    try {
        const docRef = doc(db, "dungeons", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            alert("そのドキュメントIDは既に存在しています。別のIDにしてください。");
            return;
        }

        await setDoc(docRef, {
            name: name,
            norma: norma,
            order: order,
            rewards: rewards
        });

        document.getElementById('new-dunj-docid').value = '';
        document.getElementById('new-dunj-name').value = '';
        document.getElementById('new-dunj-norma').value = '';
        document.getElementById('new-dunj-order').value = '';
        
        newRewardInputs.forEach(input => input.value = '');

        await renderAdminDungeonList(); 
        alert("新しいダンジョンマスターデータを追加しました！🎉");
    } catch (e) {
        console.error(e);
        alert("追加に失敗しました。");
    }
}

// 親ファイルやHTMLへのグローバル公開登録
window.renderAdminDungeonList = renderAdminDungeonList;
window.saveAdminDungeon = saveAdminDungeon;
window.deleteAdminDungeon = deleteAdminDungeon;
window.addDungeonFromAdmin = addDungeonFromAdmin;
