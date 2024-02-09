"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Driver, Location, Type, VehicleType } from "@prisma/client";
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
import Image from "next/image";

type ComponentProps = {
  onBack: () => void;
  submitForm: (data: any) => void;
};

const VehicleDriverForm = ({ onBack, submitForm }: ComponentProps) => {
  const [drivers, setDrivers] = useState<Driver[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [startVehicle, setStartVehicle] = useState<Driver>();

  useEffect(() => {
    const fetchDrivers = async () => {
      setIsLoading(true);
      const res = await fetch("/api/driver");
      const data = await res.json();

      setDrivers(data);
      setIsLoading(false);
    };

    fetchDrivers();
  }, []);

  const submitHandler = () => {
    if (!startVehicle) return;

    submitForm(startVehicle.id);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="w-full p-4">
          <div className="flex flex-col space-y-1.5 mt-5">
            <Label htmlFor="startLocation">Choose Vehicle Type</Label>
            <Select
              onValueChange={(val: any) => {
                setStartVehicle(val);
              }}
            >
              <SelectTrigger id="startLocation">
                <SelectValue placeholder="Select">
                  {startVehicle ? (
                    <span>
                      {startVehicle.first_name} {startVehicle.last_name}
                    </span>
                  ) : (
                    <span style={{ color: "gray" }}>Select a type</span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                {drivers?.map((veh) => (
                  <>
                    <SelectItem value={veh} id={veh.id}>
                      {veh.first_name} {veh.last_name}
                    </SelectItem>
                  </>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button onClick={onBack} variant={"secondary"}>
              Back
            </Button>
            <Button onClick={submitHandler}>Next</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleDriverForm;
