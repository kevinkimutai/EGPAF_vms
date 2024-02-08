import React from "react";
import { Button } from "../ui/button";

type ComponentProps = {
  open: () => void;
};

const VehicleFnWrapper = ({ open }: ComponentProps) => {
  return (
    <>
      <Button variant={"outline"} className="mr-4" onClick={open}>
        Add Vehicle
      </Button>
      <Button className="">Download Excel</Button>
    </>
  );
};

export default VehicleFnWrapper;
