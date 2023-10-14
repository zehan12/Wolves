import prisma from "@/app/prismaDb";
import { NextResponse } from "next/server";
export const dynamic = 'auto'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export async function GET(request: Request) {
  console.log("get request on filter pass")
  try {
    const searchParams = new URLSearchParams(request.url);
    console.log(searchParams)

    const categories = searchParams.getAll("categories[]");
    const colors = searchParams.getAll("colors[]");
    const sizes = searchParams.getAll("size[]");

    const minPrice = parseInt(searchParams.get("price[min]") || "0");
    const maxPrice = parseInt(searchParams.get("price[max]") || "100000");

    console.log(colors)
    const products = await prisma.product.findMany({
      where: {
        OR: [
          ...categories.map((category) => ({ style: { contains: category } })),
          ...sizes.map((size) => ({ size: { contains: size } })),
          ...colors.map((color) => ({ color: { contains: color } })),
          { price: { gte: minPrice, lte: maxPrice } },
        ],
      },
    });

    return NextResponse.json({ message: "API route is working", data: products });
  } catch (error) {
    console.error("Error selecting product", error);
    return NextResponse.error();
  }
}