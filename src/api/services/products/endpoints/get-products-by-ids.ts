import { Client } from "../../../client";

interface Response {
   id: string;
   name: string;
   price: number;
   categoryName: string;
   images: Array<string>;
}

function getProductsByIds(ids: string[]) {

   let paramsString = "";

   for (const id of ids) {
      paramsString += "&productsIds=" + id;
   }

   if (paramsString.length > 0) {
      paramsString = "?" + paramsString.substring(1);
   }

   return (client: Client) => {
      return client.get<Array<Response>>("/products/ids" + ids);
   };
}

export { getProductsByIds };
