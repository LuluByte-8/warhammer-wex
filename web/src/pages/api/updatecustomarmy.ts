// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";

import type { ICustomArmy } from "../armybuilder/[caid]/customarmy";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    intialCustomArmyState,
    currentArmy,
    customArmyId,
  }: {
    intialCustomArmyState: ICustomArmy;
    currentArmy: ICustomArmy;
    customArmyId: number;
  } = JSON.parse(req.body);

  Object.entries(currentArmy).map(([key, regiment]) => {
    if (+key !== regiment.regiment_id) {
      return res.status(401).send("");
    }
  });

  const GetUnitIds = (army: ICustomArmy) => {
    const unitIds = Object.entries(army).map(([key, regiment]) => {
      const { squad_id, regiment_id, ...unitIds } = regiment;
      const flattenedUnitIds = {} as Record<
        number,
        { id: number; count: number; regiment_id: number; squad_id: number }
      >;
      Object.entries(unitIds).forEach(([id, count]) => {
        flattenedUnitIds[+id] = { id: +id, count, regiment_id, squad_id };
      });
      return flattenedUnitIds;
    });

    return unitIds;
  };

  const currentArmyUnits = GetUnitIds(currentArmy);
  const intialCustomArmyUnits = GetUnitIds(intialCustomArmyState);

  Object.entries(currentArmyUnits).map(([key, units]) => {
    Object.entries(units).map(async ([unitid, unitData]) => {
      console;
      const minMax = await prisma.units.findUnique({
        where: { unit_id: +unitid },
        select: { minunits: true, maxunits: true },
      });
      if (
        unitData.count > minMax!.maxunits ||
        unitData.count < minMax!.minunits
      ) {
        return res.status(401).send("");
      }
    });
  });

  Object.entries(intialCustomArmyUnits).map(([key, units]) => {
    const initialUnits = Object.entries(units);
    const currentUnits = Object.entries(currentArmyUnits[+key]);

    const missingExtra = initialUnits.map(([unitid, unitData], index) => {
      const totalSum = +currentUnits[index][1].count - unitData.count;

      switch (true) {
        case totalSum > 0:
          return {
            unitid,
            missing: totalSum,
            extra: 0,
            regiment_id: unitData.regiment_id,
            squad_id: unitData.squad_id,
          };
        case totalSum < 0:
          return {
            unitid,
            missing: 0,
            extra: Math.abs(totalSum),
            regiment_id: unitData.regiment_id,
            squad_id: unitData.squad_id,
          };
        default:
          return {
            unitid,
            missing: 0,
            extra: 0,
            regiment_id: unitData.regiment_id,
            squad_id: unitData.squad_id,
          };
      }
    });

    missingExtra.map(async (item) => {
      for (let index = 0; index < item.missing; index++) {
        await prisma.regimentmember.createMany({
          data: {
            regiment_id: item.regiment_id,
            unit_id: +item.unitid,
            squad_id: item.squad_id,
          },
        });
      }

      if (item.extra > 0) {
        const fetchRegimentMembers = await prisma.regimentmember.findMany({
          where: { regiment_id: item.regiment_id },
        });

        const unitsToRemove = fetchRegimentMembers
          .slice(fetchRegimentMembers.length - item.extra)
          .map((unit) => {
            return unit.regiment_member_id;
          });

        await prisma.regimentmember.deleteMany({
          where: {
            regiment_member_id: {
              in: unitsToRemove,
            },
          },
        });
      }
    });
  });

  return res.status(201).json({ message: "Passed" });
}

// for (let index = 0; index < item.extra; index++) {
//   // await prisma.$executeRaw`DELETE FROM warhammer.regimentmember WHERE unit_id IN (SELECT unit_id FROM warhammer.regimentmember )`;
// }
