"use client";

import ContainerWidget from "@/components/widgets/ContainerWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import ParallaxWidget from "@/components/widgets/ParallaxWidget";
import ScrollWidget from "@/components/widgets/ScrollWidget";
import TitleWidget from "@/components/widgets/TitleWidget";
import { Sathish } from "@/helpers/ImageHelper";

interface ServiceItem {
  number: string;
  title: string;
  text: string;
}

const FacultySection = () => {
  const servicesData: ServiceItem[] = [
    {
      number: "01",
      title: "Trust & Transparency First",
      text: "We work only with verified projects and honest pricing, ensuring buyers and developers experience complete clarity with no hidden surprises.",
    },
    {
      number: "02",
      title: "Pay-Only-on-Results Model",
      text: "Developers pay us only when a sale is closed—no fixed salaries, no risky marketing spends, just performance-driven growth.",
    },
    {
      number: "03",
      title: "Buyer-Centric Guidance",
      text: "We focus on understanding real needs, not pushing sales, helping buyers make confident, pressure-free property decisions.",
    },
    {
      number: "04",
      title: "Strong Referral & Digital Network",
      text: "Our powerful mix of digital marketing and ethical referral partners ensures wider reach, faster sales, and scalable results.",
    },
  ];

  const Card = ({ number, title, text }: ServiceItem) => (
    <div className="flex flex-col items-center text-center max-w-[260px]">
      <span className="text-white text-xl font-semibold mb-4 bg-[#67d34f] p-6 rounded-full">
        {number}
      </span>
      <h3 className="text-white text-lg font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-300 text-xs leading-relaxed">
        {text}
      </p>
    </div>
  );

  return (
    <section className="w-full py-16 bg-white mx-auto max-w-[1920px]">
      
      {/* TITLE */}
      <ContainerWidget>
        <ScrollWidget animation="fadeUp" delay={0.1}>
          <ParallaxWidget speed={-0.2}>
            <TitleWidget
              title="Why Choose Sellwidely?"
              subTitle="Why Choose"
            />
          </ParallaxWidget>
        </ScrollWidget>
      </ContainerWidget>

      {/* CONTENT */}
      <ContainerWidget>
        <div className="bg-black grid grid-cols-1 lg:grid-cols-2 mt-12">

          {/* LEFT – DIAMOND LAYOUT */}
          <div className="flex flex-col items-center justify-center gap-14 py-16">

            {/* TOP */}
            <Card {...servicesData[0]} />

            {/* CENTER (2 CARDS) */}
            <div className="flex flex-col sm:flex-row gap-10">
              <Card {...servicesData[1]} />
              <Card {...servicesData[2]} />
            </div>

            {/* BOTTOM */}
            <Card {...servicesData[3]} />

          </div>

          {/* RIGHT – IMAGE */}
          <div className="hidden lg:block">
            <ImageWidget
              src={Sathish}
              alt="Sellwidely Property"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </ContainerWidget>
    </section>
  );
};

export default FacultySection;
