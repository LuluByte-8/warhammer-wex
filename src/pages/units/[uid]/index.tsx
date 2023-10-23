import styles from "@/styles/Unit.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Unit: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.navbar}`}>
        <p>Home</p>
        <p>Unit Preview</p>
        <p>Army Builder</p>
        <p>Account Management</p>
      </div>

      <div className={`${styles.unitcard}`}>
        <div className={`${styles.stats}`}>
          <h1>Test Data</h1>
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
      movement: '6"',
      toughness: 4,
      savingthrow: "3+",
      wounds: 2,
      leadership: "6+",
      objectivecontrol: 2,
    },
  };
};
