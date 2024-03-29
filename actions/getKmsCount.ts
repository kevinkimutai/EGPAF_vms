import db from "@/lib/database/dbConnect";

export const getKmsCoveredCount = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to the beginning of the day

  // Get tomorrow's date
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const sumKms = await db.trip.aggregate({
    where: {
      startTime: {
        gte: today, // Start time is greater than or equal to today
        lt: tomorrow, // Start time is less than tomorrow
      },
    },
    _sum: {
      kilometersCovered: true,
    },
  });

  return sumKms._sum.kilometersCovered || 0;
};
