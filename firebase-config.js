// 將 Firebase Console → Project settings → Your apps → Web app 入面嘅 firebaseConfig 貼喺度。
// 呢啲值會公開喺網頁上，係正常做法；資料安全靠 firestore.rules 同 Google 登入保護。
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
