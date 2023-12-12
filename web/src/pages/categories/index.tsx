import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import prisma from "@/lib/prisma";
import { CategoryLink } from "@/components/categorylink";
import styles from "./category.module.css";
import hero from "@/assets/CategoryHero.png";
import { Open_Sans } from "next/font/google";

const Opensans = Open_Sans({ subsets: ["latin"] });

const Category: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
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
        {data.map((data: any) => {
          return (
            <CategoryLink
              name={data.name}
              categoryId={data.id}
              imageURL={data.banner_url}
            />
          );
        })}
      </div>

      <Footer />
    </main>
  );
};

export default Category;

export const getServerSideProps = async () => {
  const data = await prisma.categories.findMany();
  console.log(data);

  return { props: { data } };
};
