import * as React from "react";

import ImageSrc from "../../public/images/landcruiser-hero.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Driver, Location, Project, Trip, Type, Vehicle } from "@prisma/client";
import { getKmsCoveredByVehicle } from "@/actions/getKmsCoveredByEachVehicle";

type ComponentProps = Vehicle & { type: Type } & { project: Project } & {
  driver: Driver;
} & { trips: Trip[] & { endLocation: Location } };

export function VehicleCard(props: ComponentProps) {
  return (
    <Card className="w-[250px] md:w-[300px]">
      <CardHeader>
        <CardTitle>{props.number_plate}</CardTitle>
        <CardDescription>{props.project.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center mb-2">
          <Image
            src={props.type.imageSrc}
            height={200}
            width={200}
            alt="egpaf_car"
            className="w-[10rem] object-contain"
          />
        </div>
        {/* Vehicle Contents */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm">Driver</p>
          <p className="text-sm font-semibold">
            {props.driver.first_name} {props.driver.last_name}
          </p>
        </div>
        {/*  */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm">Mileage</p>
          <p className="text-sm">{props.mileage}</p>
        </div>
        {/*  */}

        <div className="flex justify-between items-center mb-2">
          <p className="text-sm">Current Trip</p>

          <p className="text-sm font-semibold">
            {/* @ts-ignore */}
            {props.trips[0] ? props.trips[0].endLocation.facility : "NULL"}
          </p>
        </div>

        {/*  */}
        <div className="flex justify-between items-center">
          <p className="text-sm">Distance/ Today</p>
          <p>
            {props.trips[0]
              ? getKmsCoveredByVehicle(props.trips[0].vehicleId)
              : 0}
            KM
          </p>
        </div>
        {/*  */}
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
