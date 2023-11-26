import React from "react";
import { Button } from "../ui/button";

const DriverWrapper = () => {
  return (
    <>
      <Button variant={"outline"} className="mr-4">
        Add Driver
      </Button>
      <Button className="">Download Excel</Button>
    </>
  );
};

export default DriverWrapper;
