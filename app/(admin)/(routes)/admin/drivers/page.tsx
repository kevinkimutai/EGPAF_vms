import { getAllDrivers } from "@/actions/getAllDrivers";
import { getVehicles } from "@/actions/getVehicles";
import { FilterDate } from "@/components/FilterDate/FilterDate";
import FilterWrapper from "@/components/FilterDate/FilterWrapper";
import { DriverTable } from "@/components/Table/DriverTable";
import { TripTable } from "@/components/Table/TripTable";
import { TripVehicleTable } from "@/components/Table/TripVehicleTable";
import { VehicleTable } from "@/components/Table/VehicleTable";
import { VehicleCard } from "@/components/Vehicle/VehicleCard";
import DriverWrapper from "@/components/Wrapper/DriverWrapper";
import VehicleWrapper from "@/components/Wrapper/VehicleFnWrapper";

import React from "react";

const page = async () => {
  const drivers = await getAllDrivers();
  return (
    <div className="ml-0 sm:ml-[20%] p-4 pt-[20vh] ">
      <h1 className="font-semibold text-emerald-700 text-xl mb-4">Drivers</h1>
      <div className="w-full flex items-center justify-end mb-4">
        <DriverWrapper />
      </div>

      <DriverTable drivers={drivers} />
    </div>
  );
};

export default page;
