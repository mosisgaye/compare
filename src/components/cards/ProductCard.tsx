import { Category, Product as PrismaProduct } from '@prisma/client';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Image as ProductImage } from '@/types/images'; // Importez le type Image défini

interface ProductCardProps {
  product: PrismaProduct & {
    Category: Category;
    images: ProductImage[]; // Utilisez le type correct ici
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group/card shadow-lg border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-2 max-h-80 sm:w-60">
      <a href="" target="_blank" rel="noopener noreferrer">
        {/* Images and Actions */}
        <div className="aspect-square m-3 rounded-2xl bg-gray-100 relative w-12 h-24 sm:w-full sm:h-32">
          <Image
            src={product.images?.[0]?.url} // Assurez-vous d'utiliser le bon chemin pour l'URL de l'image
            sizes="200"
            alt={product.name}
            className="aspect-square object-cover rounded-2xl"
            width={100}
            height={70}
          />
        </div>
        <div className="px-4 space-y-3 pb-6">
          <div className="space-y-1">
            <p className="text-sm text-black dark:text-white font-semibold truncate">{product.name}</p>
            <p className="text-sm text-black dark:text-white">Appel /sms/mms en illimité</p>
            <p className="text-sm text-black dark:text-white">{product.categoryId}</p>
            <p className="text-lg text-black dark:text-white font-semibold">{product.description}</p>
          </div>
          <div className="flex items-center justify-between">
            {/* Price */}
            <div style={{ color: '#79CE25' }} className="font-semibold">
              {parseFloat(product.price.toString()).toFixed(2)} €
            </div>
            <div className="flex justify-center group/icon">
              <MoveRight size={20} style={{ color: '#79CE25' }} />
            </div>
          </div>
          <Image alt="Stars" src="/svg/stars.svg" width={100} height={20} />
        </div>
      </a>
    </div>
  );
};

export default ProductCard;







