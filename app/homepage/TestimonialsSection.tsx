"use client";

import type { UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { testimonials } from "./content";

export default function TestimonialsSection() {
  const [carouselApi, setCarouselApi] = useState<UseEmblaCarouselType[1] | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    update();
    carouselApi.on("select", update);
    carouselApi.on("reInit", update);

    return () => {
      carouselApi.off("select", update);
      carouselApi.off("reInit", update);
    };
  }, [carouselApi]);

  return (
    <section id="stories" className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-304 px-4 text-center sm:px-6">
        <p className="inline-flex rounded-full bg-[#666cfb]/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#666cfb]">
          Testimonials
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-black sm:text-4xl">
          Real learners, real speaking confidence
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-[#59607a]">
          What users across India are saying about their MySivi journey.
        </p>
      </div>

      <div className="mx-auto mt-5 w-full max-w-304">
        <Carousel
          opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
          setApi={setCarouselApi}
          className="w-full"
        >
          {/* px-4/px-6 moved here so shadows aren't clipped */}
          <CarouselContent className="-ml-4 px-4 py-3 sm:px-6">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={`${testimonial.name}-${testimonial.location}`}
                className="flex pl-4 basis-[88%] sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-88 w-full flex-col rounded-2xl border border-[#e4e9ff] bg-white p-5 shadow-[0_2px_12px_rgba(102,108,251,0.06)] sm:h-96 sm:p-6">
                  
                  {/* Stars */}
                  <div className="mb-4 flex items-center gap-0.5" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} className="text-base leading-none text-[#666cfb]">★</span>
                    ))}
                  </div>

                  {/* Quote mark + text */}
                  <div className="relative flex-1">
                    <p className="relative z-10 text-[15px] leading-relaxed text-[#2a2d3e]">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-[#eef0ff]" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#dbe5ff] bg-[#f4f7ff] text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-heading text-sm font-semibold text-[#1a1d2e]">
                        {testimonial.name}
                      </div>
                      <div className="mt-0.5 text-xs text-[#8890a8]">
                        {testimonial.title}
                      </div>
                      <div className="text-xs text-[#b0b7cc]">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-5 flex justify-center gap-3 px-4 sm:px-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            disabled={!canScrollPrev}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-sm border border-[#666cfb] border-b-2 border-b-[#4a54cc] bg-white text-[#666cfb] transition hover:bg-[#666cfb]/8 disabled:cursor-not-allowed disabled:opacity-45"
            onClick={() => carouselApi?.scrollPrev()}
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            disabled={!canScrollNext}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-sm border border-[#666cfb] border-b-2 border-b-[#4a54cc] bg-white text-[#666cfb] transition hover:bg-[#666cfb]/8 disabled:cursor-not-allowed disabled:opacity-45"
            onClick={() => carouselApi?.scrollNext()}
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}