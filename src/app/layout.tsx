import ClientProvider from '@/providers/ClientProvider';
import './globals.css';

// Métadonnées globales
export const metadata = {
  title: 'Comparateur des offres télécoms en France - CompareTelecom.net',
  description: 'CompareTelecom, un site de comparateur des offres télécoms en France. Trouvez les meilleurs forfaits mobiles, internationaux et sans engagement.',
  creator: 'Comparetelecom',
  publisher: 'Comparetelecom',
  openGraph: {
    title: 'Comparetelecom',
    description: 'CompareTelecom, un site de comparateur des offres télécoms en France.',
    url: 'https://comparetelecom.net/',
    siteName: 'CompareTelecom',
    images: 'https://comparetelecom.net/images/capture.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparetelecom',
    description: 'Découvrez les meilleurs forfaits télécoms en France sur CompareTelecom.net',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="fr">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
