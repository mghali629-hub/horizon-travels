import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://horizontravels.luxury'),
  title: {
    default: 'Horizon Travels | Ultra-Luxury Private Jet & Yacht Expeditions',
    template: '%s | Horizon Travels',
  },
  description: 'Bespoke VIP travel management, private jet charters (Gulfstream G650ER), superyacht expeditions, and exclusive safari reserves across 120 countries.',
  keywords: ['Luxury Travel', 'Private Jet Charter', 'Gulfstream G650', 'Superyacht Charter', 'VIP Concierge', 'Serengeti Safari'],
  openGraph: {
    title: 'Horizon Travels | Ultra-Luxury Travel Advisory',
    description: 'Custom luxury itineraries, private aviation charters, and superyacht voyages.',
    url: 'https://horizontravels.luxury',
    siteName: 'Horizon Travels Concierge',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horizon Travels Luxury Aviation',
    description: 'Private jets, superyachts, and bespoke global expeditions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#071228] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
