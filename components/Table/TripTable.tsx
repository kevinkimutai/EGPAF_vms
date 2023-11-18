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

type ComponentProps = {
  trips: any[];
};

export function TripTable({ trips }: ComponentProps) {
  return (
    <Table>
      <TableCaption>Your Todays Trips.</TableCaption>
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
            <TableCell>Incomplete</TableCell>
            <TableCell>{formatDate(trip.startTime)}</TableCell>
            <TableCell>{trip.startLocation.facility}</TableCell>
            <TableCell>{formatDate(trip.endTime)}</TableCell>
            <TableCell>{trip.endLocation.facility}</TableCell>
            <TableCell>{trip.vehicle.project.name}</TableCell>
            <TableCell>{formatDate(trip.createdAt)}</TableCell>{" "}
            <TableCell>
              <Button>Finish Trip</Button>
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
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
