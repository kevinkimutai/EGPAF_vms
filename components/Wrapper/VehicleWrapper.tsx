import React from "react";
import { Button } from "../ui/button";

const VehicleWrapper = () => {
  return (
    <>
      <Button variant={"outline"} className="mr-4">
        Add Vehicle
      </Button>
      <Button className="">Download Excel</Button>
    </>
  );
};

export default VehicleWrapper;
