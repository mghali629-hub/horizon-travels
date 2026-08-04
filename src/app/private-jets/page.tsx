'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const fleet = [
  { name: 'Gulfstream G650ER', range: '7,500 nm', speed: 'Mach 0.90', pax: '14 Passengers', price: 'From $12,500/hr', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80' },
  { name: 'Bombardier Global 7500', range: '7,700 nm', speed: 'Mach 0.925', pax: '19 Passengers', price: 'From $14,000/hr', image: 'https://images.unsplash.com/photo-1519074069444-1ba4eaa1674a?w=600&q=80' },
];

export default function PrivateJetsPage() {
  return (
    <div className="min-h-screen bg-[#07131e] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">PRIVATE AVIATION</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">Ultra Long Range Jet Fleet</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">Global flight operations with dedicated flight attendants, Michelin-level inflight dining, and zero tarmac wait times.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleet.map((f, i) => (
            <div key={i} className="bg-[#0b1d2d] border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-400/50 transition-colors">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${f.image}')` }} />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{f.name}</h3>
                  <span className="text-amber-400 font-bold text-sm">{f.price}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t border-slate-800 pt-4">
                  <div><span className="text-slate-400 block">Flight Range</span><strong className="text-white">{f.range}</strong></div>
                  <div><span className="text-slate-400 block">Top Speed</span><strong className="text-white">{f.speed}</strong></div>
                  <div><span className="text-slate-400 block">Capacity</span><strong className="text-white">{f.pax}</strong></div>
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
