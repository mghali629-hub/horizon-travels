'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug: 'top-10-overwater-villas-2026', title: 'Top 10 Ultra-Luxury Overwater Villas in the Maldives for 2026', date: 'August 1, 2026', author: 'Clara Vance', category: 'LUXURY DESTINATIONS', excerpt: 'From private water slides to glass-bottom infinity pools — our definitive breakdown of the finest Maldivian retreats.' },
  { slug: 'private-jet-charter-guide', title: 'Gulfstream G700 vs. Bombardier Global 7500: The Long-Range Jet Duel', date: 'July 15, 2026', author: 'Harrison Sterling', category: 'PRIVATE AVIATION', excerpt: 'Range, cabin altitude, noise cancellation, and onboard dining compared for ultra-long-haul intercontinental routes.' },
  { slug: 'kyoto-private-temple-access', title: 'Exclusive Access: Private Night Inspections of Ancient Kyoto Temples', date: 'June 28, 2026', author: 'Kenji Takahashi', category: 'CULTURAL EXPERIENCES', excerpt: 'How Horizon Travels arranges private monk-guided tea ceremonies after hours in UNESCO World Heritage sites.' },
];

export default function HorizonBlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">
            TRAVEL JOURNAL
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3 font-serif">
            Horizon Travel Dispatches
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Insider guides, private aviation insights, and destination reviews from our global team of travel architects.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map(p => (
            <div key={p.slug} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-3 hover:border-amber-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 bg-amber-950 px-3 py-1 rounded-full">{p.category}</span>
                <span className="text-xs text-slate-500">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">{p.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="inline-block text-amber-400 font-bold text-xs uppercase tracking-wider hover:underline">
                  Read Full Article →
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
