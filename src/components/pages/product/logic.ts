import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../api/data-objects/product";
import { ProductEntity } from "../../../api/entities/product";
import { useProperty } from "../../hooks/property";

const useLogic = () => {

   const ref = useRef<HTMLDivElement>(null);

   const { id } = useParams();

   const [product] = useProperty<ProductEntity | null>(null);

   const [productList] = useProperty<Array<ProductEntity>>([]);

   useEffect(() => {

      id && Product.find(id).then((response) => {
         product.set(response.data);
      });

      Product.get({ perPage: 4 }).then((response) => {
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
