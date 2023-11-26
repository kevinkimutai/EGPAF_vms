import db from "../lib/database/dbConnect";

export async function getAllDrivers() {
  try {
    const drivers = await db.driver.findMany({
      include: {
        vehicle: true,
      },
    });

    return drivers;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
