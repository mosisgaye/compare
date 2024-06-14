import { type MetadataRoute } from 'next';
import { categories } from '@/config';
import prisma from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_APP_URL is not defined in your environment variables');
  }

  const staticRoutes = ['', 'about', 'contact', 'terms', 'privacy'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  const allProducts = await prisma.product.findMany({
    select: {
      id: true,
      slug: true,
    },
  });

  const productsRoutes = allProducts.map((product) => {
    const url = new URL(`${baseUrl}/${product.id}/${product.slug}`);
    url.searchParams.set('productId', product.id.toString());

    return {
      url: url.toString(),
      lastModified: new Date().toISOString(),
    };
  });

  const categoriesRoutes = categories.map((category) => ({
    url: `${baseUrl}/products?category=${category.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...productsRoutes, ...categoriesRoutes];
}
