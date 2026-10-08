// ==========================================
// アニマルクエスト：ゲーム全体共通マスタ管理ファイル
// ==========================================
// 💡 共通設定ファイルから db を読み込む
import { db, collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from './firebase-config.js';

// 各画面で共有するための変数
export let animalMasterData = [];      // 💡 動物マスタ
export let genreMasterData = [];       // ★ ジャンルマスタ
export let gradeMasterData = [];       // ✨ 学年マスタ
export let companionMasterData = [];   // 💡 仲間マスタ
export let dungeonMasterData = [];     // 💡 ダンジョンマスタ
export let currentLoginUser = null;    // 💡 ログイン中のユーザー名（例: "うさぎまる"）
export let currentPlayerData = null;   // 💡 ログイン中のユーザーの全データ（grade, lv, wins, animal 等）

export let tempData = null;            // 💡 temp データを保持するグローバル変数

// 💡 temp コレクションのデータを取得・作成・初期化する共通関数
export async function prepareTempData(identifier) {
    const tempRef = collection(db, "temp");
    let docSnap = null;

    // ① identifier が docID 形式かどうか判定
    // Firestore の docID は 20〜28文字程度の英数字なので簡易判定可能
    if (identifier.length >= 20) {
        const directRef = doc(db, "temp", identifier);
        docSnap = await getDoc(directRef);
        // 既存データがある場合 → 初期化せずそのまま使う
        if (docSnap.exists()) {
            tempData = { id: identifier, ...docSnap.data() };
            return tempData;
        }
    }

    // ③ docID で見つからなかった場合 → name で検索
    const q = query(tempRef, where("name", "==", identifier));
    const snap = await getDocs(q);
    // ② 既存データがある場合 → 初期化せずそのまま使う
    if (!snap.empty) {
        const found = snap.docs[0];
        tempData = { id: found.id, ...found.data() };
        return tempData;
    }

    // ④ 新規作成（name の場合のみ） ※ 初回（トップ画面）は、ユーザ名しかこないため
    const newDoc = await addDoc(tempRef, {
        name: identifier,
        dungeons_id: "",
        genre: ""
    });

    // ④ グローバル変数に格納
    tempData = {
        id: newDoc.id,
        name: identifier,
        dungeons_id: "",
        genre: ""
    };

    // ⑤ グローバル変数に格納
    return tempData;
}

// 💡 共通関数：Firebaseから動物マスタをまとめてロードする [js]
export async function loadAnimalMaster() {
    try {
        const querySnapshot = await getDocs(collection(db, "animal"));
        animalMasterData = [];
        querySnapshot.forEach((docSnap) => {
            animalMasterData.push(docSnap.data());
        });
        return animalMasterData;
    } catch (e) {
        console.error("共通マスタのロードに失敗:", e);
        return [];
    }
}

// 💡 共通関数：動物マスタから画像ファイル名を逆引きする
export function getCharacterFileName(animalValue, genderValue) {
    if (!animalValue || !genderValue) return "placeholder.jpg";
    
    const targetAnimal = animalMasterData.find(a => a.value === animalValue);
    if (targetAnimal) {
        return targetAnimal[genderValue] || "placeholder.jpg";
    }
    return "placeholder.jpg";
}

// 💡 共通関数：画像パスを判別して正しくセットする（プレイヤー）
export function setCharacterSrc(imgElement, fileName) {
    if (!imgElement) return;
    if (fileName === "placeholder.jpg") {
        imgElement.src = "images/" + fileName;
    } else {
        imgElement.src = "images/chara/" + fileName;
    }
}
// 💡 共通関数：画像パスを判別して正しくセットする（仲間）
export function setCompanionSrc(imgElement, fileName) {
    if (!imgElement) return;
    if (fileName === "placeholder.jpg") {
        imgElement.src = "images/" + fileName;
    } else {
        imgElement.src = "images/sub/" + fileName;
    }
}

// 💡 共通関数：Firebaseからジャンルマスタをまとめてロードする
export async function loadGenreMaster() {
    try {
        // すでにロード済みなら通信せずに今のデータを返す（高速化）
        if (genreMasterData.length > 0) return genreMasterData;

        const q = query(collection(db, "genre"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        
        genreMasterData = [];
        querySnapshot.forEach((docSnap) => {
            genreMasterData.push(docSnap.data());
        });
        return genreMasterData;
    } catch (e) {
        console.error("ジャンルマスタのロードに失敗:", e);
        return [];
    }
}

// ✨ 共通関数：Firebaseから学年マスタをまとめてロードする
export async function loadGradeMaster() {
    try {
        // すでにロード済みなら通信せずに今のデータを返す（高速化）
        if (gradeMasterData.length > 0) return gradeMasterData;

        const q = query(collection(db, "grades"), orderBy("value", "asc"));
        const querySnapshot = await getDocs(q);
        
        gradeMasterData = [];
        querySnapshot.forEach((docSnap) => {
            gradeMasterData.push(docSnap.data());
        });
        return gradeMasterData;
    } catch (e) {
        console.error("学年マスタのロードに失敗:", e);
        return [];
    }
}

// 💡 共通関数：Firebaseから仲間マスタをまとめてロードする
export async function loadCompanionMaster() {
    try {
        // すでにロード済みなら通信せずに今のデータを返す（高速化）
        if (companionMasterData.length > 0) return companionMasterData;

        const querySnapshot = await getDocs(collection(db, "companions"));
        companionMasterData = [];
        querySnapshot.forEach((docSnap) => {
            companionMasterData.push({
                id: docSnap.id,
                ...docSnap.data()
            });
        });
        return companionMasterData;
    } catch (e) {
        console.error("仲間マスタのロードに失敗:", e);
        return [];
    }
}

// 💡 共通関数：Firebaseからダンジョンマスタをまとめてロードする
export async function loadDungeonMaster() {
    try {
        // すでにロード済みなら通信せずキャッシュを返す（高速化）
        if (dungeonMasterData.length > 0) return dungeonMasterData;

        const q = query(collection(db, "dungeons"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        dungeonMasterData = [];
        querySnapshot.forEach((docSnap) => {
            dungeonMasterData.push({
                id: docSnap.id,     // ★ ID を必ず保持する（重要）
                ...docSnap.data()
            });
        });

        return dungeonMasterData;

    } catch (e) {
        console.error("ダンジョンマスタのロードに失敗しました:", e);
        return [];
    }
}

// 💡 共通関数：ユーザー情報をFirebaseから一度だけ取得して共通変数にセットする
export async function setupPlayerMaster(username) {
    if (!username) return null;
    
    // すでにデータを取得済みなら、Firebaseを見に行かずに今のデータをそのまま返す
    if (currentLoginUser === username && currentPlayerData !== null) {
        return currentPlayerData;
    }

    try {
        // 🌟 フィールドの「loginName」から一致するユーザーを探す
        const q = query(collection(db, "users"), where("name", "==", username));
        const querySnapshot = await getDocs(q);
      
        if (!querySnapshot.empty) {
            currentLoginUser = username;
            // 一致するユーザーが見つかった場合（通常は1件だけヒットします）
            const userDoc = querySnapshot.docs[0]; 
            currentPlayerData = {
                ...userDoc.data(),
                docId: userDoc.id   // ← ★ これを追加するだけ！
            };

            return currentPlayerData;
        } else {
            console.error("ユーザーデータが見つかりません:", username);
            return null;
        }
    } catch (e) {
        console.error("プレイヤー情報の取得失敗:", e);
        return null;
    }
}

// 🌟 共通関数：ログアウト時に共通変数をきれいにリセットする関数
export function logoutPlayerMaster() {
    currentLoginUser = null;
    currentPlayerData = null;
}
