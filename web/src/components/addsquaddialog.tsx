import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { ICustomArmy } from "./unitdisplay";

import styles from "./addsquaddialog.module.css";

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

export const AddSquadDialog: React.FC<
  React.PropsWithChildren<{
    squadId: number;
    name: string;
    factionId: string;
    customarmies: ICustomArmy[];
  }>
> = ({ squadId, name, factionId, customarmies, children }) => {
  return (
    <Dialog.Root defaultOpen={false}>
      <Dialog.Trigger asChild>
        <button className={`${styles.TriggerButton}`}>Add Squad To Army</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`${styles.DialogOverlay}`} />
        <Dialog.Content className={`${styles.DialogContent}`}>
          <Dialog.Title className={`${styles.DialogTitle}`}>
            Add to army
          </Dialog.Title>
          <Dialog.Description className={`${styles.DialogDescription}`}>
            {customarmies.length > 0 ? (
              customarmies.map((customarmy) => {
                return (
                  <div
                    key={customarmy.customarmy_id}
                    className={`${styles.customarmydisplay}`}
                  >
                    <p>{customarmy.customarmy_name}</p>
                    <button>Add</button>
                  </div>
                );
              })
            ) : (
              <div>
                <p>No Armies Found!</p>
                <p>Make An Army Here!</p>
              </div>
            )}
          </Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button className={`${styles.IconButton}`}></button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
