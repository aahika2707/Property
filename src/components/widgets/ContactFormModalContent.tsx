"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "@/components/form/FormInput";
import OrangeButtonWidget from "@/components/widgets/OrangeButtonWidget";
import toast from "react-hot-toast";

const contactSchema = z.object({
  FirstName: z.string().min(1, "First name is required"),
  LastName: z.string().min(0, "Last name is required"),
  Email: z.string().email("Invalid email address"),
  Mobile: z.string().min(10, "Phone number must be at least 10 digits"),
  Message: z.string().min(0, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactFormModalContent() {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Mobile: "",
      Message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.FirstName + " " + data.LastName,
          email: data.Email,
          phone: data.Mobile,
          message: data.Message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully 🚀", { id: toastId });
        reset();
      } else {
        toast.error("Failed to send message 😕", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong ❌", { id: toastId });
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <FormInput name="FirstName" control={control} placeholder="First Name" label="Name" className="col-span-1" />
        <FormInput name="LastName" control={control} placeholder="Last Name" notRequired className="col-span-1 mt-6" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput name="Email" control={control} type="email" placeholder="Enter your email" label="Email" />
        <FormInput name="Mobile" control={control} type="tel" placeholder="Enter your phone number" label="Phone Number" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
          Message<span className="text-chart-1">*</span>
        </label>
        <textarea
          {...register("Message")}
          placeholder="Message"
          rows={6}
          className="flex w-full rounded-2xl border border-[#BDBDBD] bg-background px-4 py-3 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-chart-1/50 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        />
        {errors.Message && <p className="text-danger text-sm text-red-500">{errors.Message.message}</p>}
      </div>

      <OrangeButtonWidget content="Submit" type="submit" />
    </form>
  );
}
