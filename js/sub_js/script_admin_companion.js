// ==========================================
// 6️⃣【💡新設：仲間管理】専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

async function convertGenresToValue(array) {
    try {
        // 科目マスター（genres）をサッと取得
        const genreSnapshot = await getDocs(collection(db, "genres"));
        const labelToValueMap = {}; // 「こくご」 -> 「japanese」 の辞書
        const validValues = new Set(); // 「japanese」 自体の存在チェック用

        genreSnapshot.forEach(d => {
            const gData = d.data();
            if (gData.value && gData.label) {
                labelToValueMap[gData.label.trim()] = gData.value.trim();
                validValues.add(gData.value.trim());
            }
        });

        // 変換処理
        return array.map(item => {
            const trimmed = item.trim();
            // もし「こくご」などLabel値で入力されていたらValue値（japanese）に変換
            if (labelToValueMap[trimmed]) {
                return labelToValueMap[trimmed];
            }
            // もし最初から「japanese」などのValue値で入力されていたらそのまま採用
            return trimmed;
        });
    } catch (e) {
        console.error("科目マスターの逆引きに失敗しました", e);
        return array; // 失敗時はそのまま返す安全策
    }
}

// 一覧描画
async function renderAdminCompanionList() {
    const tbody = document.getElementById('admin-companion-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="6">仲間データを読み込み中...</td></tr>';

    try {
        // 先に表示用として、科目マスターの Value から Label への逆引きマップを作っておく
        const genreSnapshot = await getDocs(collection(db, "genres"));
        const valueToLabelMap = {}; // 「japanese」 -> 「こくご」
        genreSnapshot.forEach(d => {
            const gData = d.data();
            if (gData.value && gData.label) {
                valueToLabelMap[gData.value.trim()] = gData.label.trim();
            }
        });

        const querySnapshot = await getDocs(collection(db, "companions"));
        tbody.innerHTML = '';

        querySnapshot.forEach((docSnap) => {
            const id = docSnap.id; 
            const data = docSnap.data();

            // 💡 画面上の表示：DB内が「japanese」になっていたら、管理者が分かりやすいように「こくご」に翻訳してテキストボックスに表示する
            const goodText = data.good_genres ? data.good_genres.map(v => valueToLabelMap[v] || v).join(',') : '';
            const badText = data.bad_genres ? data.bad_genres.map(v => valueToLabelMap[v] || v).join(',') : '';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" id="ad-comp-name-${id}" value="${data.name || ''}" style="width:110px;"></td>
                <td><input type="text" id="ad-comp-id-${id}" value="${data.id || ''}" style="width:100px;"></td>
                <td><input type="text" id="ad-comp-img-${id}" value="${data.img || ''}" style="width:110px;"></td>
                <td><input type="text" id="ad-comp-good-${id}" value="${goodText}" placeholder="例: さんすう"></td>
                <td><input type="text" id="ad-comp-bad-${id}" value="${badText}" placeholder="例: しゃかい,こくご"></td>
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

    // 💡 保存前に、入力された文字をすべてシステム用のValue値（japaneseなど）に自動変換する
    const goodConverted = await convertGenresToValue(goodArray);
    const badConverted = await convertGenresToValue(badArray);

    try {
        await updateDoc(doc(db, "companions", id), {
            name: name,
            id: compId,
            img: img,
            good_genres: goodConverted, // Value値で保存
            bad_genres: badConverted    // Value値で保存
        });
        alert("仲間マスターデータを更新しました！🎉（システム用Value値に補正しました）");
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

    // 💡 追加前にも、すべてシステム用のValue値（japaneseなど）に自動変換する
    const goodConverted = await convertGenresToValue(goodArray);
    const badConverted = await convertGenresToValue(badArray);

    try {
        await addDoc(collection(db, "companions"), {
            name: name,
            id: compId,
            img: img,
            good_genres: goodConverted, // Value値で保存
            bad_genres: badConverted    // Value値で保存
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
