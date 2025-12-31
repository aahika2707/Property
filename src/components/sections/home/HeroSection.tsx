"use client";

import ImageWidget from "@/components/widgets/ImageWidget";
import ParallaxWidget from "@/components/widgets/ParallaxWidget";
import {
  ArrowLefts,
  ArrowRights,
  Slider1,
  Slider2
} from "@/helpers/ImageHelper";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      slidesToScroll: 1,
      loop: true,
    },
    [autoplay]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateScrollButtons();
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);

    return () => {
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
    };
  }, [emblaApi]);

  const scrollPrev = () => {
    autoplay.stop();
    emblaApi?.scrollPrev();
    autoplay.play();
  };

  const scrollNext = () => {
    autoplay.stop();
    emblaApi?.scrollNext();
    autoplay.play();
  };

  const testimonials = [
    { id: 1, image: Slider1 },
    { id: 2, image: Slider2 },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ParallaxWidget speed={0.5} className="absolute inset-0 w-full h-full">
        <div className="relative h-full flex flex-col">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="shrink-0 w-full">
                  <ImageWidget
                    src={testimonial.image}
                    alt="slide"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 justify-between items-center w-full absolute h-screen ">
            <button onClick={scrollPrev} disabled={!canScrollPrev}>
              <ImageWidget src={ArrowLefts} alt="Prev" />
            </button>

            <button onClick={scrollNext} disabled={!canScrollNext}>
              <ImageWidget src={ArrowRights} alt="Next" />
            </button>
          </div>
        </div>
      </ParallaxWidget>
    </section>
  );
};

export default HeroSection;
