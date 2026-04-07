import Image from "next/image";
import { footerColumns } from "./content";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:contact@mysivi.ai",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a1 1 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-black/8 bg-white pb-8 pt-12 text-black sm:pt-16">
      <div className="mx-auto w-full max-w-304 px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          
          {/* Brand column — left on desktop, top on mobile */}
          <div className="text-center lg:text-left lg:max-w-xs">
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Image
                src="/logo.png"
                alt="MySivi logo"
                width={30}
                height={30}
                className="h-7.5 w-7.5 rounded-sm"
              />
              <span className="font-heading text-2xl font-semibold text-black">
                MySivi
              </span>
            </div>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-black/55 lg:mx-0">
              Empowering millions to master English speaking with AI-powered
              learning and real conversation practice.
            </p>
            <div
              className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start"
              aria-label="Social links"
            >
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="group grid h-9 w-9 place-items-center rounded-md border border-black/10 bg-white text-black/40 transition-all duration-150 hover:border-[#666cfb]/40 hover:bg-[#666cfb]/6 hover:text-[#666cfb]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns — right on desktop, bottom on mobile */}
          <div className="grid grid-cols-1 justify-items-center gap-8 text-center sm:grid-cols-2 sm:justify-items-start sm:text-left lg:ml-auto lg:grid-cols-3 lg:justify-items-end lg:text-right">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-black/35">
                  {column.title}
                </div>
                <ul className="grid gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-black/60 transition-colors duration-150 hover:text-[#666cfb]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="w-full sm:w-auto">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-black/35">
                Get In Touch
              </div>
              <ul className="grid gap-2.5">
                <li>
                  <a
                    href="mailto:contact@mysivi.ai"
                    className="text-sm text-black/60 transition-colors duration-150 hover:text-[#666cfb]"
                  >
                    contact@mysivi.ai
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916289618636"
                    className="text-sm text-black/60 transition-colors duration-150 hover:text-[#666cfb]"
                  >
                    +91 62896 18636
                  </a>
                </li>
                <li className="text-sm text-black/60">Bangalore, India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-black/8 pt-5 text-center text-xs text-black/35">
          <span>© 2026 MySivi. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
