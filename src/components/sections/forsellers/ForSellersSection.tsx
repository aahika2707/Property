"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

import FormInput from "@/components/form/FormInput";
import ContainerWidget from "@/components/widgets/ContainerWidget";
import OrangeButtonWidget from "@/components/widgets/OrangeButtonWidget";
import FormSelectBox from "@/components/form/FormSelectBox";

const contactSchema = z.object({
  FirstName: z.string().min(1, "First name is required"),
  LastName: z.string().min(0, "Last name is required"),
  Location: z.string().min(0, "Location is required"),
  Preference: z.string().min(0, "Preference is required"),
  Property_type: z.string().optional(),
  Mobile: z.string().min(10, "Phone number must be at least 10 digits"),
  Message: z.string().min(0, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ForSellersSection() {
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
      Location: "",
      Preference: "",
      Property_type: '',
      Mobile: "",
      Message: "",
    },
  });

  const onSubmit = async (data: {
    FirstName: string;
    LastName: string;
    Mobile: string;
    Location: string;
    Preference: string;
    Property_type: string;
    Message: string;
  }) => {
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/seller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          FirstName: data.FirstName,
          LastName: data.LastName,
          Mobile: data.Mobile,
          Location: data.Location,
          Preference: data.Preference,
          Property_type: data.Property_type,
          Message: data.Message,
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
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <ContainerWidget>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                For Sellers
              </h1>
              <p className="text-2xl font-semibold">
               Start posting your property, it’s free
              </p>
              <p className="text-muted-foreground mt-4">
                Begin by telling us the few basic details about your property like your property type, location, name, phone number, 
              </p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  name="FirstName"
                  control={control}
                  placeholder="First Name"
                  label="Name"
                  className="col-span-1"
                />
                <FormInput
                  name="LastName"
                  control={control}
                  placeholder="Last Name"
                  notRequired
                  className="col-span-1 mt-6"
                />
              </div>

              <FormInput
                  name="Mobile"
                  control={control}
                  type="tel"
                  placeholder="Enter your phone number"
                  label="Phone Number"
                />
                <FormInput
                  name="Location"
                  control={control}
                  type="text"
                  placeholder="Enter your location"
                  label="Location"
                />
              <FormInput
                  name="Preference"
                  control={control}
                  placeholder="Enter your Budget Preference"
                  label="Budget Preference"
                />
                 <FormSelectBox
                    control={control}
                    name="Property_type"
                    options={[
                      { value: "Independent House / Villa", label: "Independent House / Villa" },
                      { value: "Farmhouse", label: "Farmhouse" },
                      { value: "Plot", label: "Plot" },
                      { value: "Land.", label: "Land" },
                    ]}
                    placeholder="Sell Property Type "
                    className="w-full"
                    label="Sell Property Type "
                  />

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground font-mulish mb-1"
                >
                  Description<span className="text-chart-1">*</span>
                </label>
                <textarea
                  {...register("Message")}
                  placeholder="Tell us more about your property (location, size, urgency, etc.)"
                  rows={6}
                  className="flex w-full rounded-2xl border border-[#BDBDBD] bg-background px-4 py-3 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-chart-1/50 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
                {errors.Message && (
                  <p className="text-danger text-sm text-red-500">
                    {errors.Message.message}
                  </p>
                )}
              </div>
              <OrangeButtonWidget content="Submit" type="submit" />
            </form>
          </div>
        </div>
      </ContainerWidget>
    </section>
  );
}

