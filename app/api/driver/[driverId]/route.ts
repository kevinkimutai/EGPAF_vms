import db from "@/lib/database/dbConnect";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {}
export async function DELETE(req: Request) {}
export async function GET(
  req: Request,
  { params }: { params: { driverId: number } }
) {
  try {
    const driver = await db.driver.findUnique({
      where: {
        id: params.driverId,
      },
      include: {
        vehicle: true,
      },
    });

    return NextResponse.json(driver);
  } catch (error) {
    console.log("[GET ONE DRIVER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
