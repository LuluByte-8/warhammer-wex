// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import prisma from "@/lib/prisma";

const addCustomArmySchema = z.object({
  username: z.string(),
  firebase_id: z.string(),
  armyName: z.string(),
  armyDesc: z.string(),
  armyFaction: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const validationResult = addCustomArmySchema.safeParse(JSON.parse(req.body));
  if (!validationResult.success) {
    res.status(400).json(validationResult.error);
    return;
  }

  const { username, firebase_id, armyName, armyDesc, armyFaction } =
    validationResult.data;

  const customarmy = await prisma.customarmy.create({
    data: {
      firebaseuser_id: firebase_id,
      customarmy_faction: armyFaction,
      username: username,
      description: armyDesc,
      customarmy_name: armyName,
    },
  });

  res.status(201).json({ customarmy_id: customarmy.customarmy_id });
}
