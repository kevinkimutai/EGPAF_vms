import db from "../lib/database/dbConnect";

export async function getTripsToday() {
  try {
    const trips = await db.trip.findMany({
      include: {
        vehicle: {
          include: { driver: true },
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
