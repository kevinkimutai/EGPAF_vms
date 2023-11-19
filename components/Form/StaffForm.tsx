"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Location, Users } from "@prisma/client";
import { useEffect, useState } from "react";

import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ComponentProps = {
  submitForm: (data: any) => void;
  onBack: () => void;
};

const StaffForm = ({ onBack, submitForm }: ComponentProps) => {
  const [selectCount, setSelectCount] = useState([0]);
  const [users, setUsers] = useState<Users[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [staff, setStaff] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();

      setUsers(data);
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  const selectCountHandler = () => {
    setSelectCount((prevState) => [
      ...prevState,
      prevState[prevState.length - 1] + 1,
    ]);
  };

  const submitHandler = () => {
    if (!users || !staff) return;

    let ids = staff.map((item) => item.id);
    let data = { staff: ids };
    submitForm(data);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="w-full p-4">
          {selectCount.map((input) => (
            <div className="flex flex-col space-y-1.5 mt-5" key={input}>
              <Label htmlFor="startLocation">Select Staff</Label>
              <Select
                onValueChange={(val: any) => {
                  setStaff((prevState) => [...prevState, val]);
                }}
              >
                <SelectTrigger id="startLocation">
                  <SelectValue placeholder="Select">
                    {staff[input]?.firstName ? (
                      <span>
                        {staff[input].firstName} {staff[input].lastName}
                      </span>
                    ) : (
                      <span style={{ color: "gray" }}>Select a value</span>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent position="popper">
                  {users?.map((user) => (
                    <>
                      <SelectItem value={user} id={user.id}>
                        {user.firstName} {user.lastName}
                      </SelectItem>
                    </>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}

          <div className="flex justify-center items-center my-4">
            <Button variant={"link"} onClick={selectCountHandler}>
              Add Another User
            </Button>
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

export default StaffForm;
