"use client";

import type { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { caseStudies } from "./content";

export default function CaseStudySection() {
  const [carouselApi, setCarouselApi] = useState<UseEmblaCarouselType[1] | null>(null);

  return (
    <section id="case-study" className="mx-auto w-full bg-white px-4 sm:px-6">
      <div className="mx-auto max-w-304 border-l border-r border-[#666cfb] bg-white px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <Carousel
          opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
          setApi={setCarouselApi}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {caseStudies.map((study) => (
              <CarouselItem key={study.title} className="basis-full pl-0">
                <div className="grid grid-cols-1 items-stretch gap-6 py-8 sm:gap-8 sm:py-10 lg:grid-cols-2 lg:py-12">
                  <p className="text-center text-sm font-bold uppercase tracking-[0.08em] text-[#666cfb] sm:hidden">Case Study</p>
                  <div className="order-2 flex min-h-96 flex-col justify-between gap-6 text-center sm:order-1 lg:text-left">
                    <div>
                      <p className="hidden text-sm font-bold uppercase tracking-[0.08em] text-[#666cfb] sm:block">Case Study</p>
                      <h3 className="mt-3 font-heading text-2xl font-semibold leading-[1.2] text-black sm:text-4xl">
                        {study.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-[#2b3146] sm:mt-5 sm:text-lg">{study.description}</p>
                    </div>

                    <a
                      href={study.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-auto inline-flex w-[80%] cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#4b57d9] border-b-2 border-b-[#2f3faa] bg-[linear-gradient(180deg,#6f79ff_0%,#555bef_100%)] px-6 py-3 font-heading text-base font-semibold text-white sm:w-fit sm:text-lg lg:mx-0"
                    >
                      Read Case Study
                      <ChevronRight className="h-5 w-5" strokeWidth={2.4} aria-hidden="true" />
                    </a>
                  </div>

                  <div className="order-1 h-72 overflow-hidden rounded-2xl sm:order-2 sm:h-80 lg:max-h-96">
                    <div className="h-full overflow-hidden rounded-2xl">
                      <Image
                        src={study.image}
                        alt="English speaking learning case studies"
                        width={520}
                        height={480}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-2 flex justify-center gap-3 lg:justify-end">
          <button
            type="button"
            aria-label="Previous case study"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-sm border border-[#666cfb] border-b-2 border-b-[#4a54cc] bg-white text-[#666cfb] transition hover:bg-[#666cfb]/8 active:translate-y-px"
            onClick={() => carouselApi?.scrollPrev()}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next case study"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-sm border border-[#666cfb] border-b-2 border-b-[#4a54cc] bg-white text-[#666cfb] transition hover:bg-[#666cfb]/8 active:translate-y-px"
            onClick={() => carouselApi?.scrollNext()}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}