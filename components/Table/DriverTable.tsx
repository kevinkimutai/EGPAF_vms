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
import { Driver } from "@prisma/client";

type ComponentProps = {
  drivers: Driver[];
};

export function DriverTable({ drivers }: ComponentProps) {
  return (
    <div className="w-full ">
      <Table>
        <TableCaption>All Drivers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>First/Name</TableHead>
            <TableHead>Last/Name</TableHead>
            <TableHead>Number_Plate</TableHead>

            <TableHead>Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drivers?.map((driver: any) => (
            <TableRow key={driver.id}>
              <TableCell className=" ">{driver.first_name}</TableCell>
              <TableCell className=" ">{driver.last_name}</TableCell>
              <TableCell className=" ">{driver.vehicle.number_plate}</TableCell>
              
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
