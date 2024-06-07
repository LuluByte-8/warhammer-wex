// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import prisma from "@/lib/prisma";

const addRegimentSchema = z.object({
  squadId: z.number(),
  factionId: z.string(),
  customarmyId: z.number(),
});

interface IRegimentMember {
  regiment_id: number;
  unit_id: number;
  squad_id: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const validationResult = addRegimentSchema.safeParse(JSON.parse(req.body));
  if (!validationResult.success) {
    res.status(400).json(validationResult.error);
    return;
  }

  const { squadId, factionId, customarmyId } = validationResult.data;

  const customArmyFaction = await prisma.customarmy.findUnique({
    where: { customarmy_id: customarmyId },
    select: { customarmy_faction: true },
  });

  if (customArmyFaction?.customarmy_faction === factionId) {
    const regimentId = await prisma.regiments.create({
      data: { customarmy_id: customarmyId },
      select: { regiment_id: true },
    });

    const minUnits = await prisma.units.findMany({
      where: { squad_id: squadId },
      select: { minunits: true, unit_id: true },
    });

    const unitArray: IRegimentMember[] = [];
    minUnits.forEach((unit) => {
      const unit_id = unit.unit_id;
      const squad_id = squadId;
      for (let i = 0; i < unit.minunits; i++) {
        unitArray.push({ ...regimentId, unit_id, squad_id });
      }
    });

    await prisma.regimentmember.createMany({
      data: [...unitArray],
    });

    res.status(201);
  } else {
    res.status(201);
  }
}
