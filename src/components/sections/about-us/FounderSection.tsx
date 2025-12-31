"use client";
import ContainerWidget from "@/components/widgets/ContainerWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import ScrollWidget from "@/components/widgets/ScrollWidget";
import { FounderDummy1 } from "@/helpers/ImageHelper";

const FounderSection = () => {
  return (
    <section
      className="3xl:max-h-[1665px]
  w-full bg-[#ECECEC]
  py-8
  xs:py-10
  sm:py-12
  md:py-14
  lg:py-20
  xl:py-14
  2xl:py-18
  3xl:py-26
  4xl:py-30
  "
    >
      <ContainerWidget>
        <div
          className="
      text-center
      space-y-1
      xs:space-y-1
      sm:space-y-2
      md:space-y-5
      lg:space-y-6
      xl:space-y-8
      2xl:space-y-12
      3xl:space-y-14
      4xl:space-y-16
      "
        >
        </div>
        <div className="mt-2 xs:mt-6 sm:mt-12 md:mt-14 space-y-10 sm:space-y-10 md:space-y-12 ">
          <div
            className="
        grid grid-cols-1
        md:grid-cols-2
        gap-6 md:gap-14 lg:gap-16 xl:gap-18 2xl:gap-20 3xl:gap-24
        items-center
        "
          >
            <ScrollWidget delay={0.2} className="order-2 md:order-1">
              <div
                className="
            space-y-3
            xs:space-y-4
            md:space-y-5
            lg:space-y-6
            xl:space-y-4
            4xl:max-w-[420px]
            "
              >
                <h4
                  className="font-urbanist font-semibold text-[#E97451] hidden md:block
              text-xl
              xs:text-2xl
              sm:text-3xl
              md:text-3xl
              lg:text-3xl
              xl:text-4xl
              2xl:text-[38px]
              3xl:text-[42px]
              4xl:text-4xl
              "
                >
                  Our Mission
                </h4>
                <p
                  className="
              font-mulish text-black leading-relaxed
              text-[13px]
              xs:text-[12px]
              sm:text-[13px]
              lg:text-[14px]
              xl:text-[16px]
              2xl:text-[18px]
              3xl:text-[20px]
              4xl:text-[22px]
              "
                >

                  To simplify real estate buying through honest guidance and verified projects

To help developers sell faster without heavy fixed costs or risky marketing spends

To build a performance-based, referral-driven ecosystem that creates income opportunities for thousands

To replace pressure-selling with education, clarity, and confidence

To make real estate a relationship-driven journey, not a stressful transaction

                </p>
                <div className="border border-gray-500" />

                <h4
                  className="font-urbanist font-semibold text-[#E97451] hidden md:block
              text-xl
              xs:text-2xl
              sm:text-3xl
              md:text-3xl
              lg:text-3xl
              xl:text-4xl
              2xl:text-[38px]
              3xl:text-[42px]
              4xl:text-4xl
              "
                >
                  Our Vision
                </h4>
                <p
                  className=" font-mulish text-black leading-relaxed text-[13px]
              xs:text-[13px]
              sm:text-[13px]
              lg:text-[14px]
              xl:text-[16px]
              2xl:text-[18px]
              3xl:text-[20px]
              4xl:text-[22px]
              "
                >
                  To become India’s most trusted real estate growth platform, empowering developers, buyers, and referral partners through ethical selling, transparent systems, and human-centered experiences, while building communities that last for generations.
                </p>
              </div>
            </ScrollWidget>
            <ScrollWidget delay={0.3} className="order-1 md:order-2">
              <h4
                className="mb-3 block md:hidden font-urbanist font-regular text-[#E97451] text-[32px]  xs:text-[32px]
                 sm:text-[32px]l"
              >
                Anuradha Iqbal
              </h4>
              <div
                className="
            flex justify-center md:justify-start w-full
            "
              >
                <ImageWidget
                  src={FounderDummy1}
                  alt="Founder"
                  width={500}
                  height={600}
                  className="
              object-cover
              w-[360px] h-[480px]
              xs:w-[280px] xs:h-[380px]
              sm:w-[300px] sm:h-[400px]
              md:w-[340px] md:h-[460px]
              lg:w-[380px] lg:h-[520px]
              xl:w-[400px] xl:h-[500px]
              2xl:w-[420px] 2xl:h-[560px]
              3xl:w-[430px] 3xl:h-[580px]
              4xl:w-[450px] 4xl:h-[600px]
              "
                />
              </div>
            </ScrollWidget>
          </div>
        </div>
      </ContainerWidget>
    </section>
  );
};
export default FounderSection;
