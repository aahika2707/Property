"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/components/form/FormInput";
import ContainerWidget from "@/components/widgets/ContainerWidget";
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

export default function ContactSection() {
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

  const onSubmit = async (data: {
    FirstName: string;
    LastName: string;
    Email: any;
    Mobile: any;
    Message: any;
  }) => {
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
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <ContainerWidget>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-lg">
                Let's build this{" "}
                <span className="text-[#67d34f]">connection</span>
              </p>
              <p className="text-muted-foreground mt-4">
                {/* Lorem ipsum dolor sit amet consectetur. Pulvinar nunc rhoncus
                nibh varius faucibus nisi vitae et. */}
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#67d34f]/10">
                  <Phone className="w-5 h-5 text-[#67d34f]" />
                </div>
                <div>
                  <p className="text-foreground font-medium">+91 90473 73373</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#67d34f]/10">
                  <Mail className="w-5 h-5 text-[#67d34f]" />
                </div>
                <div>
                  <p className="text-foreground font-medium">
                    ms.sellwidely@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#67d34f]/10">
                  <MapPin className="w-5 h-5 text-[#67d34f]" />
                </div>
                <div>
                  <p className="text-foreground font-medium">
                    8a, sathyajothy apartment, Henry road, Vetturunimadam,
                    Nagercoil 629001.
                  </p>
                  <p className="text-muted-foreground">Tamil Nadu, India</p>
                </div>
              </div>
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

              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  name="Email"
                  control={control}
                  type="email"
                  placeholder="Enter your email"
                  label="Email"
                />
                <FormInput
                  name="Mobile"
                  control={control}
                  type="tel"
                  placeholder="Enter your phone number"
                  label="Phone Number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground font-mulish mb-1"
                >
                  Message<span className="text-chart-1">*</span>
                </label>
                <textarea
                  {...register("Message")}
                  placeholder="Message"
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
        {/* <div className="mt-16">
          <div className="w-full h-[400px] overflow-hidden border border-[#E97451]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.2345678901234!2d76.7345678!3d11.4012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI0JzA0LjQiTiA3NsKwNDQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Light & Life Academy Location"
            />
          </div>
        </div> */}
      </ContainerWidget>
    </section>
  );
}

