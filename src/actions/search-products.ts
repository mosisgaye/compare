import { categories } from "@/config";
import { SearchProducts } from "@/types/search-products";

const searchProducts = async (query: string): Promise<SearchProducts[]> => {
  const filteredProducts = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
      },
    },
    select: {
      id: true,
      name: true,
      slug: true,
      image: true,
      categoryId: true,
    },
    take: 10,
  })

  const productsByCategory = categories.map((category) => ({
    category: category.name,
    products: filteredProducts.filter(
      (product: { categoryId: string; }) => product.categoryId === category.slug,
    ).map((product: { id: any; name: any; slug: any; image: any; categoryId: any; }) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      image: product.image, // Assurez-vous que 'image' est correctement défini dans la base de données
      categoryId: product.categoryId,
    })),
  }))

  return productsByCategory;
}
