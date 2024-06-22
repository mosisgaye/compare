import React from 'react';
import ProductsList from '@/components/ProductsList';
import { INFINITE_SCROLL_LIMIT } from '@/config';
import prisma from '@/lib/db';
import Feedback from '@/components/Feedback';
import Breadcrumb from '@/components/Breadcrumb';
import FilterToggle from '@/components/FilterToggle';
import { Metadata } from 'next';

export async function generateMetadata({ searchParams }: { searchParams?: { category?: string, filter?: string } }): Promise<Metadata> {
  const { category, filter } = searchParams || {};

  let title = 'Forfait Mobile - Meilleures Offres';
  let description = 'Découvrez les meilleures offres de forfaits mobiles adaptés à vos besoins.';
  let keywords = 'forfait mobile, mobile, offres mobiles';

  if (filter) {
    switch (filter) {
      case 'sans-engagement':
        title = 'Forfaits Mobiles Sans Engagement - Offres Flexibles';
        description = 'Explorez notre sélection de forfaits mobiles sans engagement. Choisissez la flexibilité.';
        keywords = 'forfait sans engagement, mobile sans engagement, offres flexibles';
        break;
      case 'les-moins-chers':
        title = 'Forfaits Mobiles Les Moins Chers - Économisez';
        description = 'Trouvez les forfaits mobiles les moins chers pour économiser sur vos communications.';
        keywords = 'forfait moins cher, mobile pas cher, forfait économique';
        break;
      case 'forfait-5g':
        title = 'Forfaits Mobiles 5G - Connexion Ultra-Rapide';
        description = 'Découvrez les meilleures offres de forfaits mobiles 5G pour une connexion ultra-rapide.';
        keywords = 'forfait 5G, mobile 5G, connexion rapide';
        break;
      case 'operateurs':
        title = 'Offres des Opérateurs Mobiles - Choisissez Votre Fournisseur';
        description = 'Comparez les offres des principaux opérateurs mobiles et choisissez la meilleure pour vous.';
        keywords = 'opérateurs mobiles, offres opérateurs, fournisseurs mobiles';
        break;
      // Ajoutez d'autres cas si nécessaire
    }
  }

  return {
    title,
    description,
    keywords,
  };
}

const Products = async ({ searchParams }: { searchParams?: { category?: string, filter?: string } }) => {
  const { category, filter } = searchParams || {};

  // Construction du fil d'Ariane en fonction des paramètres de la recherche
  const breadcrumbItems: { label: string, href: string }[] = [
    { label: 'Accueil', href: '/' },
    { label: 'Forfait Mobile', href: '/forfait-mobile' },
  ];

  // Gestion des filtres dans le fil d'Ariane
  if (filter) {
    switch (filter) {
      case 'sans-engagement':
        breadcrumbItems.push({ label: 'Sans Engagement', href: '/forfait-mobile?sans-engagement' });
        break;
      case 'les-moins-chers':
        breadcrumbItems.push({ label: 'Les Moins Chers', href: '/forfait-mobile?filter=les-moins-chers' });
        break;
      case 'forfait-5g':
        breadcrumbItems.push({ label: 'Forfaits 5G', href: '/forfait-mobile?filter=forfait-5g' });
        break;
      case 'operateurs':
        breadcrumbItems.push({ label: 'Opérateurs', href: '/forfait-mobile?filter=operateurs' });
        break;
      // Ajoutez d'autres cas si nécessaire
    }
  }

  // Préparation des filtres pour la requête Prisma
  const filters: any = {};

  if (category) {
    filters.categoryId = category;
  }

  if (filter) {
    switch (filter) {
      case 'sans-engagement':
        filters.categoryId = 'sans-engagement';
        break;
      case 'les-moins-chers':
        filters.price = {
          lt: 10.00, // Par exemple, les forfaits moins chers que 10 euros
        };
        break;
      case 'forfait-5g':
        filters.categoryId = 'forfait-5g';
        break;
      case 'operateurs':
        filters.categoryId = 'operateurs';
        break;
      // Ajoutez d'autres cas si nécessaire
    }
  }

  // Requête pour récupérer les produits selon les filtres
  const products = await prisma.product.findMany({
    where: filters,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      Category: true,
    },
    take: INFINITE_SCROLL_LIMIT,
  });

  // Compter le nombre total de produits correspondant aux filtres
  const totalProducts = await prisma.product.count({
    where: filters,
  });

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className='text-4xl font-bold text-center mt-8 sm:mt-10 mb-4 sm:mb-6'>Forfait Mobile</h1>
      <FilterToggle /> {/* Utiliser le composant client */}
      <ProductsList initialProducts={products} totalData={totalProducts} />
      <Feedback />
    </div>
  );
};

export default Products;
