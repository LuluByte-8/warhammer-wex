import * as React from "react";
import { useRouter } from "next/router";

export const useAddCustomArmy = (username: string, firebase_id: string) => {
  const [adding, setAdding] = React.useState<boolean>(false);

  const router = useRouter();

  const addCustomArmy = ({
    armyName,
    armyDesc,
    armyFaction,
  }: {
    armyName: string;
    armyDesc: string;
    armyFaction: string;
  }) => {
    setAdding(true);

    // Fetch logic awaited here
    const apiUrl = "http://localhost:3000/api/addcustomarmy";
    const resp = fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        username,
        firebase_id,
        armyName,
        armyDesc,
        armyFaction,
      }),
    })
      .then((res) => res.json())
      .then(({ customarmy_id }) =>
        router.push(`/armybuilder/${customarmy_id}/customarmy`)
      )
      .finally(() => setAdding(false));
  };

  return {
    addCustomArmy,
    addingCustomArmy: adding,
  };
};

// const myComp: React.FC<{squadId: number}> = ({squadId}) => {
//     const {addSquadToRegiment, addingSquadToRegiment} = useAddSquadToRegiment(squadId);

//     return (<button disabled={addSquadToRegiment}></>)
// }
