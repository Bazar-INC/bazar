import { Client } from "../client";
import { ProductModel } from "../models/product";

const client = new Client("products");

interface ProductsResponse {
   products: Array<ProductModel>;
   totalPages: number;
   filters: Array<{
      name: string;
      options: Array<{
         value: string;
      }>
   }>;
}

const getProducts = () => {
   return client.get<ProductsResponse>("");
};

export const ProductsEndpoints = {
   getProducts
};
