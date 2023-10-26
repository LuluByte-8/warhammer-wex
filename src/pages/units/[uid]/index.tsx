import styles from "./unit.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";
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
}) => {
  return (
    <main className={`${styles.main}`}>
      <NavBar />
      <div className={`${styles.maincontainer}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.unitname}`}>{name}</div>
        </div>

        <div className={`${styles.statscontainer}`}>
          <div className={`${styles.stattitle}`}>
            <p>M</p>
            <p className={`${styles.statvalue}`}>{movement}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>T</p>
            <p className={`${styles.statvalue}`}>{toughness}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>Sv</p>
            <p className={`${styles.statvalue}`}>{savingThrow}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>W</p>
            <p className={`${styles.statvalue}`}>{wounds}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>L</p>
            <p className={`${styles.statvalue}`}>{leadership}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>OC</p>
            <p className={`${styles.statvalue}`}>{objectiveControl}</p>
          </div>
        </div>
      </div>
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
