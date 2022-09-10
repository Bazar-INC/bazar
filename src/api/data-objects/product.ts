import { Client } from "../client";
import { ProductEntity } from "../entities/product";

const client = new Client("products");

interface GetProductsRequest {
   page?: number;
   perPage?: number;
   category?: string;
   filterString?: string;
   searchString?: string;
   minPrice?: number;
   maxPrice?: number;
}

interface GetProductsResponse {
   products: Array<ProductEntity>;
   totalPages: number;
   categoryName: string;
   filters: Array<{
      name: string;
      code: string;
      options: Array<{
         value: string;
         code: string;
      }>
   }>;
}

const Product = {
   add(product: ProductEntity) {
      return client.post("/add", product);
   },
   update(product: ProductEntity) {
      return client.put("/edit", product);
   },
   delete(id: string) {
      return client.delete("/delete/" + id);
   },
   get(request: GetProductsRequest) {
      let paramsString = "";

      for (const param of Object.entries(request)) {
         paramsString += "&" + param[0] + "=" + param[1];
      }
      
      if (paramsString.length > 0) {
         paramsString = "?" + paramsString.substring(1);
      }

      return client.get<GetProductsResponse>(paramsString);
   },
   find(id: string) {
      return client.get<ProductEntity>("/" + id);
   },
   findMany(ids: string[]) {
      let paramsString = "";

      for (const id of ids) {
         paramsString += "&productsIds=" + id;
      }

      if (paramsString.length > 0) {
         paramsString = "?" + paramsString.substring(1);
      }

      return client.get<GetProductsResponse>("/ids" + paramsString);
   }
};

export { Product };
