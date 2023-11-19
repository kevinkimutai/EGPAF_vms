import db from "@/lib/database/dbConnect";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { tripId: number } }
) {
  const { mileage } = await req.json();
  try {
    const trip = await db.trip.findUnique({
      where: {
        id: +params.tripId,
      },
      include: {
        vehicle: true,
        staff: true,
        startLocation: true,
        endLocation: true,
      },
    });

    //calculate kms covered
    const distanceCovered = mileage - trip!.vehicle?.mileage;

    //Update Vehicle Mileage
    const updatedVehicle = await db.vehicle.update({
      where: {
        id: trip?.vehicle.id,
      },
      data: {
        mileage,
      },
    });

    //updateTrip
    const updatedTrip = await db.trip.update({
      where: {
        id: +params.tripId,
      },
      data: {
        kilometersCovered: distanceCovered,
        endTime: new Date(Date.now()),
      },
    });

    return NextResponse.json(updatedTrip);
  } catch (error) {
    console.log("[GET ONE TRIP]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function DELETE(req: Request) {}
export async function GET(
  req: Request,
  { params }: { params: { tripId: number } }
) {
  try {
    const trip = await db.trip.findUnique({
      where: {
        id: +params.tripId,
      },
      include: {
        vehicle: true,
        staff: true,
        startLocation: true,
        endLocation: true,
      },
    });

    return NextResponse.json(trip);
  } catch (error) {
    console.log("[GET ONE TRIP]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
