import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
const express = require('express')

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    const { limit, page, category } = z
      .object({
        limit: z.string(),
        page: z.string(),
        category: z.string(),
      })
      .parse({
        limit: url.searchParams.get('limit'),
        page: url.searchParams.get('page'),
        category: url.searchParams.get('category'),
      });

    let result;

    if (category === 'box-100mbps' || category === 'box-500mbps' || category === 'box-2gbps' || category === 'box-8gbps') {
      const products = await prisma.product.findMany({
        where: {
          categoryId: category,
        },
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          Category: true,
        },
      });

      result = products;
    } else {
      // Handle case where category is not valid or not provided
      return new Response('Invalid category provided', { status: 400 });
    }

    return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.log(error);
    return new Response('Could not fetch products', { status: 500 });
  }
}
