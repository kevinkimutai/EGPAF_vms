import db from "@/lib/database/dbConnect";

export const getDriverCount = async () => {
  const driverCount = await db.driver.count();

  return driverCount;
};
