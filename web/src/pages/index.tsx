import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import hero from "../assets/hero-homepage.png";
import styles from "./home.module.css";

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { LoginCheck } from "@/lib/logincheck";

const Opensans = Open_Sans({ subsets: ["latin"] });

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <main>
      <NavBar loggedin={props.authenticated} />

      <div className={`${styles.main}`}>
        <div className={styles.heroContainer}>
          <Image className={styles.heroImage} src={hero} alt="hero" />
        </div>
        <div className={`${styles.content} ${Opensans.className}`}>
          <h1>Test Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci ut arcu magnis pharetra
            consequat feugiat interdum. Adipiscing euismod id justo quam.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const loginauth = await LoginCheck(ctx);
  return { props: loginauth };
};
