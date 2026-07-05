"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

export function FrontendChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <ThemeToggle />
    </>
  );
}
