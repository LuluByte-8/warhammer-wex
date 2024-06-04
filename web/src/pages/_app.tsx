import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

import { AuthProvider } from "@/auth/authContext";

import "@/styles/globals.css";

const Opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <style jsx global>{`
        html {
          font-family: ${Opensans.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </AuthProvider>
  );
}

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <AuthProvider>
//       <div className={Opensans.variable} id="_appContainer">
//         <DialogProvider>
//           <Component {...pageProps} />
//         </DialogProvider>
//       </div>
//     </AuthProvider>
//   );
// }
// useIsomorphicLayoutEffect(() => {
//   document.body.className = Opensans.variable;
//   document.body.id = "_appContainer";
//   document.body.style.setProperty("--font-family", Opensans.style.fontFamily);
// }, []);
