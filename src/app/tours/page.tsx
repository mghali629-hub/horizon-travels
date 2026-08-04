'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

interface Tour {
  id: number;
  title: string;
  location: string;
  region: string;
  price: string;
  duration: string;
  category: string;
  image: string;
  description: string;
}

export default function FullToursCatalogPage() {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    fetch('/api/tours')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTours(data.tours);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-2">Expeditions & Tours Directory</h1>
          <p className="text-slate-400 text-sm">Explore our active portfolio of private guided journeys.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((t) => (
            <div key={t.id} className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden flex flex-col justify-between">
              <img src={t.image} alt={t.title} className="h-56 w-full object-cover" />
              <div className="p-6 space-y-3">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase">{t.region} • {t.duration}</span>
                <h3 className="font-serif text-lg font-bold text-white">{t.title}</h3>
                <span className="text-2xl font-bold font-serif text-[#D4AF37] block">{t.price}</span>
                <div className="flex gap-2">
                  <Link href={`/tours/${t.id}`} className="flex-1 py-2.5 rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold text-center">
                    Specs
                  </Link>
                  <Link href={`/tours/${t.id}/itinerary`} className="flex-1 py-2.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold text-center">
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
