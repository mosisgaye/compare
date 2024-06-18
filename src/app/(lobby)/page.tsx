// pages/lobby.tsx (ou la page correspondante selon votre structure)
import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Alerte from '@/components/Alerte';
import Carousel from '@/components/Carousel';
import Articles from '@/components/Articles';
import Categories from '@/components/Categories';
import Cookies from '@/components/Cookies';
import Products from '@/components/Products';
import Review from '@/components/Review';

// Dynamically import the ZendeskWidget to ensure it runs only on the client
const ZendeskWidget = dynamic(() => import('@/components/ZendeskWidget'), { ssr: false });

export const metadata: Metadata = {
  title: 'Votre Hub de Comparaison des Offres Télécom',
  description: 'Bienvenue dans le website CompareTelecom, où vous pouvez explorer les meilleures offres télécoms, lire des critiques, et découvrir des articles informatifs.',
  openGraph: {
    title: 'Compare Telecoms - CompareTelecom',
    description: 'Explorez les meilleures offres télécoms et lisez des critiques détaillées sur CompareTelecom.',
    url: 'https://comparetelecom.net',
    siteName: 'CompareTelecom',
    images: [
      {
        url: 'https://comparetelecom.net/images/compare-telecom.png',
        width: 800,
        height: 600,
        alt: 'Image de comparetelecom',
      },
    ],
    type: 'website',
  },
};

// Composant de la page Lobby
const Lobby: React.FC = () => {
  return (
    <main className='py-20 dark:bg-[#012737]'>
      <div>
        <Carousel />
      </div>
      <div className="max-w-7xl mx-auto">
        <Categories />
        <Products />
        <Alerte />
        <Cookies />
        <Review />
        <Articles />
        <ZendeskWidget /> {/* Ajoutez le widget ici */}
      </div>
    </main>
  );
}

export default Lobby;
