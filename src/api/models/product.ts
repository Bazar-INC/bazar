interface ProductModel {
   id: string;
   name: string;
   price: number;
   images: Array<{
      image: string;
      order: number;
   }>;
}

export type { ProductModel };
