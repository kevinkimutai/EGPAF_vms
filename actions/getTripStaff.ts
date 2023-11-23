import db from "@/lib/database/dbConnect";

export const getStaffTrip = async () => {
  //   const groupUsers = await db.trip.groupBy({
  //     by: [""],
  //     _count: {
  //       id: true, // Assuming you want to count the number of trips per staff member
  //     },
  //     orderBy: {
  //       _count: {
  //         id: "desc", // Change 'id' to the actual primary key of your Trip model
  //       },
  //     },
  //   });

  const trips = await db.trip.findMany({
    include: {
      staff: true,
    },
  });

  //   const staffGroupedById = trips.reduce((acc: any, trip) => {
  //     trip.staff.forEach((staffMember) => {
  //       const staffId = staffMember.id;

  //       if (!acc[staffId]) {
  //         acc[staffId] = [];
  //       }

  //       acc[staffId].push(staffMember);
  //     });

  //     return acc;
  //   }, {});

  const staffGroupedById = trips.reduce((acc: any, trip) => {
    trip.staff.forEach((staffMember) => {
      const staffId = staffMember.id;

      if (!acc[staffId]) {
        acc[staffId] = {
          count: 1,
          members: [staffMember],
        };
      } else {
        acc[staffId].count += 1;
        acc[staffId].members.push(staffMember);
      }
    });

    return acc;
  }, {});

  console.log(staffGroupedById);

  return staffGroupedById;
};
