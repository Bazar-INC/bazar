import { FC } from 'react';
import { Layout } from '../../layout/layout';
import { Typography } from "../../typography";
import { classes, priceSeparateByThousands } from "../../../functions";
import { useLogic } from "./logic";

const CartPage: FC = () => {

   const {
      products,
      incrementProductCount,
      decrementProductCount,
      mode,
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

   const productsViewSection = (
      <div className="flex flex-col gap-y-8">
         {products.get.map((product, index) => (
            <div key={index} className="w-[591px] px-10 py-8 bg-white rounded-md flex justify-between items-center">
               <div className="flex gap-x-4">
                  <img className="w-20 h-20" src={product.product.images?.at(0)?.image} />
                  <div className="flex flex-col">
                     <span className="font-[Intro] text-[#61615f] text-[15px] mb-2">{product.product.categoryName}</span>
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
                  <div className="w-[100px]">
                     <div className="flex mt-5 items-center">
                        <span className="line-through text-[#70706d] font-semibold text-[10px]">17 999</span>
                        <span className="bg-[#d4ffe7] rounded ml-2 font-semibold text-[10px] text-[#1d1d1d] px-2.5">-1000</span>
                     </div>
                     <Typography.Heading size="small" className="text-[17px]">
                        {`${priceSeparateByThousands(product.product.price ?? 0)} грн`}
                     </Typography.Heading>
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
   );

   const receiverViewSection = (
      <div className="border border-[#9DA0A9] rounded py-6 px-12">
         <Typography.Heading
            className={classes(mode.get === "receiver" ? "text-[#000000]" : "text-[#9DA0A9]")}
            size="small"
         >
            Отримувач
         </Typography.Heading>
         {mode.get === "receiver" && (
            <>
               <div className="flex gap-x-10">
                  <div className="flex flex-col">
                     <span className="bold">Ім&apos;я</span>
                     <Layout.Input
                        type="text"
                        hint="Володимир"
                        className="px-4 py-2 bg-transparent mt-2 border-2 rounded border-[#9DA0A9]"
                        onChange={() => console.log(1)}
                     />
                  </div>
                  <div className="flex flex-col">
                     <span className="bold">Прізвище</span>
                     <Layout.Input
                        type="text"
                        hint="Яворський"
                        className="px-4 py-2 bg-transparent mt-2 border-2 rounded border-[#9DA0A9]"
                        onChange={() => console.log(1)}
                     />
                  </div>
               </div>
               <div className="flex gap-x-10 mt-6">
                  <div className="flex flex-col">
                     <span className="bold">Номер телефону</span>
                     <Layout.Input
                        type="text"
                        hint="+38 (0__) __-__-___"
                        className="px-4 py-2 bg-transparent mt-2 border-2 rounded border-[#9DA0A9]"
                        onChange={() => console.log(1)}
                     />
                  </div>
                  <div className="flex flex-col">
                     <span className="bold">Е-mail</span>
                     <Layout.Input
                        type="text"
                        hint="shop@bazar.com"
                        className="px-4 py-2 bg-transparent mt-2 border-2 rounded border-[#9DA0A9]"
                        onChange={() => console.log(1)}
                     />
                  </div>
               </div>
               <Layout.Button onClick={() => mode.set("address")} className="my-8">Далі</Layout.Button>
            </>
         )}
      </div>
   );

   const addressViewSection = (
      <>
         <div className="border border-[#9DA0A9] rounded py-6 px-12 mt-6">
            <Typography.Heading
               className={classes(mode.get === "address" ? "text-[#000000]" : "text-[#9DA0A9]")}
               size="small"
            >
               Спосіб отримання
            </Typography.Heading>
         </div>
         {mode.get === "address" && (
            <Layout.Button onClick={() => mode.set("pay")} className="my-8">Далі</Layout.Button>
         )}
      </>
   );

   const fullCartPageView = (
      <div className="mt-12 flex gap-x-24">
         <div className="w-[600px]">
            {mode.get === "products" && (
               <>
                  {productsViewSection}
                  <Layout.Button onClick={() => mode.set("receiver")} className="my-8">Далі</Layout.Button>
               </>
            )}

            {receiverViewSection}

            {addressViewSection}

            <div className="border border-[#9DA0A9] rounded py-6 px-12 mt-6">
               <Typography.Heading
                  className={classes(mode.get === "pay" ? "text-[#000000]" : "text-[#9DA0A9]")}
                  size="small"
               >
                  Оплата
               </Typography.Heading>
            </div>
         </div>
         <div className="ml-auto w-[620px]">
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
                  <Typography.Heading>{`За ${products.get.reduce((sum, v) => sum + v.count, 0)} товари`}</Typography.Heading>
                  <div className="flex flex-col items-end">
                     <Typography.Heading className="text-[#9DA0A9] !text-[13px] line-through">12 000 Грн</Typography.Heading>
                     <Typography.Heading size="small">
                        {`${priceSeparateByThousands(products.get.reduce((sum, p) => {
                           if (p.product.price) {
                              return sum + p.count * p.product.price;
                           }
                           return 0;
                        }, 0))} грн`}</Typography.Heading>
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
      </Layout.Container >
   );
};

export { CartPage };
