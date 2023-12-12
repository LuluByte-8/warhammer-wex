import React from "react";
import { InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import styles from "./army.module.css";
import hero from "@/assets/ArmyHero.png";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { ArmyBanner } from "@/components/armybanner";
import prisma from "@/lib/prisma";

const Opensans = Open_Sans({ subsets: ["latin"] });

const Army: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <main>
      <NavBar />

      <div className={`${styles.main} ${Opensans.className}`}>
        <div className={styles.heroContainer}>
          <Image className={styles.heroImage} src={hero} alt="hero" />
        </div>

        <div className={`${styles.content}`}>
          <h1>Test Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci ut arcu magnis pharetra
            consequat feugiat interdum. Adipiscing euismod id justo quam.
          </p>
        </div>
      </div>

      {data.map((army) => {
        return (
          <ArmyBanner
            name={army.name}
            description={army.description}
            armyId={army.id}
            imageURL={army.banner_url}
            categoryId={army.category_id}
          />
        );
      })}
      <Footer />
    </main>
  );
};

export default Army;

export const getServerSideProps = async (context: any) => {
  if (typeof context.query.cid !== "string") {
    return {
      notFound: true,
    };
  }
  const cid = +context.query.cid;
  const data = await prisma.armies.findMany({
    where: {
      category_id: cid,
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
