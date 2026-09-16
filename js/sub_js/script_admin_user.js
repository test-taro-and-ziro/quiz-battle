// ==========================================
// 管理者画面（admin.html）子コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from '../firebase-config.js';

// 1️⃣ 【ユーザー管理】一覧描画と保存
async function renderAdminUserList() {
    const tbody = document.getElementById('admin-user-list');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="8">ユーザーデータを読み込み中...</td></tr>';

    try {
        // 学年マスターをサッと取得してドロップダウン用にマッピング
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
            
            // 学年選択用のドロップダウンHTMLの組み立て
            let gradeOptionsHTML = '';
            gradeMaster.forEach(g => {
                const isSelected = data.grade === g.value ? 'selected' : '';
                gradeOptionsHTML += `<option value="${g.value}" ${isSelected}>${g.label}</option>`;
            });

            // 💡 新設の各配列（Array）データをカンマ区切りの文字列に変換して表示
            const treasuresText = data.treasures ? data.treasures.join(',') : '';
            const companionsText = data.companions ? data.companions.join(',') : '';
            const equipmentText = data.equipment ? data.equipment.join(',') : '';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" id="admin-name-${docId}" value="${username}" style="width:100px; font-weight:bold;"></td>
                <td><select id="admin-grade-${docId}">${gradeOptionsHTML}</select></td>
                <td><input type="text" id="admin-gender-${docId}" value="${data.gender || ''}" style="width:60px;"></td>
                <td><input type="text" id="admin-animal-${docId}" value="${data.animal || ''}" style="width:70px;"></td>
                
                <!-- 💡 編集用のテキストボックス列を追加 -->
                <td><input type="text" id="admin-tres-${docId}" value="${treasuresText}" placeholder="例: T1,T2" style="width:110px;"></td>
                <td><input type="text" id="admin-comps-${docId}" value="${companionsText}" placeholder="例: lion,rabbit_01" style="width:110px;"></td>
                <td><input type="text" id="admin-equip-${docId}" value="${equipmentText}" placeholder="例: lion (最大2つ)" style="width:110px;"></td>
                
                <td><button id="btn-save-${docId}">保存</button>
                <button id="btn-delete-${docId}" style="background:#e53e3e;">削除</button>
            `;
            
            // 保存ボタンのクリックイベント
            tr.querySelector(`#btn-save-${docId}`).onclick = async function() {
                const name = document.getElementById(`admin-name-${docId}`).value.trim();
                const grade = parseInt(document.getElementById(`admin-grade-${docId}`).value);
                const gender = document.getElementById(`admin-gender-${docId}`).value.trim();
                const animal = document.getElementById(`admin-animal-${docId}`).value.trim();

                // テキストボックスのカンマ区切り文字を配列（Array）にきれいに分解
                const tresStr = document.getElementById(`admin-tres-${docId}`).value.trim();
                const compsStr = document.getElementById(`admin-comps-${docId}`).value.trim();
                const equipStr = document.getElementById(`admin-equip-${docId}`).value.trim();

                const treasuresArray = tresStr ? tresStr.split(',').map(s => s.trim()).filter(Boolean) : [];
                const companionsArray = compsStr ? compsStr.split(',').map(s => s.trim()).filter(Boolean) : [];
                const equipmentArray = equipStr ? equipStr.split(',').map(s => s.trim()).filter(Boolean) : [];

                // 💡 制限チェック：「連れている仲間（equipment）」が2つを超えていたら保存をブロック
                if (equipmentArray.length > 2) {
                    alert("🚨 連れている仲間（equipment）は最大2つまでしか登録できません！");
                    return;
                }

                try {
                    await updateDoc(doc(db, "users", docId), {
                        name: name, 
                        grade: grade,
                        gender: gender,
                        animal: animal,
                        treasures: treasuresArray,    // 獲得している秘宝
                        companions: companionsArray,  // 仲間にしたフレンド
                        equipment: equipmentArray     // 連れている仲間（最大2つ）
                    });
                    alert(`${name} さんのデータを更新しました！🎉`);
                    await renderAdminUserList(); // 画面を再描画
                } catch(err) { 
                    console.error(err);
                    alert("更新に失敗しました。"); 
                }
            };
            // 🌟 削除ボタンのクリックイベントを追加（シンプル版）
            tr.querySelector(`#btn-delete-${docId}`).onclick = async function() {
                 if (!confirm(`⚠️ 本当にユーザー「${username}」を削除してもよろしいですか？\nこの操作は取り消せません。`)) return;

                try {
                    // Firebaseの「users」コレクションから直接このドキュメントを削除
                    await deleteDoc(doc(db, "users", docId));
                    alert(`🗑️ ユーザー「${username}」を削除しました。`);
                    await renderAdminUserList(); // 画面を再描画して最新にする
                } catch (err) {
                    console.error(err);
                    alert("ユーザーの削除に失敗しました。");
                }
            };
            tbody.appendChild(tr);
        });
    } catch(e) { 
        console.error(e);
        tbody.innerHTML = '<tr><td colspan="8" style="color:red;">ユーザーデータの読込失敗</td></tr>'; 
    }
}

// 親ファイル（script_admin.js）の起動トリガー用にwindowに公開
window.renderAdminUserList = renderAdminUserList;
