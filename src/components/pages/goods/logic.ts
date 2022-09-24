import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../../api/models/product";
import { ProductsAPI } from "../../../api/services/products";
import { useProperty } from "../../hooks/property";

const useLogic = () => {

   const { category } = useParams();

   const [products] = useProperty<Array<ProductModel>>([]);
   const [totalPages] = useProperty(0);
   const [filters] = useProperty<Array<{ title: string; code: string; options: Array<{ name: string; value: string; }>; }>>([]);

   const [categoryName] = useProperty("");
   const [filterString] = useProperty("");

   const breadCrumbsItems = [
      { label: 'Головна', route: "/home" },
      { label: 'Каталог', route: "" },
      { label: categoryName.get, route: category ?? "" },
   ];

   useEffect(() => {
      ProductsAPI.getProducts({ category }).then(({ data }) => {
         categoryName.set(data.categoryName);
         products.set(data.products);
         totalPages.set(data.totalPages);
         filters.set(
            data.filters.map((f) => ({
               title: f.name,
               code: f.code,
               options: f.options.map((o) => ({ name: o.value, value: o.code }))
            }))
         );
      });
   }, [category]);

   useEffect(() => {
      ProductsAPI.getProducts({ category, filterString: filterString.get }).then(({ data }) => {
         products.set(data.products);
         totalPages.set(data.totalPages);
         filters.set(
            data.filters.map((f) => ({
               title: f.name,
               code: f.code,
               options: f.options.map((o) => ({ name: o.value, value: o.code }))
            }))
         );
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

   return {
      breadCrumbsItems,
      categoryName: categoryName,
      filters,
      products,
      handleChangeFilter,
   };
};

export { useLogic };
