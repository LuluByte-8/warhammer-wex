import firebase from "firebase/compat/app";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";

import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { firebaseAdmin } from "@/lib/firebaseAdmin";

export default function Profile() {
  const router = useRouter();
  return (
    <main>
      <NavBar />

      <div>
        <h1>Profile Page!</h1>
      </div>

      <button
        type={"submit"}
        onClick={async () => {
          await firebase
            .auth()
            .signOut()
            .then(() => {
              router.push("/");
            });
        }}
      >
        Sign Out
      </button>

      <Footer />
    </main>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    // console.log(cookies);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    // the user is authenticated!
    const { uid, email } = token;

    // FETCH STUFF HERE!! 🚀
    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: {} as never };
  }
};
