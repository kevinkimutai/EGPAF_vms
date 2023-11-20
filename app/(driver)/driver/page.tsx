import { getTripsToday, getAllTripsByDriver } from "@/actions/getTripsByDriver";
import Banner from "@/components/Banner/Banner";
import { TripTable } from "@/components/Table/TripTable";
import HomeWrapper from "@/components/Wrapper/HomeWrapper";
import { currentUser } from "@clerk/nextjs";
import React from "react";
import { Toaster } from "react-hot-toast";

const page = async () => {
  const trips = await getTripsToday();
  const allTrips = await getAllTripsByDriver();
  const user = await currentUser();

  //filter driver
  const driverTrips = trips?.filter(
    (trip) => trip.vehicle.driver.userId === user?.id
  );

  //filter all driverTrips
  const allDriverTrips = allTrips?.filter(
    (trip) => trip.vehicle.driver.userId === user?.id
  );

  const vehicleId = allDriverTrips[0]?.vehicle?.id;

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <main className="px-4 sm:px-8 py-4 pt-[20vh]">
        <HomeWrapper trips={driverTrips} vehicleId={vehicleId} allTrips={allDriverTrips}/>
      </main>
    </>
  );
};

export default page;
