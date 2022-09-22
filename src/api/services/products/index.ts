import { Client } from "../../client";
import { FilterModel } from "../../models/filter";
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
   filters: Array<FilterModel>;
   totalPages: number;
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

interface GetProductByIdsResponse {
   products: Array<ProductModel>;
}

const getProductsByIds = (ids: Array<string>) => {
   let paramsString = "";

   for (const id of ids) {
      paramsString += "&productsIds=" + id;
   }

   if (paramsString.length > 0) {
      paramsString = "?" + paramsString.substring(1);
   }

   return client.get<GetProductByIdsResponse>("/ids" + paramsString);
};

interface AddProductPayload {
   name: string;
   price: number;
   categoryId?: string;
}

const addProduct = (payload: AddProductPayload) => {
   return client.post("/add", payload);
};

const deleteProduct = (id: string) => {
   return client.delete("/delete/" + id);
};

const ProductsAPI = {
   getProducts,
   getProductById,
   getProductsByIds,
   addProduct,
   deleteProduct,
};

export { ProductsAPI };
