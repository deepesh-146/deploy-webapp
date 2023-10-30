importScripts("https://www.gstatic.com/firebasejs/9.9.4/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging-compat.js");



firebase.initializeApp({
    apiKey: "AIzaSyBFnui2LL8madoiQVbmydKbecG23nvYHHE",
    authDomain: "iceipts-3b086.firebaseapp.com",
    databaseURL: "https://iceipts-3b086.firebaseio.com",
    projectId: "iceipts-3b086",
    storageBucket: "iceipts-3b086.appspot.com",
    messagingSenderId: "476279777572",
    appId: "1:476279777572:web:169fc7e0f393ff160fabb1",
    measurementId: "G-0QMHDNNGFH"
});
const messaging = firebase.messaging();