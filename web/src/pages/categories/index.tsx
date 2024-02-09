import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { LoginCheck } from "@/lib/logincheck";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import prisma from "@/lib/prisma";
import { CategoryLink } from "@/components/categorylink";
import styles from "./category.module.css";
import hero from "@/assets/CategoryHero.png";
import { HeroImage } from "@/components/heroimage";
import { Open_Sans } from "next/font/google";

const Opensans = Open_Sans({ subsets: ["latin"] });

const Category: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data, loginauth }) => {
  return (
    <main>
      <NavBar loggedin={loginauth.authenticated} />

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
  const loginauth = await LoginCheck(ctx);
  console.log(data);

  return { props: { data, loginauth } };
};
