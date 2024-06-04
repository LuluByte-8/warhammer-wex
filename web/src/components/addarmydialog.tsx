import React from "react";

import { useAddCustomArmy } from "@/hooks/useAddCustomArmy";

import { DialogComponent } from "./dialog";

import styles from "./addarmydialog.module.css";

interface Armies {
  id: string;
  name: string;
}

export const AddArmyDialog: React.FC<{
  firebase_id: string;
  username: string;
  triggerButtonText: string;
  armies: Armies[];
}> = ({ armies, firebase_id, username, triggerButtonText }) => {
  const [armyName, setArmyName] = React.useState<string>("");
  const [armyDesc, setArmyDesc] = React.useState<string>("");
  const [armyFaction, setArmyFaction] = React.useState<string>(armies[0].id);

  const { addCustomArmy, addingCustomArmy } = useAddCustomArmy(
    username,
    firebase_id,
    armyName,
    armyDesc,
    armyFaction
  );

  return (
    <DialogComponent
      dialogTitle="Create Custom Army"
      dialogTrigger={
        <button className={`${styles.TriggerButton}`}>
          <b>{triggerButtonText}</b>
        </button>
      }
    >
      <div className={`${styles.formContainer}`}>
        <form className={`${styles.form}`}>
          <input
            type={"text"}
            placeholder={"Army Name"}
            value={armyName}
            onChange={(e) => setArmyName(e.target.value)}
          />

          <textarea
            cols={5}
            rows={3}
            placeholder={"Army Description"}
            value={armyDesc}
            onChange={(e) => setArmyDesc(e.target.value)}
          />

          <select
            id="armyselect"
            value={armyFaction}
            onChange={(e) => setArmyFaction(e.target.value)}
          >
            {armies.map((army, i) => {
              return (
                <option key={i} value={army.id}>
                  {army.name}
                </option>
              );
            })}
          </select>

          <button
            className={styles.submitButton}
            type={"submit"}
            disabled={addingCustomArmy}
            onClick={() => {
              addCustomArmy();
            }}
          >
            Create Army
          </button>
        </form>
      </div>
    </DialogComponent>
  );
};
