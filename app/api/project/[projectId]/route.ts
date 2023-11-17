import db from "@/lib/database/dbConnect";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {}
export async function DELETE(req: Request) {}
export async function GET(
  req: Request,
  { params }: { params: { projectId: number } }
) {
  try {
    const project = await db.project.findUnique({
      where: {
        id: params.projectId,
      },
      include: {
        locations: true,
        vehicles: true,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("[GET ONE PROJECT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
