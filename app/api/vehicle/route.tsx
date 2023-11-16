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

    const {
      name,
      make,
      model,
      year,
      typeId,
      projectId,
      mileage,
      number_plate,
      driverId,
    } = await req.json();

    const newVehicle = await db.vehicle.create({
      name,
      make,
      model,
      year,
      mileage,
      number_plate,
      type: {
        connect: {
          id: typeId,
        },
      },
      project: {
        connect: {
          id: projectId,
        },
      },
      driver: {
        connect: {
          id: driverId,
        },
      },
    });

    return NextResponse.json(newVehicle);
  } catch (error) {
    console.error("[CREATE VEHICLE]", error);
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

    const vehicles = await db.vehicle.findMany({
      include: { type: true, trips: true, driver: true, project: true },
    });

    return NextResponse.json(vehicles);
  } catch (error) {
    console.error("[GET ALL VEHICLES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
