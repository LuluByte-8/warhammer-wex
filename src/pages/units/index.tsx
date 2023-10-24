import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NavBar } from "@/components/navbar";
import Link from "next/link";
import styles from "@/pages/units/unitlist.module.css";

// const units = [{name}]
// units.map(unit => <div></div>)

const Unit: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ units }) => {
  return (
    <main>
      <NavBar />

      {units.map((unit) => {
        return (
          <main>
            <Link href={unit.link} key={unit.name} className={`${styles.link}`}>
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
                <p>{unit.savingthrow}+</p>
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
                <p>{unit.objectivecontrol}</p>
              </div>
            </div>
          </main>
        );
      })}
    </main>
  );
};

{
  /* <div >
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
  movement: number;
  toughness: number;
  savingthrow: number;
  wounds: number;
  leadership: number;
  objectivecontrol: number;
  link: string;
}

interface IUnitPageProps {
  units: IUnit[];
}

export const getServerSideProps: GetServerSideProps<
  IUnitPageProps
> = async () => {
  return {
    props: {
      units: [
        {
          name: "Plague Marine",
          movement: 5,
          toughness: 5,
          savingthrow: 5,
          wounds: 2,
          leadership: 6,
          objectivecontrol: 2,
          link: "/units/PlagueMarine",
        },
        {
          name: "Blightlord Terminators",
          movement: 4,
          toughness: 6,
          savingthrow: 2,
          wounds: 3,
          leadership: 6,
          objectivecontrol: 1,
          link: "/units/BlightlordTerminators",
        },
        {
          name: "Mortarion",
          movement: 10,
          toughness: 12,
          savingthrow: 2,
          wounds: 16,
          leadership: 5,
          objectivecontrol: 6,
          link: "/units/Mortarion",
        },
        {
          name: "Plagueburst Crawler",
          movement: 10,
          toughness: 10,
          savingthrow: 2,
          wounds: 12,
          leadership: 6,
          objectivecontrol: 4,
          link: "/units/PlagueburstCrawler",
        },
      ],
    },
  };
};
