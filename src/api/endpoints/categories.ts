import { Client } from "../client";
import { CategoryModel } from "../models/category";

const client = new Client("categories");

const getCategory = (code: string) => {
   return client.get<CategoryModel>(`/${code}`);
};

export const CategoriesEndpoints = {
   getCategory
};
