// ==========================================
// 管理者画面（admin.html）親コントロール
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from './firebase-config.js';

// 起動時に、各子ファイルで作られたロード関数を順番に呼び出す
window.addEventListener('DOMContentLoaded', async () => {
    window.switchAdminTab('tab-users'); 
    
    // 子ファイル側のロード関数が読み込まれていれば実行する
    if (typeof window.renderAdminUserList === 'function') await window.renderAdminUserList();
    if (typeof window.renderAdminGradeList === 'function') await window.renderAdminGradeList();
    if (typeof window.renderAdminQuestionList === 'function') await window.renderAdminQuestionList();
    if (typeof window.renderAdminAnimalList === 'function') await window.renderAdminAnimalList();
    if (typeof window.renderAdminGenreList === 'function') await window.renderAdminGenreList();
    if (typeof window.renderAdminCompanionList === 'function') await window.renderAdminCompanionList();
    if (typeof window.renderAdminDungeonList === 'function') await window.renderAdminDungeonList();
    if (typeof window.renderAdminTreasureList === 'function') await window.renderAdminTreasureList();
});

// タブを切り替える関数
window.switchAdminTab = function(tabId) {
    document.querySelectorAll('.admin-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));
    
    const activeBtn = Array.from(document.querySelectorAll('.admin-tabs .tab-btn')).find(btn => {
        const onc = btn.getAttribute('onclick');
        return onc && onc.includes(tabId);
    });
    if (activeBtn) activeBtn.classList.add('active');
    
    const targetContent = document.getElementById(tabId);
    if (targetContent) targetContent.classList.add('active');
};

// ==========================================
// 💡 画面ロック用ポップアップ（オーバーレイ）の制御関数
// ==========================================
window.showOverlay = function(message) {
    let overlay = document.getElementById('admin-lock-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'admin-lock-overlay';
        overlay.style = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.6); z-index:99999; display:flex; justify-content:center; align-items:center; cursor:wait;';
        const box = document.createElement('div');
        box.id = 'admin-lock-box';
        box.style = 'background:#fff; padding:30px 50px; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3); text-align:center; font-size:18px; font-weight:bold; color:#333;';
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }
    document.getElementById('admin-lock-box').innerHTML = `
        <div style="font-size:32px; margin-bottom:10px;">⏳</div>
        <div>${message}</div>
        <div style="font-size:12px; color:#666; font-weight:normal; margin-top:8px;">そのまま少々お待ちください...</div>
    `;
}
window.hideOverlay = function() {
    const overlay = document.getElementById('admin-lock-overlay');
    if (overlay) overlay.remove();
}
