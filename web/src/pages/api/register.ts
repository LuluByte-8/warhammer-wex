// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { firebaseAdmin } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

const registrationSchema = z.object({
  username: z.string().min(8).max(30),
  email: z.string().min(1).email(),
  password: z.string().min(8).max(128),
});

type Data = z.infer<typeof registrationSchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const validationResult = registrationSchema.safeParse(JSON.parse(req.body));
  if (!validationResult.success) {
    res.status(400).json(validationResult.error);
    return;
  }

  const { username, email, password } = validationResult.data;
  const auth = firebaseAdmin.auth();
  const user = await auth.createUser({ email, password });

  await prisma.userprofile.create({
    data: { username: username, firebase_id: user.uid },
  });

  const token = await auth.createCustomToken(user.uid);

  res.status(200).json({ token });
}
