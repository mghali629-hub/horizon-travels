import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { INITIAL_TOURS } from '@/lib/tours-data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region');
    const query = searchParams.get('query');

    let tours: any[] = [];
    try {
      tours = await prisma.tour.findMany();
    } catch (e) {
      console.warn('Prisma query failed, using INITIAL_TOURS fallback');
    }
    
    if (!tours || tours.length === 0) {
      tours = INITIAL_TOURS;
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
    return NextResponse.json({ success: true, tours: INITIAL_TOURS });
  }
}
