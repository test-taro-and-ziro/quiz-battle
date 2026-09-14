// ==========================================
// 管理者画面（admin.html）子コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from './firebase-config.js';
// 💡 共通マスタファイルからお仕事をインポート
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, setupPlayerMaster } from './game-master.js';

// 1️⃣ 【ユーザー管理】一覧描画と保存（新システム完全対応版）
async function renderAdminUserList() {
    const tbody = document.getElementById('admin-user-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="5">データを読み込み中...</td></tr>';

    try {
        const gradeSnapshot = await getDocs(collection(db, "grades"));
        const gradeMaster = [];
        gradeSnapshot.forEach(d => gradeMaster.push({ id: d.id, ...d.data() }));
        gradeMaster.sort((a, b) => a.value - b.value); 

        const querySnapshot = await getDocs(collection(db, "users"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const docId = docSnap.id; 
            const data = docSnap.data();
            const username = data.name || 'なまえなし'; 
            
            let gradeOptionsHTML = '';
            gradeMaster.forEach(g => {
                const isSelected = data.grade === g.value ? 'selected' : '';
                gradeOptionsHTML += `<option value="${g.value}" ${isSelected}>${g.label}</option>`;
            });

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" id="admin-name-${docId}" value="${username}" style="width:120px; font-weight:bold;"></td>
                <td><select id="admin-grade-${docId}">${gradeOptionsHTML}</select></td>
                <td><input type="text" id="admin-gender-${docId}" value="${data.gender || ''}" style="width:70px;"></td>
                <td><input type="text" id="admin-animal-${docId}" value="${data.animal || ''}" style="width:70px;"></td>
                <td><button id="btn-save-${docId}">保存</button></td>
            `;
            
            // 💡 修正箇所：シングルクォートからバッククォート（`）に変更し、変数埋め込みのエラーを解消！
            tr.querySelector(`#btn-save-${docId}`).onclick = async function() {
                try {
                    await updateDoc(doc(db, "users", docId), {
                        name: document.getElementById(`admin-name-${docId}`).value, 
                        grade: parseInt(document.getElementById(`admin-grade-${docId}`).value),
                        gender: document.getElementById(`admin-gender-${docId}`).value,
                        animal: document.getElementById(`admin-animal-${docId}`).value
                    });
                    alert(`${username} さんのデータを更新しました！`);
                    // 保存成功後に、最新のユーザー一覧を再描画して整合性を保つ
                    await renderAdminUserList();
                } catch(err) { 
                    console.error(err);
                    alert("更新に失敗しました。"); 
                }
            };
            tbody.appendChild(tr);
        });
    } catch(e) { 
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="5" style="color:red;">読込失敗</td></tr>'; 
    }
}
//「親画面の起動時」や「HTMLのボタン」から呼べるようにwindowに登録
window.renderAdminUserList = renderAdminUserList;
