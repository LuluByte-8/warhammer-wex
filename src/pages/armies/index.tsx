import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styles from "./army.module.css";
import { NavBar } from "@/components/navbar";
import { IArmy, getArmies } from "@/api/mock/army";

const Army: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ armies }) => {
  return (
    <main>
      <NavBar />

      {armies.map((army) => {
        if (army.armyId != "0") {
          return (
            <Link
              href={`armies/${army.armyId}`}
              key={army.name}
              className={`${styles.armyLink}`}
            >
              <div>{army.name}</div>
              <br />
            </Link>
          );
        } else {
          return (
            <div>
              <div className={`${styles.armyTitle}`}>{army.name}</div>
              <br />
            </div>
          );
        }
      })}
    </main>
  );
};

export default Army;

interface IArmyListPageProps {
  armies: IArmy[];
}

export const getServerSideProps: GetServerSideProps<
  IArmyListPageProps
> = async () => {
  const armies = getArmies();
  return {
    props: {
      armies: armies,
    },
  };
};
