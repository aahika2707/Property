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
                At SellWidely, we are redefining real estate consultancy with a foundation built on trust, transparency, and transformation. Established in 2024, SellWidely has quickly emerged as a dynamic property consulting firm, delivering seamless real estate solutions that empower individuals, investors, and communities to achieve their goals with confidence.
              </p>
            </ScrollWidget>

            <ScrollWidget animation="slideLeft" delay={0.2}>
              <p
                className="
                font-area-variable font-semibold 
                text-base md:text-lg lg:text-xl xl:text-2xl 
                2xl:text-3xl 3xl:text-[40px] 4xl:text-[48px] 
                text-black mt-15
              "
              >
                Our Origin
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
                Our journey began with purpose. For over a decade, our founders were deeply involved in youth and social initiatives—driving change, supporting communities, and inspiring others to act. Through these experiences, we discovered an undeniable truth: true social impact is sustainable only through financial independence.
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
                Motivated by this belief, a group of passionate young professionals came together to build SellWidely—not merely as a business venture, but as a mission to combine financial growth with ethical values and community empowerment.
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
