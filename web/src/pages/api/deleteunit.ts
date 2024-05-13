// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const unitId = req.body;

  const deleteUnit = await prisma.unitsinarmy.delete({
    where: { unitsinarmyid: +unitId },
  });

  res.status(200);
}
