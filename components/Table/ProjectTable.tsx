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
import { Driver, Project } from "@prisma/client";

type ComponentProps = {
  projects: Project[];
};

export function ProjectTable({ projects }: ComponentProps) {
  return (
    <div className="w-3/4">
      <Table>
        <TableCaption>All Projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Vehicles</TableHead>

            <TableHead>Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects?.map((proj: any) => (
            <TableRow key={proj.id}>
              <TableCell className=" ">{proj.name}</TableCell>
              <TableCell className=" flex flex-col justify-center items-center">
                {proj.vehicles.map((veh: any) => (
                  <div key={veh.id}>{veh.number_plate}</div>
                ))}
              </TableCell>

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
