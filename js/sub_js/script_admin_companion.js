// ==========================================
// 6️⃣【💡新設：仲間管理】専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

async function validateGenresOnlyValue(array) {
    if (array.length === 0) return true; // 空っぽならチェック不要でOK

    try {
        // 科目マスター（genres）から有効な「value」の一覧を取得する
        const genreSnapshot = await getDocs(collection(db, "genres"));
        const validValues = new Set(); // 有効なValue値を詰め込む箱

        genreSnapshot.forEach(d => {
            const gData = d.data();
            if (gData.value) {
                validValues.add(gData.value.trim()); // 例: "japanese", "math"
            }
        });

        // 入力された文字を1つずつチェック
        for (const item of array) {
            // もし科目マスターのValue値に存在しない文字（例:「こくご」など）があればエラー
            if (!validValues.has(item)) {
                alert(`🚨 エラー:「${item}」は無効な科目コードです。\n科目マスターの【送信値(value)】（例: japanese, math）で入力してください。`);
                return false; 
            }
        }
        return true; // すべてValue値なら合格！
    } catch (e) {
        console.error("科目マスターのチェックに失敗しました", e);
        return false;
    }
}

// 一覧描画
async function renderAdminCompanionList() {
    const tbody = document.getElementById('admin-companion-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="6">仲間データを読み込み中...</td></tr>';

    try {
        const querySnapshot = await getDocs(collection(db, "companions"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const id = docSnap.id; 
            const data = docSnap.data();

            // 💡 DBの中身（japaneseなど）をそのままテキストボックスにカンマ区切りで表示する
            const goodText = data.good_genres ? data.good_genres.join(',') : '';
            const badText = data.bad_genres ? data.bad_genres.join(',') : '';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" id="ad-comp-name-${id}" value="${data.name || ''}" style="width:110px;"></td>
                <td><input type="text" id="ad-comp-id-${id}" value="${data.id || ''}" style="width:100px;"></td>
                <td><input type="text" id="ad-comp-img-${id}" value="${data.img || ''}" style="width:110px;"></td>
                <td><input type="text" id="ad-comp-good-${id}" value="${goodText}" placeholder="例: japanese"></td>
                <td><input type="text" id="ad-comp-bad-${id}" value="${badText}" placeholder="例: social,japanese"></td>
                <td>
                    <button onclick="saveAdminCompanion('${id}')">保存</button>
                    <button onclick="deleteAdminCompanion('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6">仲間マスターデータがありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="6" style="color:red;">仲間データの取得に失敗しました。</td></tr>';
    }
}

// 個別編集・保存
async function saveAdminCompanion(id) {
    const name = document.getElementById(`ad-comp-name-${id}`).value.trim();
    const compId = document.getElementById(`ad-comp-id-${id}`).value.trim();
    const img = document.getElementById(`ad-comp-img-${id}`).value.trim();
    const goodStr = document.getElementById(`ad-comp-good-${id}`).value.trim();
    const badStr = document.getElementById(`ad-comp-bad-${id}`).value.trim();

    if (!name || !compId) {
        alert("名前と識別IDは必須入力です！");
        return;
    }

    const goodArray = goodStr ? goodStr.split(',').map(s => s.trim()).filter(Boolean) : [];
    const badArray = badStr ? badStr.split(',').map(s => s.trim()).filter(Boolean) : [];

    // 💡 厳格チェックを実行：不適切な文字があれば、ここで処理を終了（保存させない）
    const isGoodValid = await validateGenresOnlyValue(goodArray);
    if (!isGoodValid) return;

    const isBadValid = await validateGenresOnlyValue(badArray);
    if (!isBadValid) return;

    try {
        await updateDoc(doc(db, "companions", id), {
            name: name,
            id: compId,
            img: img,
            good_genres: goodArray, // そのまま保存
            bad_genres: badArray    // そのまま保存
        });
        alert("仲間マスターデータを更新しました！🎉");
        await renderAdminCompanionList();
    } catch (e) { 
        console.error(e);
        alert("更新に失敗しました。"); 
    }
}

// 仲間マスターの削除
async function deleteAdminCompanion(id) {
    if (!confirm("この仲間データを削除しますか？")) return;
    try {
        await deleteDoc(doc(db, "companions", id));
        await renderAdminCompanionList();
        alert("仲間データを削除しました。");
    } catch (e) { 
        console.error(e);
        alert("削除に失敗しました。"); 
    }
}

// 新しい仲間の追加
async function addCompanionFromAdmin() {
    const name = document.getElementById('new-comp-name').value.trim();
    const compId = document.getElementById('new-comp-id').value.trim();
    const img = document.getElementById('new-comp-img').value.trim();
    const goodStr = document.getElementById('new-comp-good').value.trim();
    const badStr = document.getElementById('new-comp-bad').value.trim();

    if (!name || !compId) {
        alert("名前と識別IDを入力してね！");
        return;
    }

    const goodArray = goodStr ? goodStr.split(',').map(s => s.trim()).filter(Boolean) : [];
    const badArray = badStr ? badStr.split(',').map(s => s.trim()).filter(Boolean) : [];

    // 💡 追加前にも、厳格チェックを実行して不適切な文字を弾く
    const isGoodValid = await validateGenresOnlyValue(goodArray);
    if (!isGoodValid) return;

    const isBadValid = await validateGenresOnlyValue(badArray);
    if (!isBadValid) return;

    try {
        await addDoc(collection(db, "companions"), {
            name: name,
            id: compId,
            img: img,
            good_genres: goodArray,
            bad_genres: badArray
        });

        document.getElementById('new-comp-name').value = '';
        document.getElementById('new-comp-id').value = '';
        document.getElementById('new-comp-img').value = '';
        document.getElementById('new-comp-good').value = '';
        document.getElementById('new-comp-bad').value = '';

        await renderAdminCompanionList(); 
        alert("新しい仲間マスターデータを追加しました！🎉");
    } catch (e) {
        console.error(e);
        alert("追加に失敗しました。");
    }
}

window.renderAdminCompanionList = renderAdminCompanionList;
window.saveAdminCompanion = saveAdminCompanion;
window.deleteAdminCompanion = deleteAdminCompanion;
window.addCompanionFromAdmin = addCompanionFromAdmin;
