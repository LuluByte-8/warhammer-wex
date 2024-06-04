import React from "react";
import { GetServerSidePropsContext } from "next";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import nookies from "nookies";

import { AddArmyDialog } from "@/components/addarmydialog";
import { CustomArmyDisplay } from "@/components/customarmydisplay";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { firebaseAdmin } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

import hero from "../../assets/hero-homepage.png";

import styles from "./armybuilder.module.css";

const armybuilder: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ armies, customarmy, userdata, loggedin }) => {
  if (customarmy.length === 0) {
    return (
      <>
        <NavBar />

        <div className={`${styles.main}`}>
          <div className={styles.heroContainer}>
            <Image className={styles.heroImage} src={hero} alt="hero" />
          </div>

          <div className={`${styles.text}`}>
            {loggedin === false ? (
              <div>
                <h1>Not signed in!</h1>
                <p>Sign up or Log in now to create your army!</p>
              </div>
            ) : (
              <div>
                <h1>Nothing here</h1>
                <p>Looks like you dont have any armies yet</p>
                <AddArmyDialog
                  triggerButtonText="BUILD YOUR ARMY HERE"
                  firebase_id={userdata!.firebase_id}
                  username={userdata!.username}
                  armies={armies}
                />
              </div>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
  } else {
    return (
      <div className={`${styles.armyDisplayContainer}`}>
        <NavBar />

        <h1>Your Armies</h1>

        <div className={`${styles.armyList}`}>
          {customarmy.map((army) => {
            return (
              <CustomArmyDisplay
                key={army.customarmy_id}
                customarmydesc={army.description}
                customarmyid={army.customarmy_id}
                customarmyname={army.customarmy_name}
                customarmytype={army.customarmy_faction}
              />
            );
          })}
        </div>

        <div className={`${styles.newArmyDiv}`}>
          <p>Need a new army?</p>
          <AddArmyDialog
            triggerButtonText="Click here to get started!"
            firebase_id={userdata!.firebase_id}
            username={userdata!.username}
            armies={armies}
          />
        </div>

        <Footer />
      </div>
    );
  }
};

// Make army display component, button to link to army display page -> display units in that army
// 'Add to army' button on units page, 'Create Army' button on faction page

export default armybuilder;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const armies = await prisma.armies.findMany({
    select: { id: true, name: true },
  });

  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    try {
      const customarmy = await prisma.customarmy.findMany({
        where: { firebaseuser_id: token.uid },
      });

      const userdata = await prisma.userprofile.findUniqueOrThrow({
        where: { firebase_id: token.uid },
      });

      return { props: { armies, customarmy, userdata, loggedin: true } };
    } catch (err) {
      // eslint-disable-next-line no-console -- only seen by devs
      console.log(err);
      return { notFound: true };
    }
  } catch (err) {
    return {
      props: { armies, customarmy: [], userdata: null, loggedin: false },
    };
  }
};
