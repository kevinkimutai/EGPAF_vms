import db from "@/lib/database/dbConnect";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {}
export async function DELETE(req: Request) {}
export async function GET(
  req: Request,
  { params }: { params: { vehicleId: number } }
) {
  try {
    const course = await db.vehicle.findUnique({
      where: {
        id: params.vehicleId,
      },
      include: { type: true, trips: true, driver: true, project: true },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[GET ONE VEHICLE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
