import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { NavBar } from "@/components/navbar";

import styles from "./unitlist.module.css";

const ArmyPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ units, army }) => {
  return (
    <main>
      <NavBar />
      <h1>{army.name}</h1>
      {units.map((unit) => {
        return (
          <div key={unit.id}>
            <Link
              href={`${unit.army_id}/units/${unit.id}`}
              key={unit.name}
              className={`${styles.id}`}
            >
              <div>{unit.name}</div>
            </Link>
            <div className={`${styles.statscontainer}`}>
              <div>
                <p>M</p>
                <p>{unit.movement}</p>
              </div>

              <div>
                <p>T</p>
                <p>{unit.toughness}</p>
              </div>

              <div>
                <p>Sv</p>
                <p>{unit.saving_throw}+</p>
              </div>

              <div>
                <p>W</p>
                <p>{unit.wounds}</p>
              </div>

              <div>
                <p>L</p>
                <p>{unit.leadership}+</p>
              </div>

              <div>
                <p>OC</p>
                <p>{unit.objective_control}</p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ArmyPage;

export const getServerSideProps = async (context: any) => {
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
    props: {
      units: units,
      army: army,
    },
  };
};
