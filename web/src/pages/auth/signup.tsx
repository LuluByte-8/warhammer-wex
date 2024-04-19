import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Footer } from "@/components/footer";

import { firebase } from "../../lib/firebaseClient";

import styles from "./signup.module.css";

export default function SignUp() {
  const [username, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const disabledCheck =
    !email?.length || !password?.length || !username?.length;

  const router = useRouter();
  const apiUrl = "http://localhost:3000/api/register";

  const trySignUp = () => {
    if (!email || !password || !username) {
      return;
    }

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
    })
      .then((res) => res.json())
      .then(({ token }) => firebase.auth().signInWithCustomToken(token))
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

      <div className={`${styles.formDiv}`}>
        <h1>Sign up:</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className={styles.formInput}
            id="username"
            type={"username"}
            placeholder={"Username"}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            className={styles.formInput}
            id="email"
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={trySignUp}
          >
            Sign Up
          </button>
        </form>
        <p className={styles.linkClass}>
          Already have an account? <br />
          <Link className={styles.linkClass} href="/auth/login">
            Click here to sign in!
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
