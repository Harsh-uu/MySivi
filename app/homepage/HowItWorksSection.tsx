"use client";

import { useEffect, useRef } from "react";
import { BarChart3, ClipboardList, Download, Mic, Users } from "lucide-react";
import { steps } from "./content";

const stepIcons = [Download, ClipboardList, Mic, Users, BarChart3];

export default function HowItWorksSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

    const resetCards = () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          card.style.transform = "scale(1) translateY(0px)";
        }
      });
    };

    const onScroll = () => {
      if (!isDesktop()) {
        resetCards();
        return;
      }

      const cards = cardsRef.current;

      for (let i = 0; i < cards.length - 1; i += 1) {
        const card = cards[i];
        const nextCard = cards[i + 1];

        if (!card || !nextCard) {
          continue;
        }

        const cardRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();
        const overlap = cardRect.bottom - nextRect.top;

        if (overlap <= 0) {
          card.style.transform = "scale(1) translateY(0px)";
          continue;
        }

        const progress = Math.min(overlap / cardRect.height, 1);
        const scale = 1 - progress * 0.06;
        const pushDown = progress * 14;

        card.style.transform = `scale(${scale}) translateY(${pushDown}px)`;
      }
    };

    const onResize = () => {
      if (!isDesktop()) {
        resetCards();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="how-it-works" className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-304 px-4 text-center sm:px-6">
        <p className="inline-flex rounded-full bg-[#666cfb]/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#666cfb]">
          How It Works
        </p>
        <h2 className="mt-3 font-heading text-3xl px-4 font-semibold text-black sm:text-4xl">
          Speak fluently in five guided steps
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-[#59607a]">
          Move from hesitation to confidence with a structured daily speaking workflow.
        </p>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-304 gap-4 px-4 sm:px-6">
        {steps.map((step, index) => (
          <div
            key={step.number}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="origin-top min-h-52 rounded-2xl border border-[#dbe3ff] bg-white px-5 py-5 shadow-[0_10px_20px_rgba(0,0,0,0.04)] sm:px-8 lg:sticky lg:top-28 lg:px-20"
            style={{ zIndex: index + 1 }}
          >
            <div className="flex h-full min-h-52 flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
              <div className="min-w-0">
                <div className="mb-4 text-2xl font-semibold uppercase tracking-wide text-[#d1d1d1]">{step.number}</div>
                <span className="inline-flex bg-[#666cfb] px-2 py-1 font-heading text-3xl font-semibold text-white">
                  {step.title}
                </span>
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
        ))}
      </div>
    </section>
  );
}