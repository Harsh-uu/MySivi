import Image from "next/image";
import { AnimatedElement } from "./AnimatedElement";

export default function CtaSection() {
  return (
    <section className="bg-[#090a14] py-12 sm:py-16">
      <div className="mx-auto grid w-full max-w-304 grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="text-center text-white lg:text-left">
          <AnimatedElement>
            <h2 className="font-heading text-4xl font-semibold leading-none text-white sm:text-5xl lg:text-6xl">
              Ready to Master <br />English Speaking?
            </h2>
          </AnimatedElement>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg lg:mx-0">
            Join 4+ million learners who have transformed their English skills with MySivi.
            Download now and start your free trial.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <AnimatedElement delay={0.1}>
              <a
                href="https://www.mysivi.ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center rounded-xl border border-white/25 border-b-4 border-b-black/50 bg-white/5 transition"
              >
                <Image src="/appStore.svg" alt="Download on the App Store" width={155} height={52} className="h-auto w-37" />
              </a>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <a
                href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&referrer=adjust_reftag%3Dc1EvN0tvx2Gy3%26utm_source%3DSocial%2BProd%26utm_campaign%3Dwebsite"
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center rounded-xl border border-white/25 border-b-4 border-b-black/50 bg-white/5 transition"
              >
                <Image src="/playstore.png" alt="Get it on Google Play" width={165} height={52} className="h-auto w-41.25" />
              </a>
            </AnimatedElement>
          </div>
        </div>

        <div className="mx-auto flex w-fit justify-center bg-white p-3 sm:p-4 lg:justify-end">
          <Image src="/qr.png" alt="Download MySivi App QR" width={280} height={280} className="h-52 w-52 object-contain" />
        </div>
      </div>
    </section>
  );
}
