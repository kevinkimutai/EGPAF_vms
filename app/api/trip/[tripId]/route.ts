import db from "@/lib/database/dbConnect";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {}
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
