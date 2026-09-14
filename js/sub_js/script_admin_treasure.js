// ==========================================
// 8️⃣【💡新設：宝物管理】専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 一覧描画
async function renderAdminTreasureList() {
    const tbody = document.getElementById('admin-treasure-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="5">宝物データを読み込み中...</td></tr>';

    try {
        const querySnapshot = await getDocs(collection(db, "treasures"));
        tbody.innerHTML = '';

        // orderは文字列型ですが、数値的に並び替えて一覧表示しやすくします
        const treasureList = [];
        querySnapshot.forEach(docSnap => {
            treasureList.push({ id: docSnap.id, ...docSnap.data() });
        });
        treasureList.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

        treasureList.forEach((data) => {
            const id = data.id; // 自動生成されたドキュメントID

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" id="ad-tres-name-${id}" value="${data.name || ''}"></td>
                <td><input type="text" id="ad-tres-code-${id}" value="${data.treasure || ''}" style="width:100px;"></td>
                <td><input type="text" id="ad-tres-img-${id}" value="${data.img || ''}"></td>
                <td><input type="text" id="ad-tres-order-${id}" value="${data.order || ''}" style="width:70px;"></td>
                <td>
                    <button onclick="saveAdminTreasure('${id}')">保存</button>
                    <button onclick="deleteAdminTreasure('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5">宝物マスターデータがありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="5" style="color:red;">宝物データの取得に失敗しました。</td></tr>';
    }
}

// 個別編集・保存
async function saveAdminTreasure(id) {
    const name = document.getElementById(`ad-tres-name-${id}`).value.trim();
    const treasure = document.getElementById(`ad-tres-code-${id}`).value.trim();
    const img = document.getElementById(`ad-tres-img-${id}`).value.trim();
    const order = document.getElementById(`ad-tres-order-${id}`).value.trim(); // DBに合わせて文字列で取得

    if (!name || !treasure) {
        alert("宝物名と宝物コードは必須入力です！");
        return;
    }

    try {
        await updateDoc(doc(db, "treasures", id), {
            name: name,
            treasure: treasure,
            img: img,
            order: order // 文字列型のまま保存
        });
        alert("宝物マスターデータを更新しました！🎉");
        await renderAdminTreasureList();
    } catch (e) {
        console.error(e);
        alert("更新に失敗しました。");
    }
}

// 宝物マスターの削除
async function deleteAdminTreasure(id) {
    if (!confirm("この宝物データを削除しますか？")) return;
    try {
        await deleteDoc(doc(db, "treasures", id));
        await renderAdminTreasureList();
        alert("宝物データを削除しました。");
    } catch (e) {
        console.error(e);
        alert("削除に失敗しました。");
    }
}

// 新しい宝物の追加（addDocによる自動ID生成）
async function addTreasureFromAdmin() {
    const name = document.getElementById('new-tres-name').value.trim();
    const treasure = document.getElementById('new-tres-code').value.trim();
    const img = document.getElementById('new-tres-img').value.trim();
    const order = document.getElementById('new-tres-order').value.trim(); // DBに合わせて文字列で扱う

    if (!name || !treasure) {
        alert("宝物名と宝物コードを入力してね！");
        return;
    }

    try {
        await addDoc(collection(db, "treasures"), {
            name: name,
            treasure: treasure,
            img: img,
            order: order // 文字列型で保存
        });

        // フォームのリセット
        document.getElementById('new-tres-name').value = '';
        document.getElementById('new-tres-code').value = '';
        document.getElementById('new-tres-img').value = '';
        document.getElementById('new-tres-order').value = '';

        await renderAdminTreasureList(); // 最新リストに再描画
        alert("新しい宝物マスターデータを追加しました！🎉");
    } catch (e) {
        console.error(e);
        alert("追加に失敗しました。");
    }
}

// 親ファイルやHTMLへのグローバル公開登録
window.renderAdminTreasureList = renderAdminTreasureList;
window.saveAdminTreasure = saveAdminTreasure;
window.deleteAdminTreasure = deleteAdminTreasure;
window.addTreasureFromAdmin = addTreasureFromAdmin;
