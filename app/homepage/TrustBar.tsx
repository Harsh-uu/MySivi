import Image from "next/image";
import { trustLogos } from "./content";

const trustLogoAssets: Record<string, { src: string; width: number; height: number }> = {
  "Y Combinator": { src: "/YC.png", width: 176, height: 114 },
  "Google for Startups": { src: "/google.png", width: 124, height: 80 },
  "Microsoft for Startups": { src: "/microsoft.jpg", width: 144, height: 70 },
  "NVIDIA Inception": { src: "/Nvidia.png", width: 144, height: 90 },
  "AWS Gen AI Accelerator": { src: "/aws.png", width: 44, height: 50 },
};

export default function TrustBar() {
  const marqueeLogos = [...trustLogos, ...trustLogos, ...trustLogos];

  return (
    <section className="mx-auto w-full max-w-304 px-4 py-6 sm:px-6 sm:py-8">
      <h2 className="text-center px-4 font-heading text-2xl font-semibold text-black sm:text-4xl">
        Built with support from top startup programs
      </h2>

      <div className="mt-5 overflow-hidden py-3">
        <div className="flex w-max items-center gap-14 sm:gap-20" style={{ animation: "marquee 22s linear infinite" }}>
          {marqueeLogos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="flex shrink-0 items-center justify-center">
              <Image
                src={trustLogoAssets[logo]?.src ?? "/logo.png"}
                alt={logo}
                width={trustLogoAssets[logo]?.width ?? 120}
                height={trustLogoAssets[logo]?.height ?? 36}
                className="w-auto object-contain"
                style={{
                  height: `${trustLogoAssets[logo]?.height ?? 36}px`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}