"use client";

import * as m from "@splashemout/animation/motion/react-m";
import { Button } from "@splashemout/ui/button";
import { ArrowRight } from "lucide-react";

export function CommercialSection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto">
        <m.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0055FF] rounded-[3rem] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden"
        >
          {/* Background graphic */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00E5FF] rounded-full mix-blend-overlay filter blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex-1">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold uppercase tracking-widest mb-6">
              B2B Services
            </span>
            <h2 className="font-v3-display text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[0.9]">
              Commercial <br /> Laundry
            </h2>
            <p className="mt-8 text-xl text-white/90 max-w-lg font-medium leading-relaxed">
              Consistent turnaround, custom pricing, and clear bids for Airbnb hosts, restaurants, clinics, and equine businesses.
            </p>
          </div>
          
          <div className="relative z-10 w-full lg:w-[400px] bg-white rounded-[2rem] p-8 shadow-2xl">
            <h3 className="font-v3-display text-2xl font-bold text-[#001A23] mb-6">Request a Bid</h3>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#001A23]/70 uppercase tracking-wide">Industry</label>
                <select className="w-full bg-[#F4F7F6] border-none rounded-xl h-12 px-4 text-[#001A23] font-medium outline-none focus:ring-2 focus:ring-[#0055FF]">
                  <option>Hospitality / Airbnb</option>
                  <option>Restaurant / Bar</option>
                  <option>Medical / Clinic</option>
                  <option>Equine / Farm</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#001A23]/70 uppercase tracking-wide">Estimated Volume</label>
                <select className="w-full bg-[#F4F7F6] border-none rounded-xl h-12 px-4 text-[#001A23] font-medium outline-none focus:ring-2 focus:ring-[#0055FF]">
                  <option>Under 100 lbs / week</option>
                  <option>100 - 500 lbs / week</option>
                  <option>500+ lbs / week</option>
                </select>
              </div>
              <Button className="mt-4 w-full h-14 rounded-xl bg-[#001A23] hover:bg-[#00E5FF] hover:text-[#001A23] text-white font-bold text-lg transition-colors">
                Get Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </m.div>
      </div>
    </section>
  );
}
