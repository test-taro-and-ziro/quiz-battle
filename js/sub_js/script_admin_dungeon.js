// ==========================================
// 7️⃣【💡新設：ダンジョン管理】専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 一覧描画
async function renderAdminDungeonList() {
    const tbody = document.getElementById('admin-dungeon-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="6">ダンジョンデータを読み込み中...</td></tr>';

    try {
        const querySnapshot = await getDocs(collection(db, "dungeons"));
        tbody.innerHTML = '';

        // 表示順（order）が数値で入っているため昇順でソート
        const dungeonList = [];
        querySnapshot.forEach(docSnap => {
            dungeonList.push({ id: docSnap.id, ...docSnap.data() });
        });
        dungeonList.sort((a, b) => (a.order || 0) - (b.order || 0));

        dungeonList.forEach((data) => {
            const id = data.id; // 手動設定されたドキュメントID（例: dungeon_01）
            const rewards = data.rewards || {};

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${id}</strong></td>
                <td><input type="text" id="ad-dunj-name-${id}" value="${data.name || ''}" style="width:120px;"></td>
                <td><input type="number" id="ad-dunj-norma-${id}" value="${data.norma || 0}" style="width:80px;"></td>
                <td><input type="number" id="ad-dunj-order-${id}" value="${data.order || 0}" style="width:60px;"></td>
                <td>
                    <div style="display:flex; gap:5px; flex-direction:column; font-size:12px;">
                        こくご: <input type="text" id="ad-dunj-rew-ja-${id}" value="${rewards.japanese || ''}" style="width:60px; padding:2px;">
                        さんすう: <input type="text" id="ad-dunj-rew-ma-${id}" value="${rewards.math || ''}" style="width:60px; padding:2px;">
                        どうとく: <input type="text" id="ad-dunj-rew-mo-${id}" value="${rewards.moral || ''}" style="width:60px; padding:2px;">
                    </div>
                </td>
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
    
    const rewJa = document.getElementById(`ad-dunj-rew-ja-${id}`).value.trim();
    const rewMa = document.getElementById(`ad-dunj-rew-ma-${id}`).value.trim();
    const rewMo = document.getElementById(`ad-dunj-rew-mo-${id}`).value.trim();

    if (!name || isNaN(norma) || isNaN(order)) {
        alert("名前、ノルマ、表示順は正しく入力してください。");
        return;
    }

    try {
        await updateDoc(doc(db, "dungeons", id), {
            name: name,
            norma: norma,
            order: order,
            rewards: {
                japanese: rewJa,
                math: rewMa,
                moral: rewMo
            }
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

// 新しいダンジョンの追加（ドキュメントIDを手動で指定するため setDoc を使用）
async function addDungeonFromAdmin() {
    const docId = document.getElementById('new-dunj-docid').value.trim();
    const name = document.getElementById('new-dunj-name').value.trim();
    const norma = parseInt(document.getElementById('new-dunj-norma').value);
    const order = parseInt(document.getElementById('new-dunj-order').value);
    
    const rewJa = document.getElementById('new-dunj-rew-japanese').value.trim();
    const rewMa = document.getElementById('new-dunj-rew-math').value.trim();
    const rewMo = document.getElementById('new-dunj-rew-moral').value.trim();

    if (!docId || !name || isNaN(norma) || isNaN(order)) {
        alert("ドキュメントID、名前、ノルマ、表示順を入力してね！");
        return;
    }

    try {
        // IDの重複チェック
        const docRef = doc(db, "dungeons", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            alert("そのドキュメントIDは既に存在しています。別のIDにしてください。");
            return;
        }

        // 指定したドキュメントIDで新しく保存
        await setDoc(docRef, {
            name: name,
            norma: norma,
            order: order,
            rewards: {
                japanese: rewJa,
                math: rewMa,
                moral: rewMo
            }
        });

        // フォームのリセット
        document.getElementById('new-dunj-docid').value = '';
        document.getElementById('new-dunj-name').value = '';
        document.getElementById('new-dunj-norma').value = '';
        document.getElementById('new-dunj-order').value = '';
        document.getElementById('new-dunj-rew-japanese').value = '';
        document.getElementById('new-dunj-rew-math').value = '';
        document.getElementById('new-dunj-rew-moral').value = '';

        await renderAdminDungeonList(); // 最新リストに再描画
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
