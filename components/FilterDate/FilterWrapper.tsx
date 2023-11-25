import React from "react";
import { FilterDate } from "./FilterDate";
import { Button } from "../ui/button";

const FilterWrapper = () => {
  return (
    <div className="flex justify-end items-center mb-4">
      <FilterDate />
      <Button className="ml-4">Download Excel </Button>
    </div>
  );
};

export default FilterWrapper;
