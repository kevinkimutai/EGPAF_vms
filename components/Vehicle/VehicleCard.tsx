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

export function VehicleCard() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>KCQ 030W</CardTitle>
        <CardDescription>Unitaid CCA-Project.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center">
          <Image
            src={ImageSrc}
            height={200}
            width={200}
            alt="egpaf_car"
            className="w-[10rem] object-contain"
          />
        </div>
        {/* Vehicle Contents */}
        <div className="flex justify-between items-center">
          <p className="text-sm">Driver</p>
          <p className="text-sm">Peter Ngethe</p>
        </div>
        {/*  */}
        <div className="flex justify-between items-center">
          <p className="text-sm">Mileage</p>
          <p className="text-sm">134700</p>
        </div>
        {/*  */}

        <div className="flex justify-between items-center">
          <p className="text-sm">Current Trip</p>
          <p className="text-sm">Kiandutu</p>
        </div>

        {/*  */}
        <div className="flex justify-between items-center">
          <p className="text-sm">Distance/ Today</p>
          <p>210 KM</p>
        </div>
        {/*  */}
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
