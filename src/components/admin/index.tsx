import { FC } from "react";
import { Icons } from "../icons/icons";
import { Layout } from "../layout/layout";

const menuItems = [
   {
      label: "Товари",
      icon: <Icons.Cart />
   },
   {
      label: "Категорії",
      icon: <Icons.Cart />
   },
   {
      label: "Фільтри",
      icon: <Icons.Cart />
   },
   {
      label: "Відгуки",
      icon: <Icons.Cart />
   },
   {
      label: "Питання та відповіді",
      icon: <Icons.Cart />
   },
   {
      label: "Налаштування",
      icon: <Icons.Cart />
   },
   {
      label: "Повернутися в BAZAR",
      icon: <Icons.Cart />
   }
];

const AdminPage: FC = () => {
   return (
      <div className="bg-[#F4F4F4] h-full flex">
         <div className="h-full w-[450px] bg-[#2c2c2c] flex flex-col items-center">
            <img src="/brand_logo_2.png" className="mt-[70px]" />
            <div className="mt-[67px] space-y-[35px]">
               {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                     {item.icon}
                     <span className="text-[25px] font-[Gotham] text-white font-bold ml-5">{item.label}</span>
                  </div>
               ))}
            </div>
         </div>
         <div className="h-full flex-1">
            <header className="h-[100px] bg-white flex items-center px-5">
               <div></div>
               <div className="ml-auto flex gap-x-5 items-center">
                  <span className="text-[35px] font-bold font-[Gotham]">Bazar Adm</span>
                  <img className="w-[60px] h-[60px] rounded-full" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=456" />
               </div>
            </header>
         </div>
      </div>
   );
};

export { AdminPage };
