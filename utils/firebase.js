import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkS9DmrllBFmgVGqasAW8kQY5JVnO5Jt0",
  authDomain: "disaster-app-60146.firebaseapp.com",
  projectId: "disaster-app-60146",
  storageBucket: "disaster-app-60146.appspot.com",
  messagingSenderId: "352235217905",
  appId: "1:352235217905:web:a795f1b4141e08fb879a50",
  measurementId: "G-8JSTEHDXCH",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      try {
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey:
              "BAwKgXKaQ8snbo5dm4GxRTT3h0z4JICCkVdGO9dV_4enDu7PFKDeatvCZQV8qfXp0LF5BmBCET9QufDDs004D80",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { app, messaging, firebaseCloudMessaging };
