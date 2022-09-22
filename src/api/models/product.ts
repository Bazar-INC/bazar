interface ProductModel {
   id: string;
   name: string;
   price: number;
   categoryName: string;
   images: Array<{
      image: string;
      order: number;
   }>;
}

export type { ProductModel };
