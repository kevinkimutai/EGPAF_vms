"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";

type FormProps = {
  onBack: () => void;
  submitForm: (data: any) => void;
};

const formSchema = z.object({
  plate: z
    .string()
    .min(7, {
      message: "plate must be at least 7 characters.",
    })
    .max(7, {
      message: "plate must be max least 7 characters.",
    }),
});

const VehicleNumberPlateForm = ({ onBack, submitForm }: FormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plate: "",
    },
  });

  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
        <FormField
          control={form.control}
          name="plate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number Plate</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4 mt-8">
          <Button onClick={onBack} variant={"secondary"}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </div>
        {/* 
        <Button type="submit">Next</Button> */}
      </form>
    </Form>
  );
};

export default VehicleNumberPlateForm;
