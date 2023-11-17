import db from "../lib/database/dbConnect";

export async function getTripsToday() {
  try {
    const trips = await db.trip.findMany({
      where: {
        AND: [
          {
            createdAt: {
              //@ts-ignore
              gte: new Date().setHours(0, 0, 0, 0), // Today's start timestamp
            },
          },
          {
            createdAt: {
              //@ts-ignore
              lt: new Date().setHours(23, 59, 59, 999), // Today's end timestamp
            },
          },
        ],
      },
    });

    return trips;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
