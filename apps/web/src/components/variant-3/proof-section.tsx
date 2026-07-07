"use client";

import * as m from "@splashemout/animation/motion/react-m";
import Image from "next/image";

export function ProofSection() {
  return (
    <section className="relative w-full py-24 bg-[#001A23] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0055FF] opacity-10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-v3-display text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.9]">
              Real People. <br />
              <span className="text-[#00E5FF]">Real Clean.</span>
            </h2>
            <p className="mt-8 text-xl text-white/80 max-w-md font-medium leading-relaxed">
              We aren&apos;t a tech company playing laundromat. We are local operators who obsess over water temperature, detergent quality, and folding precision.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <span className="font-v3-display text-5xl font-bold text-[#00E5FF]">10+</span>
                <span className="mt-2 text-sm font-bold uppercase tracking-wider text-white/60">Locations</span>
              </div>
              <div className="flex flex-col">
                <span className="font-v3-display text-5xl font-bold text-[#00E5FF]">24/7</span>
                <span className="mt-2 text-sm font-bold uppercase tracking-wider text-white/60">Support</span>
              </div>
            </div>
          </m.div>
          
          <m.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 mt-12">
                <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden">
                  <Image src="/images/marketing/meet-the-owners.webp" alt="Owners" fill className="object-cover" />
                </div>
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden">
                  <Image src="/images/marketing/membership-card.webp" alt="Membership Card" fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden">
                  <Image src="/images/marketing/driers.webp" alt="Dryers" fill className="object-cover" />
                </div>
                <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden">
                  <Image src="/media/images/hero.webp" alt="Laundry Bag" fill className="object-cover" />
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
