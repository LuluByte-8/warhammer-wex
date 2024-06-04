import * as React from "react";

export const useAddSquadToRegiment = (squadId: number, factionId: string) => {
  const [adding, setAdding] = React.useState<boolean>(false);

  const [added, setAdded] = React.useState<string>();

  const addSquadToRegiment = (customarmyId: number) => {
    setAdding(true);

    // Fetch logic awaited here
    const apiUrl = "http://localhost:3000/api/addregiment";
    const resp = fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ squadId, factionId, customarmyId }),
    })
      .then((res) => res.json())
      .then(({ added }) => setAdded(added))
      .finally(() => setAdding(false));
  };

  return {
    addSquadToRegiment,
    addingSquadToRegiment: adding,
    addedSquadToArmy: added,
  };
};

// const myComp: React.FC<{squadId: number}> = ({squadId}) => {
//     const {addSquadToRegiment, addingSquadToRegiment} = useAddSquadToRegiment(squadId);

//     return (<button disabled={addSquadToRegiment}></>)
// }
