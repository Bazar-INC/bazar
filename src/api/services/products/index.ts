import { Client } from "../../client";
import { ProductModel } from "../../models/product";

const client = new Client("products");

const getProductById = (id: string) => {
   return client.get<ProductModel>("/" + id);
};

const ProductsAPI = {
   getProductById
};

export { ProductsAPI };
