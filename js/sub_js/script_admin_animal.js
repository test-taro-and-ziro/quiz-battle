// ==========================================
// 管理者画面（admin.html）親コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from './firebase-config.js';

// 4️⃣【💡新設：動物管理】一覧描画・保存・削除・追加（自動ID生成版）
async function renderAdminAnimalList() {
    const tbody = document.getElementById('admin-animal-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="5">データを読み込み中...</td></tr>';

    try {
        const querySnapshot = await getDocs(collection(db, "animal"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const id = docSnap.id; // 自動生成されたID
            const data = docSnap.data();

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" id="ad-an-lab-${id}" value="${data.label || ''}"></td>
                <td><input type="text" id="ad-an-val-${id}" value="${data.value || ''}"></td>
                <td><input type="text" id="ad-an-male-${id}" value="${data.male || ''}"></td>
                <td><input type="text" id="ad-an-female-${id}" value="${data.female || ''}"></td>
                <td>
                    <button onclick="saveAdminAnimal('${id}')">保存</button>
                    <button onclick="deleteAdminAnimal('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5">動物マスターデータがありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="5" style="color:red;">動物データの取得に失敗しました。</td></tr>';
    }
}

// 動物マスターの個別編集・保存
window.saveAdminAnimal = async function(id) {
    const label = document.getElementById(`ad-an-lab-${id}`).value.trim();
    const val = document.getElementById(`ad-an-val-${id}`).value.trim();
    const male = document.getElementById(`ad-an-male-${id}`).value.trim();
    const female = document.getElementById(`ad-an-female-${id}`).value.trim();

    if (!label || !val || !male || !female) {
        alert("すべての項目を入力してね！");
        return;
    }

    try {
        await updateDoc(doc(db, "animal", id), {
            label: label,
            value: val,
            male: male,
            female: female
        });
        alert("動物マスターデータを更新しました！🎉");
    } catch (e) { alert("更新に失敗しました。"); }
};

// 動物マスターの削除
window.deleteAdminAnimal = async function(id) {
    if(!confirm("この動物データを削除しますか？")) return;
    try {
        await deleteDoc(doc(db, "animal", id));
        await renderAdminAnimalList();
    } catch (e) { alert("削除に失敗しました。"); }
};

// 新しい動物の追加（addDocによる自動ID生成）
async function addAnimalFromAdmin() {
    const label = document.getElementById('new-an-label').value.trim();
    const val = document.getElementById('new-an-value').value.trim();
    const male = document.getElementById('new-an-male').value.trim();
    const female = document.getElementById('new-an-female').value.trim();

    if (!label || !val || !male || !female) {
        alert("すべての項目を入力してね！");
        return;
    }

    try {
        // コレクション名「animal」に自動生成IDで追加
        await addDoc(collection(db, "animal"), {
            label: label,
            value: val,
            male: male,
            female: female
        });

        // フォームのリセット
        document.getElementById('new-an-label').value = '';
        document.getElementById('new-an-value').value = '';
        document.getElementById('new-an-male').value = '';
        document.getElementById('new-an-female').value = '';

        await renderAdminAnimalList(); // リストを最新に再描画
        alert("新しい動物マスターデータを追加しました！🎉");
    } catch (e) {
        console.error(e);
        alert("追加に失敗しました。");
    }
}

// 「親画面の起動時」や「HTMLのボタン」から呼べるようにwindowに登録
window.renderAdminUserList = renderAdminUserList;
// window.deleteAdminUser = deleteAdminUser; (もし削除関数があれば登録)
