import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styles from "./category.module.css";
import { NavBar } from "@/components/navbar";
import { ICategory, getCategories } from "@/api/mock/category";

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
