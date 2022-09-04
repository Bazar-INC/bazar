import { FC } from 'react';
import { Layout } from '../../layout/layout';
import { useLogic } from "./logic";
// import { Sections } from "../../sections";
import { Typography } from "../../typography";

const CartPage: FC = () => {

   const {
      products,
      incrementProductCount,
      decrementProductCount,
   } = useLogic();

   const emptyCartPageView = (
      <div className="w-full flex flex-col items-center justify-center">
         <img src="cart.png" className="h-[318px] 2xl:h-[444px] -mr-56" />
         <div className="max-w-[676px]">
            <Typography.Heading size="small">Упс... Ваш кошик порожній</Typography.Heading>
            <br />
            <span className="text-[20px] 2xl:text-[30px]">Та з базару ніхто не йде з пустими руками, обери щось з каталогу</span>
         </div>
      </div>
   );

   const fullCartPageView = (
      <div className="mt-12 flex gap-x-24">
         <div>
            <div className="flex flex-col gap-y-8">
               {products.get.map((product, index) => (
                  <div key={index} className="w-[591px] px-10 py-8 bg-white rounded-md flex justify-between items-center">
                     <div className="flex gap-x-4">
                        <img className="w-20 h-20" src={product.product.images?.at(0)} />
                        <div className="flex flex-col">
                           <span className="font-[Intro] text-[#61615f] text-[15px] mb-2">Смартфон</span>
                           <span className="text-[12px] mb-2">{product.product.name}</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-x-8">
                        <div className="flex gap-x-2">
                           <button onClick={() => product.product.id && decrementProductCount(product.product.id)}>-</button>
                           <Layout.Input
                              maxLength={2}
                              type="number"
                              className="w-8 h-8 rounded border-2 text-center leading-8"
                              onChange={() => console.log(1)}
                              hardValue={product.count.toString()}
                           />
                           <button onClick={() => product.product.id && incrementProductCount(product.product.id)}>+</button>
                        </div>
                        <div>
                           <div className="flex mt-5 items-center">
                              <span className="line-through text-[#70706d] font-semibold text-[10px]">17 999</span>
                              <span className="bg-[#d4ffe7] rounded ml-2 font-semibold text-[10px] text-[#1d1d1d] px-2.5">-1000</span>
                           </div>
                           <Typography.Heading size="small" className="text-[17px]">17 000 грн</Typography.Heading>
                        </div>
                        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3.08789 5.74219V16.857C3.08789 19.6184 5.32647 21.857 8.08789 21.857H12.8598C15.6212 21.857 17.8598 19.6184 17.8598 16.857V5.74219" stroke="#70706D" strokeWidth="2" />
                           <path d="M15.8457 5.74219L15.8457 4.71348C15.8457 3.05663 14.5026 1.71348 12.8457 1.71348L8.10249 1.71348C6.44563 1.71348 5.10249 3.05663 5.10249 4.71348L5.10249 5.74219" stroke="#70706D" strokeWidth="2" />
                           <path d="M1.07422 5.74219L19.8748 5.74219" stroke="#70706D" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                     </div>
                  </div>
               ))}
            </div>
            <Layout.Button className="my-8">Далі</Layout.Button>
         </div>
         <div className="w-full">
            <div className="border-[#9DA0A9] border rounded w-full p-8">
               <div className="flex gap-x-5">
                  <Layout.Input
                     className="text-[11px] w-full px-6 h-10 border-[#9DA0A9] border-2 rounded font-[Intro] bg-transparent outline-none"
                     type="text"
                     onChange={() => console.log()}
                     hint="Промокод"
                  />
                  <button className="border-[#9DA0A9] border-2 rounded w-10 h-10">&gt;</button>
               </div>
               <div className="flex justify-between mt-8">
                  <span className="font-bold">Знижка</span>
                  <span className="text-[#9DA0A9] font-[Intro]">3 000 ГРН</span>
               </div>
               <div className="flex justify-between items-center mt-4 border-t border-[#9DA0A9] pt-8">
                  <Typography.Heading>За 2 товари</Typography.Heading>
                  <div className="flex flex-col items-end">
                     <Typography.Heading className="text-[#9DA0A9] !text-[13px] line-through">12 000 Грн</Typography.Heading>
                     <Typography.Heading size="small">17 000 Грн</Typography.Heading>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

   return (
      <Layout.Container className="pt-10 pb-20">

         <Typography.Heading>Оформлення замовлення</Typography.Heading>

         {products.get.length === 0 ? emptyCartPageView : fullCartPageView}

         {/* <Sections.PromoProducts
            name="Хіти продаж"
            icon="/fire.png"
            products={products.get.slice(0, 4)}
         /> */}

      </Layout.Container >
   );
};

export { CartPage };
