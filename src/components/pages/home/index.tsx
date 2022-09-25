import { FC } from "react";
import { Layout } from "../../layout/layout";
import { Sections } from "../../sections";
import { CustomCard } from "./components/custom-card";
import { Slider } from "./components/slider";
import { useLogic } from "./logic";

const HomePage: FC = () => {

   const { hitSaleProducts, newProducts } = useLogic();

   return (
      <div className="py-8">
         <Layout.Container className="px-0">
            <div className="flex gap-x-8 z-0">
               <div className="hidden lg:block w-[256px] xl:w-[286px] 2xl:w-[430px] h-2"></div>
               <Slider />
            </div>
         </Layout.Container>
         <img className="mt-20 mb-10 w-full h-[80px] object-cover" src="/banner.png" />
         <Layout.Container>

            <Sections.PromoProducts
               name="Хіти продаж"
               icon="/fire.png"
               products={hitSaleProducts.get}
            />

            <div className="mt-24 sm:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-32 gap-x-24">
               <CustomCard title="Спорт обладнання" badge="Огляд" picture="/girya.png" />
               <CustomCard title="Плати частинами" badge="Розстрочка" picture="/money.png" />
            </div>

            <Sections.PromoProducts
               name="Новинки"
               icon="/sound.png"
               products={newProducts.get}
            />

            <div className="mt-24 sm:mt-32 2xl:mt-[270px] mb-40 2xl:mb-[98px] grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-32 gap-x-24">
               <CustomCard title="Фільтруй базар" badge="Категорії" picture="/txt.png" />
               <CustomCard title="Смарт годинник" badge="Огляд" picture="/clock.png" />
            </div>

         </Layout.Container>
      </div>
   );
};

export { HomePage };
