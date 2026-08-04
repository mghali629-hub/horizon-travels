'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  MapPin,
  Calendar,
  Users,
  Star,
  ChevronRight,
  Search,
  CheckCircle2,
  X,
  PhoneCall,
  Mail,
  Sparkles,
  Globe,
  Clock,
  ArrowRight,
} from 'lucide-react';

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

export default function HorizonHomePage() {
  const [activeTab, setActiveTab] = useState<'home' | 'destinations' | 'gallery' | 'contact'>('home');
  const [tours, setTours] = useState<Tour[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Form states
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-10-15');

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactDetails, setContactDetails] = useState('');

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

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tourId: selectedTour?.id,
          guestName,
          email,
          phone,
          guests,
          date,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setBookingSuccess(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
      if (data.success) {
        setInquirySuccess(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#070B19]/80 backdrop-blur-xl border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#997A15] flex items-center justify-center text-black shadow-lg shadow-[#D4AF37]/20">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-white block">HORIZON</span>
              <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] font-semibold uppercase block -mt-1">Luxury Travels</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => setActiveTab('home')} className={`transition-colors py-1 ${activeTab === 'home' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-300 hover:text-white'}`}>
              Home
            </button>
            <button onClick={() => setActiveTab('destinations')} className={`transition-colors py-1 ${activeTab === 'destinations' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-300 hover:text-white'}`}>
              Destinations
            </button>
            <button onClick={() => setActiveTab('gallery')} className={`transition-colors py-1 ${activeTab === 'gallery' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-300 hover:text-white'}`}>
              Gallery
            </button>
            <button onClick={() => setActiveTab('contact')} className={`transition-colors py-1 ${activeTab === 'contact' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-slate-300 hover:text-white'}`}>
              Concierge
            </button>
          </nav>

          <button onClick={() => setActiveTab('destinations')} className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition-all">
            Explore Expeditions
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {activeTab === 'home' && (
          <div>
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B19] via-[#070B19]/50 to-black/30" />

              <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070B19]/80 border border-[#D4AF37]/40 backdrop-blur-md text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
                  <Sparkles className="w-4 h-4" /> Bespoke Ultra-Luxury Expeditions
                </div>
                <h1 className="font-serif text-4xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
                  Unveil Earth’s Most Extraordinary Havens
                </h1>
                <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                  Private charter jets, Michelin culinary dining, and 24/7 dedicated personal concierges.
                </p>

                <div className="pt-6 max-w-3xl mx-auto">
                  <div className="p-3 rounded-2xl bg-[#070B19]/90 border border-[#D4AF37]/30 backdrop-blur-xl flex flex-col md:flex-row items-center gap-3 shadow-2xl">
                    <div className="flex-1 w-full flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-800">
                      <MapPin className="w-5 h-5 text-[#D4AF37]" />
                      <input
                        type="text"
                        placeholder="Search luxury destinations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent text-white text-sm focus:outline-none w-full placeholder-slate-500"
                      />
                    </div>
                    <button
                      onClick={() => {
                        fetchTours();
                        setActiveTab('destinations');
                      }}
                      className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-semibold text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <Search className="w-4 h-4" /> Search
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'destinations' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="font-serif text-4xl font-bold text-white mb-4">World Expeditions</h1>
              <p className="text-slate-400 text-sm">Filter through our bespoke portfolio of private yachts, luxury villas, and safari sanctuaries.</p>
            </div>

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
                      <div className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">{item.category}</div>
                      <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-slate-400 text-xs mt-2 line-clamp-2">{item.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedTour(item)}
                      className="w-full py-3 rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-xs uppercase hover:bg-[#D4AF37] hover:text-black transition-all"
                    >
                      Explore & Reserve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="font-serif text-4xl font-bold text-white mb-4">Expedition Visuals</h1>
              <p className="text-slate-400 text-sm">Moments captured from our private yacht voyages and alpine chalets.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop'].map((img, i) => (
                <div key={i} className="h-80 rounded-2xl overflow-hidden border border-slate-800">
                  <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-3xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl font-bold text-white mb-4">Private Concierge Desk</h1>
              <p className="text-slate-400 text-sm">Connect with our luxury travel architects for custom itinerary planning.</p>
            </div>

            {!inquirySuccess ? (
              <form onSubmit={handleInquiry} className="p-8 rounded-3xl bg-slate-900/60 border border-[#D4AF37]/30 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-2 block">Full Name</label>
                    <input type="text" required value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Lord / Lady / Mr. John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-2 block">Email Address</label>
                    <input type="email" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="concierge@vip.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-2 block">Custom Itinerary Details</label>
                  <textarea rows={4} required value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} placeholder="Specify preferred dates, party size, and butler requests..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none" />
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase tracking-wider shadow-lg">
                  Submit Inquiry to Concierge
                </button>
              </form>
            ) : (
              <div className="p-8 rounded-3xl bg-slate-900 border border-[#D4AF37] text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-slate-300 text-sm">Your private concierge officer will reach out within 2 hours.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedTour && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="max-w-2xl w-full bg-[#070B19] border border-[#D4AF37]/40 rounded-3xl p-8 space-y-6 relative">
              <button onClick={() => { setSelectedTour(null); setBookingSuccess(false); }} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>

              {!bookingSuccess ? (
                <form onSubmit={handleBooking} className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-white">{selectedTour.title}</h2>
                  <p className="text-[#D4AF37] font-bold text-lg">{selectedTour.price} / guest</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Your Name</label>
                      <input type="text" required value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white" />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Email</label>
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@vip.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white" />
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase tracking-wider shadow-lg">
                    Confirm Reservation via API
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-white">Booking Saved in Database</h3>
                  <p className="text-slate-300 text-sm">Thank you, {guestName}. Your reservation is confirmed.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
