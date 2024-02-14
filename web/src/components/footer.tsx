import React from "react";
import Image from "next/image";

import IG from "@/assets/InstagramLogo.png";
import TW from "@/assets/TwitterLogo.png";
import YT from "@/assets/YoutubeLogo.png";

import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.linkContainer}`}>
        <a className={`${styles.linkClass}`} href="/">
          COOKIE POLICY
        </a>
        <a className={`${styles.linkClass}`} href="/">
          TERMS &amp; CONDITIONS
        </a>
        <a className={`${styles.linkClass}`} href="/">
          PRIVACY POLICY
        </a>
      </div>

      <div className={`${styles.IconContainer}`}>
        <a className={`${styles.linkClass}`} href="https://www.youtube.com">
          <Image className={`${styles.ytIcon}`} src={YT} alt="YouTube" />
        </a>

        <a className={`${styles.linkClass}`} href="https://www.instagram.com/">
          <Image className={`${styles.igIcon}`} src={IG} alt="Istagram" />
        </a>

        <a className={`${styles.linkClass}`} href="https://twitter.com">
          <Image className={`${styles.twIcon}`} src={TW} alt="YouTube" />
        </a>
      </div>
    </div>
  );
};
