import { getVehicles } from "@/actions/getVehicles";
import { FilterDate } from "@/components/FilterDate/FilterDate";
import FilterWrapper from "@/components/FilterDate/FilterWrapper";
import { TripTable } from "@/components/Table/TripTable";
import { TripVehicleTable } from "@/components/Table/TripVehicleTable";
import { VehicleTable } from "@/components/Table/VehicleTable";
import { VehicleCard } from "@/components/Vehicle/VehicleCard";
import VehicleWrapper from "@/components/Wrapper/VehicleWrapper";
import { Vehicle } from "@prisma/client";

import React from "react";

const page = async () => {
  const vehicles = await getVehicles();
  return <VehicleWrapper vehicles={vehicles} />;
};

export default page;
