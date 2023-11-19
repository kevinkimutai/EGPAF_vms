import db from "@/lib/database/dbConnect";
import { auth } from "@clerk/nextjs";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const locations = await db.location.findMany({});

    return NextResponse.json(locations);
  } catch (error) {
    console.error("[GET ALL LOCATIONS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
