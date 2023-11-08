import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

import styles from "./navbar.module.css";

const inter = Inter({ subsets: ["latin"] });

export const NavBar: React.FC = () => {
  return (
    <div className={`${styles.navbar} ${inter.className}`}>
      <Link className={`${styles.linkClass}`} href="/">
        Home
      </Link>
      <Link className={`${styles.linkClass}`} href="/armies">
        Army & Unit Viewer
      </Link>
      <Link className={`${styles.linkClass}`} href="/">
        Army Builder
      </Link>
      <Link className={`${styles.linkClass}`} href="/">
        Account Management
      </Link>
    </div>
  );
};
