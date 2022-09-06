import { Client } from "../../../client";

interface Request {
   page?: number;
   perPage?: number;
   category?: string;
   filterString?: string;
   searchString?: string;
   minPrice?: number;
   maxPrice?: number;
}

interface Response {
   id: string;
   name: string;
   price: number;
   categoryName: string;
   images: Array<string>;
}

function getProducts(params: Request) {

   let paramsString = "";

   for (const param of Object.entries(params)) {
      paramsString += "&" + param[0] + "=" + param[1];
   }
   
   if (paramsString.length > 0) {
      paramsString = "?" + paramsString.substring(1);
   }

   return (client: Client) => {
      return client.get<Response>(paramsString);
   };
}

export { getProducts };
