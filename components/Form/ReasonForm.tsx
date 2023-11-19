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
  onBack: () => void;
};

const formSchema = z.object({
  reasonForTrip: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
});

const ReasonForm = ({ onBack, submitForm }: FormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reasonForTrip: "",
    },
  });

  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
        <FormField
          control={form.control}
          name="reasonForTrip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trip Reason/Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Reason For Trip" {...field} />
              </FormControl>
              <FormDescription>Reason For Trip</FormDescription>
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

export default ReasonForm;
