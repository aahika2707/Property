import { Fragment } from "react/jsx-runtime";
import ContainerWidget from "@/components/widgets/ContainerWidget";
import ScrollWidget from "@/components/widgets/ScrollWidget";
import { AboutBg } from "@/helpers/ImageHelper";

const AboutHeroSection = () => {
  return (
    <Fragment>
      {/* ---------------- SECTION 1 ---------------- */}
      <section
        className="
          w-full bg-white py-2 
          h-auto 
          sm:min-h-[300px]
          md:min-h-[380px]
          lg:min-h-[450px]
          xl:min-h-[500px]
          2xl:min-h-[580px]
          3xl:min-h-[600px]
          4xl:min-h-[2228px]
        "
      >
        <ContainerWidget>
          <div className="flex flex-col items-start justify-start gap-3 md:gap-4">
            <ScrollWidget animation="fadeUp" delay={0.1}>
              <h3
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                xl:text-7xl 2xl:text-[70px] 3xl:text-[80px] 4xl:text-[95px]
                font-normal text-black font-urbanist"
              >
                About
              </h3>
            </ScrollWidget>
            <ScrollWidget animation="fadeUp" delay={0.3}>
              <p
                className="
                text-[12px] sm:text-[13px] lg:text-[14px] 
                xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] 4xl:text-[20px]
                font-normal text-black leading-normal 
                w-full 
                md:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] 
                3xl:max-w-[900px] 4xl:max-w-[1100px]
              "
              >


                At Sell Widely Real Estate, we believe property is not just land or buildings — it is dreams, security, and a future passed on to generations.

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
                3xl:max-w-[900px] 4xl:max-w-[1100px]
              "
              >
                Born from the vision of Sell Widely, our real estate vertical was created to bridge the gap between genuine property developers and real people searching for honest opportunities. In a market crowded with noise, hidden charges, and pressure-driven sales, we chose a different path — trust first, value always.

We are not traditional brokers.
We are growth partners, storytellers, and relationship builders.
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
                3xl:max-w-[900px] 4xl:max-w-[1100px]
              "
              >
                Our role is simple yet powerful:
                <br></br>
👉 Help developers sell faster and smarter
<br></br>
👉 Help buyers invest with confidence and clarity
<br></br>
👉 Create earning opportunities through ethical referral networks
<br></br>

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
                3xl:max-w-[900px] 4xl:max-w-[1100px]
              "
              >
Every project we associate with is carefully verified. Every buyer we guide is treated like family. Every sale we facilitate carries responsibility — because we know a property decision can change a life.

Sell Widely Real Estate stands for transparency, dignity, and long-term impact, not shortcuts or commissions alone.

              </p>
            </ScrollWidget>
          </div>
        </ContainerWidget>
      </section>
      <section
        className="
          z-50 max-w-[2560px] bg-cover bg-bottom bg-no-repeat 
          min-h-[510px] 
          lg:min-h-[509px]
          xl:min-h-[700px] 
          2xl:min-h-[800px]
          3xl:min-h-[1004px]
          4xl:min-h-[1204px]
          bg-white text-white
        "
        style={{ backgroundImage: `url(${AboutBg.src})` }}
      >
        <div className="flex w-full">
          <div className="w-[30%]">

          </div>
          
        </div>
      </section>
    </Fragment>
  );
};

export default AboutHeroSection;
