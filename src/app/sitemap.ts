import { type MetadataRoute } from 'next'
import { categories } from '@/config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.comparetelecom.net';

  // Générer les routes pour les catégories
  const categoriesRoutes = categories.map((category) => ({
    url: `${baseUrl}/forfait-mobile?category=${category.slug}`,
    lastModified: new Date().toISOString(),
  }))

  // Ajouter les routes statiques uniques
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/box-internet`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blogue`,
      lastModified: new Date().toISOString(),
    }
  ];

  return [...categoriesRoutes, ...staticRoutes];
}
