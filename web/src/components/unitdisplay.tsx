import styles from "@/components/unitdisplay.module.css";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const Opensans = Open_Sans({ subsets: ["latin"] });

interface IUnitDisplay {
  unitId: number;
  imageURL: string;
  name: string;
  armyId: number;
}

export const UnitDisplay: React.FC<IUnitDisplay> = ({
  unitId,
  imageURL,
  name,
  armyId,
}) => {
  return (
    <div className={`${styles.container} ${Opensans.className}`}>
      <div
        className={`${styles.imagecontainer}`}
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>

      <div className={`${styles.bannercontainer}`}>
        <h1>{name}</h1>
        <Link
          href={`${armyId}/units/${unitId}`}
          key={name}
          className={`${styles.unitlink}`}
        >
          <div className={`${styles.buttonwrapper}`}>
            <button className={`${styles.unitbutton} ${Opensans.className}`}>
              <b>See unit details</b>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
