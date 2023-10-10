import { NextResponse } from "next/server";
import prisma from "../../../prismaDb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;
  const hashPassword = await bcrypt.hash(password, 12);
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    return NextResponse.json(user);
  } catch {
    return NextResponse.error();
  }
}
