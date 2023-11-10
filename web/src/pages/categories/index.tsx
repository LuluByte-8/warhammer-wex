import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

import { getCategories,ICategory } from "@/api/mock/category";
import { NavBar } from "@/components/navbar";

import styles from "./category.module.css";

const Category: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ categories }) => {
  return (
    <main>
      <NavBar />

      {categories.map((category) => {
        return (
          <Link

            href={`categories/${category.categoryId}/armies`}
            key={category.name}
            className={`${styles.armyLink}`}
          >
            <div>{category.name}</div>
            <br />
          </Link>
        );
      })}
    </main>
  );
};

export default Category;

interface ICategoryListPageProps {
  categories: ICategory[];
}

export const getServerSideProps: GetServerSideProps<
  ICategoryListPageProps
> = async () => {
  const categories = getCategories();
  return {
    props: {
      categories: categories,
    },
  };
};
