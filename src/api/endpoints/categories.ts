import { Client } from "../client";
import { CategoryModel } from "../models/category";

const client = new Client("categories");

interface CategoriesResponse {
   categories: Array<CategoryModel>;
}

const getAllCategories = () => {
   return client.get<CategoriesResponse>("");
};

const getCategory = (code: string) => {
   return client.get<CategoryModel>(`/${code}`);
};

const deleteCategory = (id: string) => {
   return client.delete(`/delete/${id}`);
};

interface NewCategory {
   name: string;
   code: string;
   imageName?: string;
   image?: string;
   iconName?: string;
   icon?: string;
   parentId?: string;
}

const addCategory = (category: NewCategory) => {
   return client.post("/add", category);
};

export const CategoriesEndpoints = {
   getCategory,
   getAllCategories,
   deleteCategory,
   addCategory,
};
