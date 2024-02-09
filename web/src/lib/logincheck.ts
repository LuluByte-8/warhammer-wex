import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { firebaseAdmin } from "@/lib/firebaseAdmin";

export const LoginCheck = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    console.log(cookies);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;

    return { authenticated: true };
  } catch (err) {
    return { authenticated: false };
  }
};
