import { heroStats } from "./content";
import { AnimatedElement } from "./AnimatedElement";

export default function HeroSection() {
  return (
    <section className="mx-auto grid min-h-160 w-full max-w-304 grid-cols-1 items-center gap-10 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:grid-cols-2 lg:gap-10 lg:pt-10">
      <div className="text-center lg:text-left">
        <AnimatedElement>
          <h1 className="font-heading text-3xl font-bold leading-[0.96] tracking-tight text-[#32384a] sm:text-5xl lg:text-6xl pt-8 sm:pt-0">
            Master English Speaking with AI-Powered Learning
          </h1>
        </AnimatedElement>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-tight text-[#61687a] sm:mt-5 sm:text-lg lg:mx-0">
          Build confidence and fluency with Arya, your AI English teacher. Practice real conversations,
          get instant feedback, and connect with fellow learners worldwide.
        </p>

        <div className="mt-7 rounded-2xl border border-[#cbd9ff] bg-[#f8faff]">

          <div className="grid divide-y divide-[#d2ddff] grid-cols-3 divide-x divide-y-0">
            {heroStats.map((item) => (
              <div key={item.label} className="px-4 py-5 text-center sm:py-7">
                <p className="font-heading text-4xl font-bold text-[#666cfb] sm:text-5xl">{item.value}</p>
                <p className="mt-2 text-sm font-semibold text-[#5f6575]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
          <AnimatedElement delay={0.1}>
            <a
              href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&referrer=adjust_reftag%3Dc1EvN0tvx2Gy3%26utm_source%3DSocial%2BProd%26utm_campaign%3Dwebsite" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-sm border border-[#4b57d9] border-b-2 border-b-[#2f3faa] bg-[linear-gradient(180deg,#6f79ff_0%,#555bef_100%)] px-4 py-2 text-sm font-semibold text-white transition sm:w-auto"
            >
              Download App
            </a>
          </AnimatedElement>
          <AnimatedElement delay={0.2}>
            <a
              href="https://www.youtube.com/watch?v=E3f2W4ofK9s"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-[#cdd8ff] border-b-2 border-b-[#9eb0f2] bg-[linear-gradient(180deg,#ffffff_0%,#f0f4ff_100%)] px-4 py-2 text-sm font-semibold text-[#28314f] transition hover:border-[#b9c8ff] hover:bg-[linear-gradient(180deg,#ffffff_0%,#e8efff_100%)] active:translate-y-px active:border-b-[#8da0ea] sm:w-auto"
            >
              Watch Demo
            </a>
          </AnimatedElement>
        </div>
      </div>

      <div className="relative flex items-center justify-center bg-[url('/hero-bg.png')] bg-size-[100%_100%] bg-center bg-no-repeat">
        <div className="relative z-10 max-w-72 rounded-[34px] border border-white bg-black p-1 shadow-[0_20px_70px_rgba(53,89,233,0.38)] sm:max-w-80 sm:rounded-[38px]">
          <div className="rounded-4xl bg-white p-0.5">
            <div
              className="relative overflow-hidden rounded-[26px] border border-[#d6def7] bg-white"
              style={{
                backgroundImage: "url('/hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#444]">
                <span>9:41</span>
                <span>●●●</span>
              </div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-112 w-full object-cover sm:h-128"
              >
                <source src="https://www.mysivi.ai/video/Herovideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#b8bfd8]" />
          <span className="h-2 w-2 rounded-full bg-[#2d3447]" />
          <span className="h-2 w-2 rounded-full bg-[#b8bfd8]" />
        </div>
      </div>
    </section>
  );
}
