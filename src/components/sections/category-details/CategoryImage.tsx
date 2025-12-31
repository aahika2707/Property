"use client";

import ButtonWidget from "@/components/widgets/ButtonWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import { Img1, LocationIco, ProjectType } from "@/helpers/ImageHelper";

export default function CategoryImage() {
  return (
    <section>
      <div className="mb-6 flex justify-between items-center">
        <div>
        <h6 className="text-2xl font-bold mb-2">RESIDENTIAL PLOT (NGO colony )</h6>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 mb-2">
              <ImageWidget
                src={ProjectType}
                alt="img"
                className="w-4 h-4 object-cover"
              />
              <span className="text-sm text-gray-600">Apartments</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <ImageWidget
                src={LocationIco}
                alt="img"
                className="w-4 h-4 object-cover"
              />
              <span className="text-sm text-gray-600">Kodambakkam</span>
            </div>
        </div>
        </div>
        <div>
          <ButtonWidget
          className={`orange-button group rounded-[60px] px-5 h-10 text-[14px] 2xl:text-[14px] 3xl:text-[18px]`}
        >
          Schedule Visit
        </ButtonWidget>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 gap-4">
        <div className="col-span-6 row-span-2 h-full max-h-[500px]">
          <ImageWidget
            src={Img1}
            alt="img"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="col-span-3 col-start-7 h-full max-h-[242px]">
          <ImageWidget
            src={Img1}
            alt="img"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="col-span-3 col-start-10 h-full max-h-[242px]">
          <ImageWidget
            src={Img1}
            alt="img"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="col-span-6 col-start-7 row-start-2 h-full max-h-[242px]">
          <ImageWidget
            src={Img1}
            alt="img"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
