import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

import { AuthProvider } from "@/auth/authContext";

import "@/styles/globals.css";

const Opensans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans"});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className={Opensans.variable} id="_appContainer">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}
