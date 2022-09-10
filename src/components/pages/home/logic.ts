import { useEffect } from "react";
import { Product } from "../../../api/data-objects/product";
import { ProductEntity } from "../../../api/entities/product";
import { useProperty } from "../../hooks/property";

const useLogic = () => {

   const [hitSaleProducts] = useProperty<Array<ProductEntity>>([]);
   const [newProducts] = useProperty<Array<ProductEntity>>([]);

   useEffect(() => {

      Product.get({ perPage: 4 }).then((response) => {
         hitSaleProducts.set(response.data.products);
      });

      Product.get({ perPage: 4, page: 2 }).then((response) => {
         newProducts.set(response.data.products);
      });
   }, []);

   return { hitSaleProducts, newProducts };
};

export { useLogic };
