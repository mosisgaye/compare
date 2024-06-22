import { MetadataRoute } from 'next';
import { categories } from '@/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.comparetelecom.net';

  const categoriesRoutes = categories.map((category) => ({
    url: `${baseUrl}/forfait-mobile?category=${category.slug}`,
    lastModified: new Date().toISOString(),
  }));

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
      url: `${baseUrl}/energie`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blogue`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/forfait-mobile?filter=sans-engagement`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/forfait-mobile?filter=les-moins-chers`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/forfait-mobile?filter=forfait-5g`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/forfait-mobile?filter=operateurs`,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...categoriesRoutes, ...staticRoutes];
}
