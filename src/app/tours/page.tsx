'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { INITIAL_TOURS, Tour } from '@/lib/tours-data';

export default function FullToursCatalogPage() {
  const [tours, setTours] = useState<Tour[]>(INITIAL_TOURS);

  useEffect(() => {
    fetch('/api/tours')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.tours && data.tours.length > 0) {
          setTours(data.tours);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            WORLDWIDE EXPEDITIONS
          </span>
          <h1 className="font-serif text-5xl font-bold text-white mt-4 mb-3">Expeditions & Tours Directory</h1>
          <p className="text-slate-400 text-sm">Explore our active portfolio of private guided journeys, superyachts, and heli-skiing safaris.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((t) => (
            <div key={t.id} className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <img src={t.image} alt={t.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] font-bold text-xs">
                  {t.price}
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase">{t.region} • {t.duration}</span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">{t.title}</h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-2">{t.description}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Link href={`/tours/${t.id}`} className="flex-1 py-2.5 rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold text-center hover:bg-[#D4AF37]/10 transition-colors">
                    Specs
                  </Link>
                  <Link href={`/tours/${t.id}/itinerary`} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black text-xs font-bold text-center hover:brightness-110 transition-all">
                    Itinerary
                  </Link>
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
