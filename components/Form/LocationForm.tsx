"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Location } from "@prisma/client";
import { useEffect, useState } from "react";

import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Console } from "console";

type ComponentProps = {
  submitForm: (data: any) => void;
};

const LocationForm = ({ submitForm }: ComponentProps) => {
  const [location, setLocation] = useState<Location[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [startLocation, setStartLocation] = useState<Location>();
  const [endLocation, setEndLocation] = useState<Location>();

  useEffect(() => {
    const fetchLocations = async () => {
      setIsLoading(true);
      const res = await fetch("/api/location");
      const data = await res.json();

      setLocation(data);
      setIsLoading(false);
    };

    fetchLocations();
  }, []);

  const submitHandler = () => {
    if (!location || !startLocation || !endLocation) return;

    let data = {
      startLocationId: startLocation.id,
      endLocationId: endLocation.id,
    };
    submitForm(data);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="w-full p-4">
          <div className="flex flex-col space-y-1.5 mt-5">
            <Label htmlFor="startLocation">Choose Start Location</Label>
            <Select
              onValueChange={(val: any) => {
                setStartLocation(val);
              }}
            >
              <SelectTrigger id="startLocation">
                <SelectValue placeholder="Select">
                  {startLocation ? (
                    <span>{startLocation?.facility}</span>
                  ) : (
                    <span style={{ color: "gray" }}>Select a value</span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                {location?.map((loc) => (
                  <>
                    <SelectItem value={loc} id={loc.id}>
                      {loc.facility}
                    </SelectItem>
                  </>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-1.5 mt-5">
            <Label htmlFor="endLocation">Choose End Location</Label>
            <Select
              onValueChange={(val: any) => {
                setEndLocation(val);
              }}
            >
              <SelectTrigger id="endLocation">
                <SelectValue placeholder="Select">
                  {endLocation ? (
                    <span>{endLocation.facility}</span>
                  ) : (
                    <span style={{ color: "gray" }}>Select a value</span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                {location?.map((loc) => (
                  <>
                    <SelectItem value={loc} id={loc.id}>
                      {loc.facility}
                    </SelectItem>
                  </>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <Button onClick={submitHandler}>Next</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationForm;
