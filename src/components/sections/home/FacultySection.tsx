"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import ContainerWidget from "@/components/widgets/ContainerWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import OrangeButtonWidget from "@/components/widgets/OrangeButtonWidget";
import ParallaxWidget from "@/components/widgets/ParallaxWidget";
import ScrollWidget from "@/components/widgets/ScrollWidget";
import { Dummy11, Sathish } from "@/helpers/ImageHelper";
import TitleWidget from "@/components/widgets/TitleWidget";

const FacultySection = () => {
  const servicesData = [
    {
      number: "01",
      title: "All-in-One Property Destination",
      text: "From Commercial Spaces to Farm Lands and Luxury Villas, we bring every type of property under one trusted roof — making your buying and selling journey seamless and smart.",
    },
    {
      number: "02",
      title: "Trusted Listings, Transparent Deals",
      text: "Every property is verified, genuine, and value-driven, ensuring your investment is safe, profitable, and hassle-free.",
    },
    {
      number: "03",
      title: "Expert Guidance & Local Insights",
      text: "Our experienced team connects you with the right buyers and sellers, offering market insights that turn your property dreams into reality.",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28 bg-white mx-auto max-w-[1920px]">
      <ContainerWidget>
        <ScrollWidget animation="fadeUp" delay={0.1}>
          <ParallaxWidget speed={-0.2}>
            <TitleWidget title="Why Choose Sellwidely?" subTitle="Why Choose" />
          </ParallaxWidget>
        </ScrollWidget>
      </ContainerWidget>
      <ContainerWidget>
        <div className="bg-black grid grid-cols-1 md:grid-cols-2 ftco-degree-bg mt-10">
          <div className="py-35 pl-6">
            <div className="flex flex-col items-center justify-center mb-15">
              <div className="w-[50%] flex flex-col items-center justify-center">
                <span className="text-white text-xl font-semibold block mb-4 bg-[#67d34f] p-6 rounded-full">
                  01
                </span>

                <h3 className="text-white text-2xl font-semibold mb-3 text-center">
                  All-in-One Property Destination
                </h3>

                <p className="text-gray-300 text-xs leading-relaxed text-center">
                  From Commercial Spaces to Farm Lands and Luxury Villas, we
                  bring every type of property under one trusted roof — making
                  your buying and selling journey seamless and smart.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className=" flex flex-col items-center justify-center">
                <span className="text-white text-2xl font-semibold block mb-4 bg-[#67d34f] p-6 rounded-full">
                  02
                </span>

                <h3 className="text-white text-xl font-semibold mb-3 text-center">
                  Trusted Listings, Transparent Deals
                </h3>

                <p className="text-gray-300 text-xs leading-relaxed text-center">
                 Every property is verified, genuine, and value-driven, ensuring your investment is safe, profitable, and hassle-free.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <span className="text-white text-2xl font-semibold block mb-4 bg-[#67d34f] p-6 rounded-full">
                  03
                </span>

                <h3 className="text-white text-xl font-semibold mb-3 text-center">
                  Expert Guidance & Local Insights
                </h3>

                <p className="text-gray-300 text-xs leading-relaxed text-center">
                  Our experienced team connects you with the right buyers and sellers, offering market insights that turn your property dreams into reality.
                </p>
              </div>
            </div>
          </div>
          <div>
            <ImageWidget src={Sathish} alt="img" className="w-full h-full object-cover"/>
          </div>
        </div>
      </ContainerWidget>
    </section>
  );
};

export default FacultySection;
