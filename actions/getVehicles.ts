import db from "../lib/database/dbConnect";

export async function getVehicles(from?: any, to?: any) {
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
      where: {
        trips: {
          every: {
            startTime: {
              // If 'from' is provided, filter trips with startTime greater than or equal to 'from'
              gte: from ? new Date(from) : undefined,
              // If 'to' is provided, filter trips with startTime less than or equal to 'to'
              lte: to ? new Date(to) : undefined,
            },
          },
          // Filter trips based on start date
        },
      },
    });

    return vehicles;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
