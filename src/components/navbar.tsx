import styles from "@/components/navbar.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const NavBar: React.FC = () => {
  return (
    <div className={`${styles.navbar} ${inter.className}`}>
      <Link className={`${styles.linkclass}`} href="/">
        Home
      </Link>
      <Link className={`${styles.linkclass}`} href="/units">
        Units
      </Link>
      <Link className={`${styles.linkclass}`} href="/">
        Army Builder
      </Link>
      <Link className={`${styles.linkclass}`} href="/">
        Account Management
      </Link>
    </div>
  );
};
