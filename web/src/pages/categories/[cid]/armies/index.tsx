import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { getArmyByCategoryId, IArmy } from "@/api/mock/army";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import styles from "./army.module.css";
import hero from "@/assets/ArmyHero.png";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { ArmyBanner } from "@/components/armybanner";

const Opensans = Open_Sans({ subsets: ["latin"] });

const Army: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ armies }) => {
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

      {armies.map((army) => {
        return (
          <ArmyBanner
            name={army.name}
            description={army.description}
            armyId={army.armyId}
            imageURL={army.bannerURL}
            categoryId={army.categoryId}
          />
        );
      })}
      <Footer />
    </main>
  );
};

export default Army;

interface IArmyListPageProps {
  armies: IArmy[];
}

export const getServerSideProps: GetServerSideProps<
  IArmyListPageProps
> = async (context) => {
  if (typeof context.query.cid !== "string") {
    return {
      notFound: true,
    };
  }
  const cid = context.query.cid;
  const armies = getArmyByCategoryId(cid);

  if (!armies) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      armies: armies,
    },
  };
};
