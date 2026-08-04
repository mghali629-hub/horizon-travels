'use client';

import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const yachts = [
  { name: 'M/Y Horizon Crown (110m)', guests: '16 Guests / 28 Crew', speed: '19 Knots', location: 'Mediterranean / Caribbean', price: 'From $450,000/wk', image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80', desc: 'Glass-bottom infinity pool, helipad, private cinema, full spa with sauna & massage team, and certified dive center.' },
  { name: 'S/Y Ocean Falcon (88m)', guests: '12 Guests / 18 Crew', speed: '20 Knots', location: 'Aegean / Greek Isles', price: 'From $320,000/wk', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', desc: 'Iconic three-mast automated sailing rig, outdoor cinema screen on sail, sub-sea viewing lounge, and submarine bay.' },
  { name: 'M/Y Blissful Wave (95m)', guests: '14 Guests / 22 Crew', speed: '18 Knots', location: 'French Riviera & Monaco', price: 'From $390,000/wk', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', desc: 'Hybrid propulsion system, beach club with drop-down sea terraces, 20ft tender, and private Michelin sommelier.' },
  { name: 'M/Y Solstice Spirit (72m)', guests: '12 Guests / 16 Crew', speed: '17 Knots', location: 'Amalfi Coast / Capri', price: 'From $280,000/wk', image: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=800&q=80', desc: 'Spacious sky lounge, touch-and-go helipad, 8 jet skis, seabobs, and master suite with private 180° panoramic terrace.' },
  { name: 'M/Y Azure Horizon (60m)', guests: '12 Guests / 14 Crew', speed: '16 Knots', location: 'Croatia & Dalmatian Islands', price: 'From $210,000/wk', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80', desc: 'Sleek Italian design, sun deck jacuzzi, outdoor teppanyaki bar, e-foils, and deep-sea fishing equipment.' },
  { name: 'M/Y Majesty Isle (50m)', guests: '10 Guests / 12 Crew', speed: '15 Knots', location: 'Bahamas & Exumas', price: 'From $165,000/wk', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', desc: 'Shallow draft for turquoise lagoon anchoring, inflatable water park, transparent kayaks, and private island setup team.' }
];

export default function YachtChartersPage() {
  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            SUPERYACHT CHARTER FLEET
          </span>
          <h1 className="font-serif text-5xl font-bold text-white mt-4 mb-3">Mega & Superyacht Charters</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Sail the world’s most pristine waters with private chefs, dedicated Captains, submarine access, and water sports instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {yachts.map((y, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <img src={y.image} alt={y.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] font-bold text-xs">
                  {y.price}
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase">{y.location}</span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">{y.name}</h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">{y.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-800/80 pt-4">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Capacity</span>
                    <strong className="text-white">{y.guests}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Cruising Speed</span>
                    <strong className="text-white">{y.speed}</strong>
                  </div>
                </div>
                <Link href="/booking" className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase text-center block hover:brightness-110 transition-all">
                  Reserve Superyacht
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
