"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import {
  Truck,
  MapPin,
  WashingMachine,
  Shirt,
  Building2,
  ClipboardList,
  ArrowRight,
  Phone,
  Clock,
  Sparkles,
  CheckCircle2,
  Navigation,
  Check,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  BlurDiv,
  BlurH1,
  BlurInViewDiv,
  BlurP,
} from "@splashemout/animation/motion/components";
import { buttonVariants, ButtonWave } from "@splashemout/ui/button";
import { cn } from "../../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";

// 1. Services Configuration
const SERVICES = [
  {
    id: "pickup",
    name: "Pickup & Delivery",
    tagline: "We grab the bag, wash it, and bring it back.",
    price: "$1.99/lb",
    minimum: "$30 minimum",
    turnaround: "24-hour return",
    icon: Truck,
    color: "text-brand bg-brand/10 border-brand/20",
    details: [
      "Contactless doorstep pickup",
      "Custom washing preferences",
      "Premium hypoallergenic options",
      "Text tracking at every step",
    ],
    ctaHref: "https://splashemout.curbsidelaundries.com/",
    ctaText: "Schedule Pickup",
  },
  {
    id: "wash-fold",
    name: "Drop-off Wash & Fold",
    tagline: "Next-day drop-off service at our clean counters.",
    price: "$1.69/lb",
    minimum: "$15 minimum",
    turnaround: "Next-day ready",
    icon: Shirt,
    color: "text-accent bg-accent/10 border-accent/20",
    details: [
      "Drop off at any location",
      "We sort, wash, dry, and fold",
      "Neatly bundled and wrapped",
      "Saves hours of chore time",
    ],
    ctaHref: "/locations",
    ctaText: "Find Drop-off Location",
  },
  {
    id: "self-service",
    name: "Self-Service Laundry",
    tagline: "Attended laundromats with massive, ready machines.",
    price: "Varies",
    minimum: "No minimum",
    turnaround: "Done in 45 mins",
    icon: WashingMachine,
    color: "text-promo bg-promo/10 border-promo/20",
    details: [
      "State-of-the-art high-capacity washers",
      "Turbo-charged express dryers",
      "Reloadable payment cards",
      "Always attended, bright & clean",
    ],
    ctaHref: "/locations",
    ctaText: "See Machines & Rates",
  },
  {
    id: "commercial",
    name: "Commercial Laundry",
    tagline: "Recurring pickup for linens, towels, and uniforms.",
    price: "Custom",
    minimum: "Volume-based",
    turnaround: "Flexible schedule",
    icon: Building2,
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    details: [
      "Custom pickup & delivery",
      "Dedicated account manager",
      "Equine & horse blanket washing",
      "Airbnb, spas, gyms, & clinics",
    ],
    ctaHref: "/commercial/request-a-bid",
    ctaText: "Request a Custom Bid",
  },
];

// 2. Locations Configuration
const LOCATIONS_DATA = {
  Lexington: [
    {
      name: "Splash 'Em Out - Richmond Rd",
      address: "2285 Richmond Rd, Lexington, KY 40502",
      phone: "859-268-4330",
      hours: "7:00 AM - 10:00 PM",
      washers: "42 High-Capacity",
      dryers: "36 Turbo Express",
      amenities: ["Always Attended", "Card System", "Free Wi-Fi", "TV & Seating"],
    },
    {
      name: "Splash 'Em Out - Versailles Rd",
      address: "1801 Versailles Rd, Lexington, KY 40504",
      phone: "859-254-4330",
      hours: "7:00 AM - 10:00 PM",
      washers: "38 High-Capacity",
      dryers: "32 Turbo Express",
      amenities: ["Always Attended", "Card System", "Free Wi-Fi", "Kids Area"],
    },
  ],
  Richmond: [
    {
      name: "Splash 'Em Out - Richmond Bypass",
      address: "648 Eastern Bypass, Richmond, KY 40475",
      phone: "859-624-4330",
      hours: "7:00 AM - 10:00 PM",
      washers: "45 High-Capacity",
      dryers: "40 Turbo Express",
      amenities: ["Always Attended", "Card System", "Free Wi-Fi", "Large Folding Tables"],
    },
  ],
  Nicholasville: [
    {
      name: "Splash 'Em Out - Nicholasville",
      address: "1001 S Main St, Nicholasville, KY 40356",
      phone: "859-881-4330",
      hours: "7:00 AM - 9:00 PM",
      washers: "32 High-Capacity",
      dryers: "28 Turbo Express",
      amenities: ["Always Attended", "Card System", "Free Wi-Fi", "Ample Parking"],
    },
  ],
};

// 3. Commercial Industries Configuration
const INDUSTRIES = [
  { id: "airbnb", name: "Airbnb & VRBO", defaultWeight: 100, icon: Building2 },
  { id: "spa", name: "Spas & Salons", defaultWeight: 75, icon: Sparkles },
  { id: "gym", name: "Gyms & Fitness", defaultWeight: 150, icon: Zap },
  { id: "medical", name: "Medical Clinics", defaultWeight: 200, icon: ShieldCheck },
  { id: "equine", name: "Equine & Horse", defaultWeight: 300, icon: Truck },
];

export function VariantFourClient() {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [activeCity, setActiveCity] = useState<keyof typeof LOCATIONS_DATA>("Lexington");
  
  // Commercial Calculator State
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);
  const [weeklyWeight, setWeeklyWeight] = useState(100);

  // Sync weekly weight when industry changes
  useEffect(() => {
    setWeeklyWeight(selectedIndustry.defaultWeight);
  }, [selectedIndustry]);

  // Calculate estimated weekly loads (approx. 15 lbs per load)
  const estimatedLoads = Math.round(weeklyWeight / 15);
  // Calculate potential hours saved (approx. 2.5 hours per 30 lbs load)
  const hoursSaved = Math.round((weeklyWeight / 30) * 2.5);

  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-[#F4F7F6] text-[#0B2545]">
      {/* SECTION 1: HERO SECTION - "THE SPLIT STREAM" */}
      <section className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden py-16 lg:py-24">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,rgba(19,154,140,0.08),transparent)]" />
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_70%)] blur-3xl" />
        
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Editorial Typography & Service Tabs */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <BlurDiv delay={0.1} y={10} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#139A8C]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#139A8C]">
                  <Sparkles className="h-3 w-3" />
                  Central Kentucky&apos;s Finest
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8DA9C4]">
                  &bull; Since 1999
                </span>
              </BlurDiv>

              <div className="max-w-2xl">
                <BlurH1
                  delay={0.2}
                  className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[#0B2545] sm:text-6xl lg:text-7xl"
                >
                  Your laundry day, <br />
                  <span className="italic text-[#139A8C]">dissolved.</span>
                </BlurH1>
                
                <BlurP
                  delay={0.3}
                  className="mt-6 text-lg leading-relaxed text-[#0B2545]/80 sm:text-xl"
                >
                  No trips. No folding. No hassle. We pick up your dirty clothes, wash them with premium care, fold them perfectly, and return them in 24 hours.
                </BlurP>
              </div>

              {/* Interactive Service Selector Tabs */}
              <BlurDiv delay={0.4} y={12} className="mt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#8DA9C4] mb-3">
                  Select a Service Line
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    const isActive = activeService.id === service.id;
                    return (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service)}
                        className={cn(
                          "flex flex-col items-start gap-2.5 rounded-xl border p-3.5 text-left transition-all duration-300",
                          isActive
                            ? "bg-white border-[#139A8C] shadow-md shadow-[#139A8C]/5 scale-[1.02] z-10"
                            : "bg-white/50 border-border hover:bg-white hover:border-[#8DA9C4]"
                        )}
                      >
                        <span className={cn("rounded-lg p-2 transition-transform duration-300", isActive ? "scale-110" : "")}>
                          <Icon className={cn("h-5 w-5", isActive ? "text-[#139A8C]" : "text-[#8DA9C4]")} />
                        </span>
                        <div>
                          <p className="font-sans text-xs font-bold text-[#0B2545]">
                            {service.name}
                          </p>
                          <p className="font-sans text-[0.65rem] text-[#8DA9C4] mt-0.5 font-medium">
                            {service.price}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </BlurDiv>

              {/* Action Buttons */}
              <BlurDiv delay={0.5} y={12} className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={activeService.ctaHref}
                  target={activeService.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={activeService.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    buttonVariants({ variant: "wave", size: "lg" }),
                    "h-14 justify-center gap-2 px-8 text-base shadow-lg shadow-[#0B2545]/10"
                  )}
                >
                  <ButtonWave />
                  <span className="relative font-bold">{activeService.ctaText}</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </a>
                <Link
                  href={"/locations" as Route}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 rounded-full border-[#0B2545]/20 bg-white/40 px-8 text-base text-[#0B2545] hover:bg-white hover:border-[#0B2545]/40"
                  )}
                >
                  <MapPin className="h-4 w-4 text-[#139A8C]" />
                  Find a Location
                </Link>
              </BlurDiv>
            </div>

            {/* Right Column: Circular Front-Loader Porthole & Claim Ticket */}
            <div className="flex flex-col items-center justify-center lg:col-span-5">
              <BlurDiv delay={0.3} y={15} className="relative w-full max-w-[420px] aspect-square">
                {/* Metallic Front-Loader Porthole Ring */}
                <div className="porthole-ring" aria-hidden="true" />
                
                {/* Video Container */}
                <div className="porthole-inner absolute inset-[5%]">
                  <video
                    className="h-full w-full object-cover"
                    src="/media/video/hero-2-c.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                  />
                  <div className="porthole-sheen" aria-hidden="true" />
                </div>
                
                {/* Inner Glass Highlight */}
                <div
                  className="absolute inset-[5%] rounded-full border border-white/10 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Interactive Claim Ticket */}
                <div className="absolute -bottom-6 -left-4 z-20 w-64 -rotate-3 transition-all duration-500 ease-out hover:rotate-0 hover:scale-105">
                  <div className="hero-ticket rounded-xl px-5 py-5 border-l-2 dashed shadow-xl">
                    <div className="flex items-center justify-between border-b border-[#2b2013]/10 pb-2">
                      <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#2b2013]">
                        CLAIM TICKET
                      </p>
                      <span className="rounded bg-[#139A8C]/10 px-1.5 py-0.5 font-mono text-[0.6rem] font-bold text-[#139A8C]">
                        ACTIVE
                      </span>
                    </div>

                    <div className="mt-3">
                      <p className="font-serif text-lg font-normal text-[#2b2013]">
                        {activeService.name}
                      </p>
                      <p className="font-sans text-xs text-[#2b2013]/70 mt-1 leading-relaxed">
                        {activeService.tagline}
                      </p>
                    </div>

                    <div className="mt-4 space-y-2 border-t border-dashed border-[#2b2013]/10 pt-3">
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="text-[#2b2013]/60">Rate:</span>
                        <span className="font-mono font-bold text-[#2b2013]">{activeService.price}</span>
                      </div>
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="text-[#2b2013]/60">Minimum:</span>
                        <span className="font-mono font-bold text-[#2b2013]">{activeService.minimum}</span>
                      </div>
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="text-[#2b2013]/60">Turnaround:</span>
                        <span className="font-mono font-bold text-[#139A8C]">{activeService.turnaround}</span>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-[#2b2013]/10 pt-3">
                      <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-[#2b2013]/50 text-center">
                        SPLASH &apos;EM OUT LAUNDRY
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Accent Badge */}
                <span className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0B2545]/90 px-4 py-1.5 text-white shadow-lg backdrop-blur-sm">
                  <Image
                    src="/images/brand/logo.webp"
                    alt=""
                    width={18}
                    height={18}
                    className="h-4.5 w-4.5 object-contain"
                  />
                  <span className="font-sans text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                    EST. 1999
                  </span>
                </span>
              </BlurDiv>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: THE WASH CYCLE - "INTERACTIVE PROCESS" */}
      <section className="bg-white py-20 sm:py-28 relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(30rem_30rem_at_bottom_left,rgba(238,150,75,0.03),transparent)]" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#139A8C]">
              HOW IT WORKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mt-3 text-[#0B2545]">
              The 24-Hour Door-to-Porch Cycle
            </h2>
            <p className="mt-4 text-base text-[#8DA9C4] font-medium">
              We&apos;ve engineered laundry day down to a science. Here is exactly how your clothes move from dirty to perfectly folded.
            </p>
          </div>

          {/* Asymmetric Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Route Line (Desktop only) */}
            <div className="hidden md:block absolute top-[45px] left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-[#139A8C] via-[#EE964B] to-[#139A8C] -z-10 opacity-30" />

            {/* Step 1 */}
            <BlurInViewDiv y={15} delay={0.1} className="flex flex-col items-center text-center group">
              <div className="h-20 w-24 rounded-2xl bg-[#F4F7F6] border border-border flex items-center justify-center relative transition-all duration-300 group-hover:border-[#139A8C] group-hover:shadow-lg group-hover:shadow-[#139A8C]/5">
                <Truck className="h-8 w-8 text-[#139A8C] transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-[#0B2545] text-white font-mono text-xs font-bold flex items-center justify-center">
                  01
                </span>
              </div>
              <h3 className="font-serif text-xl font-normal mt-6 text-[#0B2545]">
                Porch Pickup
              </h3>
              <p className="mt-2 text-sm text-[#0B2545]/70 leading-relaxed max-w-[220px]">
                Leave your laundry bag on your doorstep. We sweep by, scan your ticket, and secure your load.
              </p>
            </BlurInViewDiv>

            {/* Step 2 */}
            <BlurInViewDiv y={15} delay={0.2} className="flex flex-col items-center text-center group">
              <div className="h-20 w-24 rounded-2xl bg-[#F4F7F6] border border-border flex items-center justify-center relative transition-all duration-300 group-hover:border-[#EE964B] group-hover:shadow-lg group-hover:shadow-[#EE964B]/5">
                <WashingMachine className="h-8 w-8 text-[#EE964B] transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-[#0B2545] text-white font-mono text-xs font-bold flex items-center justify-center">
                  02
                </span>
              </div>
              <h3 className="font-serif text-xl font-normal mt-6 text-[#0B2545]">
                Custom Wash
              </h3>
              <p className="mt-2 text-sm text-[#0B2545]/70 leading-relaxed max-w-[220px]">
                Sorted by color, washed separately in dedicated machines with your choice of premium detergents.
              </p>
            </BlurInViewDiv>

            {/* Step 3 */}
            <BlurInViewDiv y={15} delay={0.3} className="flex flex-col items-center text-center group">
              <div className="h-20 w-24 rounded-2xl bg-[#F4F7F6] border border-border flex items-center justify-center relative transition-all duration-300 group-hover:border-[#139A8C] group-hover:shadow-lg group-hover:shadow-[#139A8C]/5">
                <Shirt className="h-8 w-8 text-[#139A8C] transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-[#0B2545] text-white font-mono text-xs font-bold flex items-center justify-center">
                  03
                </span>
              </div>
              <h3 className="font-serif text-xl font-normal mt-6 text-[#0B2545]">
                Crisp Fold
              </h3>
              <p className="mt-2 text-sm text-[#0B2545]/70 leading-relaxed max-w-[220px]">
                Immediately folded fresh from the dryer, wrapped in protective bundles, ready to slide straight into your drawers.
              </p>
            </BlurInViewDiv>

            {/* Step 4 */}
            <BlurInViewDiv y={15} delay={0.4} className="flex flex-col items-center text-center group">
              <div className="h-20 w-24 rounded-2xl bg-[#F4F7F6] border border-border flex items-center justify-center relative transition-all duration-300 group-hover:border-[#EE964B] group-hover:shadow-lg group-hover:shadow-[#EE964B]/5">
                <CheckCircle2 className="h-8 w-8 text-[#EE964B] transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-[#0B2545] text-white font-mono text-xs font-bold flex items-center justify-center">
                  04
                </span>
              </div>
              <h3 className="font-serif text-xl font-normal mt-6 text-[#0B2545]">
                Fresh Return
              </h3>
              <p className="mt-2 text-sm text-[#0B2545]/70 leading-relaxed max-w-[220px]">
                Delivered back to your porch in 24 hours. You receive a text notification with a photo of your fresh return.
              </p>
            </BlurInViewDiv>
          </div>

          {/* Process Proof Sub-section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F4F7F6] rounded-3xl p-8 sm:p-12 border border-border">
            <div className="lg:col-span-5 relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/marketing/foltex-automated-folding-machine-joe-dan-3.jpg"
                alt="Automated folding equipment at Splash 'Em Out facility"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 500px, 100vw"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-xs font-bold tracking-widest text-[#EE964B] uppercase">
                PROFESSIONAL STANDARDS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0B2545]">
                Commercial-grade precision for every household load.
              </h3>
              <p className="text-sm sm:text-base text-[#0B2545]/80 leading-relaxed">
                We don&apos;t just wash clothes; we care for them. Our facilities are equipped with state-of-the-art machinery, including automated folding equipment and high-precision temperature controls, ensuring your clothes are treated with the utmost care and returned in pristine condition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#139A8C]/10 text-[#139A8C] mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B2545]">
                    Sanitized & washed separately
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#139A8C]/10 text-[#139A8C] mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B2545]">
                    Custom detergents & softeners
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#139A8C]/10 text-[#139A8C] mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B2545]">
                    Professional automated folding
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#139A8C]/10 text-[#139A8C] mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B2545]">
                    Delivered in protective wrap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE CENTRAL KENTUCKY HUB - "INTERACTIVE LOCATIONS" */}
      <section className="bg-[#F4F7F6] py-20 sm:py-28 relative isolate">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#139A8C]">
                OUR LOCATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mt-3 text-[#0B2545]">
                9 Attended Laundromats Across Central Kentucky
              </h2>
              <p className="mt-3 text-base text-[#0B2545]/70">
                Prefer to drop off or wash it yourself? Visit any of our bright, modern, fully attended locations.
              </p>
            </div>

            {/* City Selector Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 lg:mt-0 bg-white/50 p-1.5 rounded-xl border border-border">
              {(Object.keys(LOCATIONS_DATA) as Array<keyof typeof LOCATIONS_DATA>).map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className={cn(
                    "px-5 py-2 rounded-lg font-sans text-sm font-bold transition-all duration-300",
                    activeCity === city
                      ? "bg-[#0B2545] text-white shadow-md"
                      : "text-[#0B2545]/70 hover:text-[#0B2545] hover:bg-white/40"
                  )}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS_DATA[activeCity].map((loc, idx) => (
              <BlurInViewDiv
                key={loc.name}
                y={15}
                delay={0.05 * idx}
                className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-normal text-[#0B2545]">
                      {loc.name}
                    </h3>
                    <span className="flex items-center gap-1 text-xs font-bold text-[#139A8C] bg-[#139A8C]/10 px-2.5 py-1 rounded-full">
                      <Clock className="h-3.5 w-3.5" />
                      Open
                    </span>
                  </div>

                  <p className="text-sm text-[#0B2545]/70 mt-3 flex items-start gap-2">
                    <MapPin className="h-4.5 w-4.5 text-[#8DA9C4] shrink-0 mt-0.5" />
                    {loc.address}
                  </p>

                  <p className="text-sm text-[#0B2545]/70 mt-2 flex items-center gap-2">
                    <Phone className="h-4.5 w-4.5 text-[#8DA9C4] shrink-0" />
                    {loc.phone}
                  </p>

                  <p className="text-sm text-[#0B2545]/70 mt-2 flex items-center gap-2">
                    <Clock className="h-4.5 w-4.5 text-[#8DA9C4] shrink-0" />
                    Hours: {loc.hours}
                  </p>

                  {/* Machine Capacity Proof */}
                  <div className="grid grid-cols-2 gap-3 mt-5 border-t border-b border-dashed border-border py-4">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#8DA9C4]">
                        Washers
                      </p>
                      <p className="text-sm font-bold text-[#0B2545] mt-0.5">
                        {loc.washers}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#8DA9C4]">
                        Dryers
                      </p>
                      <p className="text-sm font-bold text-[#0B2545] mt-0.5">
                        {loc.dryers}
                      </p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mt-5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#8DA9C4] mb-2">
                      Store Amenities
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.amenities.map((am) => (
                        <span
                          key={am}
                          className="claim-tag rounded-full px-2.5 py-1 font-sans text-[0.65rem] font-bold tracking-wide uppercase"
                        >
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "flex-1 justify-center rounded-lg border-[#0B2545]/10 hover:bg-muted"
                    )}
                  >
                    <Navigation className="h-3.5 w-3.5 text-[#139A8C]" />
                    Get Directions
                  </a>
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, "")}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "rounded-lg border-[#0B2545]/10 hover:bg-muted px-3"
                    )}
                  >
                    <Phone className="h-3.5 w-3.5 text-[#8DA9C4]" />
                  </a>
                </div>
              </BlurInViewDiv>
            ))}
          </div>

          {/* Facility Photo Proof */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-sm border border-border">
              <Image
                src="/images/marketing/machines.webp"
                alt="Bright, clean facility with washers, folding tables, and seating"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase">
                Versailles Rd Interior
              </div>
            </div>
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-sm border border-border">
              <Image
                src="/images/marketing/driers.webp"
                alt="Clean rows of stacked dryers at Splash 'Em Out location"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase">
                Richmond Bypass Dryers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMERCIAL VOLUME ESTIMATOR - "THE CALCULATOR" */}
      <section className="bg-white py-20 sm:py-28 relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_top_right,rgba(19,154,140,0.04),transparent)]" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Estimator Controls */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EE964B]">
                  COMMERCIAL SERVICES
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mt-3 text-[#0B2545]">
                  Estimate Your Business Volume
                </h2>
                <p className="mt-4 text-base text-[#0B2545]/70">
                  Whether you run a high-volume Airbnb, a busy spa, or an equine business, we customize our pickup schedule and pricing to fit your operation.
                </p>
              </div>

              {/* Industry Selector */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8DA9C4] mb-3">
                  Select Your Industry
                </p>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.map((ind) => {
                    const Icon = ind.icon;
                    const isSelected = selectedIndustry.id === ind.id;
                    return (
                      <button
                        key={ind.id}
                        onClick={() => setSelectedIndustry(ind)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2.5 rounded-xl border font-sans text-xs font-bold transition-all duration-300",
                          isSelected
                            ? "bg-[#0B2545] border-[#0B2545] text-white shadow-md"
                            : "bg-[#F4F7F6] border-border text-[#0B2545]/70 hover:bg-white hover:border-[#8DA9C4]"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {ind.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Volume Slider */}
              <div className="bg-[#F4F7F6] rounded-2xl p-6 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8DA9C4]">
                    Estimated Weekly Volume
                  </p>
                  <p className="text-lg font-mono font-bold text-[#0B2545]">
                    {weeklyWeight} lbs
                  </p>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={weeklyWeight}
                  onChange={(e) => setWeeklyWeight(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-[#139A8C]"
                />
                <div className="flex justify-between text-[0.65rem] font-bold text-[#8DA9C4] mt-2 uppercase">
                  <span>50 lbs</span>
                  <span>500 lbs</span>
                  <span>1000 lbs+</span>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F4F7F6] rounded-2xl p-5 border border-border text-center">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#8DA9C4]">
                    Est. Weekly Loads
                  </p>
                  <p className="text-3xl font-serif font-normal text-[#139A8C] mt-1">
                    ~{estimatedLoads}
                  </p>
                  <p className="text-[0.65rem] text-[#0B2545]/60 mt-1">
                    Based on standard 15lb cycles
                  </p>
                </div>
                <div className="bg-[#F4F7F6] rounded-2xl p-5 border border-border text-center">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#8DA9C4]">
                    Hours Saved / Week
                  </p>
                  <p className="text-3xl font-serif font-normal text-[#EE964B] mt-1">
                    ~{hoursSaved} hrs
                  </p>
                  <p className="text-[0.65rem] text-[#0B2545]/60 mt-1">
                    Instead of in-house washing
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Receipt Proposal */}
            <div className="lg:col-span-5 flex justify-center">
              <BlurInViewDiv
                y={20}
                className="receipt-panel w-full max-w-[380px] rounded-2xl shadow-xl overflow-hidden border border-border p-6 sm:p-8"
              >
                <div className="text-center border-b border-dashed border-border pb-6">
                  <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#8DA9C4]">
                    PROPOSAL ESTIMATE
                  </p>
                  <h3 className="font-serif text-2xl font-normal text-[#0B2545] mt-2">
                    Commercial Bid
                  </h3>
                  <p className="text-xs text-[#0B2545]/60 mt-1">
                    Splash &apos;Em Out Commercial Hub
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0B2545]/60">Industry:</span>
                    <span className="font-bold text-[#0B2545]">{selectedIndustry.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0B2545]/60">Est. Volume:</span>
                    <span className="font-mono font-bold text-[#0B2545]">{weeklyWeight} lbs/week</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0B2545]/60">Turnaround:</span>
                    <span className="font-bold text-[#139A8C]">24-48 Hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0B2545]/60">Pickup Frequency:</span>
                    <span className="font-bold text-[#0B2545]">Custom schedule</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-dashed border-border pt-6">
                  <div className="rounded-xl bg-[#F4F7F6] p-4 text-center border border-border">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#8DA9C4]">
                      Estimated Commercial Rate
                    </p>
                    <p className="text-2xl font-serif font-normal text-[#0B2545] mt-1">
                      Volume Discounted
                    </p>
                    <p className="text-[0.65rem] text-[#0B2545]/60 mt-1">
                      Inquire for custom per-pound contract rates
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/commercial/request-a-bid?industry=${selectedIndustry.id}&weight=${weeklyWeight}` as Route}
                    className={cn(
                      buttonVariants({ variant: "brand", size: "lg" }),
                      "w-full h-12 justify-center rounded-lg font-bold shadow-md shadow-brand/10"
                    )}
                  >
                    <ClipboardList className="h-4 w-4" />
                    Request Custom Bid
                  </Link>
                </div>

                <p className="text-[0.6rem] text-[#8DA9C4] text-center mt-4 uppercase tracking-widest font-mono">
                  *Estimate only. Subject to bid process.
                </p>
              </BlurInViewDiv>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA - "THE FRESH RETURN" */}
      <section className="bg-[#0B2545] text-white py-20 sm:py-28 relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="/images/marketing/cta.webp"
            alt="Freshly folded laundry"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-[#0B2545] via-[#0B2545]/90 to-transparent -z-10" />
        <div className="absolute top-1/2 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#139A8C]/10 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 sm:px-10 text-center md:text-left md:flex md:items-center md:justify-between md:gap-12">
          <div className="max-w-xl flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EE964B]">
              CLAIM YOUR FREE BAG
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.05] tracking-tight">
              Ready to cross laundry off your list?
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Schedule your first doorstep pickup today. We&apos;ll bring a durable, reusable Splash &apos;Em Out laundry bag for free with your first order.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
              <a
                href="https://splashemout.curbsidelaundries.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "wave", size: "lg" }),
                  "h-14 justify-center gap-2 px-8 text-base bg-[#EE964B] text-[#0B2545] hover:shadow-lg hover:shadow-[#EE964B]/20"
                )}
              >
                <ButtonWave />
                <span className="relative font-bold text-[#0B2545]">Schedule First Pickup</span>
                <ArrowRight className="relative h-4 w-4 text-[#0B2545] transition-transform duration-300 group-hover/button:translate-x-1" />
              </a>
              <a
                href={contactInfo.phoneHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-14 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:border-white/40"
                )}
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center shrink-0">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-[260px] rotate-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#139A8C]/20 text-[#139A8C]">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                    GUARANTEE
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    100% Satisfaction
                  </p>
                </div>
              </div>
              <p className="text-xs text-white/70 mt-3 leading-relaxed">
                If any item isn&apos;t cleaned or folded to your standard, we will re-wash it immediately at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
