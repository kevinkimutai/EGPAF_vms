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
  name: z.string().min(5, {
    message: "name must be at least 5 characters.",
  }),
});

const ProjectForm = ({ onBack, submitForm }: FormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="Project Name" {...field} />
              </FormControl>
              <FormDescription>Create New project</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4 mt-8">
          <Button onClick={onBack} variant={"secondary"}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
        {/* 
        <Button type="submit">Next</Button> */}
      </form>
    </Form>
  );
};

export default ProjectForm;
