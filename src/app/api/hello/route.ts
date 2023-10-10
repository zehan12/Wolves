import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    return NextResponse.json("hello from backend");
  } catch {
    return NextResponse.error();
  }
}
