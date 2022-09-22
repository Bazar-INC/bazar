import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../../api/models/product";
import { ProductsAPI } from "../../../api/services/products";
import { useProperty } from "../../hooks/property";

export const useLogic = () => {

   const ref = useRef<HTMLDivElement>(null);

   const { id } = useParams();

   const [product] = useProperty<ProductModel | null>(null);

   const [productList] = useProperty<Array<ProductModel>>([]);

   useEffect(() => {

      id && ProductsAPI.getProductById(id).then((response) => {
         product.set(response.data);
      });

      ProductsAPI.getProducts({ perPage: 4 }).then(({ data }) => {
         productList.set(data.products);
      });
   }, []);

   return {
      product,
      productList,
      ref,
   };
};
