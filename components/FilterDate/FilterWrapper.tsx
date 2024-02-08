"use client";

import React from "react";
import { FilterDate } from "./FilterDate";
import { Button } from "../ui/button";

const FilterWrapper = () => {
  // Define the onchange function
  const onchange = (dateRange: any) => {
    console.log(dateRange);
    if (dateRange) {
      // Convert dateRange to URL search params format
      const params = new URLSearchParams();
      params.append("from", dateRange.from.toISOString());
      params.append("to", dateRange.to.toISOString());

      // Update the URL with the new search parameters
      window.history.pushState(null, "", `?${params.toString()}`);
    }
  };

  return (
    <div className="flex justify-end items-center mb-4">
      <FilterDate onChange={onchange} />
      <Button className="ml-4">Download Excel </Button>
    </div>
  );
};

export default FilterWrapper;
