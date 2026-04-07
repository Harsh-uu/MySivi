"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    console.log("Toggle menu called");
    setIsMenuOpen((prev) => {
      const newState = !prev;
      console.log("New menu state:", newState);
      return newState;
    });
  };

  useEffect(() => {
    const button = menuButtonRef.current;
    if (!button) return;

    const handleClick = (e: Event) => {
      console.log("Native click event fired");
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    };

    button.addEventListener("click", handleClick);
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMobileNav = () => {
    closeMenu();
    const target = document.getElementById("case-study");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border border-[#dbe3ff] bg-[#fafbff] shadow-[0_10px_24px_rgba(53,89,233,0.1)]">
      <nav className="mx-auto w-full max-w-304 px-4 sm:px-6">
        <div className="flex w-full items-center justify-between px-1 py-3 sm:px-3">
          <a href="#" aria-label="MySivi home" className="flex items-center gap-2">
            <Image src="/logo.png" alt="MySivi logo" width={32} height={32} className="h-8 w-8 rounded-sm" />
            <span className="font-heading text-xl font-bold tracking-tight text-black">MySivi</span>
          </a>

          <div className="hidden items-center gap-2 sm:gap-3 md:flex">
            <a
              href="#case-study"
              className="inline-flex cursor-pointer items-center justify-center rounded-md border border-[#cdd8ff] border-b-2 border-b-[#9eb0f2] bg-[linear-gradient(180deg,#ffffff_0%,#f0f4ff_100%)] px-3 py-2 text-xs font-semibold text-[#28314f] transition hover:border-[#b9c8ff] hover:bg-[linear-gradient(180deg,#ffffff_0%,#e8efff_100%)] active:translate-y-px active:border-b-[#8da0ea] sm:px-4 sm:text-sm"
            >
              Influencer Program
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&referrer=adjust_reftag%3Dc1EvN0tvx2Gy3%26utm_source%3DSocial%2BProd%26utm_campaign%3Dwebsite"
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center justify-center rounded-sm border border-[#4b57d9] border-b-2 border-b-[#2f3faa] bg-[linear-gradient(180deg,#6f79ff_0%,#555bef_100%)] px-3 py-2 text-xs font-semibold text-white transition sm:px-4 sm:text-sm"
            >
              Download App
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-[#cdd8ff] border-b-2 border-b-[#9eb0f2] bg-[linear-gradient(180deg,#ffffff_0%,#f0f4ff_100%)] text-[#34426f] transition active:translate-y-px active:border-b-[#8da0ea] focus:outline-none focus:ring-2 focus:ring-[#666cfb] focus:ring-offset-2 md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div id="mobile-navigation" className="border-t border-[#dbe3ff] pb-3 pt-3 md:hidden">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={handleMobileNav}
                className="inline-flex w-full items-center justify-center rounded-md border border-[#cdd8ff] border-b-2 border-b-[#9eb0f2] bg-[linear-gradient(180deg,#ffffff_0%,#f0f4ff_100%)] px-4 py-2 text-sm font-semibold text-[#28314f]"
              >
                Influencer Program
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&referrer=adjust_reftag%3Dc1EvN0tvx2Gy3%26utm_source%3DSocial%2BProd%26utm_campaign%3Dwebsite"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-sm border border-[#4b57d9] border-b-2 border-b-[#2f3faa] bg-[linear-gradient(180deg,#6f79ff_0%,#555bef_100%)] px-4 py-2 text-sm font-semibold text-white"
              >
                Download App
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
