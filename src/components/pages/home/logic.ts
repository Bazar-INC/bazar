import { useEffect } from "react";
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useProperty } from "../../hooks/property";

const useLogic = () => {

   const [products] = useProperty<{
      hitSale: Array<ProductModel>; new: Array<ProductModel>
   }>({
      hitSale: [], new: [],
   });

   useEffect(() => {
      ProductsEndpoints.getTopProducts(1).then((response) => {
         products.set((prev) => ({ ...prev, hitSale: response.data.products }));
      });

      ProductsEndpoints.getTopProducts(2).then((response) => {
         products.set((prev) => ({ ...prev, new: response.data.products, }));
      });
   }, []);

   return {
      products,
   };
};

export { useLogic };
