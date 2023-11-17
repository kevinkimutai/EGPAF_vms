import db from "@/lib/database/dbConnect";
import { auth } from "@clerk/nextjs";
import { Vehicle } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // //only Admins can create a vehicle
    // //TODO:CHECK IF USER ISADMIN
    // if (!userId) {
    //   return new NextResponse("Unauthorized,Please Login", { status: 401 });
    // }

    const { first_name, last_name, userId } = await req.json();

    const newdriver = await db.driver.create({
      data: {
        first_name,
        last_name,
        userId,
      },
    });

    return NextResponse.json(newdriver);
  } catch (error) {
    console.error("[CREATE driver]", error);
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

    const drivers = await db.driver.findMany({
      include: { vehicle: true },
    });

    return NextResponse.json(drivers);
  } catch (error) {
    console.error("[GET ALL driverS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
