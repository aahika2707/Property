import ContainerWidget from "@/components/widgets/ContainerWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import TitleWidget from "@/components/widgets/TitleWidget";
import { Document, Padlock, Piggy, Wallet } from "@/helpers/ImageHelper";

const CourseSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28 bg-white">
      <ContainerWidget>
        <div className="space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-14 3xl:space-y-16">
          <TitleWidget title="The smartest way to buy a home" subTitle="Our Services" />

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center transition duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mb-4 rounded-full bg-[#67d34f]/10 flex items-center justify-center">
                    <ImageWidget alt="img" src={Piggy} className="w-10 h-10 object-cover"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Downpayment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center transition duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mb-4 rounded-full bg-[#67d34f]/10 flex items-center justify-center">
                    <ImageWidget alt="img" src={Wallet} className="w-10 h-10 object-cover"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">All Cash Offer</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center transition duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mb-4 rounded-full bg-[#67d34f]/10 flex items-center justify-center">
                    <ImageWidget alt="img" src={Document} className="w-10 h-10 object-cover"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Experts in Your Corner
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center transition duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mb-4 rounded-full bg-[#67d34f]/10 flex items-center justify-center">
                    <ImageWidget alt="img" src={Padlock} className="w-10 h-10 object-cover"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Locked in Pricing
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ContainerWidget>
    </section>
  );
};

export default CourseSection;
