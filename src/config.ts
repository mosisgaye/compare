import { Category } from '@prisma/client/'

export const INFINITE_SCROLL_LIMIT = 8

export const ORDER_INFINITE_SCROLL_LIMIT = 3

export const categories: Category[] = [
  {
    name: 'Orange',
    slug: 'orange',
  },
  {
    name: 'Sfr',
    slug: 'sfr',
  },
  {
    name: 'Bouygues',
    slug: 'bouygues',
  },
  {
    name: 'Free',
    slug: 'free',
  },
  {
    name: 'Lebara',
    slug: 'lebara',
  },
  {
    name: 'La poste Mobile',
    slug: 'poste',
  },
  {
    name: 'Sosh',
    slug: 'sosh',
  },
  {
    name: 'You',
    slug: 'you',
  },
  // Nouvelles catégories pour les offres box basées sur les débits
  //{
  //  name: 'Box 100 Mb/s',
  //  slug: 'box-100mbps',
  //},
  //{
  //  name: 'Box 500 Mb/s',
  //  slug: 'box-500mbps',
  //},
  //{
  //  name: 'Box 2 Gb/s',
  //  slug: 'box-2gbps',
  //},
  //{
  //  name: 'Box 8 Gb/s',
  //  slug: 'box-8gbps',
  //},
]//
