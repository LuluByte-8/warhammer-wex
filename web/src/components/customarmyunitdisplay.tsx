import React from "react";
import Link from "next/link";

import styles from "@/components/customarmyunitdisplay.module.css";
import type {
  CustomArmy,
  Squads,
  Units,
} from "@/pages/armybuilder/[caid]/customarmy";

type UnitId = number;
type RegimentId = number;

type IRegimentDetails = Record<UnitId, number>;

export interface IRegiment extends IRegimentDetails {
  regiment_id: RegimentId;
  squad_id: number;
}

interface ICustomArmyUnitDisplay {
  squads: Squads;
  units: Units[];
  customarmy: CustomArmy;
  owner: boolean;
  regiment: IRegiment;
  onAddUnit: (unitId: UnitId) => void;
  onRemoveUnit: (unitId: UnitId) => void;
}

export const CustomArmyUnitDisplay: React.FC<ICustomArmyUnitDisplay> = ({
  squads,
  units,
  customarmy,
  owner,
  regiment,
  onAddUnit,
  onRemoveUnit,
}) => {
  const apiUrl = "http://localhost:3000/api/deleteunit";
  const RemoveUnit = async (squad_Id: any) => {
    const result = await fetch(apiUrl, {
      method: "POST",
      body: squad_Id,
    });
  };

  const { squad_id, regiment_id, ...unitMap } = regiment;

  const getUnitName = (unitId: number) => {
    const unit = units.find((u) => u.unit_id === unitId);

    return unit?.name ?? "";
  };

  const getUnitCost = (unitId: number) => {
    const unitCost = units.find((u) => u.unit_id === unitId);

    return unitCost?.cost ?? 0;
  };

  const getRegimentCost = (regiment: IRegimentDetails) => {
    return Object.entries(regiment).reduce((totalCost, [unitId, count]) => {
      const unitTotalCost = getUnitCost(+unitId) * count;

      return totalCost + unitTotalCost;
    }, 0);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.bannercontainer}`}>
        <h1>{squads.squad_name}</h1>
        <div>
          {Object.entries(unitMap).map(([unitId, count]) => {
            return (
              <div key={unitId} className={`${styles.unitContainer}`}>
                <p className={`${styles.unitName}`}>{getUnitName(+unitId)}</p>
                <p className={`${styles.numUnits}`}>{count}</p>
                {owner.valueOf() ? (
                  <>
                    <button
                      className={`${styles.addbutton}`}
                      onClick={() => onAddUnit(+unitId)}
                    >
                      +
                    </button>
                    <button
                      className={`${styles.addbutton}`}
                      onClick={() => onRemoveUnit(+unitId)}
                    >
                      -
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}

          <p className={`${styles.unitName}`}>
            Point Cost: {getRegimentCost(unitMap)}
          </p>
        </div>

        <Link
          href={`${customarmy.customarmy_faction}/units/${squads.squad_id}`}
          key={squads.squad_name}
          className={`${styles.unitlink}`}
        >
          <div className={`${styles.buttonwrapper}`}>
            <button className={`${styles.unitbutton}`}>
              <b>See squad details</b>
            </button>
          </div>
        </Link>

        <div className={`${styles.buttonwrapper}`}>
          <button
            className={`${styles.unitbutton}`}
            onClick={() => RemoveUnit(regiment.regiment_id)}
          >
            <b>Remove squad from army</b>
          </button>
        </div>
      </div>
    </div>
  );
};

// {
//   owner.valueOf()
//     ? units.map((unit) => {
//         return (
//           <div key={unit.unit_id} className={`${styles.unitContainer}`}>
//             <p>{unit.name}</p>
//             <input
//               className={`${styles.unitInput}`}
//               type="number"
//               min={unit.minunits}
//               max={unit.maxunits}
//               defaultValue={unit.minunits}
//             ></input>
//           </div>
//         );
//       })
//     : units.map((unit) => {
//         return (
//           <div key={unit.unit_id} className={`${styles.unitContainer}`}>
//             <p>{unit.name}</p>
//             <input
//               className={`${styles.unitInput}`}
//               type="number"
//               disabled
//               defaultValue={unit.minunits}
//             ></input>
//           </div>
//         );
//       })
//   // <div>
//   //   <p>Not Owner</p>
//   // </div>
// }
