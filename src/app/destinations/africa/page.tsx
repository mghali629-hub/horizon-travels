'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { MapPin, Compass, ArrowRight } from 'lucide-react';

interface Tour {
  id: number;
  title: string;
  location: string;
  region: string;
  price: string;
  duration: string;
  image: string;
}

export default function AfricaDestinationsPage() {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    fetch('/api/tours')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const africaTours = data.tours.filter((t: Tour) => t.region.toLowerCase().includes('africa'));
          setTours(africaTours);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest font-bold block">Wilderness Reserves</span>
          <h1 className="font-serif text-4xl font-bold text-white">African Private Jet Safaris</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Untouched Serengeti ecosystems, luxury canvas lodges, and hot air balloon tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden flex flex-col justify-between">
              <img src={tour.image} alt={tour.title} className="h-64 w-full object-cover" />
              <div className="p-6 space-y-3">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase">{tour.duration} Journey</span>
                <h3 className="font-serif text-xl font-bold text-white">{tour.title}</h3>
                <span className="text-2xl font-bold font-serif text-[#D4AF37] block">{tour.price}</span>
                <Link href={`/tours/${tour.id}`} className="block w-full py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase text-center">
                  Inspect Safari Telemetry
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
