export interface SearchProducts {
  category: string
  products: {
    id: string
    name: string
    slug: string
    images: string
    categoryId: string
  }[]
}