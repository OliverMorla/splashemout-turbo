"use client";

import * as m from "@splashemout/animation/motion/react-m";
import { Button } from "@splashemout/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        <div className="lg:col-span-7 flex flex-col items-start">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#001A23]/5 border border-[#001A23]/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase text-[#001A23]">Central Kentucky&apos;s Finest</span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-v3-display text-[5rem] leading-[0.85] md:text-[8rem] lg:text-[10rem] font-extrabold tracking-tighter text-[#001A23] uppercase"
          >
            Laundry,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001A23] to-[#0055FF]">
              Done.
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl text-[#001A23]/70 max-w-xl font-medium leading-relaxed"
          >
            We handle the sorting, washing, and folding so you don&apos;t have to. 
            Drop it off, schedule a pickup, or use our pristine facilities.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="bg-[#001A23] text-white hover:bg-[#0055FF] rounded-full px-8 h-14 text-base font-bold transition-colors duration-300">
              Schedule Pickup
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-bold border-[#001A23]/20 hover:bg-[#001A23]/5 text-[#001A23]">
              Find a Location
            </Button>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, scaleY: 0, originY: 1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scaleY: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl"
        >
          <video
            src="/media/video/hero-2-c.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001A23]/40 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">Next-Day Turnaround</span>
              <span className="text-white/80 text-sm font-medium">On all wash & fold orders</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <ArrowRight className="w-5 h-5 text-white -rotate-45" />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
