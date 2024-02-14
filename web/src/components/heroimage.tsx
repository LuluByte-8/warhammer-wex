import Image, { StaticImageData } from "next/image";

import styles from "@/components/heroimage.module.css";


interface IHeroImage {
  header: string;
  text: string;
  imageURL: StaticImageData;
}

export const HeroImage: React.FC<IHeroImage> = ({ header, text, imageURL }) => {
  return (
    <div className={styles.main}>
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
