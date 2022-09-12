import { Client } from "../../client";
import { ProductModel } from "../../models/product";

const client = new Client("products");

const getProductById = (id: string) => {
   return client.get<ProductModel>("/" + id);
};

interface GetProductsPayload {
   page?: number;
   perPage?: number;
   category?: string;
   filterString?: string;
   searchString?: string;
   minPrice?: number;
   maxPrice?: number;
   orderBy?: "price" | "date";
   order?: "asc" | "desc";
}

interface GetProductsResponse {
   products: Array<ProductModel>;
   totalPage: number;
   filters: [];
   minPrice: number;
   maxPrice: number;
   categoryName: string;
}

const getProducts = (payload: GetProductsPayload) => {

   let paramsString = "";

   for (const param of Object.entries(payload)) {
      paramsString += "&" + param[0] + "=" + param[1];
   }

   if (paramsString.length > 0) {
      paramsString = "?" + paramsString.substring(1);
   }

   return client.get<GetProductsResponse>(paramsString);
};

const ProductsAPI = {
   getProductById,
   getProducts
};

export { ProductsAPI };
