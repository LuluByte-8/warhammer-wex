import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

import { getArmyByCategoryId,IArmy } from "@/api/mock/army";
import { NavBar } from "@/components/navbar";

import styles from "./army.module.css";

const Army: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ armies }) => {
  return (
    <main>
      <NavBar />
      {armies.map((army) => {
        return (
          <Link
            href={`/categories/${army.categoryId}/armies/${army.armyId}`}
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
  const armies = getArmyByCategoryId(cid);

  if (!armies) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      armies: armies,
    },
  };
};
