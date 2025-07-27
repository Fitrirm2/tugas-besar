import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json({ message: "User registered successfully" });
}
