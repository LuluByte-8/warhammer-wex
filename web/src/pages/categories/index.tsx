import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import hero from "@/assets/CategoryHero.png";
import { CategoryLink } from "@/components/categorylink";
import { Footer } from "@/components/footer";
import { HeroImage } from "@/components/heroimage";
import { NavBar } from "@/components/navbar";
import prisma from "@/lib/prisma";

import styles from "./category.module.css";

const Category: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <main>
      <NavBar />

      <HeroImage
        header="Test Heading"
        text="Lorem ipsum dolor sit amet consectetur. Orci ut arcu magnis pharetra
            consequat feugiat interdum. Adipiscing euismod id justo quam."
        imageURL={hero}
      />

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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const data = await prisma.categories.findMany();
  console.log(data);

  return { props: { data } };
};
