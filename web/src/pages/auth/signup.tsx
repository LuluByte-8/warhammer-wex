import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { firebase } from "../../lib/firebaseClient";
import hero from "../../assets/loginhero.png";
import styles from "./signup.module.css";
import { Footer } from "@/components/footer";
import { Open_Sans } from "next/font/google";

const Opensans = Open_Sans({ subsets: ["latin"] });

export default function SignUp() {
  const [username, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

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
          <h1 className={styles.contenttext}>Sign up: </h1>
          <div>
            <label htmlFor="username" className={styles.contenttext}>
              Username:
            </label>
            <input
              className={styles.contenttext}
              id="username"
              type={"username"}
              placeholder={"Username"}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.contenttext}>
              Email:
            </label>
            <input
              className={styles.contenttext}
              id="email"
              type={"email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className={styles.contenttext}>
              Password:
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
            disabled={!email?.length || !password?.length || !username?.length}
            onClick={trySignUp}
          >
            Sign Up
          </button>
        </form>

        <Footer />
      </main>
    </>
  );
}
