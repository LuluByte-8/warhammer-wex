import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "@/components/unitdisplay.module.css";

interface IUnitDisplay {
  unitsinarmyid?: number;
  unitId: number;
  imageURL: string | StaticImageData;
  name: string;
  armyId: string;
}

export const UnitDisplay: React.FC<IUnitDisplay> = ({
  unitId,
  imageURL,
  name,
  armyId,
}) => {
  return (
    <div className={`${styles.container}`}>
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
            <button className={`${styles.unitbutton}`}>
              <b>See unit details</b>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
