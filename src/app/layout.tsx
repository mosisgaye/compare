import type { Metadata } from 'next'
import ClientProvider from '@/providers/ClientProvider'
import Head from 'next/head' // Ajout de l'import pour Head
import './globals.css'

export const metadata: Metadata = {
  title: 'Comparetelecom',
  description: 'CompareTelecom, un site de comparateur télécom en France',
  category: 'Marketing',
  authors: { name: 'Comparetelecom' },
  keywords: [
    'Compare telecom',
    'Les Offres les moins cheres',
    'Les Offres les moins cheres en France',
    'Forfait mobile',
    'Forfait Box',
    'Sans Engagement',
    'Avec Engagement',
  ],
  creator: 'Comparetelecom',
  publisher: 'Comparetelecom',
  openGraph: {
    title: 'Comparetelecom',
    description: 'CompareTelecom, un site de comparateur télécom en France',
    url: 'https://comparetelecom.net/',
    siteName: 'comapretelecom',
    images: 'https://comparetelecom.net/images/capture.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparetelecom',
    description: 'CompareTelecom, un site de comparateur télécom en France',
    images: ['https://comparetelecom.net/images/capture.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> // Balise meta pour la vue
      </Head>
      <body>
        <ClientProvider>  
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
