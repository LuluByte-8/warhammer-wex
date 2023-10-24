import styles from "@/styles/Unit.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";

const Unit: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  return (
    <main className={`${styles.main}`}>
      <div>
        <NavBar />
      </div>

      <div className={`${styles.container}`}>
        <div className={`${styles.unitname}`}>Test Unit</div>
      </div>

      <div className={`${styles.statscontainer}`}>
        <div className={`${styles.stattitle}`}>
          <p>M</p>
          <div className={`${styles.statvalue}`}>
            <p>5"</p>
          </div>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>T</p>
          <div className={`${styles.statvalue}`}>
            <p>5</p>
          </div>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>Sv</p>
          <div className={`${styles.statvalue}`}>
            <p>3+</p>
          </div>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>W</p>
          <div className={`${styles.statvalue}`}>
            <p>2</p>
          </div>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>L</p>
          <div className={`${styles.statvalue}`}>
            <p>6+</p>
          </div>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>OC</p>
          <div className={`${styles.statvalue}`}>
            <p>2</p>
          </div>
        </div>
      </div>
    </main>
  );
};

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

const getServerSideProps: GetServerSideProps<IUnit> = async () => {
  return {
    props: {
      name: "Test Name",
      movement: '5"',
      toughness: 5,
      savingthrow: "3+",
      wounds: 2,
      leadership: "6+",
      objectivecontrol: 2,
    },
  };
};
