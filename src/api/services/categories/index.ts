import { Client } from "../../client";
import { CategoryModel } from "../../models/category";

const client = new Client("categories");

interface AddCategoryPayload {
   name: string;
   code: string;
   imageName: undefined | string;
   image: undefined | string;
   parentId: undefined | string;
}

const addCategory = (payload: AddCategoryPayload) => {
   return client.post("/add", payload);
};

interface UpdateCategoryPayload {
   id: string;
   name: string;
   code: string;
   imageName: undefined | string;
   image: undefined | string;
   parentId: undefined | string;
}

const updateCategory = (payload: UpdateCategoryPayload) => {
   return client.put("/edit", payload);
};

const deleteCategory = (id: string) => {
   return client.delete("/delete/" + id);
};

interface GetCategoriesResponse {
   categories: Array<CategoryModel>;
}

const getCategories = () => {
   return client.get<GetCategoriesResponse>("");
};

const getCategoryById = (id: string) => {
   return client.get<CategoryModel>("/id/" + id);
};

const CategoriesAPI = {
   addCategory,
   updateCategory,
   deleteCategory,
   getCategories,
   getCategoryById,
};

export { CategoriesAPI };
