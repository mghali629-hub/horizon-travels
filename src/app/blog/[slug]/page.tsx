'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function HorizonBlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <Link href="/blog" className="text-xs text-amber-400 font-bold hover:underline mb-4 block">← Back to Travel Journal</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-amber-400 bg-amber-950 px-3 py-1 rounded-full uppercase">LUXURY DESTINATIONS</span>
            <span className="text-xs text-slate-500">6 Min Read · Curated Guide</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white font-serif mt-3 mb-2">Top 10 Ultra-Luxury Overwater Villas in the Maldives for 2026</h1>
          <p className="text-slate-400 text-sm">Published: August 1, 2026 · By Clara Vance</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 text-slate-300 text-sm leading-relaxed font-sans">
          <p>
            The Maldivian archipelago remains the gold standard for overwater privacy and lagoon living. For 2026, newly opened and renovated resorts have pushed luxury boundaries further with retractor roofs for stargazing, multi-story water slides, and private submarine docks.
          </p>

          <h2 className="text-xl font-bold text-white font-serif">1. The Soneva Jani Reserve — Noonu Atoll</h2>
          <p>
            Spanning over 600 sq m, this multi-bedroom overwater sanctuary features a private seawater pool, outdoor bathroom, slide leading straight into the lagoon, and a master bedroom with a retractable roof.
          </p>

          <h2 className="text-xl font-bold text-white font-serif">2. The Ocean Pearl Resort — Baa Atoll</h2>
          <p>
            Located within a UNESCO Biosphere Reserve, Ocean Pearl features 24-hour dedicated butler service, glass floor panels, and direct access to Hanifaru Bay manta ray feeding grounds.
          </p>

          <div className="bg-amber-950/40 border border-amber-800/50 rounded-2xl p-5 text-xs text-amber-300 space-y-2">
            <strong className="block font-bold text-white">✈️ Concierge Recommendation:</strong>
            <p>We recommend combining a 5-night overwater villa stay with a 3-day private yacht charter through the North Male and Baa Atolls during November – April peak season.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
