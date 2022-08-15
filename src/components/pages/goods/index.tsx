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
   const [filters] = useProperty<Array<{ title: string; code: string; options: Array<{ name: string; value: string; }>; }>>([]);

   const [categoryName] = useProperty("");
   const [filterString] = useProperty("");

   const breadCrumbsItems = [
      { label: 'Головна', route: '' },
      { label: 'Каталог', route: '' },
      { label: categoryName.get, route: '' },
   ];

   useEffect(() => {

      category && CategoriesEndpoints.getCategory(category).then(({ data }) => {
         categoryName.set(data.name);
      });

      category && ProductsEndpoints.getProducts(category, "").then(({ data }) => {

         products.set(data.products);

         filters.set(
            data.filters.map((f) => ({
               title: f.name,
               code: f.code,
               options: f.options.map((o) => ({ name: o.value, value: o.code }))
            }))
         );

         totalPages.set(data.totalPages);
      });

   }, [category]);

   useEffect(() => {
      category && ProductsEndpoints.getProducts(category, filterString.get).then(({ data }) => {

         products.set(data.products);

         filters.set(
            data.filters.map((f) => ({
               title: f.name,
               code: f.code,
               options: f.options.map((o) => ({ name: o.value, value: o.code }))
            }))
         );

         totalPages.set(data.totalPages);
      });
   }, [filterString.get]);

   const [selectedFilters] = useProperty<{ [key: string]: { [key: string]: boolean } }>({});

   useEffect(() => {

      let result = "";

      for (const filterKey of Object.keys(selectedFilters.get)) {
         const filterValues = selectedFilters.get[filterKey];

         let prepareValues = "";

         for (const filterValueKey of Object.keys(filterValues)) {

            const filterValue = filterValues[filterValueKey];

            if (filterValue === true) {
               prepareValues += filterValueKey + "-";
            }
         }

         if (prepareValues.length > 0) {
            result += `${filterKey}-${prepareValues.substring(0, prepareValues.length - 1)}/`;
         }
      }

      if (result.length > 0) {
         result = result.substring(0, result.length - 1);
      }

      filterString.set(result);

   }, [selectedFilters.get]);

   const handleChangeFilter = (name: string, values: { [key: string]: boolean }) => {
      selectedFilters.set({ ...selectedFilters.get, [name]: values });
   };

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
                        <Filter
                           onChange={(values) => handleChangeFilter(filter.code, values)}
                           title={filter.title}
                           options={filter.options} />
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
