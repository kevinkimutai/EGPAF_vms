"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Driver, Location, Project, Type, VehicleType } from "@prisma/client";
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

const VehicleProjectForm = ({ onBack, submitForm }: ComponentProps) => {
  const [project, setProjects] = useState<Project[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [startProject, setStartProject] = useState<Project>();

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const res = await fetch("/api/project");
      const data = await res.json();

      setProjects(data);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  const submitHandler = () => {
    if (!startProject) return;

    let data = { projectId: startProject.id };

    submitForm(data);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="w-full p-4">
          <div className="flex flex-col space-y-1.5 mt-5">
            <Label htmlFor="startLocation">Choose Project</Label>
            <Select
              onValueChange={(val: any) => {
                setStartProject(val);
              }}
            >
              <SelectTrigger id="startLocation">
                <SelectValue placeholder="Select">
                  {startProject ? (
                    <span>{startProject.name}</span>
                  ) : (
                    <span style={{ color: "gray" }}>Select a type</span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                {project?.map((veh) => (
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

export default VehicleProjectForm;
