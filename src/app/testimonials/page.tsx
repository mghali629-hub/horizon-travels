'use client';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';

interface Review {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  tour: string;
}

export default function TestimonialsPage() {
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, name: 'Sir Harrison Sterling', location: 'London, UK', comment: 'The Serengeti private charter was flawless. From helicopter transfers to private lodge chefs, Horizon exceeded every expectation.', rating: 5, tour: 'Tanzania Luxury Safari' },
    { id: 2, name: 'Lady Victoria Vance', location: 'Geneva, Switzerland', comment: 'Our Amalfi coast yacht week was pure magic. The crew, culinary pairings, and private villa arrangements were extraordinary.', rating: 5, tour: 'Amalfi Private Charter' },
  ]);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setReviews(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#07131e] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full">GUEST REVIEWS</span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">Traveler Testimonials</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base">Unfiltered feedback from discerning travelers who explore the world with Horizon Travels.</p>
        </div>

        <div className="space-y-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-[#0b1d2d] border border-slate-800 rounded-3xl p-8 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">{r.name}</h3>
                  <span className="text-xs text-amber-400 font-bold">{r.tour} · {r.location}</span>
                </div>
                <div className="text-amber-400 text-sm">{'★'.repeat(r.rating)}</div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">"{r.comment}"</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
