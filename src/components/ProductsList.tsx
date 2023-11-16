'use client'

import { useIntersection } from '@mantine/hooks'
import { Product } from '@prisma/client'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { useEffect, useRef } from 'react'

import ProductCard from '@/components/cards/ProductCard'
import { INFINITE_SCROLL_LIMIT } from '@/config'

interface ProductsListProps {
  initialProducts: Product[]
  totalData: number
}

const ProductsList: React.FC<ProductsListProps> = ({
  initialProducts,
  totalData,
}) => {
  const lastPostRef = useRef<HTMLElement>(null)

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  })

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['infinite-query'],
    queryFn: async ({ pageParam }) => {
      const { data } = await axios.get(
        `/api/products?limit=${INFINITE_SCROLL_LIMIT}&page=${pageParam}`,
      )
      return data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1
    },
    initialData: { pages: [initialProducts], pageParams: [1] },
  })

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry, fetchNextPage])

  const products = data?.pages.flatMap((page) => page) ?? initialProducts

  return (
    <>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product, index) => {
          if (index === products.length - 1 && products.length < totalData) {
            return (
              <div key={product.id} ref={ref}>
                <ProductCard product={product} />
              </div>
            )
          } else {
            return <ProductCard key={product.id} product={product} />
          }
        })}
      </div>
      {isFetchingNextPage && (
        <div className='flex mt-4 mx-auto'>
          <Loader2 className='animate-spin h-10 w-10' />
        </div>
      )}
    </>
  )
}

export default ProductsList