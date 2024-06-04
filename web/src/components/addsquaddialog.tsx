import React from "react";

import { useAddSquadToRegiment } from "@/hooks/useAddRegiment";

import { DialogComponent } from "./dialog";
import { ICustomArmy } from "./unitdisplay";

import styles from "./addsquaddialog.module.css";

export const AddSquadDialog: React.FC<{
  squadId: number;
  factionId: string;
  customarmies: ICustomArmy[];
}> = ({ squadId, factionId, customarmies }) => {
  const { addSquadToRegiment, addingSquadToRegiment, addedSquadToArmy } =
    useAddSquadToRegiment(squadId, factionId);

  return (
    <DialogComponent
      dialogTitle="Add Squad to Army"
      bottomButton={
        <button className={`${styles.TriggerButton}`}>
          <b>Create New Army!</b>
        </button>
      }
      dialogTrigger={
        <button className={`${styles.TriggerButton}`}>
          <b>Add squad to army</b>
        </button>
      }
    >
      {customarmies.length > 0 ? (
        customarmies.map((customarmy) => {
          return (
            <div
              key={customarmy.customarmy_id}
              className={`${styles.customarmydisplay}`}
            >
              <p>{customarmy.customarmy_name}</p>
              <button
                className={`${styles.AddButton}`}
                disabled={addingSquadToRegiment}
                onClick={() => {
                  addSquadToRegiment(customarmy.customarmy_id);
                }}
              >
                Add
              </button>
            </div>
          );
        })
      ) : (
        <div className={`${styles.customarmydisplay}`}>
          <p>No Armies Found!</p>
        </div>
      )}
    </DialogComponent>
  );
};

// {
//   customarmies.length > 0 ? (
//     customarmies.map((customarmy) => {
//       return (
//         <div
//           key={customarmy.customarmy_id}
//           className={`${styles.customarmydisplay}`}
//         >
//           <p>{customarmy.customarmy_name}</p>
//           <button
//             disabled={addingSquadToRegiment}
//             onClick={() => {
//               addSquadToRegiment(customarmy.customarmy_id);
//             }}
//           >
//             Add
//           </button>
//         </div>
//       );
//     })
//   ) : (
//     <div className={`${styles.customarmydisplay}`}>
//       <p>No Armies Found!</p>
//     </div>
//   );
// }

// const MyComponent = () => {
//   return (
//     <>
//       <fieldset className="Fieldset">
//         <label className="Label" htmlFor="name">
//           Name
//         </label>
//         <input className="Input" id="name" defaultValue="Pedro Duarte" />
//       </fieldset>
//       <fieldset className="Fieldset">
//         <label className="Label" htmlFor="username">
//           Username
//         </label>
//         <input className="Input" id="username" defaultValue="@peduarte" />
//       </fieldset>
//     </>
//   );
// };

// const exampleDialogUse = () => {
//   return (
//     <AddSquadDialog title="My dialog test">
//       <MyComponent />
//     </AddSquadDialog>
//   );
// };
