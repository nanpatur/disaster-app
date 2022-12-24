import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "react-toastify/dist/ReactToastify.css";

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
const analytics = getAnalytics(app);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
