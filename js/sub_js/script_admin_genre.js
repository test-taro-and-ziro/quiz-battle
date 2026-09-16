// ==========================================
// 管理者画面（admin.html）親コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 5️⃣【💡新設：科目管理】一覧描画・保存・削除・追加（自動ID生成版）
async function renderAdminGenreList() {
    const tbody = document.getElementById('admin-genre-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="4">データを読み込み中...</td></tr>';

    try {
        // 💡スクリーンショットの定義通り、コレクション名「genre」から取得します
        const querySnapshot = await getDocs(collection(db, "genre"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const id = docSnap.id; // 自動生成されたID
            const data = docSnap.data();
            const tr = document.createElement('tr');
            
            // 💡 新しいフィールド「Label_junior」を入力欄としてテーブル列に追加
            tr.innerHTML = `
                <td><input type="text" id="ad-gen-lab-${id}" value="${data.Label || ''}"></td>
                <td><input type="text" id="ad-gen-lab-jun-${id}" value="${data.Label_junior || ''}" placeholder="例: 英語"></td>
                <td><input type="text" id="ad-gen-val-${id}" value="${data.value || ''}"></td>
                <td>
                    <button onclick="saveAdminGenre('${id}')">保存</button>
                    <button onclick="deleteAdminGenre('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4">科目マスターデータがありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="4" style="color:red;">科目データの取得に失敗しました。</td></tr>';
    }
}

// 科目マスターの個別編集・保存
async function saveAdminGenre(id) {
    const label = document.getElementById(`ad-gen-lab-${id}`).value.trim();
    const labelJunior = document.getElementById(`ad-gen-lab-jun-${id}`).value.trim(); // 💡取得
    const val = document.getElementById(`ad-gen-val-${id}`).value.trim();

    if (!label || !val) {
        alert("表示名(Label)と送信値(value)は必須入力です！");
        return;
    }
    try {
        // 💡 スクリーンショットの定義通り「Label」「Label_junior」「value」でFirebaseを更新
        await updateDoc(doc(db, "genre", id), { 
            Label: label, 
            Label_junior: labelJunior,
            value: val 
        });
        alert("科目マスターデータを更新しました！🎉");
        await renderAdminGenreList();
    } catch(e) { alert("更新に失敗しました。"); }
}

// 科目マスターの削除
async function deleteAdminGenre(id) {
    if(!confirm("この科目データを削除しますか？")) return;
    try {
        await deleteDoc(doc(db, "genre", id));
        await renderAdminGenreList();
    } catch(e) { alert("削除に失敗しました。"); }
}

// 新しい科目の追加
async function addGenreFromAdmin() {
    const label = document.getElementById('new-gen-label').value.trim();
    const labelJunior = document.getElementById('new-gen-label-junior').value.trim(); // 💡取得
    const val = document.getElementById('new-gen-value').value.trim();

    if (!label || !val) {
        alert("表示名(Label)と送信値(value)を入力してね！");
        return;
    }
    try {
        // 💡 新規追加時も3つのフィールドで登録
        await addDoc(collection(db, "genre"), { 
            Label: label, 
            Label_junior: labelJunior,
            value: val 
        });
        document.getElementById('new-gen-label').value = '';
        document.getElementById('new-gen-label-junior').value = ''; // クリア
        document.getElementById('new-gen-value').value = '';
        await renderAdminGenreList(); 
        alert("新しい科目マスターデータを追加しました！🎉");
    } catch(e) { alert("追加に失敗しました。"); }
}

// 親ファイルやHTML（onclick）への公開登録
window.renderAdminGenreList = renderAdminGenreList;
window.saveAdminGenre = saveAdminGenre;
window.deleteAdminGenre = deleteAdminGenre;
window.addGenreFromAdmin = addGenreFromAdmin;
