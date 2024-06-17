import { type MetadataRoute } from 'next'
import { categories } from '@/config'
import prisma from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allProducts = await prisma.product.findMany({
    select: {
      id: true,
      slug: true,
    },
  })

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.comparetelecom.net';

  const categoriesRoutes = categories.map((category) => ({
    url: `${baseUrl}/forfait-mobile?category=${category.slug}`,
    lastModified: new Date().toISOString(),
  }))



  return [...categoriesRoutes]
}
