import db from "@/lib/database/dbConnect";
import { auth } from "@clerk/nextjs";
import { Vehicle } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    //only Drivers can create a Trip
    // //TODO:CHECK IF USER ISADMIN
    // if (!userId) {
    //   return new NextResponse("Unauthorized,Please Login", { status: 401 });
    // }

    const { startLocationId, endLocationId, vehicleId, staff, reasonForTrip } =
      await req.json();

    const newTrip = await db.trip.create({
      //@ts-ignore
      data: {
        reasonForTrip,
        startLocation: {
          connect: {
            id: startLocationId,
          },
        },
        endLocation: {
          connect: {
            id: endLocationId,
          },
        },
        vehicle: {
          connect: {
            id: vehicleId,
          },
        },
        // Connect staff members
        staff: {
          connect: staff.map((usersId: number) => ({ id: usersId })),
        },
      },
    });

    return NextResponse.json(newTrip);
  } catch (error) {
    console.error("[CREATE TRIP]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const trips = await db.trip.findMany({
      include: {
        vehicle: true,
        staff: true,
        startLocation: true,
        endLocation: true,
      },
    });

    return NextResponse.json(trips);
  } catch (error) {
    console.error("[GET ALL TRIPS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
