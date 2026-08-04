'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">
            LUXURY VOYAGES SINCE 2012
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3 font-serif">
            Curating Extraordinary Expeditions
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Horizon Travels is an award-winning luxury travel concierge specializing in private jet charters, superyacht expeditions, and bespoke global itineraries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { stat: '120+', label: 'Countries Covered' },
            { stat: '15,000+', label: 'Luxury Travelers' },
            { stat: '24/7', label: 'VIP Concierge Cover' },
            { stat: '99.4%', label: 'Client Satisfaction' },
          ].map((s, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-amber-400 font-serif">{s.stat}</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Tailor-Made Itineraries', desc: 'Every expedition is crafted from scratch by our senior travel designers based on your personal preferences and travel pace.' },
            { title: 'Private Aviation & Yachts', desc: 'Direct access to a fleet of Gulfstream G650 aircraft and 50m+ superyachts with dedicated flight and crew teams.' },
            { title: 'Exclusive Access', desc: 'Private museum tours after hours, direct access to Michelin chefs, and VIP access to world-renowned cultural events.' },
          ].map((m, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-3">
              <h3 className="text-xl font-bold text-white font-serif">{m.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white font-serif">Begin Planning Your Next Expedition</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto">Speak directly with a senior travel architect to craft your tailored itinerary.</p>
          <Link href="/booking" className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs px-8 py-3 rounded-xl transition-colors uppercase tracking-wider">
            Consult Travel Designer
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
