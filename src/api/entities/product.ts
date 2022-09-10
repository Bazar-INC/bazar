interface ProductEntity {
   id?: string;
   name?: string;
   price?: number;
   categoryId?: string;
   categoryName?: string;
   images?: Array<{
      image: string;
      order: number;
   }>;
}

export type { ProductEntity };
