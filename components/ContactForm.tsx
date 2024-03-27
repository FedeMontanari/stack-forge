"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Debe contener al menos 2 caracteres." })
    .max(50, { message: "Debe contener no más de 50 caracteres." }),
  phone: z.string().min(5).max(50),
  email: z
    .string()
    .min(5)
    .max(50)
    .email({ message: "Este campo tiene que ser un email." }),
  inquery: z.string().min(5).max(500),
});

function CustomLabel({ content }: { content: string }) {
  return (
    <FormLabel className="relative inset-x-1 inset-y-4">
      <Badge variant="secondary" className="scale-75 font-light text-black">
        {content}
      </Badge>
    </FormLabel>
  );
}

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      inquery: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <CustomLabel content="Nombre" />
              <FormControl>
                <Input type="text" placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <CustomLabel content="Telefono" />
              <FormControl>
                <Input type="text" placeholder="Telefono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <CustomLabel content="Email" />
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="inquery"
          render={({ field }) => (
            <FormItem className="w-full">
              <CustomLabel content="Consulta" />
              <FormControl>
                <Textarea placeholder="Su Consulta" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-3 lg:self-end">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
