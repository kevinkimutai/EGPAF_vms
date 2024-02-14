import db from "@/lib/database/dbConnect";
import { auth } from "@clerk/nextjs";
import { Vehicle } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    //TODO:CHECK IF USER ISADMIN
    if (!userId) {
      return new NextResponse("Unauthorized,Please Login", { status: 401 });
    }

    const { name } = await req.json();

    const newProject = await db.project.create({
      data: {
        name,
      },
    });

    return NextResponse.json(newProject);
  } catch (error) {
    console.error("[CREATE PROJECT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const trips = await db.project.findMany({
      include: {
        locations: true,
        vehicles: true,
      },
    });

    return NextResponse.json(trips);
  } catch (error) {
    console.error("[GET ALL PROJECTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
