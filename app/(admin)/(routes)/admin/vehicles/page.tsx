import { getVehicles } from "@/actions/getVehicles";
import { FilterDate } from "@/components/FilterDate/FilterDate";
import FilterWrapper from "@/components/FilterDate/FilterWrapper";
import { TripTable } from "@/components/Table/TripTable";
import { TripVehicleTable } from "@/components/Table/TripVehicleTable";
import { VehicleTable } from "@/components/Table/VehicleTable";
import { VehicleCard } from "@/components/Vehicle/VehicleCard";
import VehicleWrapper from "@/components/Wrapper/VehicleWrapper";

import React from "react";

const page = async () => {
  const vehicles = await getVehicles();
  return (
    <div className="ml-0 sm:ml-[20%] p-4 pt-[20vh] ">
      <h1 className="font-semibold text-emerald-700 text-xl mb-4">Vehicles</h1>
      <div className="flex justify-end items-center mb-4">
        <VehicleWrapper />
      </div>
      <div className="flex overflow-x-scroll no-scrollbar gap-8 mb-8">
        {vehicles.map((vehicle) => (
          <>
            {/* @ts-ignore */}
            <VehicleCard key={vehicle.id} {...vehicle} />
          </>
        ))}
      </div>
      {/* VEHICLE CRUD TABLE */}
     <VehicleTable /> 
    </div>
  );
};

export default page;
