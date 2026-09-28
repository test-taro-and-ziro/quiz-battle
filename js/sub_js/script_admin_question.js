// ==========================================
// 管理者画面（admin.html）親コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from '../firebase-config.js';
// 💡 共通ファイルを読み込む1行を追加
import { loadAnimalMaster, getCharacterFileName, setCharacterSrc, loadGenreMaster, genreMasterData, loadGradeMaster, gradeMasterData, setupPlayerMaster, logoutPlayerMaster } from '../game-master.js';
// 💡クイズ用のフォルダ内にあるadd_quiz.jsからデータを読み込む！
import { bulkQuestionsData } from '../quiz_js/add_quiz.js';
// ==========================================
// 3️⃣【クイズ管理】専用プログラム（英単語type ＆ 解説対応版）
// ==========================================
async function renderAdminQuestionList() {
    const tbody = document.getElementById('admin-question-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="8">データを読み込み中...</td></tr>';

    try {
        // 💡 1. 共通マスタから学年とジャンルの最新データを両方ロードする
        await loadGradeMaster();
        await loadGenreMaster();

        // ==========================================
        // 💡 新規登録フォームのプルダウンをマスタ連動にする
        // ==========================================
        const newGradeSelect = document.getElementById('new-q-grade');
        if (newGradeSelect) {
            let options = '<option value="">-- 対象の学年を選んでね --</option>';
            gradeMasterData.forEach(g => {
                options += `<option value="${g.value}">${g.label}</option>`;
            });
            newGradeSelect.innerHTML = options;
        }
        
        const newGenreSelect = document.getElementById('new-q-genre');
        if (newGenreSelect) {
            let options = '<option value="">-- ジャンルを選んでね --</option>';
            genreMasterData.forEach(g => {
                const gValue = g.value || '';
                const gLabel = g.label_junior || gValue;
                options += `<option value="${gValue}">${gLabel}</option>`;
            });
            newGenreSelect.innerHTML = options;
        }
                
        // 💡 2. query と limit(100) を使って、安全にクイズデータを100件取得
        const q = query(collection(db, "questions"), limit(100));
        const querySnapshot = await getDocs(q);
        
        tbody.innerHTML = '';
        querySnapshot.forEach((docSnap) => {
            const id = docSnap.id; // 自動生成されたID
            const data = docSnap.data();
            
            // choices配列を「カンマ区切り」の文字に戻して表示する
            const choicesText = data.choices ? data.choices.join(',') : '';
            const typeValue = data.type || 'select'; 
            const currentGrade = data.grade !== undefined ? Number(data.grade) : 0; 
            const currentGenre = data.genre || ''; // 現在設定されているジャンル文字列（例: "japanese"）

            // 💡 3. Firebaseから取得した学年マスタ（gradeMasterData）を回して、プルダウンの選択肢を動的に組み立てる
            let gradeOptionsHtml = '';
            gradeMasterData.forEach(g => {
                const isSelected = (Number(g.value) === currentGrade) ? 'selected' : '';
                gradeOptionsHtml += `<option value="${g.value}" ${isSelected}>${g.label || g.Label}</option>`;
            });

            // 💡 4. ジャンルマスタ（genreMasterData）を回して、プルダウンの選択肢を動的に組み立てる
            let genreOptionsHtml = '';
            genreMasterData.forEach(g => {
                const gValue = g.value || ''; // データベースの値を表す「creative」など
                const gLabel = g.label_junior || gValue; // 💡 表示名はご指定の「label_junior（発想力など）」を使用！                
                const isSelected = (gValue === currentGenre) ? 'selected' : '';
                genreOptionsHtml += `<option value="${gValue}" ${isSelected}>${gLabel}</option>`;
            });
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><select id="ad-q-grade-${id}" class="admin-select-grade">${gradeOptionsHtml}</select></td>
                <td><select id="ad-q-genre-${id}" class="admin-select-genre">${genreOptionsHtml}</select></td>
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

// ==========================================
// 💡 クイズの個別保存処理（Firebase上書き更新）
// ==========================================
async function saveAdminQuestion(id) {
    const grade = document.getElementById(`ad-q-grade-${id}`).value;
    const genre = document.getElementById(`ad-q-genre-${id}`).value;
    const type = document.getElementById(`ad-q-type-${id}`).value; 
    const text = document.getElementById(`ad-q-text-${id}`).value.trim();
    const choicesStr = document.getElementById(`ad-q-choices-${id}`).value.trim();
    const answer = document.getElementById(`ad-q-answer-${id}`).value.trim();
    const explanation = document.getElementById(`ad-q-explanation-${id}`).value.trim(); // 💡解説の取得
    // カンマ区切りの文字列を配列に戻す
    const choicesArray = choicesStr ? choicesStr.split(',').map(s => s.trim()) : [];

    try {
        await updateDoc(doc(db, "questions", id), {
            grade: Number(grade), 
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

// ==========================================
// 💡 新しいクイズの追加処理
// ==========================================
window.addQuestionFromAdmin = async function() {
    const grade = document.getElementById('new-q-grade').value;
    const genre = document.getElementById('new-q-genre').value; 
    const type = document.getElementById('new-q-type').value; 
    const text = document.getElementById('new-q-text').value.trim();
    const choicesStr = document.getElementById('new-q-choices').value.trim();
    const answer = document.getElementById('new-q-answer').value.trim();
    const explanation = document.getElementById('new-q-explanation').value.trim(); // 💡解説の取得

    // 未選択チェック（空文字のプレースホルダーが選ばれている場合を弾く）
    if (grade === "" || genre === "" || !text || !answer) {
        alert("学年、ジャンル、問題文、正解は必ず入力・選択してね！");
        return;
    }
    showOverlay("新しいクイズを登録しています...");
    const choicesArray = choicesStr ? choicesStr.split(',').map(s => s.trim()) : [];

    try {
        await addDoc(collection(db, "questions"), {
            grade: Number(grade), 
            genre: genre,
            type: type, 
            text: text,
            choices: choicesArray,
            answer: answer,
            explanation: explanation 
        });

        // フォームのリセット（プルダウンは空文字にせず、初期位置の空文字へ戻す）
        document.getElementById('new-q-grade').value = '';
        document.getElementById('new-q-genre').value = '';
        document.getElementById('new-q-text').value = '';
        document.getElementById('new-q-choices').value = '';
        document.getElementById('new-q-answer').value = '';
        document.getElementById('new-q-explanation').value = ''; 

        hideOverlay(); 
        alert("新しいクイズ問題を1件追加しました！🎉");
        await renderAdminQuestionList(); 
    } catch (e) { 
        hideOverlay(); 
        console.error(e);
        alert("追加に失敗しました。"); 
    }
}

// 一括登録関数
async function addBulkQuestionsFromAdmin() {
    if (!confirm(`用意されたクイズ問題（計 ${bulkQuestionsData.length} 問）を一括で追加登録します。よろしいですか？`)) return;
    
    // 🌟 画面全体をロック
    showOverlay(`大量のクイズデータを一括登録しています<br>（計 ${bulkQuestionsData.length} 問）`);
    
    let successCount = 0;
    let errorCount = 0;

    try {
        console.log("一括バルク登録スタート...");

        for (const q of bulkQuestionsData) {
            await addDoc(collection(db, "questions"), {
                grade: q.grade,
                genre: q.genre,
                type: q.type,
                text: q.text,
                choices: q.choices,
                answer: q.answer,
                explanation: q.explanation || "" // 💡 explanation フィールドを追加して保存
            });
            successCount++;
        }

        hideOverlay(); // 🌟 ロック解除
        alert(`🎉 一括登録が完了しました！\n成功: ${successCount}件 / 失敗: ${errorCount}件`);

        // クイズ一覧テーブルを最新に更新
        if (typeof window.renderAdminQuestionList === 'function') {
            await window.renderAdminQuestionList();
        }

    } catch (e) {
        hideOverlay(); // 🌟 ロック解除
        console.error("一括登録中に致命的なエラーが発生しました", e);
        alert(`一括インサートの途中でエラーが発生しました。\n登録済みの件数: ${successCount}件`);
    }
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

    // 🌟 画面全体をロック
    showOverlay("すべてのクイズ問題を安全に消去しています");
    
    try {
        // 現在画面に表示されている、またはDBにあるすべてのクイズドキュメントを取得
        const querySnapshot = await getDocs(collection(db, "questions"));
        let deleteCount = 0;

        // ループで1件ずつ確実に削除
        for (const docSnap of querySnapshot.docs) {
            await deleteDoc(doc(db, "questions", docSnap.id));
            deleteCount++;
        }

        hideOverlay(); // 🌟 ロック解除
        alert(`🗑️ すべてのクイズ問題（計 ${deleteCount} 件）を完全に削除しました。`);

        // クイズ一覧テーブルを最新の空状態に再描画
        if (typeof window.renderAdminQuestionList === 'function') {
            await window.renderAdminQuestionList();
        }

    } catch (e) {
        hideOverlay(); // 🌟 ロック解除
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
window.addBulkQuestionsFromAdmin = addBulkQuestionsFromAdmin;
