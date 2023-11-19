import db from "@/lib/database/dbConnect";
import { auth } from "@clerk/nextjs";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const users = await db.users.findMany({});

    return NextResponse.json(users);
  } catch (error) {
    console.error("[GET ALL USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
