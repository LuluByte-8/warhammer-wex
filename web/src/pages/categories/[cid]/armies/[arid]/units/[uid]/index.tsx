import styles from "./unit.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";
import { StatBlock } from "@/components/statblock";
import { IUnit, getUnitById } from "@/api/mock/units";

const UnitPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  name,
  movement,
  toughness,
  savingThrow,
  wounds,
  leadership,
  objectiveControl,
  invulnSave,
}) => {
  return (
    <main className={`${styles.main}`}>
      <NavBar />

      <StatBlock
        name={name}
        movement={movement}
        toughness={toughness}
        savingThrow={savingThrow}
        wounds={wounds}
        leadership={leadership}
        objectiveControl={objectiveControl}
        invulnSave={invulnSave}
      />
    </main>
  );
};

export default UnitPage;

export const getServerSideProps: GetServerSideProps<IUnit> = async (
  context
) => {
  console.log(context.query.uid);
  if (typeof context.query.uid !== "string") {
    return {
      notFound: true,
    };
  }

  const unit = getUnitById(context.query.uid);

  if (!unit) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...unit,
    },
  };
};
