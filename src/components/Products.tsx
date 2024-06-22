//src/components/Products.tsx


import { ArrowRight, ArrowRightIcon, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import PopularProducts from '@/components/PopularProducts'
import PopularProductsSkeleton from '@/components/skeletons/PopularProductsSkeleton'


const Products = async () => {
  return (
    <section
      id='products'
      aria-labelledby='product-heading'
      className='space-y-4 px-1 sm:px-6 lg:px-8 py-1 md:pt-10 lg:pt-24'
    >
      <div className='flex items-end justify-between'>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-3xl md:text-5xl text-start font-bold leading-[1.1]' style={{ color: '#79CE25' }}>
            Meilleurs Offres
          </h2>
          <h3 className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            Explorer les meilleurs offres télécoms de la France
          </h3>
        </div>
        <a
          href='/forfait-mobile'
          className='hidden md:flex gap-1 hover:translate-x-1 hover:text-emerald-600 transition-all' style={{ color: '#79CE25' }}
        >
          Choisissez <ArrowRight />
        </a>
      </div>
      <Suspense fallback={<PopularProductsSkeleton />}>
        <PopularProducts />
      </Suspense>
      <Link
        href='/forfait-mobile'
        className='custom-button-color mx-auto flex w-fit hover:before:-translate-x-48 dark:text-white'
        
      >
        Voir toutes les Offres
        <MoveRight className='ml-2 h-4 w-4' aria-hidden='true' />
      </Link>
    </section>
  )
}

export default Products