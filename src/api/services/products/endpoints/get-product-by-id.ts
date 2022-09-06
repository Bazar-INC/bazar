import { Client } from "../../../client";

interface Response {
   id: string;
   name: string;
   price: number;
   categoryName: string;
   images: Array<string>;
}

function getProductById(id: string) {
   return (client: Client) => {
      return client.get<Response>("/products/" + id);
   };
}

export { getProductById };
