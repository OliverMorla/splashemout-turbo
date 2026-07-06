import {
  Building2,
  ClipboardList,
  Shirt,
  Truck,
  WashingMachine,
  type LucideIcon,
} from "lucide-react";
import type { Route } from "next";

// These routes follow docs/ROUTES.md and are built out incrementally; `Route`
// is Next's typed-routes escape hatch for hrefs whose pages don't exist yet.
export type NavLink = {
  label: string;
  href: Route;
  description: string;
  icon: LucideIcon;
};

export type NavItem = {
  label: string;
  href: Route;
  description: string;
  items?: NavLink[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Locations",
    href: "/locations" as Route,
    description: "Find hours, addresses, and directions for every laundromat.",
  },
  {
    label: "Services",
    href: "/services" as Route,
    description: "Every way Splash 'Em Out handles laundry day.",
    items: [
      {
        label: "Pickup & Delivery",
        href: "/services/pickup-and-delivery" as Route,
        description: "We grab the bag, wash it, and bring it back.",
        icon: Truck,
      },
      {
        label: "Wash & Fold",
        href: "/services/wash-and-fold" as Route,
        description: "Next-day drop-off service at $1.69/lb, $15 minimum.",
        icon: Shirt,
      },
      {
        label: "Self-Service Laundry",
        href: "/services/self-service-laundry" as Route,
        description: "Attended laundromats with large, ready machines.",
        icon: WashingMachine,
      },
      {
        label: "Commercial Laundry",
        href: "/services/commercial-laundry" as Route,
        description: "Recurring pickup for linens, towels, and uniforms.",
        icon: Building2,
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing" as Route,
    description: "Per-pound pricing, minimums, and turnaround up front.",
  },
  {
    label: "Commercial",
    href: "/commercial" as Route,
    description: "Recurring service for businesses that run on clean linens.",
    items: [
      {
        label: "Commercial Laundry",
        href: "/commercial" as Route,
        description: "Custom pickup, volume, and turnaround for your business.",
        icon: Building2,
      },
      {
        label: "Request a Bid",
        href: "/commercial/request-a-bid" as Route,
        description: "Send your details and get pricing back fast.",
        icon: ClipboardList,
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact" as Route,
    description: "Call, email, or route a question to the right location.",
  },
];

export const contactInfo = {
  phoneDisplay: "859-268-4330",
  phoneHref: "tel:+18592684330",
  scheduleHref: "/schedule",
} as const;

export const footerLegalNav: { label: string; href: Route }[] = [
  { label: "Privacy Policy", href: "/privacy" as Route },
  { label: "Terms of Service", href: "/terms" as Route },
  { label: "Accessibility", href: "/accessibility" as Route },
];
