import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { firebase } from "../../lib/firebaseClient";

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
      <main>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type={"username"}
              placeholder={"Username"}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type={"email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
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
            disabled={!email?.length || !password?.length || !username?.length}
            onClick={trySignUp}
          >
            Sign Up
          </button>
        </form>
      </main>
    </>
  );
}
