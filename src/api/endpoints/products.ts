import { Client } from "../client";
import { ProductModel } from "../models/product";

const client = new Client("products");

interface ProductsResponse {
   products: Array<ProductModel>;
   totalPages: number;
   filters: Array<{
      name: string;
      code: string;
      options: Array<{
         value: string;
         code: string;
      }>
   }>;
}

const getProducts = (category: string, filterString: string) => {

   return client.get<ProductsResponse>(`?category=${category}&filterString=${filterString}`);
};

export const ProductsEndpoints = {
   getProducts
};
