// src/app/api/products/route.ts
import prisma from '@/lib/db';
import { z } from 'zod';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    const { limit, page, category, filter } = z
      .object({
        limit: z.string(),
        page: z.string(),
        category: z.string().optional(),
        filter: z.string().optional(),
      })
      .parse({
        limit: url.searchParams.get('limit'),
        page: url.searchParams.get('page'),
        category: url.searchParams.get('category'),
        filter: url.searchParams.get('filter'),
      });

    let filters: any = {};

    if (category && category !== 'null') {
      filters.categoryId = category;
    }

    if (filter) {
      switch (filter) {
        case 'sans-engagement':
          filters.categoryId = 'sans-engagement';
          break;
        case 'les-moins-chers':
          filters.price = {
            lt: 10.00 // Example threshold for "les moins chers"
          };
          break;
        case 'forfait-5g':
          filters.categoryId = 'forfait-5g';
          break;
        case 'operateurs':
          filters.categoryId = 'operateurs';
          break;
      }
    }

    const products = await prisma.product.findMany({
      where: filters,
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        Category: true,
      },
    });

    return new Response(JSON.stringify(products));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 });
    }

    console.log(error);

    return new Response('Could not fetch more posts', { status: 500 });
  }
}
