import React from "react";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

import { NavBar } from "@/components/navbar";
import { firebaseAdmin } from "@/lib/firebaseAdmin";

import styles from "./armybuilder.module.css";

const armybuilder: React.FC = () => {
  return (
    <main>
      <NavBar />
      <div className={styles.bodyClass}></div>
    </main>
  );
};

export default armybuilder;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;
    return { props: {} };
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
    return { props: {} as never };
  }
};
