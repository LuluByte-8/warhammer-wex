import { Open_Sans } from "next/font/google";
import Image from "next/image";

import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";

import hero from "../assets/hero-homepage.png";

import styles from "./home.module.css";

const Opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />

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
