'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { INITIAL_TOURS, Tour } from '@/lib/tours-data';
import {
  Compass,
  MapPin,
  Calendar,
  Users,
  Star,
  ChevronRight,
  Search,
  CheckCircle2,
  Sparkles,
  Plane,
  Anchor,
  Heart,
  ShieldCheck,
  Globe,
  ArrowRight,
} from 'lucide-react';

export default function HorizonHomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: contactName,
          email: contactEmail,
          details: contactDetails,
        }),
      });
      const data = await res.json();
      if (data.success) setInquirySuccess(true);
    } catch (err) {
      console.error(err);
      setInquirySuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-24 pb-20">
        {/* Hero Section */}
        <section className="relative h-[88vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B19] via-[#070B19]/50 to-black/30" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#070B19]/80 border border-[#D4AF37]/40 backdrop-blur-md text-[#D4AF37] text-xs uppercase tracking-widest font-bold shadow-xl">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Bespoke Ultra-Luxury Expeditions
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
              Unveil Earth’s Most Extraordinary Havens
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Private charter jets, superyacht expeditions, Michelin culinary dining, and 24/7 dedicated personal concierges across 6 continents.
            </p>

            <div className="pt-4 max-w-3xl mx-auto">
              <div className="p-3 rounded-2xl bg-[#070B19]/90 border border-[#D4AF37]/40 backdrop-blur-xl flex flex-col md:flex-row items-center gap-3 shadow-2xl">
                <div className="flex-1 w-full flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-800">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <input
                    type="text"
                    placeholder="Search destinations (e.g. Amalfi, Kyoto, Serengeti)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white text-sm focus:outline-none w-full placeholder-slate-500 font-medium"
                  />
                </div>
                <Link
                  href={searchQuery ? `/destinations?query=${encodeURIComponent(searchQuery)}` : '/destinations'}
                  className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Search className="w-4 h-4" /> Explore Sanctuaries
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Expeditions Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
                FEATURED EXPEDITIONS
              </span>
              <h2 className="font-serif text-4xl font-bold text-white mt-3">Signature Global Journeys</h2>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:text-white uppercase tracking-wider transition-colors"
            >
              View Full Portfolio ({INITIAL_TOURS.length}+) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_TOURS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between shadow-2xl group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
        </section>

        {/* Categories Showcase: Jet, Yacht, Honeymoon */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
              ULTRA-LUXURY DIVISIONS
            </span>
            <h2 className="font-serif text-4xl font-bold text-white mt-3">Tailored Travel Architecture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 space-y-5 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Private Aviation</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Ultra long-range Gulfstream G650ER and Bombardier Global 7500 jets ready for global tarmac departure with zero wait times.
                </p>
              </div>
              <Link
                href="/private-jets"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-[#D4AF37] hover:text-black text-white font-bold text-xs uppercase text-center block transition-all"
              >
                Inspect Jet Fleet
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 space-y-5 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Anchor className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Superyacht Charters</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  100m+ mega-yachts with glass infinity pools, submarine dive centers, and private onboard Michelin sommelier teams.
                </p>
              </div>
              <Link
                href="/yacht-charters"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-[#D4AF37] hover:text-black text-white font-bold text-xs uppercase text-center block transition-all"
              >
                Inspect Yacht Fleet
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 space-y-5 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Honeymoon Havens</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Glass-bottom overwater villas in Bora Bora, Amalfi Coast cliffside retreats, and private hot spring ryokans in Kyoto.
                </p>
              </div>
              <Link
                href="/honeymoon"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-[#D4AF37] hover:text-black text-white font-bold text-xs uppercase text-center block transition-all"
              >
                Inspect Honeymoons
              </Link>
            </div>
          </div>
        </section>

        {/* Concierge Form */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/70 border border-[#D4AF37]/30 backdrop-blur-xl shadow-2xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">VIP DESK</span>
              <h2 className="font-serif text-3xl font-bold text-white">Consult Senior Travel Architect</h2>
              <p className="text-slate-400 text-xs max-w-lg mx-auto">
                Specify your custom dates, jet requirements, or private villa preferences. Our 24/7 concierge will contact you within 2 hours.
              </p>
            </div>

            {!inquirySuccess ? (
              <form onSubmit={handleInquiry} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-2 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Lord / Lady / Mr. John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="concierge@vip.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-2 block">Custom Expedition Specifications</label>
                  <textarea
                    rows={4}
                    required
                    value={contactDetails}
                    onChange={(e) => setContactDetails(e.target.value)}
                    placeholder="Specify preferred travel dates, destination preferences, jet requirements, or butler requests..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                >
                  Submit Private Travel Inquiry
                </button>
              </form>
            ) : (
              <div className="p-8 rounded-3xl bg-slate-950 border border-[#D4AF37] text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-white">Inquiry Submitted to VIP Desk</h3>
                <p className="text-slate-300 text-sm">Thank you, {contactName}. Your dedicated travel officer will reach out shortly.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
