import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Alerte from '@/components/Alerte';
import Carousel from '@/components/Carousel';
import Articles from '@/components/Articles';
import Categories from '@/components/Categories';
import Cookies from '@/components/Cookies';
import Products from '@/components/Products';
import Review from '@/components/Review';
import Feedback from '@/components/Feedback'; 

// Metadata for SEO
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

// Main component
const Lobby: React.FC = () => {
  return (
    <main className='py-20 dark:bg-[#012737]'>
      {/* Klaviyo Script for analytics or marketing */}
      <Script
        src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TJWZAy"
        strategy="afterInteractive"
      />
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
        <Feedback /> 
      </div>
    </main>
  );
}

export default Lobby;
