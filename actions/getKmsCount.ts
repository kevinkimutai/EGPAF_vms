import db from "@/lib/database/dbConnect";

export const getKmsCoveredCount = async () => {
  const sumKms = await db.trip.aggregate({
    _sum: {
      kilometersCovered: true,
    },
  });

  return sumKms._sum.kilometersCovered || 0;
};
