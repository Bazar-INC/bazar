import { FC, useEffect } from "react";
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useProperty } from "../../hooks/property";
import { Layout } from "../../layout/layout";
import { Sections } from "../../sections";
import { CustomCard } from "./components/custom-card";
import { Slider } from "./components/slider";

const HomePage: FC = () => {

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

   return (
      <div className="py-8">
         <Layout.Container className="px-0">
            <div className="flex gap-x-8">
               <div className="hidden lg:block w-[256px] xl:w-[286px] 2xl:w-[430px] h-2"></div>
               <Slider />
            </div>
         </Layout.Container>
         <img className="mt-20 mb-10 w-full h-[80px] object-cover" src="/banner.png" />
         <Layout.Container>

            <Sections.PromoProducts
               name="Хіти продаж"
               icon="/fire.png"
               products={products.get.hitSale}
            />

            <div className="mt-24 sm:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-32 gap-x-24">
               <CustomCard title="Спорт обладнання" badge="Огляд" picture="/girya.png" />
               <CustomCard title="Смарт годинник" badge="Огляд" picture="/clock.png" />
            </div>

            <Sections.PromoProducts
               name="Новинки"
               icon="/sound.png"
               products={products.get.new}
            />

            <div className="mt-24 sm:mt-32 mb-40 grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-32 gap-x-24">
               <CustomCard title="Плати частинами" badge="Розтрочка" picture="/money.png" />
               <CustomCard title="Фільтруй базар" badge="Категорії" picture="/txt.png" />
            </div>

         </Layout.Container>
      </div>
   );
};

export { HomePage };
