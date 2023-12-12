import styles from "./unit.module.css";
import { InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";
import { StatBlock } from "@/components/statblock";
import prisma from "@/lib/prisma";

const UnitPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ unit }) => {
  return (
    <main className={`${styles.main}`}>
      <NavBar />

      <StatBlock
        name={unit.name}
        movement={unit.movement}
        toughness={unit.toughness}
        savingThrow={unit.saving_throw}
        wounds={unit.wounds}
        leadership={unit.leadership}
        objectiveControl={unit.objective_control}
        invulnSave={unit.invuln_save}
      />
    </main>
  );
};

export default UnitPage;

export const getServerSideProps = async (context: any) => {
  if (typeof context.query.uid !== "string") {
    return {
      notFound: true,
    };
  }
  const uid = +context.query.uid;
  const unit = await prisma.units.findUnique({
    where: {
      id: uid,
    },
  });

  if (!unit) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      unit,
    },
  };
};
