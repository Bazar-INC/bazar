import { FC, useEffect } from 'react';
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useAppSelector } from "../../../store/hooks";
import { useProperty } from "../../hooks/property";
import { Layout } from '../../layout/layout';

const CartPage: FC = () => {

   const productsIds = useAppSelector(state => state.accountReducer.cart.products);

   const [products] = useProperty<Array<ProductModel>>([]);

   useEffect(() => {
      productsIds.forEach((productId) => {
         ProductsEndpoints.getProductById(productId).then((response) => {
            products.set(prev => [...prev, response.data]);
         });
      });
   }, [productsIds]);

   return (
      <div className="w-[1660px] mx-auto mb-36 mt-24">
         <span className="font-[Intro] text-[40px]">Оформлення замовлення</span>
         {productsIds.length === 0 ? (
            <div className="w-full flex flex-col items-center">
               <img src="cart.png" className="-mt-52" />
               <div className="w-[676px] -mt-40">
                  <span className="font-[Intro] text-[35px]">Упс... Ваш кошик порожній</span>
                  <br />
                  <span className="text-[30px]">Та з базару ніхто не йде з пустими руками, обери щось з каталогу</span>
               </div>
            </div>
         ) : (
            <div className="flex justify-between mt-8">
               {products.get.map((product, index) => (
                  <Layout.ProductCard
                     id={product.id}
                     key={index}
                     categoryName="Смартфон"
                     productName={product.name}
                     picture={product.images[0]}
                     price={product.price}
                  />
               ))}
            </div>
         )}
         <div className="flex items-center mt-20">
            <img src="fire.png" />
            <span className="font-[Intro] text-[40px] mt-4">Хіти продаж</span>
         </div>
         <div className="flex justify-between mt-8">
            {products.get.map((product, index) => (
               <Layout.ProductCard
                  id={product.id}
                  key={index}
                  categoryName="Смартфон"
                  productName={product.name}
                  picture={product.images[0]}
                  price={product.price}
               />
            ))}
         </div>
      </div>
   );
};

export { CartPage };
