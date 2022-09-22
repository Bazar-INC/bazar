import { useEffect } from "react";
import { ProductModel } from "../../../api/models/product";
import { ProductsAPI } from "../../../api/services/products";
import { accountActions } from "../../../features/account/reducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useProperty } from "../../hooks/property";

const useLogic = () => {

   const dispatch = useAppDispatch();

   const cartProducts = useAppSelector(state => state.accountReducer.cart.products);

   const [products] = useProperty<Array<{ product: ProductModel, count: number }>>([]);

   const [mode] = useProperty<"products" | "receiver" | "address" | "pay">("products");

   const setProductByIdsFromCart = () => {

      ProductsAPI.getProductsByIds(cartProducts.map(p => p.id)).then(({ data }) => {
         products.set([]);
         cartProducts.forEach((product) => {

            const prod = data.products.find(f => f.id === product.id);
            if (prod) {
               products.set(prev => [...prev, { product: prod, count: product.count }]);
            }
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
         if (count === 1) {
            products.set([
               ...products.get.slice(0, index),
               ...products.get.slice(index + 1),
            ]);
         } else {
            products.set([
               ...products.get.slice(0, index),
               { count: count - 1, product },
               ...products.get.slice(index + 1),
            ]);
         }
      }

      dispatch(accountActions.removeProductFromCart(productId));
   };

   useEffect(setProductByIdsFromCart, []);

   return {
      products,
      incrementProductCount,
      decrementProductCount,
      mode,
   };
};


export { useLogic };
