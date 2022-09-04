import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useProperty } from "../../hooks/property";

const useLogic = () => {

   const ref = useRef<HTMLDivElement>(null);

   const { id } = useParams();

   const [product] = useProperty<ProductModel | null>(null);

   const [productList] = useProperty<Array<ProductModel>>([]);

   useEffect(() => {

      id && ProductsEndpoints.getProductById(id).then((response) => {
         product.set(response.data);
      });

      ProductsEndpoints.getTopProducts(1).then((response) => {
         productList.set(response.data.products);
      });

   }, []);

   return {
      product,
      productList,
      ref,
   };
};

export { useLogic };
