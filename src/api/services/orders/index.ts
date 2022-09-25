import { Client } from "../../client";

const client = new Client("orders");

interface OrderRequest {
   orders: Array<{
      productId: string;
      count: number;
   }>;
   phone: string;
}

const createOrder = (request: OrderRequest) => {
   return client.post("/add", request);
};

export const OrdersAPI = {
   createOrder,
};
