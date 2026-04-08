import Image from "next/image";
import { AnimatedElement } from "./AnimatedElement";

export default function ProofSection() {
  return (
    <section className="relative mx-auto w-full overflow-visible px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 overflow-clip" aria-hidden="true">
        <div className="absolute left-0 right-0 top-0 h-0 border-t border-[rgba(102,108,251,0.72)]" />
        <div className="absolute left-1/2 top-0 h-32 w-176 -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(102,108,251,0.24)_0%,rgba(102,108,251,0.14)_34%,rgba(102,108,251,0.06)_56%,rgba(102,108,251,0)_78%)] blur-xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-304 border-l border-r border-[rgba(102,108,251,0.72)] py-12 text-center sm:py-16">
        <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#666cfb]">
          Investors
        </p>
        <AnimatedElement>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-black sm:text-4xl">Backed By</h2>
        </AnimatedElement>
        <div className="mt-8 flex rounded-lg justify-center border border-[#666cfb]/80 w-fit mx-auto px-6 py-2 shadow-lg">
          <Image src="/YC.png" alt="Y Combinator" width={180} height={72} className="h-auto w-auto object-contain" />
        </div>
      </div>
              <div className="absolute bottom-0 left-0 right-0 h-0 border-t border-[rgba(102,108,251,0.72)]" />

    </section>
  );
}