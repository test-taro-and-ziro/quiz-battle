// ==========================================
// 管理者画面（admin.html）親コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

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

// 「親画面の起動時」や「HTMLのボタン」から呼べるようにwindowに登録
window.renderAdminQuestionList = renderAdminQuestionList;
window.addQuestionFromAdmin = addQuestionFromAdmin;
