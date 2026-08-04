'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const galleryItems = [
  { title: 'Amalfi Coast Superyacht Anchorage', src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80', location: 'Positano, Italy' },
  { title: 'Gulfstream G650ER Flight Cabin', src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', location: '14,000m Altitude' },
  { title: 'Private Overwater Villa at Sunset', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', location: 'Baa Atoll, Maldives' },
  { title: 'Kyoto Bamboo Forest Private Tour', src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80', location: 'Kyoto, Japan' },
  { title: 'Serengeti Helicopter Safari', src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80', location: 'Tanzania' },
  { title: 'Swiss Alps Private Chalet Helipad', src: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=800&q=80', location: 'Verbier, Switzerland' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">
            VISUAL EXPEDITIONS
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3 font-serif">
            Horizon Destinations Gallery
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            A glimpse into the private jets, superyachts, overwater villas, and remote sanctuaries curated for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((g, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${g.src}')` }} />
              <div className="p-5">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">📍 {g.location}</span>
                <h3 className="font-serif font-bold text-white text-base">{g.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
