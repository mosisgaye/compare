// src/pages/lobby.tsx

import Alerte from '@/components/Alerte';
import Categories from '@/components/Categories';
import Cookies from '@/components/Cookies';
import HeroSection from '@/components/HeroSection';

import Products from '@/components/Products';
import Review from '@/components/Review';

// Importer les articles depuis le fichier centralisé
import { offers } from '@/data/articles';

export default function Lobby() {
  return (
    <main>
      <div>
        <HeroSection offers={offers} />
      </div>
      <div className="max-w-7xl mx-auto">
        <Categories />
        <Products />
        <Alerte />
        <Cookies />
        <Review />
  
      </div>
    </main>
  );
}
