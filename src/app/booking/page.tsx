'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function BookingWizardPage() {
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-10-15');
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tourId: 1, guestName, email, phone, guests, date }),
      });
      const data = await res.json();
      if (data.success) setConfirmed(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-2">Expedition Booking Wizard</h1>
          <p className="text-slate-400 text-sm">Step 1 of 2: Select Date & Guest Details</p>
        </div>

        {!confirmed ? (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/60 border border-[#D4AF37]/30 space-y-6">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Full Name</label>
              <input type="text" required value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Lord / Lady / Mr. John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="concierge@vip.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Phone</label>
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 019-2834" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase tracking-wider">
              Confirm Provisional Booking via API
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-900 border border-[#D4AF37] text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-white">Booking Saved to Database</h3>
            <p className="text-slate-300 text-sm">Confirmed for {guestName}. Concierge officer will reach out shortly.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
