// ==========================================
// 管理者画面（admin.html）親コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';
import { bulkQuestionsData } from './add_quiz.js'; // 💡同じフォルダ内にあるadd_quiz.jsからデータを読み込む！

// ==========================================
// 3️⃣【クイズ管理】専用プログラム（英単語type ＆ 解説対応版）
// ==========================================
async function renderAdminQuestionList() {
    const tbody = document.getElementById('admin-question-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="8">データを読み込み中...</td></tr>';

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
            const typeValue = data.type || 'select'; 

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><small>${gradeLabel} (${data.grade})</small></td>
                <td><input type="text" id="ad-q-genre-${id}" value="${data.genre || ''}" style="width:70px;"></td>
                <td>
                    <select id="ad-q-type-${id}">
                        <option value="select" ${typeValue === 'select' || typeValue === '四択' ? 'selected' : ''}>四択</option>
                        <option value="which" ${typeValue === 'which' || typeValue === '○×' ? 'selected' : ''}>○×</option>
                        <option value="direct" ${typeValue === 'direct' || typeValue === '直接入力' ? 'selected' : ''}>直接入力</option>
                    </select>
                </td>
                <td><input type="text" id="ad-q-text-${id}" value="${data.text || ''}"></td>
                <td><input type="text" id="ad-q-choices-${id}" value="${choicesText}" placeholder="a,b,c,d"></td>
                <td><input type="text" id="ad-q-answer-${id}" value="${data.answer || ''}" style="width:80px;"></td>
                <!-- 💡 解説入力用の textarea 列を追加（HTMLタグをそのまま編集可能） -->
                <td><textarea id="ad-q-explanation-${id}" style="width:180px; height:50px; font-size:12px;">${data.explanation || ''}</textarea></td>
                <td>
                    <button onclick="saveAdminQuestion('${id}')">保存</button>
                    <button onclick="deleteAdminQuestion('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8">クイズ問題が1問もありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="8" style="color:red;">クイズデータの取得に失敗しました。</td></tr>';
    }
}

// クイズ問題の個別編集・保存
async function saveAdminQuestion(id) {
    const genre = document.getElementById(`ad-q-genre-${id}`).value.trim();
    const type = document.getElementById(`ad-q-type-${id}`).value; 
    const text = document.getElementById(`ad-q-text-${id}`).value.trim();
    const choicesStr = document.getElementById(`ad-q-choices-${id}`).value.trim();
    const answer = document.getElementById(`ad-q-answer-${id}`).value.trim();
    const explanation = document.getElementById(`ad-q-explanation-${id}`).value.trim(); // 💡解説の取得

    const choicesArray = choicesStr ? choicesStr.split(',').map(s => s.trim()) : [];

    try {
        await updateDoc(doc(db, "questions", id), {
            genre: genre,
            type: type, 
            text: text,
            choices: choicesArray,
            answer: answer,
            explanation: explanation // 💡Firebaseのフィールドを更新
        });
        alert("クイズデータを更新しました！🎉");
        await renderAdminQuestionList();
    } catch (e) { alert("更新に失敗しました。"); }
}

// クイズ問題の削除
async function deleteAdminQuestion(id) {
    if(!confirm("この問題を削除しますか？")) return;
    try {
        await deleteDoc(doc(db, "questions", id));
        await renderAdminQuestionList();
    } catch (e) { alert("削除に失敗しました。"); }
}

// 新しいクイズの追加
async function addQuestionFromAdmin() {
    const gradeVal = document.getElementById('new-q-grade').value;
    const genre = document.getElementById('new-q-genre').value.trim();
    const type = document.getElementById('new-q-type').value; 
    const text = document.getElementById('new-q-text').value.trim();
    const choicesStr = document.getElementById('new-q-choices').value.trim();
    const answer = document.getElementById('new-q-answer').value.trim();
    const explanation = document.getElementById('new-q-explanation').value.trim(); // 💡解説の取得

    if (gradeVal === "" || !genre || !text || !answer) {
        alert("学年、ジャンル、問題文、正解は必ず入力・選択してね！");
        return;
    }

    const choicesArray = choicesStr ? choicesStr.split(',').map(s => s.trim()) : [];

    try {
        await addDoc(collection(db, "questions"), {
            grade: parseInt(gradeVal),
            genre: genre,
            type: type, 
            text: text,
            choices: choicesArray,
            answer: answer,
            explanation: explanation // 💡新規追加時に保存
        });

        // フォームのリセット
        document.getElementById('new-q-genre').value = '';
        document.getElementById('new-q-text').value = '';
        document.getElementById('new-q-choices').value = '';
        document.getElementById('new-q-answer').value = '';
        document.getElementById('new-q-explanation').value = ''; // 解説入力欄をクリア

        await renderAdminQuestionList(); 
        alert("新しいクイズ問題を1件追加しました！🎉");
    } catch (e) { alert("追加に失敗しました。"); }
}

// 🔥 【新設】クイズコレクションの全件一括削除プログラム
async function deleteAllQuestionsFromAdmin() {
    // 誤操作によるデータ全消去を防ぐための厳格な三段階確認
    if (!confirm("⚠️ 【警告】本当にすべてのクイズ問題を削除しますか？\nこの操作は取り消せません。")) return;
    const finalCheck = prompt("削除を確定するには、半角で「del」と入力してください。");
    if (finalCheck !== "del") {
        alert("文字が一致しなかったため、削除をキャンセルしました。");
        return;
    }

    try {
        // 現在画面に表示されている、またはDBにあるすべてのクイズドキュメントを取得
        const querySnapshot = await getDocs(collection(db, "questions"));
        let deleteCount = 0;

        // ループで1件ずつ確実に削除
        for (const docSnap of querySnapshot.docs) {
            await deleteDoc(doc(db, "questions", docSnap.id));
            deleteCount++;
        }

        alert(`🗑️ すべてのクイズ問題（計 ${deleteCount} 件）を完全に削除しました。`);

        // クイズ一覧テーブルを最新の空状態に再描画
        if (typeof window.renderAdminQuestionList === 'function') {
            await window.renderAdminQuestionList();
        }

    } catch (e) {
        console.error("一括削除中にエラーが発生しました", e);
        alert("削除処理の途中でエラーが発生しました。一部のデータが残っている可能性があります。");
    }
}

// 親ファイルやHTMLへのグローバル公開登録
window.renderAdminQuestionList = renderAdminQuestionList;
window.saveAdminQuestion = saveAdminQuestion;
window.deleteAdminQuestion = deleteAdminQuestion;
window.addQuestionFromAdmin = addQuestionFromAdmin;
window.deleteAllQuestionsFromAdmin = deleteAllQuestionsFromAdmin;
