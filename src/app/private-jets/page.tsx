'use client';

import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';
import { ShieldCheck, Compass, Users, Gauge, Radio } from 'lucide-react';

const fleet = [
  { name: 'Gulfstream G650ER', range: '7,500 nm', speed: 'Mach 0.90', pax: '14 Passengers', price: 'From $12,500/hr', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80', desc: 'Flagship long-range jet featuring panoramic oval windows, Ka-band Wi-Fi, and master stateroom suite.' },
  { name: 'Bombardier Global 7500', range: '7,700 nm', speed: 'Mach 0.925', pax: '19 Passengers', price: 'From $14,000/hr', image: 'https://images.unsplash.com/photo-1519074069444-1ba4eaa1674a?w=600&q=80', desc: 'Four distinct living spaces, full dining table for 6, and Nuage zero-gravity ergonomic seats.' },
  { name: 'Dassault Falcon 8X', range: '6,450 nm', speed: 'Mach 0.90', pax: '14 Passengers', price: 'From $11,000/hr', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80', desc: 'Tri-jet ultra quiet acoustic cabin with short-runway capability for steep mountain airport landings.' },
  { name: 'Embraer Lineage 1000E', range: '4,600 nm', speed: 'Mach 0.82', pax: '19 Passengers', price: 'From $13,200/hr', image: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?w=600&q=80', desc: 'Master bedroom with walk-in shower, five private cabin zones, and largest baggage capacity in executive aviation.' },
  { name: 'Airbus ACJ319 Neo', range: '6,750 nm', speed: 'Mach 0.82', pax: '19 Passengers', price: 'From $18,500/hr', image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80', desc: 'Corporate airliner cabin space with executive lounge, private office, master bedroom, and en-suite bathroom.' },
  { name: 'Boeing BBJ 737 MAX', range: '7,000 nm', speed: 'Mach 0.84', pax: '25 Passengers', price: 'From $22,000/hr', image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=600&q=80', desc: 'Custom VIP configuration with state-of-the-art air filtration, private dining room, and satellite phone systems.' }
];

export default function PrivateJetsPage() {
  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            PRIVATE AVIATION FLEET
          </span>
          <h1 className="font-serif text-5xl font-bold text-white mt-4 mb-3">Ultra Long Range Jet Fleet</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Global flight operations with dedicated flight attendants, Michelin-level inflight dining, zero tarmac wait times, and direct tarmac transfers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((f, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] font-bold text-xs">
                  {f.price}
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">{f.name}</h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">{f.desc}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t border-slate-800/80 pt-4">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Flight Range</span>
                    <strong className="text-[#D4AF37]">{f.range}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Top Speed</span>
                    <strong className="text-[#D4AF37]">{f.speed}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Capacity</span>
                    <strong className="text-[#D4AF37]">{f.pax}</strong>
                  </div>
                </div>
                <Link href="/booking" className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase text-center block hover:brightness-110 transition-all">
                  Request Jet Charter
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
