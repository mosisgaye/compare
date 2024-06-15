import { ArrowRight } from 'lucide-react'
import { Suspense } from 'react'

import CategoryCard from '@/components/cards/CategoryCard'
import CategoryCardSkeleton from '@/components/skeletons/CategoryCardSkeleton'
import { categories } from '@/config'

const Categories = async () => {
  return (
    <section
      id='categories'
      aria-labelledby='categories-heading'
      className='space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28 '
    >
      <div className='flex items-end justify-between'>
        <div className='flex flex-col space-y-4'>
          <h2 className='max-w-sm text-xl md:text-5xl text-start text-[#79CE25] font-bold leading-[1.1]'>
           
            Les offres Box Internet  </h2>
          <h3 className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            Trouver les meilleurs offres
          </h3>
        </div>
        <a
          href='/box-internet'
          className='hidden md:flex gap-1 text-[#79CE25] hover:translate-x-1 hover:text-[#79CE25]  transition-all'
        >
          Allez-y <ArrowRight />
        </a>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {categories.map((category) => (
          <Suspense key={category.slug} fallback={<CategoryCardSkeleton />}>
            <CategoryCard category={category} />
          </Suspense>
        ))}
      </div>
    </section>
  )
}

export default Categories
