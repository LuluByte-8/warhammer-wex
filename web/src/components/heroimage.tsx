import styles from "@/components/heroimage.module.css";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const Opensans = Open_Sans({ subsets: ["latin"] });

interface IHeroImage {
  header: string;
  text: string;
  imageURL: StaticImageData;
}

export const HeroImage: React.FC<IHeroImage> = ({ header, text, imageURL }) => {
  return (
    <div className={`${styles.main} ${Opensans.className}`}>
      <div className={styles.heroContainer}>
        <Image className={styles.heroImage} src={imageURL} alt="hero" />
      </div>
      <div className={`${styles.content}`}>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
