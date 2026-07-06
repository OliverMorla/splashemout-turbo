import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, Phone } from "lucide-react";
import { ButtonWave, buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo, footerLegalNav, primaryNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

const services = primaryNav.find((item) => item.label === "Services")?.items ?? [];
const company = primaryNav.filter((item) =>
  ["Locations", "Pricing", "Commercial", "Contact"].includes(item.label),
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-footer-bg text-footer-fg">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pt-16 pb-8 sm:px-10 sm:pt-20">
        <div className="flex flex-col gap-8 border-b border-footer-fg/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-md flex-col gap-4">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <Image
                src="/images/brand/logo.webp"
                alt="Splash 'Em Out"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-serif text-xl">{siteConfig.name}</span>
            </Link>
            <p className="text-sm leading-relaxed text-footer-fg/60">
              Attended laundromats, wash-and-fold, and pickup &amp; delivery
              across Central Kentucky. Laundry day, handled.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <a
              href={contactInfo.phoneHref}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-footer-fg/15 px-5 text-sm font-medium text-footer-fg/85 transition-colors hover:border-footer-accent/40 hover:text-footer-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contactInfo.phoneDisplay}
            </a>
            <Link
              href={contactInfo.scheduleHref as Route}
              className={cn(
                buttonVariants({ variant: "wave", size: "lg" }),
                "h-11 gap-1.5 pr-4 pl-5 text-sm font-semibold hover:gap-2.5 hover:pr-5 hover:pl-5",
              )}
            >
              <ButtonWave />
              <span className="relative">Schedule pickup</span>
              <ArrowRight
                className="relative h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <nav aria-label="Services">
            <h2 className="text-xs font-semibold tracking-[0.08em] text-footer-fg/60 uppercase">
              Services
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-footer-fg/85 transition-colors hover:text-footer-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-xs font-semibold tracking-[0.08em] text-footer-fg/60 uppercase">
              Company
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-footer-fg/85 transition-colors hover:text-footer-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-xs font-semibold tracking-[0.08em] text-footer-fg/60 uppercase">
              Legal
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLegalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-footer-fg/85 transition-colors hover:text-footer-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.08em] text-footer-fg/60 uppercase">
              Locally Owned
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-footer-fg/60">
              Fully attended locations, large machines, and real people
              answering the phone across Central Kentucky.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start gap-4 border-t border-footer-fg/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-footer-fg/60">
            &copy; {year} {siteConfig.name}. Central Kentucky.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-xs font-medium text-footer-fg/60 transition-colors hover:text-footer-accent"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-footer-fg/15 transition-colors group-hover:border-footer-accent/40">
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative -mt-4 w-full overflow-hidden text-center select-none sm:mt-8"
      >
        <span
          className={cn(
            "inline-block bg-linear-to-b from-footer-accent/55 to-transparent bg-clip-text font-serif font-bold text-transparent uppercase whitespace-nowrap",
            "text-[clamp(3.5rem,15vw,12rem)] leading-[0.86]",
          )}
        >
          Splash &apos;Em Out
        </span>
      </div>
    </footer>
  );
}
