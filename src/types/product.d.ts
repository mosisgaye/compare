import { Product } from '@prisma/client'; // Assure-toi d'importer Product depuis le bon chemin

export interface GetOrderItems {

  product: Product; // Ajoute la propriété product de type Product

}
export { Product };

