import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import hero from "../../assets/loginhero.png";
import styles from "./login.module.css";
import { firebase } from "../../lib/firebaseClient";
import { Footer } from "@/components/footer";
import { Open_Sans } from "next/font/google";

const Opensans = Open_Sans({ subsets: ["latin"] });

export default function Login() {
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const router = useRouter();

  const tryLogIn = () => {
    if (!userName || !password) {
      return;
    }

    const auth = firebase.auth();
    signInWithEmailAndPassword(auth, userName, password)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;

        // eslint-disable-next-line no-console -- only seen by devs
        console.error(errorMessage);
      });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${Opensans.className}`}>
        <div className={styles.heroContainer}>
          <Image className={styles.heroImage} src={hero} alt="hero" />
        </div>

        <form onSubmit={(e) => e.preventDefault()} className={styles.content}>
          <h1 className={styles.contenttext}>Login: </h1>

          <div>
            <label htmlFor="email" className={styles.contenttext}>
              Email:{" "}
            </label>
            <input
              className={styles.contenttext}
              id="email"
              type={"email"}
              placeholder={"Email"}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.contenttext}>
              Password:{" "}
            </label>
            <input
              className={styles.contenttext}
              id="password"
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className={styles.submitbutton}
            type={"submit"}
            disabled={!userName?.length || !password?.length}
            onClick={tryLogIn}
          >
            Log In
          </button>
        </form>

        <Footer />
      </main>
    </>
  );
}
