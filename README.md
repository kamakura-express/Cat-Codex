# 閱讀小日子 · Cat & Codex

一次讀十分鐘，慢慢儲印仔。繪本風閱讀記錄：書庫、書櫃、專注計時、印章月曆、摘句。

## 功能
- **書庫**：讀緊／想讀／讀完／暫時放低，用類型同標籤分類，類型可以自己改名、換色
- **書櫃**：已有嘅書（實體／電子）排喺書櫃，另有想買清單
- **專注計時**：10／15／25 分鐘，記錄分心次數，完成後蓋印
- **印章月曆**：每週目標、連續日數、每月分鐘數
- **摘句**：貼上文字，或者上載截圖用 Tesseract.js 喺瀏覽器辨識文字

## 設定 Firebase（跨裝置同步）
1. Firebase Console 開一個 project（或者用現有嘅），加一個 **Web app**。
2. 將 `firebaseConfig` 貼入 `firebase-config.js`。
3. **Authentication → Sign-in method**：開啟 **Google**。
4. **Authentication → Settings → Authorized domains**：加入 `kamakura-express.github.io`。
5. **Firestore Database**：建立資料庫，然後將 `firestore.rules` 嘅內容貼入 **Rules** 再 Publish。

未設定 Firebase 都用得，紀錄會只存喺嗰部機嘅瀏覽器。之後登入時，嗰部機嘅紀錄會自動上傳。

## 開 GitHub Pages
Settings → Pages → Source 揀 **Deploy from a branch**，branch 揀 `main`、資料夾 `/ (root)`。
