import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region');
    const query = searchParams.get('query');

    let tours = await prisma.tour.findMany();
    
    // Seed initial data if empty
    if (tours.length === 0) {
      const initialTours = [
        {
          title: 'Santorini Private Yacht Expedition',
          location: 'Cyclades, Greece',
          region: 'Europe',
          price: '$6,800',
          duration: '7 Days / 6 Nights',
          rating: 4.98,
          reviews: 124,
          category: 'Yacht Cruise',
          image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
          description: 'Sail through pristine Aegean waters on a private catamaran with private chef dining and sunset views.',
        },
        {
          title: 'Kyoto Imperial Sanctuary & Culinary Safari',
          location: 'Kyoto, Japan',
          region: 'Asia',
          price: '$8,200',
          duration: '9 Days / 8 Nights',
          rating: 4.99,
          reviews: 98,
          category: 'Cultural Luxury',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
          description: 'Immerse in private tea ceremonies led by grand masters and savor 3-Star Michelin Kaiseki culinary rituals.',
        },
        {
          title: 'Serengeti Royal Helicopter Safari',
          location: 'Serengeti, Tanzania',
          region: 'Africa',
          price: '$12,400',
          duration: '10 Days / 9 Nights',
          rating: 5.0,
          reviews: 86,
          category: 'Wild Safari',
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
          description: 'Experience the Great Migration from private luxury tents with private game drives and hot air balloon champagne breakfasts.',
        },
      ];
      await prisma.tour.createMany({ data: initialTours });
      tours = await prisma.tour.findMany();
    }

    let filtered = tours;
    if (region && region !== 'All') {
      filtered = filtered.filter(t => t.region.toLowerCase() === region.toLowerCase());
    }
    if (query) {
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(query.toLowerCase()) || 
        t.location.toLowerCase().includes(query.toLowerCase())
      );
    }

    return NextResponse.json({ success: true, tours: filtered });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
