"use client";

import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";

export function VehicleTable() {
  const [vehicles, setVehicles] = useState([]);

  console.log("VH", vehicles);

  useEffect(() => {
    const getAllVehicles = async () => {
      const res = await fetch("/api/vehicle");
      const data = await res.json();

      setVehicles(data);
    };
    getAllVehicles();
  }, []);

  return (
    <div className="w-full ">
      <Table>
        <TableCaption>All Vehicles.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Make</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Yr</TableHead>

            <TableHead>Project</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Mileage</TableHead>
            <TableHead>Number/Plate</TableHead>
            <TableHead>Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles?.map((vehicle: any) => (
            <TableRow key={vehicle.id}>
              <TableCell className=" ">{vehicle.name}</TableCell>
              <TableCell className=" ">{vehicle.make}</TableCell>
              <TableCell className=" ">{vehicle.model}</TableCell>
              <TableCell className=" ">{vehicle.year}</TableCell>
              <TableCell className=" ">{vehicle.project.name}</TableCell>
              <TableCell className=" ">
                {vehicle.driver.first_name} {vehicle.driver.last_name}
              </TableCell>
              <TableCell className=" ">{vehicle.mileage}</TableCell>
              <TableCell className=" ">{vehicle.number_plate}</TableCell>
              <TableCell className=" ">
                <div className="flex gap-4">
                  {" "}
                  <p className="p-2 bg-black rounded-md cursor-pointer ">
                    <Pencil1Icon className="text-white" />
                  </p>
                  <p className="p-2 bg-red-700 rounded-md cursor-pointer">
                    <TrashIcon className="text-white" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
