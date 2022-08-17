import { FC, useEffect } from "react";
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useProperty } from "../../hooks/property";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";

const HomePage: FC = () => {

   const [productList1] = useProperty<Array<ProductModel>>([]);
   const [productList2] = useProperty<Array<ProductModel>>([]);

   useEffect(() => {
      ProductsEndpoints.getTopProducts(1).then((response) => {
         productList1.set(response.data.products);
      });
      ProductsEndpoints.getTopProducts(2).then((response) => {
         productList2.set(response.data.products);
      });
   }, []);

   return (
      <div className="py-8">
         <Layout.Container>
            <div className="flex">
               <div className="w-[430px] h-2"></div>
               <div className="ml-8 flex-1 h-[608px] w-full rounded-lg bg-black"></div>
            </div>
         </Layout.Container>
         <img className="mt-20 mb-10" src="/banner.png" />
         <Layout.Container>

            <div className="flex items-center">
               <img src="/fire.png" />
               <span className="font-[Intro] text-[40px] mt-4">Хіти продаж</span>
            </div>
            <div className="flex justify-between gap-2 mt-8">
               {productList1.get.map((product, index) => (
                  <Layout.ProductCard
                     id={product.id}
                     productName={product.name}
                     categoryName="Смартфон"
                     price={product.price}
                     picture={product.images[0]}
                     key={index}
                  />
               ))}
            </div>

            <div className="mt-32 flex gap-x-24">
               <div className="flex bg-white px-12 py-16 rounded-xl h-64">
                  <div className="flex flex-col items-start">
                     <Layout.Badge color="#8f00f9" additionalClasses="w-[145px]">Огляд</Layout.Badge>
                     <Typography.Heading className="mt-5 text-[30px]">Спорт обладнання</Typography.Heading>
                  </div>
                  <img className="h-80 -mt-32" src="/girya.png" />
               </div>
               <div className="flex bg-white px-12 py-16 rounded-xl h-64">
                  <div className="flex flex-col">
                     <Layout.Badge color="#00ff74" additionalClasses="w-[145px]">Огляд</Layout.Badge>
                     <Typography.Heading className="mt-5 text-[30px]">Смарт годинник</Typography.Heading>
                  </div>
                  <img className="h-80 -mt-32 w-full" src="/clock.png" />
               </div>
            </div>

            <div className="flex items-center mt-20">
               <img src="/sound.png" />
               <span className="font-[Intro] text-[40px] mt-4 ml-2">Новинки</span>
            </div>
            <div className="flex justify-between mt-8 gap-2">
               {productList2.get.map((product, index) => (
                  <Layout.ProductCard
                     id={product.id}
                     productName={product.name}
                     categoryName="Смартфон"
                     price={product.price}
                     picture={product.images[0]}
                     key={index}
                  />
               ))}
            </div>

            <div className="my-40 flex gap-x-24">
               <div className="flex bg-white px-12 py-16 rounded-xl h-64">
                  <div className="flex flex-col items-start">
                     <Layout.Badge color="#00ff74" additionalClasses="w-[145px]">Розтрочка</Layout.Badge>
                     <Typography.Heading className="mt-5 text-[30px]">Плати частинами</Typography.Heading>
                  </div>
                  <img className="h-96 -mt-48" src="/money.png" />
               </div>
               <div className="flex bg-white px-12 py-16 rounded-xl h-64">
                  <div className="flex flex-col">
                     <Layout.Badge color="#8f00f9" additionalClasses="w-[145px]">Категорії</Layout.Badge>
                     <Typography.Heading className="mt-5 text-[30px]">Фільтруй базар</Typography.Heading>
                  </div>
                  <img className="h-96 -mt-48 w-full" src="/txt.png" />
               </div>
            </div>
         </Layout.Container>
      </div>
   );
};

export { HomePage };
