import { Client } from "../client";
import { CategoryEntity } from "../entities/category";

const client = new Client("categories");

interface GetCategoriesResponse {
   categories: Array<CategoryEntity>;
}

const Category = {
   add(category: CategoryEntity) {
      return client.post("/add", category);
   },
   update(category: CategoryEntity) {
      return client.put("/edit", category);
   },
   delete(id: string) {
      return client.delete("/delete/" + id);
   },
   get() {
      return client.get<GetCategoriesResponse>("");
   },
   findByCode(code: string) {
      return client.get<CategoryEntity>("/code/" + code);
   },
   findById(id: string) {
      return client.get("/id/" + id);
   }
};

export { Category };
