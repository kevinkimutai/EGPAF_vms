import db from "@/lib/database/dbConnect";

export const getLocationTrip = async () => {
  const groupUsers = await db.trip.groupBy({
    by: ["endLocationId"],
    _count: {
      endLocationId: true,
    },
    orderBy: {
      _count: {
        endLocationId: "desc",
      },
    },
  });

  return groupUsers;
};
