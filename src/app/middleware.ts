// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Vérifiez si la requête est pour le sitemap
  if (request.nextUrl.pathname === '/sitemap.xml') {
    const response = NextResponse.next()
    response.headers.set('Content-Type', 'application/xml')
    return response
  }

  return NextResponse.next()
}

// Configuration du middleware pour s'appliquer uniquement aux routes spécifiques
export const config = {
  matcher: ['/sitemap.xml'],
}
