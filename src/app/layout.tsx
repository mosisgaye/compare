// Importation des modules et des styles
import ClientProvider from '@/providers/ClientProvider';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google"
import Head from 'next/head';
import './globals.css';

// Configuration de la police Inter
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Comparateur des offres télécoms en France - CompareTelecom.net',
  description: 'CompareTelecom, un site de comparateur des offres télécoms en France. Trouvez les meilleurs forfaits mobiles, box internet en France.',
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

// Composant RootLayout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="fr">
      <Head>
        <title>Comparetelecom</title>
        <link
          rel="canonical"
          href="https://comparetelecom.net/forfait-mobile"
          key="canonical"
        />
        <meta property="og:image" content="https://comparetelecom.net/images/capture.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="description" content="CompareTelecom, un site de comparateur des offres télécoms en France. Trouvez les meilleurs forfaits mobiles, box internet en France." />
        <meta name="author" content="Comparetelecom" />
        <meta name="publisher" content="Comparetelecom" />
      </Head>
      <body className={`${inter.className}`}>
        <div className='w-full mx-auto'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <GoogleTagManager gtmId="GTM-P8JWP6N9" />
            <ClientProvider>
              {children}
            </ClientProvider>
            <Analytics />
          </ThemeProvider>
          <GoogleAnalytics gaId="G-DYKC89LEW0" />
        </div>
      </body>
    </html>
  );
}
