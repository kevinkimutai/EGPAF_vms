import { getTripsToday } from "@/actions/getTripsByDriver";
import Banner from "@/components/Banner/Banner";
import { TripTable } from "@/components/Table/TripTable";
import React from "react";

const page = async () => {
  const trips = await getTripsToday();
  console.log(trips);

  return (
    <main className="px-4 sm:px-8 py-4 pt-[20vh]">
      <Banner />
      {/* TABLE TODAYS TRIPS */}
      <h2 className="font-semibold text-xl mb-4">Today&apos;s Trips</h2>

      <TripTable />
    </main>
  );
};

export default page;
