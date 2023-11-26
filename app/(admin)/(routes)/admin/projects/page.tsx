import { getAllDrivers } from "@/actions/getAllDrivers";
import { getAllProjects } from "@/actions/getAllProjects";
import { getVehicles } from "@/actions/getVehicles";
import { FilterDate } from "@/components/FilterDate/FilterDate";
import FilterWrapper from "@/components/FilterDate/FilterWrapper";
import ProjectPage from "@/components/Page/ProjectPage";
import { DriverTable } from "@/components/Table/DriverTable";
import { ProjectTable } from "@/components/Table/ProjectTable";
import { TripTable } from "@/components/Table/TripTable";
import { TripVehicleTable } from "@/components/Table/TripVehicleTable";
import { VehicleTable } from "@/components/Table/VehicleTable";
import { VehicleCard } from "@/components/Vehicle/VehicleCard";
import DriverWrapper from "@/components/Wrapper/DriverWrapper";
import ProjectWrapper from "@/components/Wrapper/ProjectWrapper";
import VehicleWrapper from "@/components/Wrapper/VehicleWrapper";

import React from "react";

const page = async () => {
  const projects = await getAllProjects();

  return <ProjectPage projects={projects} />;
};

export default page;
