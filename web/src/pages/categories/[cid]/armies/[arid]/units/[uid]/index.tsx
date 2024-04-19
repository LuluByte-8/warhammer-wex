import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { Datasheet } from "@/components/datasheet";
import { NavBar } from "@/components/navbar";
// import { StatBlock } from "@/components/statblock";
import prisma from "@/lib/prisma";

import styles from "./unit.module.css";

const UnitPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ unit }) => {
  return (
    <main className={`${styles.main}`}>
      <NavBar />

      <Datasheet units={unit} />
      {/* 
      {unit.map((m) => {
        return (
          <div key={m.id}>
            <StatBlock
              name={m.name}
              movement={m.m}
              weaponSkill={m.ws}
              ballisticSkill={m.bs}
              strength={m.s}
              toughness={m.t}
              wounds={m.w}
              attacks={m.a}
              leadership={m.ld}
              save={m.sv}
            />
          </div>
        );
      })} */}
    </main>
  );
};

export default UnitPage;

export type Unit = Awaited<ReturnType<typeof prisma.units.findFirstOrThrow>>;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (typeof context.query.uid !== "string") {
    return {
      notFound: true,
    };
  }
  const uid = +context.query.uid;
  const unit = await prisma.units.findMany({
    where: {
      unit_id: uid,
    },
  });
  if (!unit) {
    return {
      notFound: true,
    };
  }

  return {
    props: { unit },
  };
};
