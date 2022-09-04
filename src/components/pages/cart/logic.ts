import { useEffect } from "react";
import { Product } from "../../../api/data-objects/product";
import { ProductEntity } from "../../../api/entities/product";
import { accountActions } from "../../../features/account/reducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useProperty } from "../../hooks/property";

const useLogic = () => {

   const dispatch = useAppDispatch();

   const productsIds = useAppSelector(state => state.accountReducer.cart.products);

   const [products] = useProperty<Array<{ product: ProductEntity, count: number }>>([]);

   const setProductByIdsFromCart = () => {
      products.set([]);

      productsIds.forEach((product) => {
         Product.find(product.id).then((response) => {
            products.set(prev => [
               ...prev,
               { product: response.data, count: product.count }
            ]);
         });
      });
   };

   const incrementProductCount = (productId: string) => {

      const index = products.get.findIndex(f => f.product.id === productId);

      const { count, product } = products.get[index];

      if (index !== -1) {
         products.set([
            ...products.get.slice(0, index),
            { count: count + 1, product },
            ...products.get.slice(index + 1),
         ]);
      }

      dispatch(accountActions.addProductToCard(productId));
   };

   const decrementProductCount = (productId: string) => {

      const index = products.get.findIndex(f => f.product.id === productId);

      const { count, product } = products.get[index];

      if (index !== -1) {
         products.set([
            ...products.get.slice(0, index),
            { count: count - 1, product },
            ...products.get.slice(index + 1),
         ]);
      }

      dispatch(accountActions.addProductToCard(productId));
   };

   useEffect(setProductByIdsFromCart, []);

   return {
      products,
      productsIds,
      incrementProductCount,
      decrementProductCount,
   };
};


export { useLogic };
