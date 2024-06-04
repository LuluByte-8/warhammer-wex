import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/components/customarmydisplay.module.css";

interface ICustomArmyDisplay {
  customarmytype: string;
  customarmyname: string;
  customarmyid: number;
  customarmydesc: string;
}

export const CustomArmyDisplay: React.FC<ICustomArmyDisplay> = ({
  customarmyname,
  customarmytype,
  customarmyid,
  customarmydesc,
}) => {
  const router = useRouter();
  const apiUrl = "http://localhost:3000/api/deletearmy";

  const deleteArmy = (customarmyid: number) => {
    const result = fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(customarmyid),
    }).then((req) => req.body);
  };

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.container}`}>
        <h2>{customarmyname}</h2>
        <h3>Faction: {customarmytype}</h3>

        <p>{customarmydesc}</p>

        <div className={`${styles.buttonContainer}`}>
          <Link
            className={`${styles.linkClass}`}
            href={`armybuilder/${customarmyid}/customarmy`}
          >
            <button>View Army</button>
          </Link>

          <button onClick={() => deleteArmy(customarmyid)}>Delete Army</button>
        </div>
      </div>
    </div>
  );
};
