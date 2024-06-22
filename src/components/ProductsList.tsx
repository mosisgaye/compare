// src/components/ProductsList.tsx
'use client'
import { useIntersection } from '@mantine/hooks'
import { Product } from '@prisma/client'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

import ProductCard from '@/components/cards/ProductCard'
import ProductCardSkeleton from '@/components/skeletons/ProductCardSkeleton'
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

  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const filter = searchParams.get('filter') // Ajouter le filtre

  const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery(
    {
      queryKey: ['infinite-query'],
      queryFn: async ({ pageParam }) => {
        const { data } = await axios.get(
          `/api/products?limit=${INFINITE_SCROLL_LIMIT}&page=${pageParam}&category=${category}&filter=${filter}`, // Ajouter le filtre à la requête
        )
        return data
      },
      initialPageParam: 1,
      getNextPageParam: (_lastPage, allPages) => {
        return allPages.length + 1
      },
      initialData: { pages: [initialProducts], pageParams: [1] },
    },
  )

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry, fetchNextPage])

  useEffect(() => {
    refetch()
  }, [category, filter, refetch]) // Ajouter le filtre à la liste des dépendances

  const products = data?.pages.flatMap((page) => page) ?? initialProducts

  return (
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
      {isFetchingNextPage &&
        Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
    </div>
  )
}

export default ProductsList
