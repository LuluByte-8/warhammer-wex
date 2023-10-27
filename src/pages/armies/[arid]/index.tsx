import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";
import Link from "next/link";
import styles from "./unitlist.module.css";
import { IUnit, getUnits, getUnitsByArmyId } from "@/api/mock/units";
import { IArmy, getArmyById } from "@/api/mock/army";

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
              href={`${unit.armyId}/units/${unit.id}`}
              key={unit.name}
              className={`${styles.id}`}
            >
              <div>{unit.name}</div>
            </Link>
            <div className={`${styles.statscontainer}`}>
              <div>
                <p>M</p>
                <p>{unit.movement}"</p>
              </div>

              <div>
                <p>T</p>
                <p>{unit.toughness}</p>
              </div>

              <div>
                <p>Sv</p>
                <p>{unit.savingThrow}+</p>
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
                <p>{unit.objectiveControl}</p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ArmyPage;

interface IArmyPageProps {
  units: IUnit[];
  army: IArmy;
}

export const getServerSideProps: GetServerSideProps<IArmyPageProps> = async (
  context
) => {
  if (typeof context.query.arid !== "string") {
    return {
      notFound: true,
    };
  }
  const arid = context.query.arid;
  const army = getArmyById(arid);

  if (!army) {
    return {
      notFound: true,
    };
  }

  const units = getUnitsByArmyId(arid);
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
