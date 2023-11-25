import db from "../lib/database/dbConnect";

export async function getVehicles() {
  try {
    const vehicles = await db.vehicle.findMany({
      include: {
        trips: {
          include: {
            staff: true,
            startLocation: true,
            endLocation: true,
            vehicle: { include: { project: true } },
          },
          orderBy: { createdAt: "desc" },
          take: 10,
        },
        driver: true,
        type: true,
        project: true,
      },
    });

    return vehicles;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
