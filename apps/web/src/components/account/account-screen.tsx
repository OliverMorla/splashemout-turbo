"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { useRouter } from "next/navigation";
import {
  Building2,
  CreditCard,
  LogOut,
  Mail,
  MapPin,
  Package,
  Phone,
  Tag,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";
import { EmptyStateCard } from "./empty-state-card";

const SUPPORT_EMAIL = "splashemoutlaundry@gmail.com";

// Demo account page: renders with a fake user so it's browsable without auth.
const DEMO_USER = {
  name: "Jordan Casey",
  email: "jordan.casey@example.com",
};

const QUICK_ACTIONS: {
  label: string;
  href: Route;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Schedule pickup",
    href: "/schedule" as Route,
    description: "Book your next wash-and-fold or delivery.",
    icon: Truck,
  },
  {
    label: "Find a location",
    href: "/locations" as Route,
    description: "Hours, addresses, and directions.",
    icon: MapPin,
  },
  {
    label: "View pricing",
    href: "/pricing" as Route,
    description: "Per-pound rates and minimums.",
    icon: Tag,
  },
  {
    label: "Request a bid",
    href: "/commercial/request-a-bid" as Route,
    description: "Recurring service for your business.",
    icon: Building2,
  },
];

export function AccountScreen() {
  const router = useRouter();
  const user = DEMO_USER;
  const firstName = user.name.trim().split(/\s+/)[0];

  function handleSignOut() {
    router.push("/login");
  }

  return (
    <div className="mx-auto min-h-svh max-w-5xl px-6 py-10 sm:px-10 sm:py-14">
      <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex w-fit items-center gap-2.5">
          <Image
            src="/images/brand/logo.webp"
            alt="Splash 'Em Out"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="font-sans text-sm font-bold tracking-wide text-foreground uppercase">
            Splash &apos;Em Out
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground">
              {user.name}
            </p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleSignOut}
          >
            <LogOut aria-hidden="true" />
            Sign out
          </Button>
        </div>
      </header>

      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Central KY account
        </p>
        <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
          {`Welcome back, ${firstName}.`}
        </h1>
      </div>

      {/* The claim stub: the dashboard's one signature element, continuing
          the login screen's claim-ticket idea into the account itself. */}
      <div className="claim-stub mb-8 rounded-2xl border border-border/60 px-6 pt-8 pb-6 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-md">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase opacity-70">
              Next pickup
            </p>
            <p className="mt-2 text-base leading-6">
              No pickup scheduled yet. Book one and it&apos;ll show up here
              with your pickup window.
            </p>
          </div>
          <span
            className="shrink-0 rotate-3 rounded-sm border-2 border-current px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.16em] uppercase opacity-70"
            aria-hidden="true"
          >
            Not scheduled
          </span>
        </div>
        <Link
          href={"/schedule" as Route}
          className={cn(
            buttonVariants({ variant: "brand", size: "lg" }),
            "mt-5",
          )}
        >
          <Truck aria-hidden="true" />
          Schedule a pickup
        </Link>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {QUICK_ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="group flex flex-col gap-2 rounded-xl border border-border bg-background p-4 transition-colors hover:border-brand/40 hover:bg-muted"
          >
            <action.icon
              className="h-4 w-4 text-brand"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold text-foreground">
              {action.label}
            </span>
            <span className="text-xs leading-5 text-muted-foreground">
              {action.description}
            </span>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <EmptyStateCard
          icon={Package}
          eyebrow="Recent orders"
          title="No orders yet"
          description="Once you schedule a pickup or drop-off, your order history and status will show up here."
        />

        <EmptyStateCard
          icon={MapPin}
          eyebrow="Primary address"
          title="No address on file"
          description="Address management is coming soon. For now, you'll give us your pickup address when you schedule."
          action={
            <Button type="button" variant="outline" size="sm" disabled>
              Add an address
            </Button>
          }
        />

        <EmptyStateCard
          icon={CreditCard}
          eyebrow="Payment status"
          title="No payment method on file"
          description="We'll ask for a payment method the first time it's needed for an order."
        />

        <EmptyStateCard
          icon={Phone}
          eyebrow="Need help?"
          title="Talk to a real person"
          description="Call or email us about an order, a pickup, or anything else."
          action={
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-2 font-medium text-foreground hover:underline"
              >
                <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                {contactInfo.phoneDisplay}
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex items-center gap-2 font-medium text-foreground hover:underline"
              >
                <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                {SUPPORT_EMAIL}
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
}
