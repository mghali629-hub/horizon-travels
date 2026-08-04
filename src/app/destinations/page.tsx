'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Search, MapPin, Star, Clock, ChevronRight } from 'lucide-react';

interface Tour {
  id: number;
  title: string;
  location: string;
  region: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  description: string;
}

export default function DestinationsPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    fetchTours();
  }, [selectedRegion]);

  const fetchTours = async () => {
    try {
      const res = await fetch(`/api/tours?region=${selectedRegion}&query=${searchQuery}`);
      const data = await res.json();
      if (data.success) {
        setTours(data.tours);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">World Expeditions</h1>
          <p className="text-slate-400 text-sm">Filter through our portfolio of private yachts, luxury villas, and helicopter safaris.</p>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by city or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div className="flex gap-2">
            {['All', 'Europe', 'Asia', 'Africa'].map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${selectedRegion === reg ? 'bg-[#D4AF37] text-black' : 'bg-slate-800 text-slate-300'}`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((item) => (
            <div key={item.id} className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden hover:border-[#D4AF37]/50 transition-all flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#D4AF37] font-bold text-xs">
                  {item.price}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase">{item.category}</span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs mt-2 line-clamp-2">{item.description}</p>
                </div>
                <Link
                  href={`/tours/${item.id}`}
                  className="w-full py-3 rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-xs uppercase hover:bg-[#D4AF37] hover:text-black transition-all text-center block"
                >
                  View Expedition Specs
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
