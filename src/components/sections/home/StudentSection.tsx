"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DialogClose } from "@/components/ui/dialog";
import ButtonWidget from "@/components/widgets/ButtonWidget";
import ContainerWidget from "@/components/widgets/ContainerWidget";
import DialogWidget from "@/components/widgets/DialogWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import ScrollWidget from "@/components/widgets/ScrollWidget";
import { Into, Play } from "@/helpers/ImageHelper";
import TitleWidget from "@/components/widgets/TitleWidget";

const StudentSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "end",
      slidesToScroll: 1,
      loop: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const stopAllVideos = () => {
    if (carouselRef.current) {
      const videos = carouselRef.current.querySelectorAll("video");
      videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    }
  };

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
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  const studentData = [
    {
      id: "student-0",
      name: "Johnson",
      role: "Batch - ‘09 - ‘10",
      videoSrc: "https://sellwidely.in/wp-content/uploads/2025/10/customer-review-3.mp4",
    },
    {
      id: "student-1",
      name: "Michael Chen",
      role: "Batch - ‘09 - ‘10",
      videoSrc: "https://sellwidely.in/wp-content/uploads/2025/10/customer-review-2.mp4",
    },
    {
      id: "student-2",
      name: "Emily Rodriguez",
      role: "Batch - ‘09 - ‘10",
      videoSrc: "https://sellwidely.in/wp-content/uploads/2025/10/customer-review-4.mp4",
    },
  ];

  return (
    <section className="w-full py-10 md:py-10 lg:py-12 xl:py-16 2xl:py-20 3xl:py-24 bg-white mx-auto max-w-[1920px]">
      <ContainerWidget>
        <ScrollWidget animation="slideRight" delay={0.1}>
          <TitleWidget title="Honest Reviews from our Customers" subTitle="Testimonials" />
        </ScrollWidget>
      </ContainerWidget>
      <div className="pt-10 md:pt-20 md:pb-5 pb relative px-4 sm:px-0">
        <ScrollWidget animation="fadeDown" delay={0.2}>
          <div className="relative" ref={carouselRef}>
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              ref={emblaRef}
            >
              <div className={`flex gap-4 sm:gap-6 justify-center`}>
                {studentData.map((student, index) => (
                  <ScrollWidget
                    key={student.id}
                    animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                    delay={0.1 + index * 0.15}
                  >
                    <div
                      className={`shrink-0 ${
                        index % 2 ? "md:mt-30" : "mt-0"
                      } w-[calc(100%-2rem)] min-w-[320px] sm:w-[calc((100%-3rem-1rem)/2)] md:w-[calc((100%-4.5rem)/3.5)] lg:w-[calc((100%-4.5rem)/3.5)] xl:w-[calc((100%-4.5rem)/3.5)] 2xl:w-[calc((100%-4.5rem)/3.5)]`}
                    >
                      {/* biome-ignore lint/a11y/noStaticElementInteractions: Hover-only interaction for video playback, not a clickable element */}
                      <div
                        className="group relative flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out delay-75 p-3 sm:p-4 lg:p-5 aspect-3/4 min-h-[380px] sm:min-h-[430px] bg-[#F6F6F6] hover:bg-[#67d34f]/80"
                        onMouseEnter={(e) => {
                          const video = e.currentTarget.querySelector("video");
                          if (video) {
                            video.play().catch(() => {});
                          }
                        }}
                        onMouseLeave={(e) => {
                          const video = e.currentTarget.querySelector("video");
                          if (video) {
                            video.pause();
                          }
                        }}
                      >
                        <video
                          src={student.videoSrc}
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover z-0 p-1.5"
                        />
                        <div className="relative z-20 flex items-end justify-between h-full">
                          <div
                            className="flex flex-col justify-end gap-3 bg-[#67d34f]/80 w-full h-30 p-4"
                            style={{
                              clipPath:
                                "polygon(0 0%, 100% 42%, 100% 100%, 0% 100%)",
                            }}
                          >
                            <h3 className="mb-5 font-mulish text-xl md:text-xl lg:text-2xl xl:text-[20px] 2xl:text-[20px] 3xl:text-[24px] font-bold text-white font-urbanist leading-tight md:leading-tight lg:leading-[32px] xl:leading-snug 2xl:leading-tight 3xl:leading-tight transition-colors duration-500 ease-in-out delay-150">
                              {student.name}
                            </h3>
                          </div>
                          <DialogWidget
                            trigger={
                              <ButtonWidget
                                className="absolute right-3 bottom-10 w-18 h-18 p-0 bg-transparent hover:bg-transparent border-none shadow-none rounded-full group/play-button hover:scale-110 active:scale-95 transition-all duration-300 ease-out animate-play-pulse"
                                aria-label="Play video"
                              >
                                <ImageWidget
                                  src={Play}
                                  alt=""
                                  className="w-18 cursor-pointer h-18 text-white group-hover/play-button:text-[#67d34f] transition-colors duration-500 ease-in-out"
                                  aria-hidden="true"
                                />
                              </ButtonWidget>
                            }
                            contentClassName="sm:max-w-[90vw] lg:max-w-[800px] p-0"
                            showCancel={false}
                            onOpenChange={(open) => {
                              if (!open) {
                                stopAllVideos();
                              }
                            }}
                            showCloseButton={false}
                            customCloseButton={
                              <DialogClose asChild>
                                <div className="cursor-pointer -mt-[30px] -mr-[30px]">
                                  <ImageWidget
                                    src={Into}
                                    alt="Into"
                                    className="w-[30px] h-[30px]"
                                  />
                                </div>
                              </DialogClose>
                            }
                          >
                            <div className="relative w-full aspect-video bg-black rounded-lg">
                              <video
                                src={student.videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </div>
                          </DialogWidget>
                        </div>
                      </div>
                    </div>
                  </ScrollWidget>
                ))}
              </div>
              <div className="md:hidden flex gap-2 mt-10">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className={`p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors ${
                    !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className={`p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors ${
                    !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </ScrollWidget>
      </div>
    </section>
  );
};

export default StudentSection;
