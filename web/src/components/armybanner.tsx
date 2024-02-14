import { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "@/components/armybanner.module.css";

interface IArmyBanner {
  name: string;
  description: string;
  armyId: number;
  imageURL: string | StaticImageData;
  categoryId: number;
}

export const ArmyBanner: React.FC<IArmyBanner> = ({
  name,
  description,
  armyId,
  imageURL,
  categoryId,
}) => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>

      <div className={`${styles.textContainer}`}>
        <h1 className={`${styles.armyTitle}`}>{name}</h1>
        <p className={`${styles.armyDescription}`}>{description}</p>

        <Link
          href={`/categories/${categoryId}/armies/${armyId}`}
          key={name}
          className={`${styles.armyLink}`}
        >
          <button className={`${styles.armybutton}`}>
            See all units
          </button>
        </Link>
      </div>
    </div>
  );
};
