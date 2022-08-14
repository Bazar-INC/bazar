import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesEndpoints } from "../../../api/endpoints/categories";
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useProperty } from "../../hooks/property";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";
import { Filter } from "./components/filter";

const GoodsPage: FC = () => {

   const { category } = useParams();

   const [products] = useProperty<Array<ProductModel>>([]);
   const [totalPages] = useProperty(0);
   const [filters] = useProperty<Array<{ title: string; values: Array<string>; }>>([]);

   const [categoryName] = useProperty("");

   const breadCrumbsItems = [
      { label: 'Головна', route: '' },
      { label: 'Каталог', route: '' },
      { label: categoryName.get, route: '' },
   ];

   useEffect(() => {

      category && CategoriesEndpoints.getCategory(category).then(({ data }) => {
         categoryName.set(data.name);
      });

      category && ProductsEndpoints.getProducts(category).then(({ data }) => {

         products.set(data.products);

         filters.set(
            data.filters.map((f) => ({
               title: f.name,
               values: f.options.map((v) => v.value)
            }))
         );

         totalPages.set(data.totalPages);
      });

   }, [category]);

   return (
      <Layout.Container>
         <div className="mt-8">
            <Layout.BreadCrumbs items={breadCrumbsItems} />
            <Typography.Heading className="block mt-5">{categoryName.get}</Typography.Heading>
            <div className="flex gap-x-[100px] mt-14">
               <div className="w-[400px]">
                  <span>Фільтруй базар</span>
                  {filters.get.map((filter, index) => (
                     <React.Fragment key={index}>
                        <hr className="my-8" />
                        <Filter title={filter.title} values={filter.values} />
                     </React.Fragment>
                  ))}
               </div>
               <div className="w-full">
                  <div className="flex">
                     <span>Показано {products.get.length} товарів</span>
                     <select className="ml-auto">
                        <option>За рейтингом</option>
                        <option>Новинки</option>
                        <option>За популярністью</option>
                     </select>
                  </div>
                  <div className="flex flex-wrap justify-between mt-8 gap-3">
                     {products.get.map((product, index) => (
                        <Layout.ProductCard
                           key={index}
                           categoryName="Смартфон"
                           productName={product.name}
                           picture={product.images[0]}
                           price={product.price}
                           link={"/product/" + product.id}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </Layout.Container>

   );
};

export { GoodsPage };
