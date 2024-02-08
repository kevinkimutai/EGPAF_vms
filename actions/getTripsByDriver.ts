import db from "../lib/database/dbConnect";

export async function getTripsToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  try {
    const trips = await db.trip.findMany({
      where: {
        createdAt: {
          gte: today,
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
        },
      },
      include: {
        vehicle: {
          include: { driver: true, project: true },
        },
        startLocation: true,
        endLocation: true,
        staff: true,
      },
    });

    return trips;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getAllTripsByDriver() {
  try {
    const trips = await db.trip.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],

      include: {
        vehicle: {
          include: { driver: true, project: true },
        },
        startLocation: true,
        endLocation: true,
        staff: true,
      },
    });

    return trips;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
