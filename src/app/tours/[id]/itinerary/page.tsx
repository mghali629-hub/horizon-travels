import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function TourItineraryPage({ params }: { params: { id: string } }) {
  const tour = await prisma.tour.findUnique({ where: { id: Number(params.id) } });
  if (!tour) notFound();

  const durDays = parseInt(tour.duration) || 7;

  const itinerary = Array.from({ length: durDays }, (_, i) => ({
    day: i + 1,
    date: `Day ${i + 1}`,
    title: [
      'Arrival & Welcome Orientation',
      'City Highlights & Iconic Landmarks',
      'Cultural Immersion & Local Markets',
      'Hidden Gems & Off-the-Beaten-Path',
      'Adventure Day — Nature & Activities',
      'Leisure, Shopping & Optional Excursions',
      'Farewell Dinner & Departure',
    ][i] || `Exploration Day ${i + 1}`,
    activities: [
      [
        { time: '14:00', activity: 'Airport pickup & hotel check-in' },
        { time: '16:00', activity: 'Welcome briefing & meet your guide' },
        { time: '19:00', activity: 'Welcome dinner at rooftop restaurant' },
      ],
      [
        { time: '08:00', activity: 'Breakfast at hotel' },
        { time: '09:30', activity: `Guided city tour of ${tour.location}` },
        { time: '13:00', activity: 'Lunch at local bistro' },
        { time: '15:00', activity: 'Museum & gallery visits' },
        { time: '19:30', activity: 'Sunset dinner with panoramic views' },
      ],
      [
        { time: '09:00', activity: 'Visit traditional markets' },
        { time: '11:00', activity: 'Cooking class with local chef' },
        { time: '14:00', activity: 'Cultural center & historical sites' },
        { time: '18:00', activity: 'Evening at leisure' },
      ],
      [
        { time: '07:30', activity: 'Early morning sunrise excursion' },
        { time: '10:00', activity: 'Off-road experience to hidden locations' },
        { time: '13:00', activity: 'Picnic lunch in scenic location' },
        { time: '16:00', activity: 'Photography golden hour session' },
      ],
      [
        { time: '08:00', activity: 'Adventure activity (hiking/sailing/desert)' },
        { time: '12:00', activity: 'Lunch at adventure camp' },
        { time: '15:00', activity: 'Return to hotel & spa time' },
        { time: '19:30', activity: 'Themed dinner experience' },
      ],
      [
        { time: '10:00', activity: 'Free morning — explore independently' },
        { time: '13:00', activity: 'Farewell lunch with the group' },
        { time: '15:00', activity: 'Souvenir shopping at artisan market' },
        { time: '19:00', activity: 'Optional evening river cruise' },
      ],
      [
        { time: '08:00', activity: 'Final breakfast at hotel' },
        { time: '10:00', activity: 'Hotel checkout' },
        { time: '11:00', activity: 'Private airport transfer' },
        { time: '14:00', activity: 'Departure — safe travels!' },
      ],
    ][i] || [{ time: '09:00', activity: 'Custom activities based on tour pace' }],
    meals: ['Breakfast', i > 0 && i < durDays - 1 ? 'Lunch' : null, 'Dinner'].filter(Boolean) as string[],
    accommodation: i < durDays - 1 ? `Luxury Hotel in ${tour.location}` : 'Departure day',
  }));

  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f5f0e8', fontFamily: 'Georgia, serif' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg, #1a1208 0%, #0a0a0a 100%)', padding: '100px 5% 60px', borderBottom: '1px solid rgba(201,170,113,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link href={`/tours/${tour.id}`} style={{ color: '#c9aa71', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>← Back to Tour Overview</Link>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', margin: '20px 0 10px' }}>{tour.title}</h1>
          <p style={{ color: '#c9aa71', letterSpacing: '1px' }}>📍 {tour.location} · {tour.duration} · {tour.category}</p>
        </div>
      </header>

      {/* Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 5%' }}>
        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '60px' }}>
          {[
            { label: 'Total Days', value: `${durDays} Days`, icon: '📅' },
            { label: 'Destinations', value: tour.location, icon: '📍' },
            { label: 'Meals Included', value: `${durDays * 2}+`, icon: '🍽️' },
            { label: 'Group Size', value: 'Max 12', icon: '👥' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(201,170,113,0.08)', border: '1px solid rgba(201,170,113,0.25)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem' }}>{s.icon}</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#c9aa71', margin: '8px 0 4px' }}>{s.value}</div>
              <div style={{ color: '#888', fontSize: '12px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Day-by-Day */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#c9aa71', marginBottom: '40px' }}>Complete Day-by-Day Itinerary</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {itinerary.map((day) => (
            <div key={day.day} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,170,113,0.2)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ background: 'rgba(201,170,113,0.15)', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ background: '#c9aa71', color: '#000', padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', marginRight: '12px' }}>DAY {day.day}</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{day.title}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {day.meals.map((m) => (
                    <span key={m} style={{ background: 'rgba(201,170,113,0.2)', color: '#c9aa71', padding: '3px 10px', borderRadius: '20px', fontSize: '11px' }}>🍽 {m}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: '24px 28px' }}>
                {day.activities.map((act, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < day.activities.length - 1 ? '16px' : 0 }}>
                    <span style={{ color: '#c9aa71', fontSize: '13px', width: '52px', flexShrink: 0, paddingTop: '2px', fontFamily: 'monospace' }}>{act.time}</span>
                    <div style={{ flex: 1, paddingLeft: '16px', borderLeft: '1px solid rgba(201,170,113,0.2)' }}>
                      <p style={{ color: '#ccc', margin: 0, lineHeight: '1.6' }}>{act.activity}</p>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#777', fontSize: '13px' }}>
                  🏨 {day.accommodation}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '60px', textAlign: 'center', background: 'rgba(201,170,113,0.08)', borderRadius: '20px', padding: '50px' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '400', marginBottom: '12px' }}>Ready to Begin Your Journey?</h3>
          <p style={{ color: '#999', marginBottom: '30px' }}>Join {tour.reviews}+ travelers who've experienced this incredible tour</p>
          <Link href="/booking" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #c9aa71, #a8864a)', color: '#000', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', letterSpacing: '2px' }}>
            BOOK NOW — {tour.price}
          </Link>
        </div>
      </div>
    </main>
  );
}
