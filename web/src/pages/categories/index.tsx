import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { getCategories, ICategory } from "@/api/mock/category";
import { CategoryLink } from "@/components/categorylink";
import styles from "./category.module.css";
import hero from "@/assets/CategoryHero.png";
import { Open_Sans } from "next/font/google";

const Opensans = Open_Sans({ subsets: ["latin"] });

const Category: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ categories }) => {
  return (
    <main>
      <NavBar />

      <div className={`${styles.main} ${Opensans.className}`}>
        <div className={styles.heroContainer}>
          <Image className={styles.heroImage} src={hero} alt="hero" />
        </div>
        <div className={`${styles.content}`}>
          <h1>Test Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci ut arcu magnis pharetra
            consequat feugiat interdum. Adipiscing euismod id justo quam.
          </p>
        </div>
      </div>

      <div className={`${styles.linksContainers}`}>
        {categories.map((category) => {
          return (
            <CategoryLink
              name={category.name}
              categoryId={category.categoryId}
              imageURL={category.bannerURL}
            />
          );
        })}
      </div>

      <Footer />
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
