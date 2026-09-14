// ==========================================
// 管理者画面（admin.html）親コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 2️⃣ 【学年管理】一覧描画・保存・削除・追加
async function renderAdminGradeList() {
    const tbody = document.getElementById('admin-grade-list');
    const formGradeSelect = document.getElementById('new-q-grade');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="3">読み込み中...</td></tr>';
    
    try {
        const querySnapshot = await getDocs(collection(db, "grades"));
        tbody.innerHTML = '';
        if (formGradeSelect) formGradeSelect.innerHTML = '<option value="">-- 対象の学年を選んでね --</option>';
        
        const gradeList = [];
        querySnapshot.forEach(docSnap => {
            gradeList.push({ id: docSnap.id, ...docSnap.data() });
        });
        gradeList.sort((a, b) => a.value - b.value); 

        gradeList.forEach((data) => {
            const id = data.id; // どこかで必要らしい
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="number" id="ad-grade-val-${id}" value="${data.value}"></td>
                <td><input type="text" id="ad-grade-lab-${id}" value="${data.label}"></td>
                <td>
                    <button onclick="saveAdminGrade('${id}')">保存</button>
                    <button onclick="deleteAdminGrade('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);

            // 💡 クイズ問題追加用フォームの学年ドロップダウンの選択肢も同時に増やす
            if (formGradeSelect) {
                const opt = document.createElement('option');
                opt.value = data.value;
                opt.textContent = data.label;
                formGradeSelect.appendChild(opt);
            }
        });
    } catch(e) { tbody.innerHTML = '<tr><td colspan="4">読込失敗</td></tr>'; }
}

window.saveAdminGrade = async function(id) {
    const val = parseInt(document.getElementById(`ad-grade-val-${id}`).value);
    const lab = document.getElementById(`ad-grade-lab-${id}`).value.trim();
    if (isNaN(val) || !lab) { alert("正しい値を入力してください。"); return; }
    try {
        await setDoc(doc(db, "grades", id), { value: val, label: lab }, { merge: true });
        await renderAdminUserList(); 
    } catch (e) { alert("保存に失敗しました。"); }
};

window.deleteAdminGrade = async function(id) {
    if(!confirm("本当に削除しますか？")) return;
    try {
        await deleteDoc(doc(db, "grades", id));
        await renderAdminGradeList();
        await renderAdminUserList();
    } catch (e) { alert("削除に失敗しました。"); }
};

async function addGradeFromAdmin() {
    const val = parseInt(document.getElementById('new-grade-value').value);
    const lab = document.getElementById('new-grade-label').value.trim();
    if(isNaN(val) || !lab) { alert("すべての項目を正しく入力してね"); return; }
    
    try {
        // 💡 ドキュメント名（ID）を指定せず、コレクションに addDoc で直接放り込みます！
        await addDoc(collection(db, "grades"), {value: val, label: lab });

        // フォームを綺麗にクリア
        document.getElementById('new-grade-value').value = '';
        document.getElementById('new-grade-label').value = '';
        await renderAdminGradeList();
        await renderAdminUserList();
    } catch (e) { alert("追加に失敗しました。"); }
}

// 「親画面の起動時」や「HTMLのボタン」から呼べるようにwindowに登録
window.renderAdminGradeList = renderAdminGradeList;
window.addGradeFromAdmin = addGradeFromAdmin;
