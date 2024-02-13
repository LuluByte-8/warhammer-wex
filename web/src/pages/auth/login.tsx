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

  const disabledCheck = !userName?.length || !password?.length;

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
    <div className={styles.bodyClass}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.formDiv} ${Opensans.className}`}>
        <h1>Login:</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className={styles.formInput}
            id="email"
            type={"email"}
            placeholder={"Email"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            className={styles.formInput}
            id="password"
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className={styles.submitButton}
            type={"submit"}
            disabled={disabledCheck}
            onClick={tryLogIn}
          >
            Log In
          </button>
        </form>
        <p className={styles.linkClass}>
          Dont have an account? <br />
          <a className={styles.linkClass} href="/auth/signup">
            Click here to register!
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
