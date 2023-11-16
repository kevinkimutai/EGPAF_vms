import OverviewCard from "@/components/Overview/OverviewCard";
import { TripTable } from "@/components/Table/TripTable";
import UserCard from "@/components/Users/UserCard";
import { VehicleCard } from "@/components/Vehicle/VehicleCard";
import React from "react";

const page = () => {
  return (
    <div className="ml-[20%] p-4 pt-[10%]">
      <h1 className="font-semibold text-emerald-700 text-xl mb-4">Overview</h1>
      {/* VEHICLE PER PROJECT  TOTAL/STATUS*/}

      <div className="grid grid-cols-4 grid-rows-1 gap-3 mb-8">
        <OverviewCard type="vehicle" />
        <OverviewCard type="program" />
        <OverviewCard type="driver" />
        <OverviewCard type="distance" />
      </div>

      {/* TRIPS THIS WEEK EACH CAR */}

      <h2 className="font-semibold text-emerald-700 text-lg mb-4">Vehicles</h2>
      <div className="flex flex-wrap gap-8 mb-8">
        <VehicleCard />
        <VehicleCard />
      </div>

      {/* All TRIPS */}
      <div className="mb-8">
        <h2 className="font-semibold text-emerald-700 text-lg mb-2">Trips</h2>
        <TripTable />
      </div>

      {/* MOST VISITED lOCATIONS THIS MONTH */}
      <div className="mb-8">
        <h2 className="font-semibold text-emerald-700 text-lg mb-2">
          Facilities By Visit
        </h2>
        <TripTable />
      </div>

      {/* MOST VISITING USER */}
      <div className="mb-8">
        <h2 className="font-semibold text-emerald-700 text-lg mb-2">
          Staff By Visit
        </h2>
        <p className="text-sm text-slate-500 mb-4">
          Staff Who Have Visited Most Facilities This Week.
        </p>

        <div className="grid grid-cols-4 grid-rows-1 gap-4 mb-8">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>

        <TripTable />
      </div>
    </div>
  );
};

export default page;