import Link from "next/link";

import styles from "@/components/customarmydisplay.module.css";

interface ICustomArmyDisplay {
  customarmytype: string;
  customarmyname: string;
  customarmyid: number;
}

export const CustomArmyDisplay: React.FC<ICustomArmyDisplay> = ({
  customarmyname,
  customarmytype,
  customarmyid,
}) => {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.container}`}>
        <h2>Army Name: {customarmyname}</h2>
        <h2>Faction: {customarmytype}</h2>
        <Link
          className={`${styles.linkClass}`}
          href={`armybuilder/${customarmyid}/customarmy`}
        >
          <button>View Army</button>
        </Link>
      </div>
    </div>
  );
};
