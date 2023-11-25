import { getLocationById } from "@/actions/getLocationById";
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

type ComponentProps = {
  locations: any[];
};

export async function LocationTable({ locations }: ComponentProps) {
  async function enrichArrayWithFacilityNames(inputArray: any) {
    const newArray = [];

    for (const item of inputArray) {
      const facility = await getLocationById(item.endLocationId);
      newArray.push({
        _count: { endLocationId: item._count.endLocationId },
        facilityName: facility ? facility.facility : null,
      });
    }

    return newArray;
  }

  const facilities = await enrichArrayWithFacilityNames(locations);

  return (
    <div className="w-full md:w-1/2">
      <Table>
        <TableCaption>Facilities By Visit.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Location/Facility</TableHead>
            <TableHead className="text-right">Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facilities?.map((loc, indx) => (
            <TableRow key={indx}>
              <TableCell className="font-medium ">{loc.facilityName}</TableCell>
              <TableCell className="text-right font-semibold">
                {loc._count.endLocationId}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
