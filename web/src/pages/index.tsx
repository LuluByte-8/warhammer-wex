import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import styles from "./home.module.css";
import { Open_Sans } from "next/font/google";

const Opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />

      <div className={`${styles.main}`}>
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
