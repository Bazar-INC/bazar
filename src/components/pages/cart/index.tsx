import { FC, ReactNode, useEffect } from 'react';
import { Layout } from '../../layout/layout';
import { Typography } from "../../typography";
import { classes, priceSeparateByThousands } from "../../../functions";
import { useLogic } from "./logic";
import { getProductImageUrl } from "../../../image-source";
import { ReceiverOrderSection } from "./order/sections/receiver";
import { Icons } from "../../icons/icons";
import { useAppSelector } from "../../../store/hooks";
import { OrdersAPI } from "../../../api/services/orders";
import { useProperty } from "../../hooks/property";

interface LocalSectionProps {
   name: string;
   children?: ReactNode;
   onClick: () => void;
   active: boolean;
   containerStyles?: string;
   noButton?: boolean;
}

const LocalSection: FC<LocalSectionProps> = ({ name, children, onClick, active, containerStyles, noButton = false }) => {
   return (
      <div>
         <div className="border border-[#9DA0A9] rounded py-6 px-12">
            <Typography.Heading
               size="small"
               className={classes(active ? "text-[#000000]" : "text-[#9DA0A9]")}
            >
               {name}
            </Typography.Heading>
            <div className={containerStyles}>{active && children}</div>
         </div>
         {!noButton && active && <Layout.Button onClick={onClick} className="my-8">Далі</Layout.Button>}
      </div>
   );
};

const CartPage: FC<{ openCityModal(): void }> = ({ openCityModal }) => {

   const {
      products,
      incrementProductCount,
      decrementProductCount,
      mode,
      isLoading,
   } = useLogic();

   const [phone] = useProperty("");

   const city = useAppSelector(state => state.accountReducer.city);

   const createOrder = () => {
      OrdersAPI.createOrder({
         orders: products.get.map(c => ({ productId: c.product.id, count: c.count })),
         phone: phone.get
      });
   };

   useEffect(() => {
      if (mode.get === "pay") {
         createOrder();
      }
   }, [mode]);

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

   const loadingView = (
      <div className="flex justify-between items-center">
         <span>Пліз очікуйте ...</span>
         <Layout.Loader />
      </div>
   );

   const productsViewSection = (
      <div className="flex flex-col gap-y-8">
         {products.get.map((product, index) => (
            <div key={index} className="w-[591px] px-10 py-8 bg-white rounded-md flex justify-between items-center">
               <div className="flex gap-x-4">
                  <img className="w-20 h-20" src={getProductImageUrl(product.product.images?.at(0)?.image ?? "")} />
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
                        className="!w-8 rounded border-2 text-center leading-8"
                        onChange={() => console.log(1)}
                        hardValue={product.count.toString()}
                        textCenter
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

   const fullCartPageView = (
      <div className="mt-12 flex gap-x-24">
         <div className="w-[600px] max-w-[600px] min-w-[600px] space-y-6">
            {mode.get === "products" && (
               <>
                  {productsViewSection}
                  <Layout.Button onClick={() => mode.set("receiver")} className="my-8">Далі</Layout.Button>
               </>
            )}

            <ReceiverOrderSection active={mode.get === "receiver"} onFinish={(values) => {
               mode.set("address");
               phone.set(values.phone);
            }} />

            <LocalSection name="Спосіб отримання" onClick={() => mode.set("pay")} active={mode.get === "address"}>
               <div onClick={openCityModal} className="cursor-pointer px-5 py-4 mt-4 border-2 rounded border-[#9DA0A9] flex items-center">
                  <Icons.Location className="w-6 h-6" />
                  <div className="ml-4 flex flex-col">
                     <span className="text-[#9DA0A9] text-[15px]">Місто</span>
                     <span className="text-black text-[20px] font-bold">{city?.name}</span>
                  </div>
                  <svg className="ml-auto" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.999999 0.999999L1 13L8 7L0.999999 0.999999Z" fill="#9DA0A9" stroke="#9DA0A9" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
               </div>

               <div className="px-5 py-1 border-2 border-[#9DA0A9] mt-4 rounded">
                  <label className="cursor-pointer">
                     <input type="radio" name="df" id="" />
                     <span className="ml-2">Самовивіз з нашої точки видачі</span>
                  </label>
               </div>
               <div className="px-5 py-1 border-2 border-[#9DA0A9] mt-4 rounded">
                  <label className="cursor-pointer">
                     <input type="radio" name="df" id="" />
                     <span className="ml-2">Кур’єр на вашу адресу</span>
                  </label>
               </div>
               <div className="px-5 py-1 border-2 border-[#9DA0A9] mt-4 rounded">
                  <label className="cursor-pointer">
                     <input type="radio" name="df" id="" />
                     <span className="ml-2">Самовивіз з нової пошти</span>
                  </label>
               </div>

            </LocalSection>

            <LocalSection name="Оплата" onClick={() => mode.set("products")} active={mode.get === "pay"} noButton>
               <div className="flex justify-between items-center">
                  <span className="text-sm">Обробка замовлення ...</span>
                  <Layout.Loader />
               </div>
            </LocalSection>
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
         {isLoading ? loadingView : (
            products.get.length === 0 ? emptyCartPageView : fullCartPageView
         )}
      </Layout.Container >
   );
};

export { CartPage };
