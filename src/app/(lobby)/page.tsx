// Importation des modules nécessaires
import { Metadata } from 'next';
import Alerte from '@/components/Alerte';
import Carousel from '@/components/Carousel';
import Articles from '@/components/Articles';
import Categories from '@/components/Categories';
import Cookies from '@/components/Cookies';
import Products from '@/components/Products';
import Review from '@/components/Review';

// Définition des métadonnées pour la page Lobby
export const metadata: Metadata = {
  title: 'Lobby - Votre Hub de Comparaison des Offres Télécom',
  description: 'Bienvenue dans le lobby de CompareTelecom, où vous pouvez explorer les meilleures offres télécoms, lire des critiques, et découvrir des articles informatifs.',
  openGraph: {
    title: 'Lobby - CompareTelecom',
    description: 'Explorez les meilleures offres télécoms et lisez des critiques détaillées sur CompareTelecom.',
    url: 'https://comparetelecom.net/lobby',
    siteName: 'CompareTelecom',
    images: [
      {
        url: 'https://comparetelecom.net/images/lobby.jpg',
        width: 800,
        height: 600,
        alt: 'Image de Lobby',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lobby - CompareTelecom',
    description: 'Découvrez les meilleures offres télécoms et lisez des critiques sur CompareTelecom.',
    images: [
      {
        url: 'https://comparetelecom.net/images/lobby-twitter.jpg',
        alt: 'Image de Lobby pour Twitter',
      },
    ],
  },
};

// Composant de la page Lobby
export default function Lobby() {
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
      </div>
    </main>
  );
}
