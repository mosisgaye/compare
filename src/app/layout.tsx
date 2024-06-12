
import type { Metadata } from 'next'
import Head from 'next/head'
import ClientProvider from '@/providers/ClientProvider'

import './globals.css'

export const metadata: Metadata = {
  title: 'Comparateur des offres télécoms en France',
  description: 'CompareTelecom, un site de comparateur télécom en France',
  creator: 'Comparetelecom',
  publisher: 'Comparetelecom',
  openGraph: {
    title: 'Comparetelecom',
    description: 'CompareTelecom, un site de comparateur des offres télécoms télécom en France',
    url: 'https://comparetelecom.net/',
    siteName: 'comparetelecom',
    images: 'https://comparetelecom.net/images/capture.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparetelecom',
    
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr'>
     <head>
      
     </head>
      <body>
       
        <ClientProvider>
          {children}
        </ClientProvider>
      
      </body>
    </html>
  )
}