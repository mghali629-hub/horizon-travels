'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, details }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-2">Private Concierge Desk</h1>
          <p className="text-slate-400 text-sm">Direct line to our ultra-luxury travel architects.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/60 border border-[#D4AF37]/30 space-y-6">
            <div>
              <label className="text-xs text-slate-300 block mb-1">Full Name</label>
              <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Lord / Lady / Mr. John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-300 block mb-1">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="concierge@vip.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-300 block mb-1">Inquiry Details</label>
              <textarea rows={4} required value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Details regarding your custom travel dates..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase tracking-wider">
              Submit Inquiry to Concierge API
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-900 border border-[#D4AF37] text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-white">Inquiry Saved to DB</h3>
            <p className="text-slate-300 text-sm">Thank you, {fullName}. Our team will respond shortly.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
