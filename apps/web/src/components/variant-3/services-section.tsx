"use client";

import * as m from "@splashemout/animation/motion/react-m";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "pickup",
    title: "Pickup & Delivery",
    description: "We come to you. Schedule a pickup from your phone, and we'll return your laundry perfectly folded the next day.",
    image: "/images/marketing/splashemout-van.webp",
    color: "bg-[#001A23]",
    textColor: "text-white",
    btnColor: "bg-white text-[#001A23] hover:bg-[#00E5FF]",
  },
  {
    id: "wash-fold",
    title: "Wash & Fold",
    description: "Drop off your laundry at any of our locations. Our attendants will wash, dry, and fold it to your exact specifications.",
    image: "/images/marketing/foltex-automated-folding-machine-joe-dan-3.jpg",
    color: "bg-[#E2E8F0]",
    textColor: "text-[#001A23]",
    btnColor: "bg-[#001A23] text-white hover:bg-[#0055FF]",
  },
  {
    id: "self-serve",
    title: "Self-Service",
    description: "State-of-the-art machines in bright, clean, fully-attended facilities. Do your laundry faster and better.",
    image: "/images/marketing/machines.webp",
    color: "bg-white",
    textColor: "text-[#001A23]",
    btnColor: "bg-[#001A23] text-white hover:bg-[#0055FF]",
  }
];

export function ServicesSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="font-v3-display text-5xl md:text-7xl font-extrabold tracking-tighter text-[#001A23] uppercase">
          How We Serve You
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col gap-8">
        {services.map((service, index) => (
          <m.div
            key={service.id}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`sticky top-24 w-full min-h-[60vh] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-xl ${service.color}`}
            style={{ zIndex: index * 10 }}
          >
            <div className="flex-1 flex flex-col items-start">
              <h3 className={`font-v3-display text-4xl md:text-6xl font-bold uppercase tracking-tight ${service.textColor}`}>
                {service.title}
              </h3>
              <p className={`mt-6 text-lg md:text-2xl font-medium max-w-lg leading-relaxed opacity-90 ${service.textColor}`}>
                {service.description}
              </p>
              <button className={`mt-10 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-colors duration-300 ${service.btnColor}`}>
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
