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
  submitForm: (data: any) => void;
};

const formSchema = z.object({
  mileage: z.string().min(5, {
    message: "Mileage Must Be A Number.",
  }),
});

const FinishTripForm = ({ submitForm }: FormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mileage: "",
    },
  });

  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
        <FormField
          control={form.control}
          name="mileage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trip Reason/Description</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Mileage" {...field} />
              </FormControl>
              <FormDescription>Current Mileage After Trip</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4 mt-8">
          <Button type="submit">Submit</Button>
        </div>
        {/* 
        <Button type="submit">Next</Button> */}
      </form>
    </Form>
  );
};

export default FinishTripForm;
