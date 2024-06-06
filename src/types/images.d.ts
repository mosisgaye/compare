export type Image = {
  fileName: string;
  name: string;
  fileSize: number;
  size: number;
  fileKey: string;
  key: string;
  fileUrl: string;
  url: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  images: Image[]; // Assurez-vous que 'images' est un tableau d'objets 'Image'
  categoryId: string;
  createdAt: Date;
  updatedAt: Date | null;
  Category: {
    slug: string;
    name: string;
  };
};
