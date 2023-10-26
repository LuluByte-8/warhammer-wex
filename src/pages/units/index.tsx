import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";
import Link from "next/link";
import styles from "@/pages/units/unitlist.module.css";
import { IUnit, getUnits } from "@/api/mock/units";

const Unit: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ units }) => {
  return (
    <main>
      <NavBar />

      {units.map((unit) => {
        return (
          <div key={unit.id}>
            <Link
              href={`units/${unit.id}`}
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

export default Unit;

interface IUnitPageProps {
  units: IUnit[];
}

export const getServerSideProps: GetServerSideProps<
  IUnitPageProps
> = async () => {
  const units = getUnits();
  return {
    props: {
      units: units,
    },
  };
};
