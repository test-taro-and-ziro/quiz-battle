// ==========================================
// 管理者画面（admin.html）親コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from './firebase-config.js';

// 5️⃣【💡新設：科目管理】一覧描画・保存・削除・追加（自動ID生成版）
async function renderAdminGenreList() {
    const tbody = document.getElementById('admin-genre-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="3">データを読み込み中...</td></tr>';

    try {
        const querySnapshot = await getDocs(collection(db, "genre"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const id = docSnap.id; // 自動生成されたID
            const data = docSnap.data();

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" id="ad-ge-lab-${id}" value="${data.label || ''}"></td>
                <td><input type="text" id="ad-ge-val-${id}" value="${data.value || ''}"></td>
                <td>
                    <button onclick="saveAdminGenre('${id}')">保存</button>
                    <button onclick="deleteAdminGenre('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="3">科目マスターデータがありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="3" style="color:red;">科目データの取得に失敗しました。</td></tr>';
    }
}

// 科目マスターの個別編集・保存
window.saveAdminGenre = async function(id) {
    const label = document.getElementById(`ad-ge-lab-${id}`).value.trim();
    const val = document.getElementById(`ad-ge-val-${id}`).value.trim();

    if (!label || !val) {
        alert("すべての項目を入力してね！");
        return;
    }

    try {
        await updateDoc(doc(db, "genre", id), {
            label: label,
            value: val
        });
        alert("科目マスターデータを更新しました！🎉");
    } catch (e) { alert("更新に失敗しました。"); }
};

// 科目マスターの削除
window.deleteAdminGenre = async function(id) {
    if(!confirm("この科目データを削除しますか？")) return;
    try {
        await deleteDoc(doc(db, "genre", id));
        await renderAdminGenreList();
    } catch (e) { alert("削除に失敗しました。"); }
};

// 新しい科目の追加（addDocによる自動ID生成）
async function addGenreFromAdmin() {
    const label = document.getElementById('new-ge-label').value.trim();
    const val = document.getElementById('new-ge-value').value.trim();

    if (!label || !val) {
        alert("すべての項目を入力してね！");
        return;
    }

    try {
        // コレクション名「genre」に自動生成IDで追加 [js]
        await addDoc(collection(db, "genre"), {
            label: label,
            value: val
        });

        // フォームのリセット
        document.getElementById('new-ge-label').value = '';
        document.getElementById('new-ge-value').value = '';

        await renderAdminGenreList(); // リストを最新に再描画
        alert("新しい科目マスターデータを追加しました！🎉");
    } catch (e) {
        console.error(e);
        alert("追加に失敗しました。");
    }
}

// 「親画面の起動時」や「HTMLのボタン」から呼べるようにwindowに登録
window.renderAdminGenreList = renderAdminGenreList;
// window.deleteAdminUser = deleteAdminUser; (もし削除関数があれば登録)
