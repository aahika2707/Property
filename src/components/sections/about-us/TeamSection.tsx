import ContainerWidget from "@/components/widgets/ContainerWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import OrangeButtonWidget from "@/components/widgets/OrangeButtonWidget";
import ParallaxWidget from "@/components/widgets/ParallaxWidget";
import ScrollWidget from "@/components/widgets/ScrollWidget";
import { TeamDummy4, TeamGroupDummy } from "@/helpers/ImageHelper";

const TeamSection = () => {
  const facultyData = [
    {
      id: "faculty-0",
      name: "Kavitha Swaminathan",
      description: "(Manager, Academics)",
      className: "mt-0 md:mt-0 lg:mt-15 xl:mt-15 2xl:mt-15 3xl:mt-20 4xl:mt-25",
    },
    {
      id: "faculty-1",
      name: "Nithya JB",
      description: "(Manager Operations)",
      className: "mt-0 md:mt-0 lg:mt-45 xl:mt-45 2xl:mt-45 3xl:mt-50 4xl:mt-55",
    },
    { id: "faculty-2", name: "Devaraj", description: "(Manager, Accounts)" },
    {
      id: "faculty-3",
      name: "Rajendran",
      description: "(Equipment and Store Supervisor)",
      className:
        " mt-0 md:mt-0 lg:mt-15 xl:mt-15 2xl:mt-15 3xl:mt-20 4xl:mt-25",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-18 xl:py-20 2xl:py-24 3xl:py-32 4xl:py-36">
      <ContainerWidget>
        <ScrollWidget animation="fadeUp" delay={0.1}>
          <p
            className="
                font-area-variable font-semibold 
                text-base md:text-lg lg:text-xl xl:text-2xl 
                2xl:text-3xl 3xl:text-[40px] 4xl:text-[48px] 
                text-black mb-6
              "
          >
            Our Journey So Far
          </p>
        </ScrollWidget>
        <ScrollWidget animation="fadeUp" delay={0.4}>
          <p
            className="
                text-[12px] sm:text-[13px] lg:text-[14px] 
                xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] 4xl:text-[20px]
                font-normal text-black leading-normal 
                w-full 
                md:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] 
                3xl:max-w-[900px] 4xl:max-w-[1100px] mb-6
              "
          >
            Like any entrepreneurial path, our beginning was marked by
            challenges. Navigating a complex real estate landscape exposed us to
            the industry’s common issues—lack of transparency, misinformation,
            and inconsistent service quality. Instead of being deterred, we saw
            this as an opportunity to set a new standard for professionalism and
            integrity in property consulting.
          </p>
        </ScrollWidget>
        <ScrollWidget animation="fadeUp" delay={0.4}>
          <p
            className="
                text-[12px] sm:text-[13px] lg:text-[14px] 
                xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] 4xl:text-[20px]
                font-normal text-black leading-normal 
                w-full 
                md:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] 
                3xl:max-w-[900px] 4xl:max-w-[1100px] mb-6
              "
          >
            Today, in just two years of operation, SellWidely has achieved
            remarkable milestones:
          </p>
        </ScrollWidget>
        <ScrollWidget animation="fadeUp" delay={0.4}>
          <p
            className="
                text-[12px] sm:text-[13px] lg:text-[14px] 
                xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] 4xl:text-[20px]
                font-normal text-black leading-normal 
                w-full 
                md:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] 
                3xl:max-w-[900px] 4xl:max-w-[1100px] mb-6
              "
          >
            600+ successful property transactions completed with satisfied
            clients. A thriving digital community of 100,000+ followers,
            connected through our social media channels.
          </p>
        </ScrollWidget>

        <ScrollWidget animation="fadeUp" delay={0.1}>
          <p
            className="
                font-area-variable font-semibold 
                text-base md:text-lg lg:text-xl xl:text-2xl 
                2xl:text-3xl 3xl:text-[40px] 4xl:text-[48px] 
                text-black mb-6
              "
          >
            A dedicated in-house team specializing in every aspect of the
            process:
          </p>
          <ol className="list-decimal">
            <li>Property Identification & Sourcing</li>
            <li>Legal & Documentation Services</li>
            <li>Marketing & Promotions</li>
            <li>Customer Support & Telecalling Assistance</li>
          </ol>
        </ScrollWidget>

        <ScrollWidget animation="fadeUp" delay={0.1}>
          <p
            className="
                font-area-variable font-semibold 
                text-base md:text-lg lg:text-xl xl:text-2xl 
                2xl:text-3xl 3xl:text-[40px] 4xl:text-[48px] 
                text-black my-6
              "
          >
            What We Do
          </p>
           <p
            className="
                text-[12px] sm:text-[13px] lg:text-[14px] 
                xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] 4xl:text-[20px]
                font-normal text-black leading-normal 
                w-full 
                md:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] 
                3xl:max-w-[900px] 4xl:max-w-[1100px] mb-6
              "
          >
           At SellWidely, we offer comprehensive property consulting services that cover the entire real estate spectrum—buying, selling, investment advisory, and legal verification. Our goal is to simplify the process, eliminate uncertainty, and ensure every client experiences a transparent and rewarding property journey.
          </p>

          <p
            className="
                text-[12px] sm:text-[13px] lg:text-[14px] 
                xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] 4xl:text-[20px]
                font-normal text-black leading-normal 
                w-full 
                md:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] 
                3xl:max-w-[900px] 4xl:max-w-[1100px] mb-6
              "
          >
           We combine market expertise with a people-first approach, ensuring that every deal is handled with professionalism, clarity, and commitment.
          </p>
        </ScrollWidget>
        
      </ContainerWidget>
    </section>
  );
};

export default TeamSection;
