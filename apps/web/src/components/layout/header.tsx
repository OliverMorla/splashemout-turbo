"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { buttonVariants } from "@splashemout/ui/button";
import { ThemeToggle } from "@splashemout/ui/theme-toggle";
import { cn } from "../../../../../packages/utils/src/class-names";
import { primaryNav, type NavLink } from "@/config/nav";

function ServiceLink({ item }: { item: NavLink }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="group/link flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-brand/8"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-brand transition-colors group-hover/link:border-brand/30 group-hover/link:bg-brand/10">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">
          {item.label}
        </span>
        <span className="mt-0.5 text-xs leading-snug text-muted-foreground">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="glass-header mx-auto max-w-7xl rounded-2xl backdrop-blur-xs">
        <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-5 sm:py-2.5">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/brand/logo.webp"
              alt="Splash 'Em Out"
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-contain"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center lg:flex"
          >
            {primaryNav.map((item) =>
              item.items ? (
                <div key={item.label} className="group/nav relative">
                  <Link
                    href={item.href}
                    aria-haspopup="true"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground group-hover/nav:text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180"
                      aria-hidden="true"
                    />
                  </Link>

                  <div
                    className={cn(
                      "invisible absolute top-full left-1/2 z-50 -translate-x-1/2 translate-y-1 scale-95 opacity-0 transition-all duration-200 ease-out",
                      item.items.length > 2 ? "w-[min(34rem,90vw)]" : "w-[min(20rem,90vw)]",
                      "group-hover/nav:visible group-hover/nav:translate-y-3 group-hover/nav:scale-100 group-hover/nav:opacity-100",
                      "group-focus-within/nav:visible group-focus-within/nav:translate-y-3 group-focus-within/nav:scale-100 group-focus-within/nav:opacity-100",
                    )}
                  >
                    <div className="glass-panel origin-top rounded-2xl p-3">
                      <div
                        className={cn(
                          "grid gap-1",
                          item.items.length > 2 ? "grid-cols-2" : "grid-cols-1",
                        )}
                      >
                        {item.items.map((sub) => (
                          <ServiceLink key={sub.href} item={sub} />
                        ))}
                      </div>
                      <div className="mt-1 border-t border-border/70 pt-2">
                        <Link
                          href={item.href}
                          className="block rounded-lg px-2.5 py-2 text-xs font-semibold text-brand hover:bg-brand/8"
                        >
                          View all {item.label.toLowerCase()} &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div id="mobile-nav" data-open={mobileOpen} className="nav-collapse lg:hidden">
          <div className="overflow-hidden">
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 border-t border-border/70 px-3 pt-2 pb-4"
            >
              {primaryNav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-2.5 py-2 text-sm font-semibold text-foreground"
                  >
                    {item.label}
                  </Link>
                  {item.items ? (
                    <div className="ml-2 flex flex-col gap-0.5 border-l border-border/70 pl-3">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="mt-2 flex items-center justify-end gap-2 px-2.5">
                <ThemeToggle label="Toggle theme" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
