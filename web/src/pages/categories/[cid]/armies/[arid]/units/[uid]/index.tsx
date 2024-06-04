import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { Datasheet } from "@/components/datasheet";
import { NavBar } from "@/components/navbar";
// import { StatBlock } from "@/components/statblock";
import prisma from "@/lib/prisma";

import styles from "./unit.module.css";

const UnitPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ unit, squad }) => {
  return (
    <main className={`${styles.main}`}>
      <NavBar />

      <Datasheet units={unit} squad={squad!} />
    </main>
  );
};

export default UnitPage;

export type Unit = Awaited<ReturnType<typeof prisma.units.findFirstOrThrow>>;
export type Squad = Awaited<ReturnType<typeof prisma.squads.findFirstOrThrow>>;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (typeof context.query.uid !== "string") {
    return {
      notFound: true,
    };
  }
  const uid = +context.query.uid;

  const squad = await prisma.squads.findUnique({
    where: { squad_id: uid },
  });

  const unit = await prisma.units.findMany({
    where: {
      squad_id: uid,
    },
  });
  if (!unit) {
    return {
      notFound: true,
    };
  }

  return {
    props: { unit, squad },
  };
};
