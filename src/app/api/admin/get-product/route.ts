import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prismaDb";

export async function GET(req: NextRequest) {
  try {
    const product = await prisma.product.findMany();
    return NextResponse.json(product);
  } catch (error) {
    console.log("Error creating the product", error);
    return NextResponse.error();
  }
}
