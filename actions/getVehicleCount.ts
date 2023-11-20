import db from "@/lib/database/dbConnect";

export const getVehicleCount = async () => {
  const vehicleCount = await db.vehicle.count();

  return vehicleCount;
};
