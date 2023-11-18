import { getTripsToday } from "@/actions/getTripsByDriver";
import Banner from "@/components/Banner/Banner";
import { TripTable } from "@/components/Table/TripTable";
import HomeWrapper from "@/components/Wrapper/HomeWrapper";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const page = async () => {
  const trips = await getTripsToday();
  const user = await currentUser();

  //filter driver
  const driverTrips = trips?.filter(
    (trip) => trip.vehicle.driver.userId === user?.id
  );
  console.log(user?.id);
  console.log(driverTrips);

  return (
    <main className="px-4 sm:px-8 py-4 pt-[20vh]">
      <HomeWrapper trips={driverTrips} />
    </main>
  );
};

export default page;
