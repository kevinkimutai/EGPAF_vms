import db from "../lib/database/dbConnect";

export async function getLocationById(locationId: number) {
  try {
    const locations = await db.location.findUnique({
      where: {
        id: locationId,
      },
    });

    return locations;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
