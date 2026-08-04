'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Search, MapPin, Star, Clock, ChevronRight } from 'lucide-react';
import { INITIAL_TOURS, Tour } from '@/lib/tours-data';

export default function DestinationsPage() {
  const [tours, setTours] = useState<Tour[]>(INITIAL_TOURS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    fetchTours();
  }, [selectedRegion]);

  const fetchTours = async () => {
    try {
      const res = await fetch(`/api/tours?region=${selectedRegion}&query=${searchQuery}`);
      const data = await res.json();
      if (data.success && data.tours && data.tours.length > 0) {
        setTours(data.tours);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTours = tours.filter((item) => {
    const matchesRegion = selectedRegion === 'All' || item.region.toLowerCase() === selectedRegion.toLowerCase();
    const matchesQuery = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
            GLOBAL SANCTUARIES
          </span>
          <h1 className="font-serif text-5xl font-bold text-white mt-4 mb-3">World Expeditions</h1>
          <p className="text-slate-400 text-sm">Filter through our portfolio of private yachts, luxury villas, and helicopter safaris across 6 continents.</p>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center shadow-xl">
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
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${selectedRegion === reg ? 'bg-[#D4AF37] text-black shadow-lg' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(filteredTours.length > 0 ? filteredTours : INITIAL_TOURS).map((item) => (
            <div key={item.id} className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden hover:border-[#D4AF37]/50 transition-all flex flex-col shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] font-bold text-xs">
                  {item.price}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase">{item.category} • {item.location}</span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
                <Link
                  href={`/tours/${item.id}`}
                  className="w-full py-3 rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] font-bold text-xs uppercase hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#AA8520] hover:text-black transition-all text-center block"
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
