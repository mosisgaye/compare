'use client'
import { useEffect, useState } from 'react';
import Filter from '@/components/Filter';
import Hero1 from '@/components/Hero1';
import ProductsList from '@/components/ProductsList';
import { INFINITE_SCROLL_LIMIT, categories } from '@/config';

interface SearchParams {
  limit: number;
  page: number;
  category: string;
}

const MobileProducts = ({ searchParams }: { searchParams: SearchParams }) => {
  const [products, setProducts] = useState<any[]>([]); // Définir le type approprié pour vos produits
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { limit, page, category } = searchParams;
        const res = await fetch(`/api/productBox?limit=${limit}&page=${page}&category=${category}`);
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
        setTotalProducts(data.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [searchParams]);

  return (
    <div className='max-w-7xl mx-auto text-center px-4'>
      <div className='text-black text-4xl pb-16'>
        Offres Mobiles
      </div>
      <Hero1 />
      <div className="mt-8 sm:mt-10 mb-4 sm:mb-6"></div>
      <div className="flex justify-center mb-4 sm:mb-6">
        <Filter categories={categories} className='mt-8 sm:mt-10' />
      </div>
      <ProductsList initialProducts={products} totalData={totalProducts} />
    </div>
  );
}

export default MobileProducts;
