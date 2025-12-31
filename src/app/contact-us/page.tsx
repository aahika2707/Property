import dynamic from "next/dynamic";

const ContactSection = dynamic(
  () => import("@/components/sections/contact/ContactSection"),
  { ssr: true },
);

export const metadata = {
  title: "Contact Us | Light & Life Academy",
  description:
    "Sellwidely offers premium residential, commercial, and industrial real estate projects across Kanyakumari, Tirunelveli, and Nagercoil. Trusted for quality, innovation, and timely delivery.",
};

export default function ContactPage() {
  return <ContactSection />;
}
