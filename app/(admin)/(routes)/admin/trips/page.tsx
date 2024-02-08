import { getVehicles } from "@/actions/getVehicles";
import { FilterDate } from "@/components/FilterDate/FilterDate";
import FilterWrapper from "@/components/FilterDate/FilterWrapper";
import { TripTable } from "@/components/Table/TripTable";
import { TripVehicleTable } from "@/components/Table/TripVehicleTable";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  params: {};
  searchParams: any;
};

const page = async (props: Props) => {
  let vehicles;
  console.log(props.searchParams);
  if (props.searchParams.from && props.searchParams.to) {
    vehicles = await getVehicles(
      props.searchParams.from,
      props.searchParams.to
    );
  } else {
    vehicles = await getVehicles();
  }

  return (
    <div className="ml-0 sm:ml-[20%] p-4 pt-[20vh] ">
      <h1 className="font-semibold text-emerald-700 text-xl mb-4">Trips</h1>
      <FilterWrapper />
      {/* @ts-ignore */}
      <TripVehicleTable vehicles={vehicles} />
    </div>
  );
};

export default page;
