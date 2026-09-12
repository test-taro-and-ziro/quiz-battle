// ==========================================
// アニマルクエスト：ゲーム全体共通マスタ管理ファイル
// ==========================================
import { db } from './firebase-config.js';
import { collection, getDocs } from 'https://gstatic.com';

// 各画面で共有するための変数
export let animalMasterData = [];

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

// 💡 共通関数：画像パスを判別して正しくセットする
export function setCharacterSrc(imgElement, fileName) {
    if (!imgElement) return;
    if (fileName === "placeholder.jpg") {
        imgElement.src = "images/" + fileName;
    } else {
        imgElement.src = "images/chara/" + fileName;
    }
}
