import { FC, useEffect } from "react";
import { Layout } from "../../../layout/layout";
import { Typography } from "../../../typography";
import { Link, useNavigate } from "react-router-dom";
import { useProperty } from "../../../hooks/property";
import { ListItem } from "../../components/list-item";
import { CategoryModel } from "../../../../api/models/category";
import { CategoriesAPI } from "../../../../api/services/categories";

const Categories: FC = () => {

   const navigate = useNavigate();

   const [categories] = useProperty<Array<CategoryModel>>([]);

   const loadCategories = () => {
      CategoriesAPI.getCategories().then(({ data }) => categories.set(data.categories));
   };

   useEffect(loadCategories, []);

   const deleteCategory = (id: string) => {
      CategoriesAPI.deleteCategory(id).then(() => loadCategories());
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
                  onEdit={() => navigate("/admin/category/" + category.id)}
                  onDelete={() => category.id && deleteCategory(category.id)}
               />
            ))}
         </div>
      </div>
   );
};

export { Categories };
