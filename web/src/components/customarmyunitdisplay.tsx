import React from "react";
import Link from "next/link";

import styles from "@/components/customarmyunitdisplay.module.css";
import type {
  CustomArmy,
  Squads,
  Units,
} from "@/pages/armybuilder/[caid]/customarmy";

interface RegimentMembers {
  regiment_member_id: number;
  squad_id: number;
  regiment_id: number;
  unit_id: number;
}

interface ICustomArmyUnitDisplay {
  squads: Squads;
  units: Units[];
  customarmy: CustomArmy;
  regiment_id: number;
  owner: boolean;
  regimentmembers: RegimentMembers[];
}

export const CustomArmyUnitDisplay: React.FC<ICustomArmyUnitDisplay> = ({
  squads,
  units,
  customarmy,
  regiment_id,
  owner,
  regimentmembers,
}) => {
  const apiUrl = "http://localhost:3000/api/deleteunit";
  const RemoveUnit = async (squad_Id: any) => {
    const result = await fetch(apiUrl, {
      method: "POST",
      body: squad_Id,
    });
  };

  const unitMap = React.useMemo(() => {
    const map: Map<string, number> = new Map();

    regimentmembers.forEach((rm) => {
      const unitName = units.find((unit) => unit.unit_id === rm.unit_id)?.name;

      if (!unitName) {
        return;
      }

      map.set(unitName, (map.get(unitName) ?? 0) + 1);
    });
    return map;
  }, [regimentmembers, units]);

  const getUnitCost = Array.from(unitMap.entries()).map(([key, value]) => {
    const unit = units.find((u) => u.name === key);

    if (!unit) {
      return;
    }

    return unit.cost * value;
  });

  const squadCost = getUnitCost.reduce((acc, curr: any) => acc + curr, 0);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.bannercontainer}`}>
        <h1>{squads.squad_name}</h1>
        {/* {regimentmembers.map((member, i) => {
          if (member.squad_id === squads.squad_id) {
            return (
              <p key={i}>
                {units.find((unit) => unit.unit_id === member.unit_id)?.name ??
                  ""}
              </p>
            );
          }
        })} */}

        <div>
          {Array.from(unitMap.entries()).map(([key, value]) => {
            return (
              <div key={key} className={`${styles.unitContainer}`}>
                <p className={`${styles.unitName}`}>{key}</p>
                <p className={`${styles.numUnits}`}>{value}</p>
                {owner.valueOf() ? (
                  <>
                    <button className={`${styles.addbutton}`}>+</button>
                    <button className={`${styles.addbutton}`}>-</button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}

          <p className={`${styles.unitName}`}>Point Cost: {squadCost}</p>
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
            onClick={() => RemoveUnit(regiment_id)}
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
