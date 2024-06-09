'use client'

import React from "react";
import Image from "next/image";
import { Product, Category } from "@prisma/client";
import Link from "next/link";
import "@/app/globals.css";

interface ProductCardProps {
  product: Product & {
    Category: Category;
    images: string[]; // Supposons que les images sont stockées sous forme de tableau de chaînes (URL)
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Utilisez une chaîne vide si affiliateLink est null
  const affiliateLink: string = product.affiliateLink ?? "#";

  return (
    <div className="group/card shadow-lg border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-2 max-h-80 sm:w-60">
      <Link href={affiliateLink} target="_blank" rel="noopener noreferrer">
        {/* Images and Actions */}
        <div className="aspect-square m-3 rounded-2xl bg-gray-10 relative w-12 h-24 sm:w-full sm:h-32">
          {product.images && product.images.length > 0 && (
            <Image
              src={product.images[0]} // Utilisez le premier élément du tableau d'URL d'images
              alt={product.name}
              className="aspect-square object-cover rounded-2xl"
              width={100}
              height={70}
            />
          )}
        </div>
        <div className="px-4 space-y-3 pb-6">
          <div className="space-y-1">
            <p className="text-sm text-black dark:text-white font-semibold truncate">
              {product.name}
            </p>
            <p className="text-sm text-black dark:text-white">
              Appel /sms/mms en illimité
            </p>
            <p className="text-sm text-black dark:text-white">
              {product.categoryId}
            </p>
            <p className="text-lg text-black dark:text-white font-semibold">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            {/* Price */}
            <div style={{ color: "#79CE25" }} className="font-semibold">
              {parseFloat(product.price.toString()).toFixed(2)} €
            </div>
            <span
              role="button"
              className="button-offre inline-block rounded-[20px] whitespace-nowrap bg-[#f05153] text-white px-3 py-1 self-center font-semibold shadow-sm bf-1x8vhjm"
            >
              Voir l’offre
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

