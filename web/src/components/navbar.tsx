import React from "react";
import { units } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import ProfileIcon from "@/assets/UserCircle.png";
import Logo from "@/assets/white-logo.png";
import { useAuth } from "@/auth/authContext";

import styles from "./navbar.module.css";

export const NavBar = () => {
  const { user } = useAuth();
  const [searchResults, setSearchResults] = React.useState<Array<units>>([]);

  const timeOutRef = React.useRef<NodeJS.Timeout | null>(null);

  const apiUrl = "http://localhost:3000/api/textsearch";

  const search = async (searchContent: string) => {
    const result = await fetch(apiUrl, {
      method: "POST",
      body: searchContent,
    });

    const units = (await result.json()) as { data: Array<units> };

    setSearchResults(units.data);
  };

  const onSearchInput = (searchContent: string) => {
    if (timeOutRef.current != null) {
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => search(searchContent), 500);
  };

  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.navbarLeft}`}>
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
          <Link className={`${styles.linkClass}`} href="/armybuilder">
            Army Builder
          </Link>
        </div>
      </div>

      <div className={`${styles.navbarRight}`}>
        <div style={{ position: "relative" }}>
          <input
            placeholder="Search"
            onChange={(e) => {
              onSearchInput(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "100%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {searchResults.map((u) => (
              <a key={u.id}>{u.name}</a>
            ))}
          </div>
        </div>

        {user ? (
          <div className={`${styles.profileIconContainer}`}>
            <Link className={`${styles.linkProfile}`} href="/profile">
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
