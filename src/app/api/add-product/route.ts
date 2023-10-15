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
    // const product = await prisma.product.create({
    //   data: {
    //     title,
    //     description,
    //     category,
    //     style,
    //     size,
    //     inventory,
    //     color,
    //     price,
    //     images,
    //     userId,
    //     store,
    //   },
    // });
    const array = color
      .split(",")
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
    console.log(array);
    return NextResponse.json(body);
  } catch (error) {
    console.log("Error creating the product", error);
    return NextResponse.error();
  }
}
