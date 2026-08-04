'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const yachts = [
  { name: 'M/Y Ocean Empress (60m)', guests: '12 Guests', crew: '16 Crew', price: 'From $280,000/week', region: 'Mediterranean / Caribbean', image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80' },
  { name: 'S/Y Pearl Wind (45m)', guests: '10 Guests', crew: '8 Crew', price: 'From $160,000/week', region: 'Greek Isles & Cyclades', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80' },
];

export default function YachtChartersPage() {
  return (
    <div className="min-h-screen bg-[#07131e] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">MARITIME CHARTERS</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">Luxury Superyacht Fleet</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">Private superyacht charters with full captain, Michelin chef, and onboard watersports deck.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yachts.map((y, i) => (
            <div key={i} className="bg-[#0b1d2d] border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-400/50 transition-colors">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${y.image}')` }} />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{y.name}</h3>
                  <span className="text-amber-400 font-bold text-sm">{y.price}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t border-slate-800 pt-4">
                  <div><span className="text-slate-400 block">Cruising Grounds</span><strong className="text-white">{y.region}</strong></div>
                  <div><span className="text-slate-400 block">Guests</span><strong className="text-white">{y.guests}</strong></div>
                  <div><span className="text-slate-400 block">Crew</span><strong className="text-white">{y.crew}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
