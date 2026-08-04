import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/private-jets/charter') || pathname.startsWith('/yacht-charters/book')) {
    const token = request.cookies.get('next-auth.session-token') || request.cookies.get('horizon-auth');
    if (!token) {
      const loginUrl = new URL('/booking', request.url);
      loginUrl.searchParams.set('callbackUrl', encodeURIComponent(pathname));
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/private-jets/charter/:path*', '/yacht-charters/book/:path*'],
};
