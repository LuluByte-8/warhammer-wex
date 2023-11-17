import React from "react";
import { Open_Sans } from "next/font/google";
import YT from "@/assets/YoutubeLogo.png";
import IG from "@/assets/InstagramLogo.png";
import TW from "@/assets/TwitterLogo.png";
import Image from "next/image";
import styles from "./footer.module.css";

const Opensans = Open_Sans({ subsets: ["latin"] });

export const Footer: React.FC = () => {
  return (
    <div className={`${styles.footer} ${Opensans.className}`}>
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
