// ==========================================
// 管理者画面（admin.html）専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db } from './firebase-config.js';
import { 
  getFirestore, 
  collection, // データI/Oで使用する大きい箱
  doc,    // データI/Oで使用する小さい箱
  addDoc, // 場所を自動生成させてデータを保存
  getDocs, // すべてのデータを読み込む
  setDoc, // 指定した場所にデータを書き込む
  getDoc, // 指定した場所のデータを読み込む
  updateDoc,  // 更新機能
  deleteDoc  // 削除機能
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';

// 起動時処理（データの一括読込のみ）
window.addEventListener('DOMContentLoaded', async () => {
    switchAdminTab('tab-users'); 
    await renderAdminUserList(); // 💡 ユーザマスター一覧をロード
    await renderAdminGradeList(); // 💡 学年マスター一覧をロード
    await renderAdminQuestionList(); // 💡 クイズマスター一覧をロード
    await renderAdminAnimalList(); // 💡 動物マスター一覧をロード
    await renderAdminGenreList();  // 💡 科目マスター一覧をロード
});

// タブを切り替える関数
function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));
    
    const activeBtn = Array.from(document.querySelectorAll('.admin-tabs .tab-btn')).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (activeBtn) activeBtn.classList.add('active');
    
    const targetContent = document.getElementById(tabId);
    if (targetContent) targetContent.classList.add('active');
}

// 1️⃣ 【ユーザー管理】一覧描画と保存
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
                } catch(err) { alert("更新に失敗しました。"); }
            };
            tbody.appendChild(tr);
        });
    } catch(e) { tbody.innerHTML = '<tr><td colspan="7" style="color:red;">読込失敗</td></tr>'; }
}

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

// 3️⃣【💡新設：クイズ管理】一覧描画・保存・削除・追加（1問1レコード）
async function renderAdminQuestionList() {
    const tbody = document.getElementById('admin-question-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="7">データを読み込み中...</td></tr>';

    try {
        // 先に学年用の表示名マスターをサッと取得
        const gradeSnapshot = await getDocs(collection(db, "grades"));
        const gradeMap = {};
        gradeSnapshot.forEach(d => { gradeMap[d.data().value] = d.data().label; });

        const querySnapshot = await getDocs(collection(db, "questions"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const id = docSnap.id; // 自動生成されたID
            const data = docSnap.data();
            
            // choices配列を「カンマ区切り」の文字に戻して表示する
            const choicesText = data.choices ? data.choices.join(',') : '';
            const gradeLabel = gradeMap[data.grade] || (data.grade + "の学年値");

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><small>${gradeLabel} (${data.grade})</small></td>
                <td><input type="text" id="ad-q-genre-${id}" value="${data.genre || ''}" style="width:70px;"></td>
                <td>
                    <select id="ad-q-type-${id}">
                        <option value="四択" ${data.type === '四択' ? 'selected' : ''}>四択</option>
                        <option value="○×" ${data.type === '○×' ? 'selected' : ''}>○×</option>
                        <option value="直接入力" ${data.type === '直接入力' ? 'selected' : ''}>直接入力</option>
                    </select>
                </td>
                <td><input type="text" id="ad-q-text-${id}" value="${data.text || ''}"></td>
                <td><input type="text" id="ad-q-choices-${id}" value="${choicesText}" placeholder="a,b,c,d"></td>
                <td><input type="text" id="ad-q-answer-${id}" value="${data.answer || ''}" style="width:80px;"></td>
                <td>
                    <button onclick="saveAdminQuestion('${id}')">保存</button>
                    <button onclick="deleteAdminQuestion('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7">クイズ問題が1問もありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="7" style="color:red;">クイズデータの取得に失敗しました。</td></tr>';
    }
}

// クイズ問題の個別編集・保存
window.saveAdminQuestion = async function(id) {
    const genre = document.getElementById(`ad-q-genre-${id}`).value.trim();
    const type = document.getElementById(`ad-q-type-${id}`).value;
    const text = document.getElementById(`ad-q-text-${id}`).value.trim();
    const choicesStr = document.getElementById(`ad-q-choices-${id}`).value.trim();
    const answer = document.getElementById(`ad-q-answer-${id}`).value.trim();

    // カンマ区切りの文字列を配列に変換
    const choicesArray = choicesStr ? choicesStr.split(',').map(s => s.trim()) : [];

    try {
        await updateDoc(doc(db, "questions", id), {
            genre: genre,
            type: type,
            text: text,
            choices: choicesArray,
            answer: answer
        });
        alert("クイズデータを更新しました！");
    } catch (e) { alert("更新に失敗しました。"); }
};

// クイズ問題の削除
window.deleteAdminQuestion = async function(id) {
    if(!confirm("この問題を削除しますか？")) return;
    try {
        await deleteDoc(doc(db, "questions", id));
        await renderAdminQuestionList();
    } catch (e) { alert("削除に失敗しました。"); }
};

// 新しいクイズの追加（addDocによる自動ID生成）
async function addQuestionFromAdmin() {
    const gradeVal = document.getElementById('new-q-grade').value;
    const genre = document.getElementById('new-q-genre').value.trim();
    const type = document.getElementById('new-q-type').value;
    const text = document.getElementById('new-q-text').value.trim();
    const choicesStr = document.getElementById('new-q-choices').value.trim();
    const answer = document.getElementById('new-q-answer').value.trim();

    if (gradeVal === "" || !genre || !text || !answer) {
        alert("学年、ジャンル、問題文、正解は必ず入力・選択してね！");
        return;
    }

    // カンマ区切りのテキストを配列データにきれいに分解
    const choicesArray = choicesStr ? choicesStr.split(',').map(s => s.trim()) : [];

    try {
        // ドキュメント名を指定せず、大きな箱（コレクション）に直接 addDoc で放り込む！
        await addDoc(collection(db, "questions"), {
            grade: parseInt(gradeVal),
            genre: genre,
            type: type,
            text: text,
            choices: choicesArray,
            answer: answer
        });

        // フォームのリセット
        document.getElementById('new-q-genre').value = '';
        document.getElementById('new-q-text').value = '';
        document.getElementById('new-q-choices').value = '';
        document.getElementById('new-q-answer').value = '';

        await renderAdminQuestionList(); // リストを最新に再描画
        alert("新しいクイズ問題を1件追加しました！🎉");
    } catch (e) {
        console.error(e);
        alert("追加に失敗しました。");
    }
}

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
    const male = document.getElementById('new-an-report' ? 'new-an-male' : 'new-an-male').value.trim();
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

// 公開登録
window.switchAdminTab = switchAdminTab;
window.addGradeFromAdmin = addGradeFromAdmin;
window.addQuestionFromAdmin = addQuestionFromAdmin;
