'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function HoneymoonPage() {
  const packages = [
    { title: 'Amalfi Coast & Capri Escape', days: '8 Days', price: '$8,400', desc: 'Private cliffside villa in Positano, sunset yacht charter to Capri, and Michelin-starred dining in Ravello.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80' },
    { title: 'Maldives Overwater Sanctuary', days: '10 Days', price: '$12,900', desc: 'Secluded overwater bungalow with private infinity pool, champagne sunset cruises, and underwater spa treatments.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80' },
    { title: 'Kyoto & Ryokan Romance', days: '12 Days', price: '$10,500', desc: 'Private tea ceremonies, traditional hot spring ryokans in Arashiyama, and first-class Shinkansen travel.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80' },
  ];

  return (
    <div className="min-h-screen bg-[#07131e] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">ROMANTIC GETAWAYS</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">Luxury Honeymoon Journeys</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">Handcrafted romantic itineraries in the world's most breathtaking sanctuaries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((p, i) => (
            <div key={i} className="bg-[#0b1d2d] border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-colors">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
              <div className="p-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{p.days}</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-2">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{p.desc}</p>
                <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                  <span className="text-xl font-bold text-amber-400">{p.price} <span className="text-xs text-slate-400 font-normal">/ couple</span></span>
                  <Link href="/booking" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors">
                    Reserve
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
