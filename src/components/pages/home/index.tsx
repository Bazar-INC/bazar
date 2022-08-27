import { FC, useEffect } from "react";
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useProperty } from "../../hooks/property";
import { Layout } from "../../layout/layout";
import { Sections } from "../../sections";
import { CustomCard } from "./components/custom-card";

import SimpleImageSlider from "react-simple-image-slider";

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

   const sliderContainer = document.getElementById("sliderContainer");

   const [sliderSize] = useProperty({
      width: sliderContainer?.clientWidth ?? 0,
      height: sliderContainer?.clientHeight ?? 0,
   });

   useEffect(() => {
      sliderSize.set({
         width: sliderContainer?.clientWidth ?? 0,
         height: sliderContainer?.clientHeight ?? 0,
      });
   }, [sliderContainer]);

   useEffect(() => {


      window.addEventListener("resize", () => {
         const sliderContainer = document.getElementById("sliderContainer");
         sliderSize.set({
            width: sliderContainer?.clientWidth ?? 0,
            height: sliderContainer?.clientHeight ?? 0,
         });
      });

   }, []);

   return (
      <div className="py-8">
         <Layout.Container className="px-0">
            <div className="flex gap-x-8">
               <div className="hidden lg:block w-[256px] xl:w-[286px] 2xl:w-[430px] h-2"></div>
               <div id="sliderContainer" className="overflow-hidden flex-1 h-[256px] md:h-[440px] 2xl:h-[608px] w-full sm:rounded-lg bg-black">
                  <SimpleImageSlider
                     width={sliderSize.get.width}
                     height={sliderSize.get.height}
                     images={["/promo_banner_1.png", "/promo_banner_2.png"]}
                     showBullets={true}
                     showNavs={true}
                  />
               </div>
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
