import { FC, useEffect, useState } from "react";
import { Icons } from "../../../icons/icons";
import { Layout } from "../../../layout/layout";
import { Typography } from "../../../typography";

const NewProduct: FC = () => {
   return (
      <div className="w-full py-[20px] flex flex-col">
         <Typography.Heading>Новий товар</Typography.Heading>
         <div className="flex flex-col mt-[30px]">
            <div className="flex flex-row">
               <div className="flex flex-col w-full">
                  <span className=" text-[#949494] font-[Gotham] font-bold text-[15px]">Назва</span>
                  <Layout.Input
                     type="text"
                     hint="Назва"
                     className=" h-[50px] rounded-lg mt-[15px]"
                     onChange={(value) => console.log(value)} />
               </div>

               <div className="ml-[40px] w-[150px] flex flex-col">
                  <span className=" text-[#949494] font-[Gotham] font-bold text-[15px]">Ціна</span>
                  <Layout.Input
                     type="text"
                     hint="Ціна"
                     className="h-[50px] rounded-lg mt-[15px]"
                     onChange={(value) => console.log(value)} />
               </div>
            </div>

            <div className="mt-[30px] flex flex-col">
               <span className=" text-[#949494] font-[Gotham] font-bold text-[15px]">Фото</span>
               <div className="flex flex-wrap">
                  <div className="w-[100px] h-[100px] bg-white rounded-md mr-[20px] mt-[15px]">
                     <Icons.Cart />
                  </div>
                  <div className="w-[100px] h-[100px] bg-white rounded-md mr-[20px] mt-[15px]">
                     <Icons.Cart />
                  </div>
                  <div className="w-[100px] h-[100px] bg-white rounded-md mr-[20px] mt-[15px]">
                     <Icons.Cart />
                  </div>
                  <div className="w-[100px] h-[100px] bg-white rounded-md mr-[20px] mt-[15px]">
                     <Icons.Cart />
                  </div>
               </div>
            </div>

            <div className="mt-[30px] flex flex-col">
               <span className=" text-[#949494] font-[Gotham] font-bold text-[15px]">Опис</span>
               <Layout.Input
                  type="text"
                  hint="Опис"
                  className="w-full h-[200px] rounded-lg mt-[15px]"
                  onChange={(value) => console.log(value)} />
            </div>

            <div className="flex flex-col md:flex-row">
               <div className=" md:w-full mt-[30px] md:ml-[50px] flex flex-col">
                  <span className=" text-[#949494] font-[Gotham] font-bold text-[15px]">Категорія</span>
                  <select className="h-[50px] mt-[15px] rounded-lg">
                     <option>Телефони</option>
                     <option>Розетки</option>
                     <option>Навушники</option>
                  </select>
               </div>

               <div className="mt-[30px] md:w-full flex flex-col md:order-first md:mr-[50px]">
                  <span className=" text-[#949494] font-[Gotham] font-bold text-[15px]">Фільтри</span>
                  <select className="h-[50px] mt-[15px] rounded-lg">
                     <option>Марка</option>
                     <option>Память</option>
                  </select>

                  <div className="h-[50px] mt-[20px] flex">
                     <div className="h-[50px] w-[50px] bg-white rounded-lg p-[14px]">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.3743 1.27846C10.3743 1.19629 10.3905 1.11492 10.4219 1.03901C10.4534 0.963091 10.4994 0.894112 10.5575 0.836008C10.6157 0.777904 10.6846 0.731814 10.7605 0.700368C10.8365 0.668923 10.9178 0.652738 11 0.652738C11.0822 0.652738 11.1635 0.668923 11.2395 0.700368C11.3154 0.731814 11.3843 0.777904 11.4425 0.836008C11.5006 0.894112 11.5466 0.963091 11.5781 1.03901C11.6095 1.11492 11.6257 1.19629 11.6257 1.27846L11.6248 10.3753L20.7217 10.3744C20.8039 10.3744 20.8852 10.3906 20.9611 10.4221C21.0371 10.4535 21.106 10.4996 21.1641 10.5577C21.2223 10.6158 21.2683 10.6848 21.2998 10.7607C21.3312 10.8366 21.3474 10.918 21.3474 11.0002C21.3474 11.0823 21.3312 11.1637 21.2998 11.2396C21.2683 11.3155 21.2223 11.3845 21.1641 11.4426C21.106 11.5007 21.0371 11.5468 20.9611 11.5783C20.8852 11.6097 20.8039 11.6259 20.7217 11.6259L11.6248 11.625L11.6257 20.7219C11.6257 20.804 11.6095 20.8854 11.5781 20.9613C11.5466 21.0372 11.5006 21.1062 11.4425 21.1643C11.3844 21.2224 11.3154 21.2685 11.2395 21.2999C11.1635 21.3314 11.0822 21.3476 11 21.3476C10.9178 21.3476 10.8365 21.3314 10.7605 21.2999C10.6846 21.2685 10.6156 21.2224 10.5575 21.1643C10.4994 21.1062 10.4534 21.0372 10.4219 20.9613C10.3905 20.8854 10.3743 20.804 10.3743 20.7219L10.3752 11.625L1.2783 11.6259C1.19613 11.6259 1.11477 11.6097 1.03885 11.5783C0.962934 11.5468 0.893956 11.5007 0.835852 11.4426C0.777748 11.3845 0.731657 11.3155 0.700211 11.2396C0.668766 11.1637 0.652581 11.0823 0.65258 11.0002C0.65258 10.918 0.668766 10.8366 0.700211 10.7607C0.731657 10.6848 0.777749 10.6158 0.835852 10.5577C0.893956 10.4996 0.962934 10.4535 1.03885 10.4221C1.11477 10.3906 1.19613 10.3744 1.2783 10.3744L10.3752 10.3753L10.3743 1.27846Z" fill="#ACACAC" />
                        </svg>
                     </div>
                     <span className="h-min my-auto ml-[20px] text-[#949494] font-[Gotham] font-bold text-[15px]">Додати фільтр</span>
                  </div>
               </div>
            </div>



            <Layout.Button className="w-[220px] h-[44px] mt-[31px]">Опублікувати</Layout.Button>
         </div>
      </div>
   );
};

export { NewProduct };
