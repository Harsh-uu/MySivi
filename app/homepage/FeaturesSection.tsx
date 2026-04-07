"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { features } from "./content";

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const activeFeature = features[activeIndex];

  return (
    <section id="features" className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-304 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="inline-flex rounded-full bg-[#666cfb]/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#666cfb]">
            Features
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-black sm:text-4xl">
            Everything you need to speak with confidence
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-[#59607a]">
            Interactive AI sessions, practical topics, and daily practice
            designed for real fluency.
          </p>
        </div>

        {/* Mobile layout — one card per feature, image on top, text below */}
        <div className="mt-8 flex flex-col gap-5 lg:hidden">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="overflow-hidden rounded-3xl border border-[#dbe3ff] bg-white shadow-[0_4px_20px_rgba(102,108,251,0.10)]"
            >
              {/* Image */}
              <div className="relative w-full bg-[#eff0fe]" style={{ minHeight: "220px" }}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
                {/* Subtle gradient overlay at bottom so text reads cleanly */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Text */}
              <div className="px-5 py-5">
                <h3 className="font-heading text-lg font-semibold text-[#3762e3]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-[#565c70]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout — overlapping card over panel */}
        <div className="relative mt-8 hidden lg:block">
          {/* RIGHT PANEL — full width, background container */}
          <div
            className="relative w-full overflow-hidden rounded-3xl bg-[linear-gradient(90deg,#fafbff_30%,#eff0fe_55%,#abbefe_100%)]"
            style={{ minHeight: "500px" }}
          >
            {/* Image sits in the right portion */}
            <div className="absolute inset-y-0 right-0 left-[34%] p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="relative h-full overflow-hidden"
                >
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    fill
                    className="object-cover object-center"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* LEFT CARD — absolutely positioned, overlapping the panel, vertically centered */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2 w-[38%] z-10">
            <div className="rounded-3xl border border-[#666cfb] bg-white shadow-[0_14px_34px_rgba(102,108,251,0.4)]">
              <div className="divide-y divide-[#e3e9ff]">
                {features.map((feature, index) => {
                  const active = index === activeIndex;
                  return (
                    <motion.button
                      layout
                      type="button"
                      key={feature.title}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full cursor-pointer text-left transition-colors first:rounded-t-3xl last:rounded-b-3xl ${
                        active ? "bg-[#666cfb]/10" : "bg-white hover:bg-[#f7f9ff]"
                      }`}
                    >
                      <div className="relative px-5 py-5 pl-8 sm:px-6 sm:pl-9">
                        <h3
                          className={`font-heading font-semibold text-xl leading-tight ${
                            active ? "text-[#666cfb]" : "text-[#5c6172]"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <AnimatePresence initial={false} mode="wait">
                          {active && (
                            <motion.div
                              key={feature.title}
                              initial={{ opacity: 0, height: 0, y: -4 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -4 }}
                              transition={{ duration: 0.22, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <p className="mt-2 text-sm leading-6 text-[#565c70] sm:text-base">
                                {feature.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}