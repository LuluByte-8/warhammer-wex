import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import hero from "@/assets/UnitsHeroImage.png";
import { Footer } from "@/components/footer";
import { HeroImage } from "@/components/heroimage";
import { NavBar } from "@/components/navbar";
import { UnitDisplay } from "@/components/unitdisplay";
import prisma from "@/lib/prisma";

import styles from "./unitlist.module.css";

const ArmyPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ units, army }) => {
  return (
    <main>
      <NavBar />

      <HeroImage
        header="Test Heading"
        text="Lorem ipsum dolor sit amet consectetur. Orci ut arcu magnis pharetra
            consequat feugiat interdum. Adipiscing euismod id justo quam."
        imageURL={hero}
      />

      <div className={`${styles.contentWrapper}`}>
        <div className={`${styles.leftSection}`}>
          <h1>{army.name}</h1>
          <p>*Option selection/filtering goes here*</p>
        </div>

        <div className={`${styles.rightSection}`}>
          {/* <h1>{army.name}</h1> */}
          {units.map((unit) => {
            return (
              <div key={unit.id}>
                <UnitDisplay
                  unitId={unit.id}
                  name={unit.name}
                  imageURL="https://placehold.co/200x300"
                  armyId={army.id}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ArmyPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  if (typeof context.query.arid !== "string") {
    return {
      notFound: true,
    };
  }
  const arid = +context.query.arid;
  const army = await prisma.armies.findUnique({
    where: {
      id: arid,
    },
  });

  if (!army) {
    return {
      notFound: true,
    };
  }

  const units = await prisma.units.findMany({
    where: {
      army_id: arid,
    },
  });

  if (units.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { units: units, army: army },
  };
};
