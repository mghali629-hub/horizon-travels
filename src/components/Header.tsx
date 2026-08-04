'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, PhoneCall } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/tours', label: 'Tours' },
    { href: '/private-jets', label: 'Private Jets' },
    { href: '/yacht-charters', label: 'Yachts' },
    { href: '/honeymoon', label: 'Honeymoon' },
    { href: '/corporate', label: 'Corporate' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Reviews' },
    { href: '/blog', label: 'Magazine' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Concierge' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#070B19]/90 backdrop-blur-xl border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#997A15] flex items-center justify-center text-black shadow-lg shadow-[#D4AF37]/20">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-white block">HORIZON</span>
            <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] font-semibold uppercase block -mt-1">Luxury Travels</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-medium py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap py-1 ${pathname === link.href ? 'text-teal-400 border-b-2 border-teal-400 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.length > 5 && (
            <div className="relative group py-1">
              <button className="flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer py-1">
                <span>More</span>
                <span className="text-[9px] opacity-70">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-52 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="grid grid-cols-1 gap-1 max-h-72 overflow-y-auto no-scrollbar">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors block whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Link
          href="/booking"
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-[11px] tracking-wider uppercase shadow-lg hover:brightness-110 transition-all shrink-0"
        >
          Book Expedition
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#040711] border-t border-[#D4AF37]/20 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
            <Compass className="w-5 h-5 text-[#D4AF37]" /> HORIZON TRAVELS
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Ultra-luxury bespoke travel architecture, private aviation, and superyacht charters worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Regions</h4>
          <ul className="space-y-2">
            <li><Link href="/destinations/europe" className="hover:text-[#D4AF37]">Europe Expeditions</Link></li>
            <li><Link href="/destinations/asia" className="hover:text-[#D4AF37]">Asia Sanctuaries</Link></li>
            <li><Link href="/destinations/africa" className="hover:text-[#D4AF37]">Africa Safaris</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Services</h4>
          <ul className="space-y-2">
            <li><Link href="/private-jets" className="hover:text-[#D4AF37]">Private Aviation</Link></li>
            <li><Link href="/yacht-charters" className="hover:text-[#D4AF37]">Superyacht Charters</Link></li>
            <li><Link href="/honeymoon" className="hover:text-[#D4AF37]">Honeymoon Havens</Link></li>
            <li><Link href="/corporate" className="hover:text-[#D4AF37]">Corporate Travel</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Concierge</h4>
          <p className="text-slate-400">24/7 Global VIP Concierge Line:</p>
          <p className="text-[#D4AF37] font-bold mt-1 text-sm">+1 (800) 888-HORIZON</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-teal-400 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
