import firebase from "firebase/app";
import "firebase/messaging";

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const requestForToken = () => {
  if (typeof window !== "undefined") {
    return firebase
      .messaging()
      .getToken({
        vapidKey:
          "BAwKgXKaQ8snbo5dm4GxRTT3h0z4JICCkVdGO9dV_4enDu7PFKDeatvCZQV8qfXp0LF5BmBCET9QufDDs004D80",
      })
      .then((currentToken) => {
        if (currentToken) {
          console.log("current token for client: ", currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    firebase.messaging().onMessage((payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
