 
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
 
const firebaseConfig = {
  apiKey: "AIzaSyCf0ZWKooyGDpdU2WI2OHsmyh5XuFUMVzU",
  authDomain: "react-push-notification-49657.firebaseapp.com",
  projectId: "react-push-notification-49657",
  storageBucket: "react-push-notification-49657.appspot.com",
  messagingSenderId: "836994303494",
  appId: "1:836994303494:web:40ca3bad16618944ec6587",
  measurementId: "G-CHWTBGMZVR"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const genrateToken = async() => {
  const parmission = await Notification.requestPermission();
  console.log('Notification permission : ', parmission);
  if(parmission === 'granted')
  {
    const token = await getToken(messaging,{
      vapidKey : "BO_8TX2bSfvGVkfc50CWdjGzuegz2nTNBhzo9EJBtuLn4611btZicKWb4vRpnfO9asRAszJCha8TU71LEyQZWhI"
    });
    console.log("Response Token : ", token);
  }
}

export const messageRecieved = () => {
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
  });
}
 