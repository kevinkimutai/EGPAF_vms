import db from "@/lib/database/dbConnect";
import { auth } from "@clerk/nextjs";
import { Vehicle } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    //only Admins can create a vehicle
    //TODO:CHECK IF USER ISADMIN
    if (!userId) {
      return new NextResponse("Unauthorized,Please Login", { status: 401 });
    }

    const { name, imageSrc } = await req.json();

    const newType = await db.type.create({
      data: {
        name,
        imageSrc,
      },
    });

    return NextResponse.json(newType);
  } catch (error) {
    console.error("[CREATE type]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    //only Admins can create a vehicle
    //TODO:CHECK IF USER ISADMIN
    if (!userId) {
      return new NextResponse("Unauthorized,Please Login", { status: 401 });
    }

    const types = await db.type.findMany({
      include: { vehicles: true },
    });

    return NextResponse.json(types);
  } catch (error) {
    console.error("[GET ALL typeS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
