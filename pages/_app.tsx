import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import "node-self";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
