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

  const searchText = req.body;

  const result = await prisma.units.findMany({
    where: {
      name: {
        search: searchText,
      },
    },
  });

  console.log(result);

  res.status(200).json({ data: result });
}
