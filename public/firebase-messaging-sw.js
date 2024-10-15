
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyCf0ZWKooyGDpdU2WI2OHsmyh5XuFUMVzU",
  authDomain: "react-push-notification-49657.firebaseapp.com",
  projectId: "react-push-notification-49657",
  storageBucket: "react-push-notification-49657.appspot.com",
  messagingSenderId: "836994303494",
  appId: "1:836994303494:web:40ca3bad16618944ec6587",
  measurementId: "G-CHWTBGMZVR"
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
 // console.log('Received background message:', payload);
  const notificationTitle = payload.notificationTitle;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});