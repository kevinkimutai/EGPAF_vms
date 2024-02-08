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
import { Trip, Users, Vehicle } from "@prisma/client";
import { Button } from "../ui/button";
import { formatDate } from "../../lib/formatDate/formatDate";
import { getTimeFromTimestamp } from "../../lib/formatDate/formatTime";
import useTripPatchModal from "../../hooks/useTripPatchModal";
import { useEffect, useState } from "react";
import TripPatchModal from "../Modal/TripPatchModal";

type ComponentProps = {
  trips: any[];
};

export function TripTable({ trips }: ComponentProps) {
  const { isOpen, onOpen, onClose } = useTripPatchModal();
  const [tripId, setTripId] = useState<number>();

  const [totalKmCovered, setKmCovered] = useState(0);

  useEffect(() => {
    function calculateSumOfKilometersCovered(tripsArray: any[]) {
      const total = tripsArray.reduce((sum: any, trip: any) => {
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
      <Table>
        <TableCaption>Your Trips.</TableCaption>
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
            <TableHead>Edit/Complete</TableHead>
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
                {!trip.endTime ? (
                  <Button
                    onClick={() => {
                      setTripId(trip?.id);
                      onOpen();
                    }}
                  >
                    Finish Trip
                  </Button>
                ) : (
                  <p className="font-semibold">Completed</p>
                )}
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
              Km {totalKmCovered}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {isOpen && (
        <TripPatchModal isOpen={isOpen} onClose={onClose} tripId={tripId} />
      )}
    </>
  );
}
