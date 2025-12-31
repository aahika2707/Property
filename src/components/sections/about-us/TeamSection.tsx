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
            What Makes Us Different
          </p>
          <ol className="list-decimal">
            <li>No false promises, no hidden agendas</li>
            <li>Pay-only-on-results model for developers</li>
            <li>Digitally powered, yet emotionally grounded</li>
            <li>Strong referral & community-driven growth</li>
            <li>Focused on long-term value, not short-term gains</li>
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
            Our Belief
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
            We believe success is meaningful only when it is shared.
When developers grow, buyers feel secure, and referral partners earn with dignity — everyone wins.

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
That is the Sell Widely way.
          </p>
        </ScrollWidget>
        
      </ContainerWidget>
    </section>
  );
};

export default TeamSection;
