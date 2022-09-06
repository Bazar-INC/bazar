import { Client } from "../../client";
import { endpointCreator } from "../endpoint-creator";
import { getProducts } from "./endpoints/get-products";
import { getProductById } from "./endpoints/get-product-by-id";
import { getProductsByIds } from "./endpoints/get-products-by-ids";

const client = new Client("products");

export const ProductsAPI = {
   getProducts: endpointCreator(client, getProducts),
   getProductById: endpointCreator(client, getProductById),
   getProductsByIds: endpointCreator(client, getProductsByIds)
};
