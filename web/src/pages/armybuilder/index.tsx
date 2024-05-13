import React from "react";
import { GetServerSidePropsContext } from "next";
import { InferGetServerSidePropsType } from "next";
import nookies from "nookies";

import { NavBar } from "@/components/navbar";
import { firebaseAdmin } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

import styles from "./armybuilder.module.css";

const armybuilder: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <main>
      <NavBar />
      <div className={styles.bodyClass}>
        <h1>Test</h1>
        {data.map((data, i) => {
          return (
            <ul key={i}>
              <li>Custom Army Id: {data.customarmyid}</li>
              <li>Custom Army Name: {data.customarmyname}</li>
              <li>Custom Army Type: {data.customarmytype}</li>
              <li>Custom Army UserId: {data.firebaseuserid}</li>
              <li>Custom Army Username: {data.username}</li>
            </ul>
            //Make component, return relavent info, button to create new army, army display, display units in that army
          );
        })}
      </div>
    </main>
  );
};

export default armybuilder;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    try {
      const data = await prisma.customarmy.findMany({
        // where: { firebaseuserid: token.uid },
      });
      console.log(data);
      return { props: { data } };
    } catch {
      return { notFound: true };
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
    return { props: {} as never };
  }
};
