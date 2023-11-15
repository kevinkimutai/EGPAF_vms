import { TripTable } from "@/components/Table/TripTable";
import React from "react";

const page = () => {
  return (
    <main className="px-4 sm:px-8 py-4 pt-[20vh]">
      <div className="px-8 py-4 rounded-2xl bg-green-200 w-fit mb-8">
        Welcome Peter
      </div>
      {/* TABLE TODAYS TRIPS */}

      <h2 className="font-semibold text-xl mb-4">Today&apos;s Trips</h2>
      <TripTable />
    </main>
  );
};

export default page;
