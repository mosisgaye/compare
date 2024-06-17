import React from 'react';
import { Metadata } from 'next';
import Filter from '@/components/Filter';
import ProductsList from '@/components/ProductsList';
import { INFINITE_SCROLL_LIMIT, categories } from '@/config';
import prisma from '@/lib/db';

export const metadata: Metadata = {
  title: 'Forfait Mobile',
  description: 'Découvrez les meilleurs forfaits mobiles disponibles. Comparez les offres et trouvez le forfait mobile qui vous convient le mieux.',
  keywords: 'forfait mobile, comparatif forfaits, offres mobiles',
  openGraph: {
    title: 'Forfait Mobile',
    description: 'Découvrez les meilleurs forfaits mobiles disponibles. Comparez les offres et trouvez le forfait mobile qui vous convient le mieux.',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/forfait-mobile`,
  },
};

const Products = async ({ searchParams }: { searchParams: { category: string } }) => {
  let products;
  let totalProducts;

  if (searchParams.category) {
    const productsWithCategory = await prisma.product.findMany({
      where: {
        categoryId: searchParams.category,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        Category: true,
      },
      take: INFINITE_SCROLL_LIMIT,
    });

    const totalProductsWithCategory = await prisma.product.count({
      where: {
        categoryId: searchParams.category,
      },
    });

    products = productsWithCategory;
    totalProducts = totalProductsWithCategory;
  } else {
    const productsWithoutCategory = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        Category: true,
      },
      take: INFINITE_SCROLL_LIMIT,
    });

    const totalProductsWithoutCategory = await prisma.product.count();

    products = productsWithoutCategory;
    totalProducts = totalProductsWithoutCategory;
  }

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center mt-8 sm:mt-10 mb-4 sm:mb-6'>Forfait Mobile</h1>
      <div className="flex justify-center mb-4 sm:mb-6">
        <Filter categories={categories} className='mt-8 sm:mt-10' />
      </div>
      <ProductsList initialProducts={products} totalData={totalProducts} />
    </div>
  );
};

export default Products;
