"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Location, Type, VehicleType } from "@prisma/client";
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

const VehicleTypeForm = ({ onBack, submitForm }: ComponentProps) => {
  const [vehicleType, setVehicleTypes] = useState<Type[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [startVehicle, setStartVehicle] = useState<Type>();

  useEffect(() => {
    const fetchTypes = async () => {
      setIsLoading(true);
      const res = await fetch("/api/type");
      const data = await res.json();

      setVehicleTypes(data);
      setIsLoading(false);
    };

    fetchTypes();
  }, []);

  const submitHandler = () => {
    if (!startVehicle) return;

    let data = { typeId: startVehicle.id };

    submitForm(data);
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
                    startVehicle.name
                  ) : (
                    <span style={{ color: "gray" }}>Select a type</span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                {vehicleType?.map((veh) => (
                  <>
                    <SelectItem value={veh} id={veh.id}>
                      {veh.name}
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

export default VehicleTypeForm;
