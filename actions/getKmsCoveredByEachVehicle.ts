import db from "@/lib/database/dbConnect";

export const getKmsCoveredByVehicle = async (vehicleId: number) => {
  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to the beginning of the day

  // Get tomorrow's date
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const sumKmsByVehicle = await db.trip.aggregate({
    where: {
      startTime: {
        gte: today, // Start time is greater than or equal to today
        lt: tomorrow, // Start time is less than tomorrow
      },
      vehicleId,
    },

    _sum: {
      kilometersCovered: true,
    },
  });

  // Return an array of objects containing vehicleId and sum of kilometers covered
  return sumKmsByVehicle._sum.kilometersCovered || 0;
};
