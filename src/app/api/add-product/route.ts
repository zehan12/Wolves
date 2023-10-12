import { NextRequest, NextResponse } from "next/server";
import prisma from "../../prismaDb";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    title,
    description,
    category,
    style,
    size,
    inventory,
    color,
    price,
    images,
    userId,
    store,
  } = body;
  try {
    const product = await prisma.product.create({
      data: {
        title,
        description,
        category,
        style,
        size,
        inventory,
        color,
        price,
        images,
        userId,
        store,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("Error creating the product", error);
    return NextResponse.error();
  }
}
