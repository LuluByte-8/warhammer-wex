import React from "react";
import Image from "next/image";
import Link from "next/link";

import IG from "@/assets/InstagramLogo.png";
import TW from "@/assets/TwitterLogo.png";
import YT from "@/assets/YoutubeLogo.png";

import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.linkContainer}`}>
        <Link className={`${styles.linkClass}`} href="/">
          COOKIE POLICY
        </Link>
        <Link className={`${styles.linkClass}`} href="/">
          TERMS &amp; CONDITIONS
        </Link>
        <Link className={`${styles.linkClass}`} href="/">
          PRIVACY POLICY
        </Link>
      </div>

      <div className={`${styles.IconContainer}`}>
        <Link className={`${styles.linkClass}`} href="https://www.youtube.com">
          <Image className={`${styles.ytIcon}`} src={YT} alt="YouTube" />
        </Link>

        <Link className={`${styles.linkClass}`} href="https://www.instagram.com/">
          <Image className={`${styles.igIcon}`} src={IG} alt="Istagram" />
        </Link>

        <Link className={`${styles.linkClass}`} href="https://twitter.com">
          <Image className={`${styles.twIcon}`} src={TW} alt="YouTube" />
        </Link>
      </div>
    </div>
  );
};
