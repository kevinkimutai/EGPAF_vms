//@ts-nocheck
"use client";

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
import { Driver, Project, Trip, Type, Users, Vehicle } from "@prisma/client";
import { Button } from "../ui/button";
import { formatDate } from "../../lib/formatDate/formatDate";
import { getTimeFromTimestamp } from "../../lib/formatDate/formatTime";
import useTripPatchModal from "../../hooks/useTripPatchModal";
import { useEffect, useState } from "react";
import TripPatchModal from "../Modal/TripPatchModal";

type ComponentProps = {
  vehicles: Vehicle & { type: Type } & { project: Project } & {
    driver: Driver;
  } & {
      trips: Trip & { endLocation: Location } & { startLocation: Location }[];
    }[];
};

export function TripVehicleTable({ vehicles }: ComponentProps) {
  const [index, setIndex] = useState(0);
  const [trips, setTrips] = useState(vehicles[index].trips);

  const [totalKmCovered, setKmCovered] = useState(0);

  useEffect(() => {
    function calculateSumOfKilometersCovered(tripsArray) {
      const total = tripsArray.reduce((sum, trip) => {
        // Check if the trip has kilometersCovered property and it is not null
        if (trip.kilometersCovered !== null) {
          return sum + trip.kilometersCovered;
        }
        return sum;
      }, 0);

      setKmCovered(total);
    }

    calculateSumOfKilometersCovered(trips);
  }, [trips]);

  return (
    <>
      <div className="flex gap-4 justify-end items-center">
        {vehicles.map((vehicle, indx) => (
          <p
            className={`px-4 py-2 mb-8 text-sm cursor-pointer rounded-2xl text-center flex justify-center items-center ${
              indx === index
                ? "bg-emerald-700 text-white shadow-md"
                : "bg-emerald-100"
            }`}
            key={vehicle.id}
            onClick={() => setIndex(indx)}
          >
            {vehicle.number_plate}
          </p>
        ))}
      </div>

      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id.</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start_Time</TableHead>
            <TableHead>Start_Location</TableHead>
            <TableHead>End_Time</TableHead>
            <TableHead>End_Location</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Staff</TableHead>
            <TableHead className="text-right">Kms</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trips.map((trip) => (
            <TableRow key={trip?.id}>
              <TableCell className="font-medium">{trip.id}</TableCell>
              <TableCell>
                {!trip.endTime ? (
                  <p className="px-4 py-2 rounded-2xl bg-sky-200 font-semibold">
                    Enroute
                  </p>
                ) : (
                  <p className="px-4 py-2 rounded-2xl bg-emerald-400">
                    Completed
                  </p>
                )}
              </TableCell>
              <TableCell>{getTimeFromTimestamp(trip.startTime)}</TableCell>
              <TableCell className="font-semibold">
                {trip.startLocation.facility}
              </TableCell>
              <TableCell>{getTimeFromTimestamp(trip.endTime)}</TableCell>
              <TableCell className="font-semibold">
                {trip.endLocation.facility}
              </TableCell>
              <TableCell>{trip.vehicle.project.name}</TableCell>
              <TableCell>{formatDate(trip.createdAt)}</TableCell>{" "}
              <TableCell>
                <p className="font-semibold">Completed</p>
              </TableCell>
              <TableCell className="text-right">
                {trip.kilometersCovered}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right font-semibold">
              {totalKmCovered} KM
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
