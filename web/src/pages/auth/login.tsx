import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { firebase } from "../../lib/firebaseClient";

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
      <main>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type={"email"}
              placeholder={"Email"}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Password</label>
            <input
              id="password"
              type={"password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type={"submit"}
            disabled={!userName?.length || !password?.length}
            onClick={tryLogIn}
          >
            Log In
          </button>
        </form>
      </main>
    </>
  );
}
