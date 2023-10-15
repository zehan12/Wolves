import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prismaDb";

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.log("Error creating the product", error);
    return NextResponse.error();
  }
}
