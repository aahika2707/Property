"use client";

import ContainerWidget from "@/components/widgets/ContainerWidget";
import CategoryImage from "./CategoryImage";
import CategoryAbout from "./CategoryAbout";
import CategoryProfileCard from "./CategoryProfileCard";

export default function CategoryDetails() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <ContainerWidget>
        <CategoryImage />

        <div className="grid grid-cols-12 grid-rows-1 gap-4">
          <div className="col-span-8"><CategoryAbout /></div>
          <div className="col-span-4 col-start-9"><CategoryProfileCard /></div>
        </div>
      </ContainerWidget>
    </section>
  );
}
