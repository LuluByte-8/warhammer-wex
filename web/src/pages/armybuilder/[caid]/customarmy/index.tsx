import * as React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import nookies from "nookies";

import {
  CustomArmyUnitDisplay,
  IRegiment,
} from "@/components/customarmyunitdisplay";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { useUpdateCustomArmy } from "@/hooks/useUpdateCustomArmy";
import { firebaseAdmin } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

import hero from "../../../../assets/CustomArmyHero.jpeg";

import styles from "./customarmy.module.css";

type UnitId = number;
type RegimentId = number;

export interface ICustomArmy extends Record<RegimentId, IRegiment> {}

const CustomArmy: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ customarmy, squads, units, regimentMembers, owner }) => {
  const intialCustomArmyState: ICustomArmy = React.useMemo(
    () =>
      regimentMembers.reduce((agg, rm) => {
        if (!agg[rm.regiment_id]) {
          agg[rm.regiment_id] = {
            regiment_id: rm.regiment_id,
            squad_id: rm.squad_id,
          };
        }

        const currentUnitCount = agg[rm.regiment_id][rm.unit_id] ?? 0;

        agg[rm.regiment_id][rm.unit_id] = currentUnitCount + 1;

        return agg;
      }, {} as ICustomArmy),
    [regimentMembers]
  );

  const [currentArmy, setCurrentArmy] = React.useState<ICustomArmy>(
    intialCustomArmyState
  );

  const { updateCustomArmy, updatingCustomArmy } = useUpdateCustomArmy(
    customarmy.customarmy_id
  );

  const getSquadModifierFns = (regimentId: RegimentId) => {
    const addUnit = (unitId: number) => {
      setCurrentArmy((current) => {
        const val = current[regimentId][unitId] ?? 0;
        const unit = units.find((u) => u.unit_id === unitId);
        const unitMax = unit?.maxunits ?? 0;
        const newVal = val + 1 >= +unitMax ? unitMax : val + 1;

        return {
          ...current,
          [regimentId]: { ...current[regimentId], [unitId]: newVal },
        };
      });
    };

    const removeUnit = (unitId: number) => {
      setCurrentArmy((current) => {
        const val = current[regimentId][unitId] ?? 0;
        const unit = units.find((u) => u.unit_id === unitId);
        const unitMin = unit?.minunits ?? 0;
        const newVal = val - 1 <= unitMin ? unitMin : val - 1;

        return {
          ...current,
          [regimentId]: { ...current[regimentId], [unitId]: newVal },
        };
      });
    };

    return { addUnit, removeUnit };
  };

  return (
    <main className={`${styles.main}`}>
      <NavBar />

      <div className={styles.heroImageWrapper}>
        <Image className={styles.heroImage} src={hero} alt="hero-image" />
      </div>

      <div className={`${styles.armyTitle}`}>
        <div className={`${styles.armyTitleH}`}>
          <h1>{customarmy.customarmy_name}</h1>
          <h2>Created By: {customarmy.username}</h2>
        </div>
        <div className={`${styles.armyTitleP}`}>
          <p>{customarmy.description}</p>
        </div>
      </div>

      <div className={`${styles.saveButtonContainer}`}>
        <button
          className={`${styles.saveButton}`}
          // disabled={updatingCustomArmy}
          onClick={() => updateCustomArmy(currentArmy, intialCustomArmyState)}
        >
          Save Changes
        </button>
      </div>

      <div className={`${styles.units}`}>
        {squads.length === 0 ? (
          <div className={`${styles.noUnits}`}>
            <h2>No Units!</h2>
            <p>
              Visit the categories page <a href="../../../categories">here</a>{" "}
              to find some units to add to your army!
            </p>
          </div>
        ) : (
          <div className={`${styles.units}`}>
            {Object.entries(currentArmy).map(([regiment_id, regiment]) => {
              const { addUnit, removeUnit } = getSquadModifierFns(+regiment_id);

              return (
                <CustomArmyUnitDisplay
                  key={regiment_id}
                  squads={squads.find((s) => s.squad_id === regiment.squad_id)!}
                  units={units}
                  customarmy={customarmy}
                  regiment={regiment}
                  owner={owner}
                  onAddUnit={addUnit}
                  onRemoveUnit={removeUnit}
                />
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default CustomArmy;

export type Squads = Awaited<ReturnType<typeof prisma.squads.findFirstOrThrow>>;

export type Units = Awaited<ReturnType<typeof prisma.units.findFirstOrThrow>>;

export type CustomArmy = Awaited<
  ReturnType<typeof prisma.customarmy.findFirstOrThrow>
>;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const caid = ctx.query.caid;

  if (typeof caid !== "string") {
    return {
      notFound: true,
    };
  }

  const customarmy = await prisma.customarmy.findUnique({
    where: { customarmy_id: +caid },
  });

  if (!customarmy) {
    return {
      notFound: true,
    };
  }

  const regiments = await prisma.regiments.findMany({
    where: { customarmy_id: +caid },
    include: {
      regimentmember: {
        include: {
          squads: {},
          units: {},
        },
      },
    },
  });

  const regimentMembers = await prisma.regimentmember.findMany({
    where: {
      regiments: {
        customarmy_id: +caid,
      },
    },
  });

  const squadIds = Array.from(
    new Set(regimentMembers.map((rm) => rm.squad_id))
  );
  const unitIds = Array.from(new Set(regimentMembers.map((rm) => rm.unit_id)));

  const squads = await prisma.squads.findMany({
    where: {
      squad_id: {
        in: squadIds,
      },
    },
  });

  const units = await prisma.units.findMany({
    where: {
      unit_id: {
        in: unitIds,
      },
    },
  });

  // console.log(regimentMembers);

  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const ownerCheck = await prisma.customarmy.findFirstOrThrow({
      where: { firebaseuser_id: token.uid, customarmy_id: +caid },
    });

    return {
      props: { customarmy, squads, units, regimentMembers, owner: true },
    };
  } catch (error) {
    return {
      props: { customarmy, squads, units, regimentMembers, owner: false },
    };
  }
};
