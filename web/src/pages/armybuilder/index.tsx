import React from "react";
import { GetServerSidePropsContext } from "next";
import { InferGetServerSidePropsType } from "next";
import nookies from "nookies";

import { CustomArmyDisplay } from "@/components/customarmydisplay";
import { NavBar } from "@/components/navbar";
import { firebaseAdmin } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

import styles from "./armybuilder.module.css";

const armybuilder: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <main className={`${styles.main}`}>
      <NavBar />
      <h1>Your Armies</h1>
      <hr />
      <div className={styles.bodyClass}>
        {data.map((data, i) => {
          return (
            <CustomArmyDisplay
              key={i}
              customarmyname={data.customarmy_name}
              customarmytype={data.customarmy_faction}
              customarmyid={data.customarmy_id}
            />

            // Make army display component, button to link to army display page -> display units in that army
            // 'Add to army' button on units page, 'Create Army' button on faction page
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
        where: { firebaseuser_id: token.uid },
      });
      return { props: { data } };
    } catch (err) {
      console.log(err);
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
