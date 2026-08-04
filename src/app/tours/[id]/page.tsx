import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const tours = await prisma.tour.findMany({ select: { id: true } });
  return tours.map((t) => ({ id: String(t.id) }));
}

export default async function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = await prisma.tour.findUnique({
    where: { id: Number(params.id) },
    include: { bookings: { take: 5, orderBy: { createdAt: 'desc' } } },
  });

  if (!tour) notFound();

  const highlights = [
    'Expert local guides with 10+ years experience',
    'Small group sizes (max 12 people)',
    'All entrance fees included',
    'Daily breakfast & selected dinners',
    'Luxury 5-star accommodation',
    'Private airport transfers',
  ];

  const itineraryDays = [
    { day: 1, title: 'Arrival & Welcome Dinner', desc: `Arrive in ${tour.location}. Transfer to hotel, settle in, then enjoy a welcome dinner with our expert guide.` },
    { day: 2, title: 'Cultural Immersion', desc: 'Start the day with a guided tour of key landmarks. Visit local markets and experience authentic cuisine.' },
    { day: 3, title: 'Hidden Gems', desc: 'Explore off-the-beaten-path destinations known only to locals. Photography opportunities throughout.' },
    { day: 4, title: 'Adventure & Nature', desc: 'A full day of outdoor activities tailored to the destination — hiking, sailing, or desert excursions.' },
    { day: 5, title: 'Leisure & Shopping', desc: 'Free morning to explore independently. Afternoon shopping tour at the finest local boutiques.' },
    { day: Number(tour.duration.split(' ')[0]) || 6, title: 'Farewell & Departure', desc: 'Final breakfast, check-out, and private transfer to airport. Safe travels!' },
  ];

  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f5f0e8', fontFamily: 'Georgia, serif' }}>
      {/* Hero */}
      <section style={{
        height: '70vh',
        background: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '0 5% 60px',
      }}>
        <div>
          <Link href="/tours" style={{ color: '#c9aa71', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            ← Back to Tours
          </Link>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
            <span style={{ background: '#c9aa71', color: '#000', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>{tour.category.toUpperCase()}</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', color: '#fff' }}>{tour.region}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '400', margin: '16px 0 8px', lineHeight: '1.2' }}>{tour.title}</h1>
          <p style={{ color: '#c9aa71', fontSize: '1.1rem', letterSpacing: '1px' }}>📍 {tour.location} · ⏱ {tour.duration}</p>
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px' }}>
        {/* Left: Content */}
        <div>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '50px' }}>
            {[
              { label: 'Rating', value: `${tour.rating}/5`, icon: '⭐' },
              { label: 'Reviews', value: `${tour.reviews}+`, icon: '💬' },
              { label: 'Duration', value: tour.duration, icon: '📅' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'rgba(201,170,113,0.1)', border: '1px solid rgba(201,170,113,0.3)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#c9aa71', margin: '8px 0 4px' }}>{stat.value}</div>
                <div style={{ color: '#999', fontSize: '13px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#c9aa71', borderBottom: '1px solid rgba(201,170,113,0.3)', paddingBottom: '12px', marginBottom: '20px' }}>About This Tour</h2>
            <p style={{ lineHeight: '1.9', color: '#ccc', fontSize: '1.05rem' }}>{tour.description}</p>
          </section>

          {/* Highlights */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#c9aa71', borderBottom: '1px solid rgba(201,170,113,0.3)', paddingBottom: '12px', marginBottom: '24px' }}>Tour Highlights</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {highlights.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#c9aa71', fontSize: '1.2rem', marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#ccc', lineHeight: '1.5' }}>{h}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#c9aa71', borderBottom: '1px solid rgba(201,170,113,0.3)', paddingBottom: '12px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {itineraryDays.map((day, idx) => (
                <div key={day.day} style={{ display: 'flex', gap: '24px', paddingBottom: '30px', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#c9aa71', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0, fontSize: '14px' }}>
                      {day.day}
                    </div>
                    {idx < itineraryDays.length - 1 && <div style={{ width: '1px', flex: '1', background: 'rgba(201,170,113,0.3)', marginTop: '8px' }} />}
                  </div>
                  <div style={{ paddingTop: '10px' }}>
                    <h3 style={{ color: '#f5f0e8', fontWeight: '600', marginBottom: '8px', fontSize: '1.05rem' }}>{day.title}</h3>
                    <p style={{ color: '#999', lineHeight: '1.7', fontSize: '0.95rem' }}>{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href={`/tours/${tour.id}/itinerary`} style={{ display: 'inline-block', marginTop: '10px', color: '#c9aa71', textDecoration: 'none', borderBottom: '1px solid #c9aa71', paddingBottom: '2px', fontSize: '14px' }}>
              View Full Detailed Itinerary →
            </Link>
          </section>

          {/* Recent Bookings */}
          {tour.bookings.length > 0 && (
            <section>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '400', color: '#c9aa71', borderBottom: '1px solid rgba(201,170,113,0.3)', paddingBottom: '12px', marginBottom: '24px' }}>Recent Travelers</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tour.bookings.map((b) => (
                  <div key={b.id} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontWeight: '600', color: '#f5f0e8' }}>{b.guestName}</span>
                      <span style={{ color: '#888', fontSize: '13px', marginLeft: '12px' }}>{b.guests} guests · {b.date}</span>
                    </div>
                    <span style={{ background: b.status === 'CONFIRMED' ? 'rgba(74,222,128,0.15)' : 'rgba(251,191,36,0.15)', color: b.status === 'CONFIRMED' ? '#4ade80' : '#fbbf24', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>{b.status}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right: Booking Card */}
        <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
          <div style={{ background: '#111', border: '1px solid rgba(201,170,113,0.4)', borderRadius: '20px', padding: '36px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <p style={{ color: '#888', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>STARTING FROM</p>
              <p style={{ fontSize: '2.8rem', fontWeight: '700', color: '#c9aa71', lineHeight: '1' }}>{tour.price}</p>
              <p style={{ color: '#888', fontSize: '13px', marginTop: '6px' }}>per person</p>
            </div>
            <Link href="/booking" style={{
              display: 'block',
              background: 'linear-gradient(135deg, #c9aa71, #a8864a)',
              color: '#000',
              textAlign: 'center',
              padding: '16px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1rem',
              letterSpacing: '1px',
              marginBottom: '16px',
              transition: 'all 0.3s',
            }}>
              BOOK THIS TOUR
            </Link>
            <a href="mailto:concierge@horizontravels.com" style={{
              display: 'block',
              border: '1px solid rgba(201,170,113,0.5)',
              color: '#c9aa71',
              textAlign: 'center',
              padding: '14px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '1px',
            }}>
              REQUEST CUSTOM QUOTE
            </a>
            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '🛡️', text: 'Free cancellation up to 30 days' },
                { icon: '💳', text: 'Secure payment guaranteed' },
                { icon: '🌐', text: '24/7 concierge support' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#999', fontSize: '13px' }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
