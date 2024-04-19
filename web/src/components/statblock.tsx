import styles from "@/components/statblock.module.css";

interface IStatBlock {
  name: string;
  movement: string;
  weaponSkill: string;
  ballisticSkill: string;
  strength: string;
  toughness: string;
  wounds: string;
  attacks: string;
  leadership: string;
  save: string;
}

export const StatBlock: React.FC<IStatBlock> = ({
  name,
  movement,
  weaponSkill,
  ballisticSkill,
  strength,
  toughness,
  wounds,
  attacks,
  leadership,
  save,
}) => {
  return (
    <div className={`${styles.maincontainer}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.unitname}`}>{name}</div>
      </div>

      <div className={`${styles.statscontainer}`}>
        <div className={`${styles.stattitle}`}>
          <p>M</p>
          <p className={`${styles.statvalue}`}>{movement}</p>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>WS</p>
          <p className={`${styles.statvalue}`}>{weaponSkill}</p>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>BS</p>
          <p className={`${styles.statvalue}`}>{ballisticSkill}</p>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>S</p>
          <p className={`${styles.statvalue}`}>{strength}</p>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>T</p>
          <p className={`${styles.statvalue}`}>{toughness}</p>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>W</p>
          <p className={`${styles.statvalue}`}>{wounds}</p>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>A</p>
          <p className={`${styles.statvalue}`}>{attacks}</p>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>Ld</p>
          <p className={`${styles.statvalue}`}>{leadership}</p>
        </div>

        <div className={`${styles.stattitle}`}>
          <p>Sv</p>
          <p className={`${styles.statvalue}`}>{save}</p>
        </div>
      </div>
    </div>
  );
};
