"use client";

import { useEffect, useRef } from "react";
import { Download, ClipboardList, Mic, Users, BarChart3 } from "lucide-react";
import { steps } from "./content";
import { AnimatedElement } from "./AnimatedElement";

const stepIcons = [Download, ClipboardList, Mic, Users, BarChart3];

export default function HowItWorksSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const cards = cardsRef.current;

      for (let i = 0; i < cards.length - 1; i++) {
        const card = cards[i];
        const nextCard = cards[i + 1];
        if (!card || !nextCard) continue;

        const cardRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        // How much the next card overlaps this card (0 = no overlap, cardHeight = fully covered)
        const overlap = cardRect.bottom - nextRect.top;

        if (overlap <= 0) {
          card.style.transform = "scale(1) translateY(0px)";
          continue;
        }

        const progress = Math.min(overlap / cardRect.height, 1);
        const scale = 1 - progress * 0.06;
        const pushDown = progress * 15;

        card.style.transform = `scale(${scale}) translateY(${pushDown}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="how-it-works" className="pt-12 sm:pt-16">
      <div className="mx-auto w-full max-w-304 px-4 text-center sm:px-6">
        <p className="inline-flex rounded-full bg-[#666cfb]/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#666cfb]">
          How It Works
        </p>
        <AnimatedElement>
          <h2 className="mt-3 font-heading text-3xl px-4 font-semibold text-black sm:text-4xl">
            Speak fluently in five guided steps
          </h2>
        </AnimatedElement>
        <p className="mx-auto mt-2 max-w-3xl text-[#59607a]">
          Move from hesitation to confidence with a structured daily speaking workflow.
        </p>
      </div>

      <div className="mt-8 px-4 sm:px-6 md:px-10 lg:px-40 pb-6">
        {steps.map((step, index) => {
          const Icon = stepIcons[index];
          return (
            <div
              key={step.number}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="sticky top-20 sm:top-24 w-full rounded-lg sm:rounded-2xl bg-white border py-6 px-4 sm:px-16 border-[#dbe3ff] overflow-hidden mb-8 origin-top shadow-md"
              style={{
                zIndex: index + 1,
                willChange: "transform",
              }}
            >
              <div className="flex h-full min-h-52 flex-col items-center justify-center sm:justify-between gap-5 text-center lg:flex-row lg:text-left">
              <div className="min-w-0">
                <div className="mb-4 text-2xl font-semibold uppercase tracking-wide text-[#d1d1d1]">STEP {step.number}</div>
                <AnimatedElement>
                  <span className="inline-flex bg-[#666cfb] px-2 py-1 font-heading text-3xl font-semibold text-white">
                    {step.title}
                  </span>
                </AnimatedElement>
                <p className="mt-4 text-[#3d4662]">{step.description}</p>
              </div>

              <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#666cfb]/10 text-[#666cfb] ring-1 ring-[#666cfb]/15 lg:flex">
                {(() => {
                  const Icon = stepIcons[index] ?? BarChart3;
                  return <Icon className="h-10 w-10" strokeWidth={1.8} aria-hidden="true" />;
                })()}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}