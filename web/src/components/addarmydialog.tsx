import React from "react";
import { z } from "zod";

import { useAddCustomArmy } from "@/hooks/useAddCustomArmy";

import { DialogComponent } from "./dialog";

import styles from "./addarmydialog.module.css";

interface Army {
  id: string;
  name: string;
}

export const AddArmyDialog: React.FC<{
  firebase_id: string;
  username: string;
  triggerButtonText: string;
  armies: Army[];
}> = ({ armies, firebase_id, username, triggerButtonText }) => {
  const customArmySchema = z.object({
    armyName: z
      .string()
      .min(5, "Army name must be at least 5 characters")
      .max(25),
    armyDesc: z.string().max(250),
    armyFaction: z.string().refine((faction) => {
      return armies.some((a) => a.id === faction);
    }, "Army Does Not Exist"),
  });

  const [armyName, setArmyName] = React.useState<string>("");
  const [armyDesc, setArmyDesc] = React.useState<string>("");
  const [armyFaction, setArmyFaction] = React.useState<string>(armies[0].id);
  const [error, setError] = React.useState<string>("");

  const { addCustomArmy, addingCustomArmy } = useAddCustomArmy(
    username,
    firebase_id
  );

  const onSubmit = () => {
    setError("");
    const validatedArmy = customArmySchema.safeParse({
      armyName,
      armyDesc,
      armyFaction,
    });

    if (!validatedArmy.success) {
      setError(validatedArmy.error.issues[0].message);
      return;
    }

    addCustomArmy(validatedArmy.data);
  };

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

          {error && <p>{error}</p>}

          <button
            className={styles.submitButton}
            type={"submit"}
            disabled={addingCustomArmy}
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            Create Army
          </button>
        </form>
      </div>
    </DialogComponent>
  );
};
