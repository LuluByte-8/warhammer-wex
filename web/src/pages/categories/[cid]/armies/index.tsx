import React from "react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroImage } from "@/components/heroimage";
import styles from "./army.module.css";
import hero from "@/assets/ArmyHero.png";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { ArmyBanner } from "@/components/armybanner";
import prisma from "@/lib/prisma";
import { LoginCheck } from "@/lib/loginChecker";

const Opensans = Open_Sans({ subsets: ["latin"] });

const Army: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <main>
      <NavBar />

      <HeroImage
        header="Test Heading"
        text="Lorem ipsum dolor sit amet consectetur. Orci ut arcu magnis pharetra
            consequat feugiat interdum. Adipiscing euismod id justo quam."
        imageURL={hero}
      />

      {data.map((army) => {
        if (!army.category_id) {
          return null;
        }
        return (
          <ArmyBanner
            name={army.name}
            description={army.description}
            armyId={army.id}
            imageURL={army.banner_url ?? "https://placehold.co/600x400"}
            categoryId={army.category_id}
          />
        );
      })}
      <Footer />
    </main>
  );
};

export default Army;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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
    props: { data },
  };
};
