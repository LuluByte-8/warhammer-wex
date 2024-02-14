import styles from "@/components/statblock.module.css";

interface IStatBlock {
  name: string;
  movement: number;
  toughness: number;
  savingThrow: number;
  wounds: number;
  leadership: number;
  objectiveControl: number;
  invulnSave?: number;
}

export const StatBlock: React.FC<IStatBlock> = ({
  name,
  movement,
  toughness,
  savingThrow,
  wounds,
  leadership,
  objectiveControl,
  invulnSave,
}) => {
  if (invulnSave === undefined) {
    return (
      <div className={`${styles.maincontainer}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.unitname}`}>{name}</div>
        </div>

        <div className={`${styles.statscontainer}`}>
          <div className={`${styles.stattitle}`}>
            <p>M</p>
            <p className={`${styles.statvalue}`}>{movement}&quot;</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>T</p>
            <p className={`${styles.statvalue}`}>{toughness}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>Sv</p>
            <p className={`${styles.statvalue}`}>{savingThrow}+</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>W</p>
            <p className={`${styles.statvalue}`}>{wounds}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>L</p>
            <p className={`${styles.statvalue}`}>{leadership}+</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>OC</p>
            <p className={`${styles.statvalue}`}>{objectiveControl}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${styles.maincontainer}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.unitname}`}>{name}</div>
        </div>

        <div className={`${styles.statscontainer}`}>
          <div className={`${styles.stattitle}`}>
            <p>M</p>
            <p className={`${styles.statvalue}`}>{movement}&quot;</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>T</p>
            <p className={`${styles.statvalue}`}>{toughness}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>Sv</p>
            <p className={`${styles.statvalue}`}>{savingThrow}+</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>Is</p>
            <p className={`${styles.statvalue}`}>{invulnSave}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>W</p>
            <p className={`${styles.statvalue}`}>{wounds}</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>L</p>
            <p className={`${styles.statvalue}`}>{leadership}+</p>
          </div>

          <div className={`${styles.stattitle}`}>
            <p>OC</p>
            <p className={`${styles.statvalue}`}>{objectiveControl}</p>
          </div>
        </div>
      </div>
    );
  }
};
