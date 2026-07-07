"use client";

import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="w-full bg-[#001A23] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 lg:col-span-2 flex flex-col items-start">
          <div className="relative w-48 h-16 mb-8">
            <Image 
              src="/images/brand/logo.webp" 
              alt="Splash 'Em Out" 
              fill 
              className="object-contain object-left invert brightness-0" 
            />
          </div>
          <p className="text-white/60 max-w-sm text-lg font-medium">
            Central Kentucky&apos;s premier laundry service. Clean facilities, expert attendants, and reliable pickup & delivery.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-v3-display text-xl font-bold uppercase tracking-wide text-[#00E5FF]">Services</h4>
          <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">Pickup & Delivery</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">Wash & Fold</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">Self-Service</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">Commercial Laundry</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-v3-display text-xl font-bold uppercase tracking-wide text-[#00E5FF]">Company</h4>
          <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">Locations</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">Pricing</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">About Us</Link>
          <Link href="#" className="text-white/70 hover:text-white transition-colors font-medium">Contact</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm font-medium">
          © {new Date().getFullYear()} Splash &apos;Em Out. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-white/40 hover:text-white text-sm font-medium transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-white/40 hover:text-white text-sm font-medium transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
