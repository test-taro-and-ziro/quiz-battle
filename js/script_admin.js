// ==========================================
// 管理者画面（admin.html）専用プログラム
// ==========================================
import { initializeApp } from 'https://gstatic.com';
import { 
  getFirestore, 
  collection, 
  doc,    
  getDocs, 
  setDoc, 
  updateDoc,
  deleteDoc 
} from 'https://gstatic.com';

// ご自身のFirebaseプロジェクトの設定値
const firebaseConfig = {
    apiKey: "AIzaSyBUfZOKhw9nHc5K6sq7pMWH2eeVixVx3wI",
    authDomain: "://firebaseapp.com",
    projectId: "quiz-battle-b8b48",
    storageBucket: "quiz-battle-b8b48.firebasestorage.app",
    messagingSenderId: "883874950005",
    appId: "1:883874950005:web:08b22a374ccb1e6133013c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// タブを切り替える関数
function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));
    
    const activeBtn = Array.from(document.querySelectorAll('.admin-tabs .tab-btn')).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (activeBtn) activeBtn.classList.add('active');
    
    const targetContent = document.getElementById(tabId);
    if (targetContent) targetContent.classList.add('active');
}

// ユーザー管理一覧の描画
async function renderAdminUserList() {
    const tbody = document.getElementById('admin-user-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="7">データを読み込み中...</td></tr>';

    try {
        const gradeSnapshot = await getDocs(collection(db, "grades"));
        const gradeMaster = [];
        gradeSnapshot.forEach(d => gradeMaster.push({ id: d.id, ...d.data() }));
        gradeMaster.sort((a, b) => a.value - b.value); 

        const querySnapshot = await getDocs(collection(db, "users"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const username = docSnap.id;
            const data = docSnap.data();
            
            let gradeOptionsHTML = '';
            gradeMaster.forEach(g => {
                const isSelected = data.grade === g.value ? 'selected' : '';
                gradeOptionsHTML += `<option value="${g.value}" ${isSelected}>${g.label}</option>`;
            });

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${username}</strong></td>
                <td><select id="admin-grade-${username}">${gradeOptionsHTML}</select></td>
                <td><input type="text" id="admin-gender-${username}" value="${data.gender || ''}" style="width:70px;"></td>
                <td><input type="text" id="admin-animal-${username}" value="${data.animal || ''}" style="width:70px;"></td>
                <td><input type="number" id="admin-wins-${username}" value="${data.wins || 0}" style="width:50px;"></td>
                <td><input type="number" id="admin-lv-${username}" value="${data.lv || 1}" style="width:50px;"></td>
                <td><button id="btn-save-${username}">保存</button></td>
            `;
            
            tr.querySelector(`#btn-save-${username}`).onclick = async function() {
                try {
                    await updateDoc(doc(db, "users", username), {
                        grade: parseInt(document.getElementById(`admin-grade-${username}`).value),
                        gender: document.getElementById(`admin-gender-${username}`).value,
                        animal: document.getElementById(`admin-animal-${username}`).value,
                        wins: parseInt(document.getElementById(`admin-wins-${username}`).value),
                        lv: parseInt(document.getElementById(`admin-lv-${username}`).value)
                    });
                    alert(`${username} のデータを更新しました！`);
                } catch(err) { alert("更新に失敗しました。"); }
            };
            tbody.appendChild(tr);
        });
    } catch(e) { tbody.innerHTML = '<tr><td colspan="7" style="color:red;">読込失敗</td></tr>'; }
}

// 学年管理一覧の描画
async function renderAdminGradeList() {
    const tbody = document.getElementById('admin-grade-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="4">読み込み中...</td></tr>';
    
    try {
        const querySnapshot = await getDocs(collection(db, "grades"));
        tbody.innerHTML = '';
        
        const gradeList = [];
        querySnapshot.forEach(docSnap => {
            gradeList.push({ id: docSnap.id, ...docSnap.data() });
        });
        gradeList.sort((a, b) => a.value - b.value); 

        gradeList.forEach((data) => {
            const id = data.id;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><code>${id}</code></td>
                <td><input type="number" id="ad-grade-val-${id}" value="${data.value}"></td>
                <td><input type="text" id="ad-grade-lab-${id}" value="${data.label}"></td>
                <td>
                    <button onclick="saveAdminGrade('${id}')">保存</button>
                    <button onclick="deleteAdminGrade('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch(e) { tbody.innerHTML = '<tr><td colspan="4">読込失敗</td></tr>'; }
}

window.saveAdminGrade = async function(id) {
    const val = parseInt(document.getElementById(`ad-grade-val-${id}`).value);
    const lab = document.getElementById(`ad-grade-lab-${id}`).value.trim();
    if (isNaN(val) || !lab) { alert("正しい値を入力してください。"); return; }
    try {
        await setDoc(doc(db, "grades", id), { value: val, label: lab }, { merge: true });
        alert("学年データを更新しました！");
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
    const id = document.getElementById('new-grade-id').value.trim();
    const val = parseInt(document.getElementById('new-grade-value').value);
    const lab = document.getElementById('new-grade-label').value.trim();
    if(!id || isNaN(val) || !lab) { alert("すべての項目を正しく入力してね"); return; }
    
    try {
        await setDoc(doc(db, "grades", id), { value: val, label: lab });
        document.getElementById('new-grade-id').value = '';
        document.getElementById('new-grade-value').value = '';
        document.getElementById('new-grade-label').value = '';
        await renderAdminGradeList();
        await renderAdminUserList();
        alert("新しい学年を追加しました！");
    } catch (e) { alert("追加に失敗しました。"); }
}

// 起動時処理（データの一括読込のみ）
window.addEventListener('DOMContentLoaded', async () => {
    switchAdminTab('tab-users'); 
    await renderAdminUserList();
    await renderAdminGradeList();
});

// 公開登録
window.switchAdminTab = switchAdminTab;
window.addGradeFromAdmin = addGradeFromAdmin;
