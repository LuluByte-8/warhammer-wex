import React from "react";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Logo from "@/assets/white-logo.png";
import ProfileIcon from "@/assets/UserCircle.png";
import Image from "next/image";
import styles from "./navbar.module.css";

const Opensans = Open_Sans({ subsets: ["latin"] });

export const NavBar: React.FC = () => {
  return (
    <div className={`${styles.navbar} ${Opensans.className}`}>
      <div className={`${styles.logoContainer}`}>
        <Image className={`${styles.logo}`} src={Logo} alt="Project Logo" />
      </div>

      <div className={`${styles.linkContainer}`}>
        <Link className={`${styles.linkClass}`} href="/">
          Home
        </Link>
        <Link className={`${styles.linkClass}`} href="/categories">
          Army &amp; Unit Viewer
        </Link>
        <Link className={`${styles.linkClass}`} href="/">
          Army Builder
        </Link>
      </div>

      <div className={`${styles.profileIconContainer}`}>
        <Link className={`${styles.linkClass}`} href="/profile">
          <Image
            className={`${styles.profileIcon}`}
            src={ProfileIcon}
            alt="AccountManagement"
          />
        </Link>
      </div>
    </div>
  );
};
