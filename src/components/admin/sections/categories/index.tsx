import { FC, useEffect } from "react";
import { Layout } from "../../../layout/layout";
import { Typography } from "../../../typography";
import { Link } from "react-router-dom";
import { useProperty } from "../../../hooks/property";
import { CategoryModel } from "../../../../api/models/category";
import { CategoriesEndpoints } from "../../../../api/endpoints/categories";
import { ListItem } from "../../components/list-item";

const Categories: FC = () => {

   const [categories] = useProperty<Array<CategoryModel>>([]);

   const loadCategories = () => {

      CategoriesEndpoints.getAllCategories().then((response) => {
         categories.set(response.data.categories);
      });

   };

   useEffect(loadCategories, []);

   const deleteCategory = (id: string) => {
      CategoriesEndpoints.deleteCategory(id).then(() => {
         loadCategories();
      });
   };

   const changeCategory = (id: string) => {
      console.log(id);
   };

   return (
      <div className="w-full py-[20px]">
         <div className="flex justify-between">
            <Typography.Heading size="small">Категорії</Typography.Heading>
            <Link to="/admin/new_category">
               <Layout.Button className="">
                  Додати категорію
               </Layout.Button>
            </Link>
         </div>
         <div className="mt-[30px] space-y-4">
            {categories.get.map((category, index) => (
               <ListItem
                  key={index}
                  text={category.name}
                  onEdit={() => changeCategory(category.id)}
                  onDelete={() => deleteCategory(category.id)}
               />
            ))}
         </div>
      </div>
   );
};

export { Categories };
