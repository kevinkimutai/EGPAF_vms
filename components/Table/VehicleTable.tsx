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

export async function VehicleTable() {
  const [vehicles, setVehicles] = useState([]);

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
        {/* <TableBody>
          {vehicles?.map((vehicle: any) => (
            <TableRow key={vehicle.id}>
              <TableCell className=" ">{vehicle.name}</TableCell>
              <TableCell className=" ">{vehicle.make}</TableCell>
              <TableCell className=" ">{vehicle.model}</TableCell>
              <TableCell className=" ">{vehicle.project.name}</TableCell>
              <TableCell className=" ">
                {vehicle.driver.first_name} {vehicle.driver.last_name}
              </TableCell>
              <TableCell className=" ">{vehicle.mileage}</TableCell>
              <TableCell className=" ">{vehicle.number_plate}</TableCell>
              <TableCell className=" ">
                <div className="flex gap-4">
                  {" "}
                  <Button variant={"outline"}>
                    <Pencil1Icon />
                  </Button>
                  <Button>
                    <TrashIcon />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </div>
  );
}
