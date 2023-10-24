import styles from "./unit.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";

const Unit: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  name,
  movement,
  toughness,
  savingthrow,
  wounds,
  leadership,
  objectivecontrol,
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
            <p className={`${styles.statvalue}`}>{savingthrow}</p>
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
            <p className={`${styles.statvalue}`}>{objectivecontrol}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

{
  /* <div className={`${styles.statvalue}`}>
            <p>5"</p>
          </div> */
}

export default Unit;

// type FunctionType = (arg:number) => string;

// const myFunc: FunctionType = (arg:number) => {
//     return 'Hello World'
// }

interface IUnit {
  name: string;
  movement: string;
  toughness: number;
  savingthrow: string;
  wounds: number;
  leadership: string;
  objectivecontrol: number;
}

export const getServerSideProps: GetServerSideProps<IUnit> = async () => {
  return {
    props: {
      name: "Test Unit",
      movement: '5"',
      toughness: 5,
      savingthrow: "3+",
      wounds: 2,
      leadership: "6+",
      objectivecontrol: 2,
    },
  };
};
