import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tourId, guestName, email, phone, guests, date, concierge } = body;

    const booking = await prisma.booking.create({
      data: {
        tourId: Number(tourId) || 1,
        guestName,
        email,
        phone,
        guests: Number(guests) || 2,
        date,
        concierge: concierge ?? true,
        status: 'CONFIRMED',
      },
    });

    return NextResponse.json({ success: true, booking });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
