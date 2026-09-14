// ==========================================
// 7️⃣【💡新設：ダンジョン管理】専用プログラム
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 一覧描画
async function renderAdminDungeonList() {
    const tbody = document.getElementById('admin-dungeon-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="6">ダンジョンデータを読み込み中...</td></tr>';

    try {
        const querySnapshot = await getDocs(collection(db, "dungeons"));
        tbody.innerHTML = '';

        const dungeonList = [];
        querySnapshot.forEach(docSnap => {
            dungeonList.push({ id: docSnap.id, ...docSnap.data() });
        });
        dungeonList.sort((a, b) => (a.order || 0) - (b.order || 0));

        dungeonList.forEach((data) => {
            const id = data.id; 
            const rewards = data.rewards || {};

            // 💡 報酬マップ（Object）のキーと値をループして、ペアの入力欄を動的に生成する
            let rewardsHTML = `<div id="ad-dunj-rew-container-${id}" style="display:flex; gap:5px; flex-direction:column;">`;
            
            Object.keys(rewards).forEach(key => {
                rewardsHTML += `
                    <div class="ad-dunj-rew-pair-${id}" style="display: flex; align-items: center; gap: 4px;">
                        <input type="text" class="rew-key-${id}" value="${key}" placeholder="科目キー" style="width:75px; padding:2px; font-size:12px;">
                        <span>:</span>
                        <input type="text" class="rew-val-${id}" value="${rewards[key]}" placeholder="宝物コード" style="width:60px; padding:2px; font-size:12px;">
                        <button type="button" onclick="this.parentElement.remove()" style="background:#e53e3e; padding:2px 6px; font-size:10px; margin:0; width:auto; height:auto; line-height:1;">❌</button>
                    </div>
                `;
            });
            
            rewardsHTML += `</div>`;
            // テーブル内にもその場で報酬ペアを増やすボタンを設置
            rewardsHTML += `<button type="button" onclick="addRewardRowToExisting('${id}')" style="background:#666; font-size:11px; padding:2px 6px; margin-top:4px; width:auto; display:block;">➕ ペア追加</button>`;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${id}</strong></td>
                <td><input type="text" id="ad-dunj-name-${id}" value="${data.name || ''}" style="width:120px;"></td>
                <td><input type="number" id="ad-dunj-norma-${id}" value="${data.norma || 0}" style="width:80px;"></td>
                <td><input type="number" id="ad-dunj-order-${id}" value="${data.order || 0}" style="width:60px;"></td>
                <td>${rewardsHTML}</td>
                <td>
                    <button onclick="saveAdminDungeon('${id}')">保存</button>
                    <button onclick="deleteAdminDungeon('${id}')" style="background:#e53e3e;">削除</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6">ダンジョンマスターデータがありません。新しく追加してください。</td></tr>';
        }
    } catch (e) {
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="6" style="color:red;">ダンジョンデータの取得に失敗しました。</td></tr>';
    }
}

// 既存のダンジョン一覧の中に、報酬ペアの入力行をその場で1行追加する関数
window.addRewardRowToExisting = function(id) {
    const container = document.getElementById(`ad-dunj-rew-container-${id}`);
    if (!container) return;
    
    const div = document.createElement('div');
    div.className = `ad-dunj-rew-pair-${id}`;
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.gap = "4px";
    div.innerHTML = `
        <input type="text" class="rew-key-${id}" value="" placeholder="科目キー" style="width:75px; padding:2px; font-size:12px;">
        <span>:</span>
        <input type="text" class="rew-val-${id}" value="" placeholder="宝物コード" style="width:60px; padding:2px; font-size:12px;">
        <button type="button" onclick="this.parentElement.remove()" style="background:#e53e3e; padding:2px 6px; font-size:10px; margin:0; width:auto; height:auto; line-height:1;">❌</button>
    `;
    container.appendChild(div);
};

// 新規追加フォームの中に、報酬ペアの入力行を1行追加する関数
window.addNewRewardRow = function() {
    const container = document.getElementById('new-dunj-rewards-container');
    if (!container) return;
    
    const div = document.createElement('div');
    div.className = 'new-reward-pair';
    div.style.display = "flex";
    div.style.gap = "5px";
    div.style.alignItems = "center";
    div.innerHTML = `
        <input type="text" class="new-rew-key" placeholder="科目の送信値 (例: math)" style="flex: 1; padding: 4px;">
        <span>:</span>
        <input type="text" class="new-rew-val" placeholder="宝物コード (例: T1)" style="flex: 1; padding: 4px;">
        <button type="button" onclick="this.parentElement.remove()" style="background:#e53e3e; padding:4px 8px; margin:0; width:auto;">❌</button>
    `;
    container.appendChild(div);
};

// 個別編集・保存
async function saveAdminDungeon(id) {
    const name = document.getElementById(`ad-dunj-name-${id}`).value.trim();
    const norma = parseInt(document.getElementById(`ad-dunj-norma-${id}`).value);
    const order = parseInt(document.getElementById(`ad-dunj-order-${id}`).value);

    if (!name || isNaN(norma) || isNaN(order)) {
        alert("名前、ノルマ、表示順は正しく入力してください。");
        return;
    }

    // 💡 画面上のペア（キーと値）を全走査して、Firebase用のオブジェクトに再構築する
    const rewards = {};
    const pairs = document.querySelectorAll(`.ad-dunj-rew-pair-${id}`);
    pairs.forEach(pair => {
        const key = pair.querySelector(`.rew-key-${id}`).value.trim();
        const val = pair.querySelector(`.rew-val-${id}`).value.trim();
        if (key) {
            rewards[key] = val; // キーが入力されている場合のみ格納
        }
    });

    try {
        await updateDoc(doc(db, "dungeons", id), {
            name: name,
            norma: norma,
            order: order,
            rewards: rewards // 可変オブジェクトに上書き保存
        });
        alert("ダンジョンマスターデータを更新しました！🎉");
        await renderAdminDungeonList();
    } catch (e) {
        console.error(e);
        alert("更新に失敗しました。");
    }
}

// ダンジョンマスターの削除
async function deleteAdminDungeon(id) {
    if (!confirm(`本当にダンジョン「${id}」を削除しますか？`)) return;
    try {
        await deleteDoc(doc(db, "dungeons", id));
        await renderAdminDungeonList();
        alert("ダンジョンデータを削除しました。");
    } catch (e) {
        console.error(e);
        alert("削除に失敗しました。");
    }
}

// 新しいダンジョンの追加
async function addDungeonFromAdmin() {
    const docId = document.getElementById('new-dunj-docid').value.trim();
    const name = document.getElementById('new-dunj-name').value.trim();
    const norma = parseInt(document.getElementById('new-dunj-norma').value);
    const order = parseInt(document.getElementById('new-dunj-order').value);

    if (!docId || !name || isNaN(norma) || isNaN(order)) {
        alert("ドキュメントID、名前、ノルマ、表示順を入力してね！");
        return;
    }

    // 💡 新規追加用エリアに入力されたペアを収集する
    const rewards = {};
    const pairs = document.querySelectorAll('.new-reward-pair');
    pairs.forEach(pair => {
        const key = pair.querySelector('.new-rew-key').value.trim();
        const val = pair.querySelector('.new-rew-val').value.trim();
        if (key) {
            rewards[key] = val;
        }
    });

    try {
        const docRef = doc(db, "dungeons", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            alert("そのドキュメントIDは既に存在しています。別のIDにしてください。");
            return;
        }

        await setDoc(docRef, {
            name: name,
            norma: norma,
            order: order,
            rewards: rewards
        });

        // フォームのリセット
        document.getElementById('new-dunj-docid').value = '';
        document.getElementById('new-dunj-name').value = '';
        document.getElementById('new-dunj-norma').value = '';
        document.getElementById('new-dunj-order').value = '';
        
        // 報酬コンテナをクリアして初期の1行だけに戻す
        const container = document.getElementById('new-dunj-rewards-container');
        container.innerHTML = `
            <div class="new-reward-pair" style="display: flex; gap: 5px; align-items: center;">
                <input type="text" class="new-rew-key" placeholder="科目の送信値 (例: math)" style="flex: 1; padding: 4px;">
                <span>:</span>
                <input type="text" class="new-rew-val" placeholder="宝物コード (例: T1)" style="flex: 1; padding: 4px;">
                <button type="button" onclick="this.parentElement.remove()" style="background:#e53e3e; padding:4px 8px; margin:0; width:auto;">❌</button>
            </div>
        `;

        await renderAdminDungeonList(); 
        alert("新しいダンジョンマスターデータを追加しました！🎉");
    } catch (e) {
        console.error(e);
        alert("追加に失敗しました。");
    }
}

// 親ファイルやHTMLへのグローバル公開登録
window.renderAdminDungeonList = renderAdminDungeonList;
window.saveAdminDungeon = saveAdminDungeon;
window.deleteAdminDungeon = deleteAdminDungeon;
window.addDungeonFromAdmin = addDungeonFromAdmin;
