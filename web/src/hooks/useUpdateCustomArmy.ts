import * as React from "react";

import { ICustomArmy } from "@/pages/armybuilder/[caid]/customarmy";

export const useUpdateCustomArmy = (customArmyId: number) => {
  const [updating, setUpdating] = React.useState<boolean>(false);

  const updateCustomArmy = (
    currentArmy: ICustomArmy,
    intialCustomArmyState: ICustomArmy
  ) => {
    setUpdating(true);

    const apiUrl = "http://localhost:3000/api/updatecustomarmy";
    const resp = fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        intialCustomArmyState,
        currentArmy,
        customArmyId,
      }),
    }).finally(() => setUpdating(false));
  };

  return {
    updateCustomArmy,
    updatingCustomArmy: updating,
  };
};

// export const useUpdateCustomArmy = () => {
//   const [updating, setUpdating] = React.useState<boolean>(false);

//   const UpdateCustomArmy = ({}: {}) => {
//     setUpdating(true);

//     console.log("Test");

//     return {
//       UpdateCustomArmy,
//       updatingCustomArmy: updating,
//     };
//   };
// };

// Make change
// Button appears
// Call API
// Pass updated state to API
// Delete old units (update?)
// Create new units
// Pass response back to frontend
