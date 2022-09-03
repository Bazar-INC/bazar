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
   categoryName: string;
}

const getTopProducts = (page: number) => {
   return client.get<ProductsResponse>(`?page=${page}&perPage=4`);
};

const getProducts = (category: string, filterString: string) => {

   return client.get<ProductsResponse>(`?category=${category}&filterString=${filterString}`);
};

const getProductById = (id: string) => {
   return client.get<ProductModel>(`/${id}`);
};

export const ProductsEndpoints = {
   getProducts,
   getProductById,
   getTopProducts,
};
