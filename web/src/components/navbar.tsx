import React from "react";
import Image from "next/image";
import Link from "next/link";

import ProfileIcon from "@/assets/UserCircle.png";
import Logo from "@/assets/white-logo.png";
import { useAuth } from "@/auth/authContext";

import styles from "./navbar.module.css";

export const NavBar = () => {
  const { user } = useAuth();
  return (
    <div className={`${styles.navbar}`}>
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

      <div>
        {user ? (
          <div className={`${styles.profileIconContainer}`}>
            <Link className={`${styles.linkClass}`} href="/profile">
              <Image
                className={`${styles.profileIcon}`}
                src={ProfileIcon}
                alt="AccountManagement"
              />
            </Link>
          </div>
        ) : (
          <div className={`${styles.buttonWrapper}`}>
            <Link href="/auth/login" className={styles.formButton}>
              Log In
            </Link>
            <Link href="/auth/signup" className={styles.formButton}>
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
