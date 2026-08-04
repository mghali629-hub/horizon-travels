'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const faqs = [
  { q: 'How does the Horizon Travels private itinerary service work?', a: 'You begin with a consultation with a dedicated Travel Architect who learns your dates, interests, and style. We then craft a bespoke day-by-day itinerary with all flights, transfers, villas, and private guides included.' },
  { q: 'Can you arrange private jet charters at short notice?', a: 'Yes. Our 24/7 aviation desk can position light, midsize, or ultra-long-range jets globally within 4 hours of request, subject to permit clearance.' },
  { q: 'What is included in private yacht charter packages?', a: 'Full yacht charters include captain and crew, private onboard chef, custom menus, water toys (jet skis, seabobs, dive gear), and all port fees.' },
  { q: 'Do you offer 24/7 on-ground assistance during trips?', a: 'Every Horizon guest has direct WhatsApp and phone access to their dedicated concierge team who handle ground logistics, last-minute dining changes, and emergencies.' },
  { q: 'What cancellation protection is provided?', a: 'We offer Flexible Horizon Protection allowing itinerary changes up to 14 days prior to departure for private land arrangements.' },
];

export default function HorizonFaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">
            GUEST ASSISTANCE
          </span>
          <h1 className="text-4xl font-extrabold text-white font-serif mt-3 mb-2">Frequently Asked Questions</h1>
          <p className="text-slate-400 text-sm">Everything you need to know about private charters, custom itineraries, and concierge services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 font-bold text-white flex justify-between items-center text-sm">
                <span>{f.q}</span>
                <span className="text-amber-400 font-mono text-xl ml-4 shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed border-t border-slate-800/60 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-2">
          <h3 className="font-bold text-white text-base">Have a Custom Expeditions Request?</h3>
          <p className="text-slate-400 text-xs">Our senior travel architects are available 24/7.</p>
          <Link href="/contact" className="inline-block text-amber-400 font-bold text-xs hover:underline uppercase tracking-wider">
            Contact Concierge Desk →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
