'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function CorporateTravelPage() {
  const [delegates, setDelegates] = useState(25);
  const [days, setDays] = useState(5);

  const estimatedCost = (delegates * 1450 + days * delegates * 350).toLocaleString();

  return (
    <div className="min-h-screen bg-[#07131e] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">B2B EXPEDITIONS</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">Corporate Retreats & Leadership Summits</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">Bespoke incentive trips, executive retreats, and international conference logistics for global leadership teams.</p>
        </div>

        {/* Cost Estimator */}
        <div className="bg-[#0b1d2d] border border-slate-800 rounded-3xl p-8 max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">Retreat Cost Estimator</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Delegates:</span><span className="text-amber-400 font-bold">{delegates} Executives</span></div>
              <input type="range" min={10} max={200} step={5} value={delegates} onChange={e => setDelegates(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Duration:</span><span className="text-amber-400 font-bold">{days} Days</span></div>
              <input type="range" min={2} max={14} value={days} onChange={e => setDays(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div className="bg-[#07131e] rounded-2xl p-6 text-center border border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Estimated Expedition Budget</span>
              <div className="text-4xl font-extrabold text-amber-400">${estimatedCost} <span className="text-xs text-slate-400 font-normal">USD</span></div>
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl uppercase tracking-wider text-xs transition-colors">
              Request Corporate Proposal
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
