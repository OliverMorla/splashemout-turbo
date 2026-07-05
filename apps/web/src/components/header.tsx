"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { cn } from "../../../../packages/utils/src/class-names";
import { buttonVariants } from "@splashemout/ui/button";
import {
  AnimatePresence,
  useReducedMotion,
} from "@splashemout/animation/motion/react";
import type { Variants } from "@splashemout/animation/motion/react";
import * as m from "@splashemout/animation/motion/react-m";

// These custom SVGs remove the dependency on external icon libraries in the web package,
// keeping the bundle tiny and guaranteeing compile success in this workspace.

interface IconProps {
  className?: string;
}

const ChevronDown = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ArrowRight = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Menu = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const AlertTriangle = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const IconInfo = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const IconCompass = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconHelpCircle = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const IconActivity = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const IconExternalLink = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const IconLayers = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconClock = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconHeart = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const IconUsers = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconUser = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconSettings = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconShield = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconBriefcase = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

// --- COMPONENT DATA STRUCTURES ---

interface NavItemData {
  href: Route;
  label: string;
  description: string;
  icon?: React.ComponentType<IconProps>;
  badge?: string;
}

interface NavSectionData {
  title: string;
  links: NavItemData[];
}

interface NavGroupData {
  id: string;
  label: string;
  sections?: NavSectionData[]; // Multi-column
  links?: NavItemData[]; // Single-column
}

const PAUSE_REASSURANCES: Record<string, string> = {
  overwhelmed:
    "There is no need to make a decision right now. Take all the time you need.",
  guarded:
    "Your pace is the correct pace. You don't have to explain or disclose anything.",
  "just-pausing":
    "A quiet space with no expectations. Feel free to just sit here and catch your breath.",
};

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = (reducedMotion: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y: reducedMotion ? 0 : 12,
    filter: reducedMotion ? "none" : "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
});

export function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(
    null,
  );
  const [pauseCue, setPauseCue] = useState<string | null>(null);
  const reducedMotion = !!useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdowns on route changes
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle outside click to close dropdowns
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Prevent background scrolling on mobile when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Reset pause cue when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setPauseCue(null);
    }
  }, [mobileMenuOpen]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (menuId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // 1. Discover Group (Single column)
  const discoverGroup: NavGroupData = {
    id: "discover",
    label: "Discover",
    links: [
      {
        href: "/about" as Route,
        label: "Philosophy",
        description:
          "Our core purpose, non-clinical stance, and why emotional autonomy matters.",
        icon: IconInfo,
      },
      {
        href: "/how-it-works" as Route,
        label: "How It Works",
        description: "A plain-language guide to our three-ring support model.",
        icon: IconCompass,
      },
      {
        href: "/resources" as Route,
        label: "Curated Resources",
        description:
          "A quiet, responsible selection of guides and external safety organizations.",
        icon: IconHelpCircle,
      },
      {
        href: "/pricing" as Route,
        label: "Pricing & Values",
        description:
          "Transparent pricing. Learn what is free and what supports our ecosystem.",
        icon: IconActivity,
      },
      {
        href: "/contact" as Route,
        label: "Get in Touch",
        description:
          "Reach our clinical advisors, partnerships lead, or support team.",
        icon: IconExternalLink,
      },
    ],
  };

  // 2. Rings of Care Group (Multi-column mega menu)
  const ringsGroup: NavGroupData = {
    id: "rings",
    label: "Rings of Care",
    sections: [
      {
        title: "Ring 1: Orientation",
        links: [
          {
            href: "/orientation" as Route,
            label: "Begin Orientation",
            description: "A soft, reflective space to orient to your feelings.",
            icon: IconCompass,
            badge: "P0",
          },
          {
            href: "/orientation/result" as Route,
            label: "Orientation Results",
            description: "Review your current emotional state mapping safely.",
            icon: IconLayers,
            badge: "P0",
          },
          {
            href: "/orientation/revisit" as Route,
            label: "Revisit Intake",
            description:
              "Update your reflection if your mental state has shifted.",
            icon: IconClock,
            badge: "P1",
          },
        ],
      },
      {
        title: "Ring 2: The Field",
        links: [
          {
            href: "/field" as Route,
            label: "Enter the Field",
            description:
              "Explore low-pressure invitations and supportive practices.",
            icon: IconActivity,
            badge: "P0",
          },
          {
            href: "/field/node/grounding" as Route,
            label: "Explore Nodes",
            description: "Psychoeducation and breathing tools.",
            icon: IconLayers,
            badge: "P0",
          },
          {
            href: "/field/saved" as Route,
            label: "Saved Support",
            description:
              "Return immediately to practices that helped you before.",
            icon: IconHeart,
            badge: "P1",
          },
          {
            href: "/field/re-entry" as Route,
            label: "Gentle Re-entry",
            description: "A shame-free welcoming space for returning users.",
            icon: IconClock,
            badge: "P0",
          },
          {
            href: "/regulation-room" as Route,
            label: "Regulation Room",
            description: "Facilitator-led group grounding sessions.",
            icon: IconUsers,
            badge: "P1",
          },
        ],
      },
      {
        title: "Ring 3: Resonance",
        links: [
          {
            href: "/resonance" as Route,
            label: "Our Model",
            description:
              "How therapist resonance is prioritized over marketplaces.",
            icon: IconHeart,
            badge: "P0",
          },
          {
            href: "/resonance/questions" as Route,
            label: "Matcher Questionnaire",
            description: "A low-pressure matching flow for relational fit.",
            icon: IconCompass,
            badge: "P0",
          },
          {
            href: "/resonance/matches" as Route,
            label: "Your Matches",
            description:
              "A small, curated set of therapists matching your system.",
            icon: IconUsers,
            badge: "P0",
          },
          {
            href: "/therapists/dr-alex-rivera" as Route,
            label: "Therapist Profile",
            description: "A detailed look at matching credentials and pacing.",
            icon: IconUser,
            badge: "P0",
          },
          {
            href: "/resonance/feedback" as Route,
            label: "Resonance Feedback",
            description:
              "Share how matches feel without pressure or score labels.",
            icon: IconClock,
            badge: "P1",
          },
          {
            href: "/groups" as Route,
            label: "Group Support",
            description: "Relational group spaces for guided support.",
            icon: IconUsers,
            badge: "P2",
          },
        ],
      },
    ],
  };

  // 3. Trust & Safety Group (Single column)
  const safetyGroup: NavGroupData = {
    id: "safety",
    label: "Trust & Safety",
    links: [
      {
        href: "/safety" as Route,
        label: "Safety & Boundaries",
        description:
          "Emergency care, crisis line boundaries, and clinician routing.",
        icon: IconShield,
      },
      {
        href: "/privacy" as Route,
        label: "Privacy Policy",
        description:
          "How we protect, anonymize, and secure your emotional logs.",
        icon: IconShield,
      },
      {
        href: "/terms" as Route,
        label: "Terms of Service",
        description:
          "Legal disclaimers, facilitator limits, and clinical boundaries.",
        icon: IconShield,
      },
      {
        href: "/immediate-help" as Route,
        label: "Immediate Help",
        description:
          "24/7 crisis resources, 988 Lifeline, and immediate emergency steps.",
        icon: AlertTriangle,
      },
    ],
  };

  // 4. Portals & Account Group (Multi-column)
  const portalsGroup: NavGroupData = {
    id: "portals",
    label: "Portals",
    sections: [
      {
        title: "User Space",
        links: [
          {
            href: "/login" as Route,
            label: "Sign In",
            description: "Welcome back. Returning is safe and calm.",
            icon: IconUser,
            badge: "P0",
          },
          {
            href: "/signup" as Route,
            label: "Create Account",
            description: "Store your logs and access Ring 3 support safely.",
            icon: IconUser,
            badge: "P0",
          },
          {
            href: "/forgot-password" as Route,
            label: "Reset Password",
            description: "A secure, anxiety-free way to regain access.",
            icon: IconClock,
            badge: "P1",
          },
          {
            href: "/account" as Route,
            label: "My Account",
            description: "Manage privacy exports, data deletion, and consent.",
            icon: IconSettings,
            badge: "P0",
          },
          {
            href: "/billing" as Route,
            label: "Billing Settings",
            description: "Manage plans separately from clinical spaces.",
            icon: IconSettings,
            badge: "P1",
          },
        ],
      },
      {
        title: "Therapist Workspace",
        links: [
          {
            href: "/therapists" as Route,
            label: "Resonance Model",
            description: "How we help clinicians connect without lead bidding.",
            icon: IconBriefcase,
            badge: "P0",
          },
          {
            href: "/for-therapists/apply" as Route,
            label: "Apply to Practice",
            description: "Join our verified practitioner registry.",
            icon: IconBriefcase,
            badge: "P0",
          },
          {
            href: "/therapist/onboarding" as Route,
            label: "Portal Onboarding",
            description: "Set up resonance values and practice boundaries.",
            icon: IconUser,
            badge: "P1",
          },
          {
            href: "/therapist/profile" as Route,
            label: "Edit Profile",
            description: "Manage availability notes and relational approach.",
            icon: IconSettings,
            badge: "P1",
          },
          {
            href: "/therapist/referrals" as Route,
            label: "Manage Referrals",
            description: "View fitting intakes without transactional ranking.",
            icon: IconUsers,
            badge: "P2",
          },
        ],
      },
    ],
  };

  // 5. Internal Ops Group (Single column)
  const opsGroup: NavGroupData = {
    id: "ops",
    label: "Internal Ops",
    links: [
      {
        href: "/admin" as Route,
        label: "Ops Command",
        description: "Secure, audited workspace for Splash 'Em Out administrators.",
        icon: IconSettings,
      },
      {
        href: "/admin/content" as Route,
        label: "Content Operations",
        description: "Edit support nodes, crisis copy, and regulation content.",
        icon: IconLayers,
      },
      {
        href: "/admin/therapists" as Route,
        label: "Therapist Verification",
        description: "Review credentials, licenses, and clinical applications.",
        icon: IconBriefcase,
      },
      {
        href: "/admin/safety" as Route,
        label: "Safety Monitor",
        description: "Track incident logs and maintain workspace boundaries.",
        icon: AlertTriangle,
      },
      {
        href: "/admin/insights" as Route,
        label: "Aggregate Insights",
        description: "Read metrics without compromising user privacy.",
        icon: IconActivity,
      },
    ],
  };

  const navGroups = [
    discoverGroup,
    ringsGroup,
    safetyGroup,
    portalsGroup,
    opsGroup,
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl">
      {/* Main Header Container */}
      <div
        ref={headerRef}
        className="rounded-2xl border border-border/40 bg-background/70 shadow-sm backdrop-blur-md transition-all duration-300 dark:shadow-black/20"
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 outline-none"
          >
            <div className="relative flex h-8 w-8 items-center justify-center transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-ring/50 rounded-lg">
              <Image
                src="/images/brand/logo-transparent.webp"
                alt="Splash 'Em Out Logo"
                width={32}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-serif text-lg font-light tracking-wide text-foreground transition-colors duration-300 group-hover:text-brand">
              Splash 'Em Out
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1.5"
            aria-label="Main Navigation"
          >
            {navGroups.map((group) => {
              const isOpen = activeMenu === group.id;
              return (
                <div
                  key={group.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(group.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded-lg outline-none focus-visible:bg-muted focus-visible:text-foreground",
                      isOpen
                        ? "bg-muted/60 text-foreground"
                        : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() =>
                      setActiveMenu(activeMenu === group.id ? null : group.id)
                    }
                  >
                    {group.label}
                    <ChevronDown
                      className={`size-3.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown Panel */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 z-50 mt-2.5 -translate-x-1/2 w-screen max-w-sm rounded-xl border border-border bg-background p-6 shadow-lg shadow-foreground/5 transition-all duration-300 ease-out dark:shadow-black/25",
                      group.sections
                        ? group.sections.length === 2
                          ? "lg:max-w-2xl"
                          : "lg:max-w-4xl"
                        : "lg:max-w-md",
                      isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none",
                    )}
                  >
                    {/* Multi-column layout */}
                    {group.sections ? (
                      <div
                        className={cn(
                          "grid grid-cols-1 gap-8",
                          group.sections.length === 2
                            ? "lg:grid-cols-2"
                            : "lg:grid-cols-3",
                        )}
                      >
                        {group.sections.map((section) => (
                          <div
                            key={section.title}
                            className="flex flex-col gap-3.5"
                          >
                            <span className="border-b border-border/30 pb-2 mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent/90">
                              {section.title}
                            </span>
                            <div className="flex flex-col gap-2.5">
                              {section.links.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                      "group/link flex flex-col gap-1 p-2.5 rounded-lg hover:bg-muted/60 transition-all duration-200",
                                    )}
                                  >
                                    <div className="flex items-center gap-1.5 justify-between">
                                      <span className="flex items-center gap-1.5 text-[13px] font-medium text-foreground transition-colors group-hover/link:text-brand">
                                        {IconComponent && (
                                          <IconComponent className="size-4 text-muted-foreground/50 group-hover/link:text-brand/80" />
                                        )}
                                        {link.label}
                                      </span>
                                      {link.badge && (
                                        <span className="text-[9px] font-mono border border-border/40 bg-muted px-1.5 py-0.5 rounded text-muted-foreground/75">
                                          {link.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] leading-relaxed text-muted-foreground transition-colors group-hover/link:text-foreground/80">
                                      {link.description}
                                    </p>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Single-column layout */
                      <div className="flex flex-col gap-2.5">
                        {group.links?.map((link) => {
                          const IconComponent = link.icon;
                          const isImmediateHelp =
                            link.href === ("/immediate-help" as Route);
                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={cn(
                                "group/link flex gap-3.5 p-2.5 rounded-lg transition-all duration-200",
                                isImmediateHelp
                                  ? "bg-brand/5 hover:bg-brand/10 border border-brand/20"
                                  : "hover:bg-muted/60",
                              )}
                            >
                              {IconComponent && (
                                <div
                                  className={cn(
                                    "flex size-8 items-center justify-center rounded-lg shrink-0 transition-colors",
                                    isImmediateHelp
                                      ? "bg-brand/10 text-brand"
                                      : "bg-muted/65 text-muted-foreground group-hover/link:bg-accent/5 group-hover/link:text-accent",
                                  )}
                                >
                                  <IconComponent className="size-[18px]" />
                                </div>
                              )}
                              <div className="flex flex-col gap-1">
                                <span
                                  className={cn(
                                    "text-[13px] font-medium flex items-center gap-1.5 transition-colors",
                                    isImmediateHelp
                                      ? "text-brand"
                                      : "text-foreground group-hover/link:text-brand",
                                  )}
                                >
                                  {link.label}
                                  {isImmediateHelp && (
                                    <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                                  )}
                                </span>
                                <p className="text-[11px] leading-relaxed text-muted-foreground">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Right Area: Call-to-action */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href={"/start" as Route}
              className={buttonVariants({
                variant: "matte",
                size: "lg",
                className: "px-4 text-[12px] tracking-wide gap-1.5 group/btn",
              })}
            >
              <span>Begin Gently</span>
              <ArrowRight className="size-3.5 opacity-90 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Actions: Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/40 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="overflow-visible"
                aria-hidden="true"
              >
                <m.path
                  animate={
                    mobileMenuOpen ? { d: "M5 5L13 13" } : { d: "M3 5H15" }
                  }
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
                <m.path
                  animate={
                    mobileMenuOpen
                      ? { d: "M9 9H9", opacity: 0 }
                      : { d: "M3 9H15", opacity: 1 }
                  }
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
                <m.path
                  animate={
                    mobileMenuOpen ? { d: "M13 5L5 13" } : { d: "M3 13H15" }
                  }
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{
              opacity: 0,
              filter: reducedMotion ? "none" : "blur(6px)",
            }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{
              opacity: 0,
              filter: reducedMotion ? "none" : "blur(6px)",
            }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 flex flex-col overflow-y-auto bg-background lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-8 px-5 pt-6 pb-8 sm:px-8">
              {/* Quiet Pause Grounding Moment */}
              <m.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex flex-col gap-3 rounded-xl border border-border/45 bg-muted/55 p-4 transition-colors dark:bg-muted/65"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Breathing Orb indicator */}
                    <div className="relative flex size-4 items-center justify-center">
                      <m.div
                        animate={
                          reducedMotion
                            ? {}
                            : {
                                scale: [1, 1.35, 1],
                                opacity: [0.6, 1, 0.6],
                              }
                        }
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="size-2.5 rounded-full bg-brand/30 border border-brand/50"
                      />
                    </div>
                    <span className="font-serif text-[13px] font-medium tracking-wide text-foreground/80">
                      Pause for a moment
                    </span>
                  </div>
                  {pauseCue && (
                    <button
                      type="button"
                      onClick={() => setPauseCue(null)}
                      className="text-[10px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: "overwhelmed", label: "Overwhelmed" },
                    { id: "guarded", label: "Guarded" },
                    { id: "just-pausing", label: "Just Pausing" },
                  ].map((cue) => {
                    const isActive = pauseCue === cue.id;
                    return (
                      <button
                        key={cue.id}
                        type="button"
                        onClick={() => setPauseCue(isActive ? null : cue.id)}
                        className={cn(
                          "px-3 py-1.5 text-[11px] font-medium rounded-full border transition-all duration-300",
                          isActive
                            ? "bg-brand/10 border-brand/40 text-brand font-semibold"
                            : "bg-background/40 border-border/20 text-muted-foreground hover:border-border/60 hover:text-foreground",
                        )}
                      >
                        {cue.label}
                      </button>
                    );
                  })}
                </div>

                {/* Reassurance text inside Pause Moment */}
                <AnimatePresence mode="wait">
                  {pauseCue ? (
                    <m.div
                      key={pauseCue}
                      initial={{ opacity: 0, height: 0, filter: "blur(2px)" }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        filter: "blur(0px)",
                      }}
                      exit={{ opacity: 0, height: 0, filter: "blur(2px)" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-serif text-[12px] italic leading-relaxed text-brand/90 pt-2 border-t border-border/10">
                        {PAUSE_REASSURANCES[pauseCue]}
                      </p>
                    </m.div>
                  ) : (
                    <m.p
                      key="default"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 0.8, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[10.5px] leading-relaxed text-muted-foreground/80"
                    >
                      A gentle, self-paced space. If things feel heavy, you are
                      allowed to just sit with this menu.
                    </m.p>
                  )}
                </AnimatePresence>
              </m.div>

              {/* Nav Groups: a quiet table of contents, bound by a single spine */}
              <m.nav
                aria-label="Mobile Navigation"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="relative flex flex-1 flex-col pl-6"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-2 bottom-2 left-[7px] w-px bg-border/50"
                />
                {navGroups.map((group) => {
                  const isExpanded = mobileExpandedGroup === group.id;
                  return (
                    <m.div
                      key={group.id}
                      variants={itemVariants(reducedMotion)}
                      className="relative border-b border-border/15 py-1"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left text-[22px] font-serif font-light text-foreground/90 transition-colors hover:text-brand outline-none"
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setMobileExpandedGroup(isExpanded ? null : group.id)
                        }
                      >
                        <span className="tracking-wide">{group.label}</span>
                        <ChevronDown
                          className={`size-4 text-muted-foreground/75 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-brand" : ""
                          }`}
                        />
                      </button>

                      {/* Smooth accordion height with m.div */}
                      <m.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.38,
                          ease: smoothEase,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 mb-3 flex flex-col gap-4 rounded-r-lg border-l border-border/30 bg-muted/35 py-2 pr-1 pl-3 dark:bg-muted/45">
                          {group.sections ? (
                            /* Multi-column groupings rendered sequentially */
                            group.sections.map((section) => (
                              <div
                                key={section.title}
                                className="flex flex-col gap-2.5"
                              >
                                <span className="font-serif text-[10px] font-semibold uppercase tracking-[0.18em] text-accent/80 dark:text-accent/90">
                                  {section.title}
                                </span>
                                <div className="flex flex-col gap-2">
                                  {section.links.map((link) => {
                                    const IconComponent = link.icon;
                                    return (
                                      <Link
                                        key={link.href}
                                        href={link.href}
                                        className="group/mob-link flex items-start gap-3 rounded-lg p-2 hover:bg-muted/45 transition-colors"
                                      >
                                        {IconComponent && (
                                          <div className="flex size-7 shrink-0 items-center justify-center rounded bg-muted/50 text-muted-foreground transition-colors group-hover/mob-link:bg-brand/5 group-hover/mob-link:text-brand">
                                            <IconComponent className="size-4" />
                                          </div>
                                        )}
                                        <div className="flex flex-col gap-0.5">
                                          <span className="text-xs font-semibold text-foreground group-hover/mob-link:text-brand transition-colors flex items-center gap-1.5">
                                            {link.label}
                                            {link.badge && (
                                              <span className="text-[8px] font-mono border border-border/30 bg-muted px-1.5 py-0.5 rounded text-muted-foreground/75">
                                                {link.badge}
                                              </span>
                                            )}
                                          </span>
                                          <p className="text-[10.5px] leading-relaxed text-muted-foreground/85">
                                            {link.description}
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))
                          ) : (
                            /* Simple lists */
                            <div className="flex flex-col gap-2">
                              {group.links?.map((link) => {
                                const IconComponent = link.icon;
                                const isImmediateHelp =
                                  link.href === ("/immediate-help" as Route);
                                return (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                      "group/mob-link flex items-start gap-3 rounded-lg p-2 transition-colors",
                                      isImmediateHelp
                                        ? "bg-brand/5 border border-brand/10 hover:bg-brand/10"
                                        : "hover:bg-muted/45",
                                    )}
                                  >
                                    {IconComponent && (
                                      <div
                                        className={cn(
                                          "flex size-7 shrink-0 items-center justify-center rounded transition-colors",
                                          isImmediateHelp
                                            ? "bg-brand/10 text-brand"
                                            : "bg-muted/50 text-muted-foreground group-hover/mob-link:bg-brand/5 group-hover/mob-link:text-brand",
                                        )}
                                      >
                                        <IconComponent className="size-4" />
                                      </div>
                                    )}
                                    <div className="flex flex-col gap-0.5">
                                      <span
                                        className={cn(
                                          "text-xs font-semibold flex items-center gap-1.5 transition-colors",
                                          isImmediateHelp
                                            ? "text-brand"
                                            : "text-foreground group-hover/mob-link:text-brand",
                                        )}
                                      >
                                        {link.label}
                                      </span>
                                      <p className="text-[10.5px] leading-relaxed text-muted-foreground/85">
                                        {link.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </m.div>
                    </m.div>
                  );
                })}
              </m.nav>

              {/* Mobile Footer CTA */}
              <m.div
                variants={itemVariants(reducedMotion)}
                className="mt-auto flex flex-col gap-2.5 pt-4 border-t border-border/20"
              >
                <Link
                  href={"/start" as Route}
                  className={buttonVariants({
                    variant: "matte",
                    size: "lg",
                    className:
                      "w-full h-11 rounded-xl text-[12px] tracking-wide",
                  })}
                >
                  Begin Orientation Gently
                </Link>
                <p className="text-center text-[10.5px] leading-relaxed text-muted-foreground/70">
                  You can close this any time. Nothing here is tracked against
                  you.
                </p>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
