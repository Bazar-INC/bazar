import { useEffect } from "react";
import { ProductModel } from "../../../api/models/product";
import { ProductsAPI } from "../../../api/services/products";
import { useProperty } from "../../hooks/property";

export const useLogic = () => {

   const [hitSaleProducts] = useProperty<Array<ProductModel>>([]);
   const [newProducts] = useProperty<Array<ProductModel>>([]);

   useEffect(() => {
      ProductsAPI.getProducts({ perPage: 4 })
         .then(({ data }) => hitSaleProducts.set(data.products));

      ProductsAPI.getProducts({ perPage: 4, page: 2, orderBy: "date", order: "desc" })
         .then(({ data }) => newProducts.set(data.products));
   }, []);

   return { hitSaleProducts, newProducts };
};
