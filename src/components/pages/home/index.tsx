import { FC, useEffect } from "react";
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useProperty } from "../../hooks/property";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";

interface CustomCardProps {
   title: string;
   badge: string;
   picture: string;
}

const CustomCard: FC<CustomCardProps> = ({ title, badge, picture }) => {
   return (
      <div className="flex bg-white px-8 2xl:px-12 py-8 2xl:py-16 rounded-xl h-40 2xl:h-64 w-full sm:w-auto">
         <div className="flex flex-col">
            <Layout.Badge color="#00ff74" additionalClasses="w-[145px]">
               {badge}
            </Layout.Badge>
            <Typography.Heading className="mt-5 !text-[20px] !2xl:text-[30px]">
               {title}
            </Typography.Heading>
         </div>
         <img className="ml-auto sm:ml-0 h-32 sm:h-64 2xl:h-96 sm:-mt-32 2xl:-mt-48" src={picture} />
      </div>
   );
};

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
         <Layout.Container className="px-0">
            <div className="flex gap-x-8">
               <div className="hidden lg:block w-[256px] xl:w-[286px] 2xl:w-[430px] h-2"></div>
               <div className="flex-1 h-[440px] 2xl:h-[608px] w-full sm:rounded-lg bg-black"></div>
            </div>
         </Layout.Container>
         <img className="mt-20 mb-10 w-full h-[80px] object-contain" src="/banner.png" />
         <Layout.Container>

            <div className="flex items-center">
               <img src="/fire.png" />
               <Typography.Heading className="mt-4">Хіти продаж</Typography.Heading>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
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

            <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-y-32 gap-x-24">
               <CustomCard title="Спорт обладнання" badge="Огляд" picture="/girya.png" />
               <CustomCard title="Смарт годинник" badge="Огляд" picture="/clock.png" />
            </div>

            <div className="flex items-center mt-20">
               <img src="/sound.png" />
               <Typography.Heading className="mt-4 ml-2">Новинки</Typography.Heading>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
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

            <div className="my-40 grid grid-cols-1 lg:grid-cols-2 gap-y-32 gap-x-24">
               <CustomCard title="Плати частинами" badge="Розтрочка" picture="/money.png" />
               <CustomCard title="Фільтруй базар" badge="Категорії" picture="/txt.png" />
            </div>

         </Layout.Container>
      </div>
   );
};

export { HomePage };
