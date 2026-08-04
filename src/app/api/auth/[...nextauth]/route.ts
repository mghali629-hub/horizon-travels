import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_ht_vip_1109',
      name: 'Victoria Vance',
      email: 'v.vance@sovereign-travel.com',
      membershipTier: 'HORIZON_DIAMOND',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'ht_jwt_jet_9901827',
      user: {
        id: 'usr_ht_vip_1109',
        email: body.email || 'traveler@horizontravels.com',
        membershipTier: 'DIAMOND',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid travel auth credentials' }, { status: 400 });
  }
}
