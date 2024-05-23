import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "@/components/unitdisplay.module.css";

import { AddSquadDialog } from "./addsquaddialog";

export interface ICustomArmy {
  customarmy_name: string;
  customarmy_faction: string;
  customarmy_id: number;
}

interface IUnitDisplay {
  unitsinarmyid?: number;
  squadId: number;
  imageURL: string | StaticImageData;
  name: string;
  armyId: string;
  customarmies: ICustomArmy[];
}

export const UnitDisplay: React.FC<IUnitDisplay> = ({
  squadId,
  imageURL,
  name,
  armyId,
  customarmies,
}) => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.imagecontainer}`}
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>

      <div className={`${styles.bannercontainer}`}>
        <h1>{name}</h1>
        <div className={`${styles.buttonwrapper}`}>
          <Link
            className={`${styles.unitbutton}`}
            href={`${armyId}/units/${squadId}`}
          >
            <b>See squad details</b>
          </Link>
          <AddSquadDialog
            name={name}
            squadId={squadId}
            factionId={armyId}
            customarmies={customarmies}
          />
          {/* <button className={`${styles.unitbutton}`}>
              <b>Add squad to army</b>
            </button> */}
        </div>
      </div>
    </div>
  );
};
