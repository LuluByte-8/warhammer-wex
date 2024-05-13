import React from "react";

import type { Unit } from "@/pages/categories/[cid]/armies/[arid]/units/[uid]";

import styles from "./datasheet.module.css";

interface IDatasheetProps {
  units: Unit[];
}

export const Datasheet: React.FC<IDatasheetProps> = ({ units }) => {
  return (
    <main className={`${styles.mainClass}`}>
      <div className={`${styles.headerDiv}`}>
        <h1>Test Title</h1>
      </div>

      <div className={`${styles.mainStatsContainer}`}>
        <div className={`${styles.mainStatsLeft}`}>
          <p>No.</p>
          <p>Name</p>
        </div>

        <div className={`${styles.mainStatsRight}`}>
          <p>M</p>
          <p>WS</p>
          <p>BS</p>
          <p>S</p>
          <p>T</p>
          <p>W</p>
          <p>A</p>
          <p>Ld</p>
          <p>Sv</p>
          {/* <p>Cost</p> */}
        </div>
      </div>

      {units.map((unit, index) => {
        return (
          <div className={`${styles.statBlockContainer}`} key={index}>
            <div className={`${styles.statBlockLeft}`}>
              <p>{unit.minunits}</p>
              <p>{unit.maxunits}</p>
              <p>{unit.name}</p>
            </div>

            <div className={`${styles.statBlockRight}`}>
              <p>{unit.m}</p>
              <p>{unit.ws}</p>
              <p>{unit.bs}</p>
              <p>{unit.s}</p>
              <p>{unit.t}</p>
              <p>{unit.w}</p>
              <p>{unit.a}</p>
              <p>{unit.ld}</p>
              <p>{unit.sv}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};
