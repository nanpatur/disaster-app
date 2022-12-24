// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
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

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  if (typeof window !== "undefined") return;
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
