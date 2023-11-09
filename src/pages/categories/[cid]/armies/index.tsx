import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styles from "./army.module.css";
import { NavBar } from "@/components/navbar";
import { IArmy, getArmies, getArmyByCategoryId } from "@/api/mock/army";
import { ICategory } from "@/api/mock/category";

const Army: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ category, armies }) => {
  console.log(category);
  return (
    <main>
      <NavBar />
      {category.map((army) => {
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
      })}
    </main>
  );
};

export default Army;

interface IArmyListPageProps {
  category: ICategory[];
  armies: IArmy[];
}

export const getServerSideProps: GetServerSideProps<
  IArmyListPageProps
> = async (context) => {
  if (typeof context.query.cid !== "string") {
    return {
      notFound: true,
    };
  }
  const cid = context.query.cid;
  const category = getArmyByCategoryId(cid);

  if (!category) {
    return {
      notFound: true,
    };
  }

  const armies = getArmies();
  return {
    props: {
      category: category,
      armies: armies,
    },
  };
};
