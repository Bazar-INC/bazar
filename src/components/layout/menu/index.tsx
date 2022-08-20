import { FC, useEffect, useState } from "react";
import { Icons } from "../../icons/icons";
import { classes } from "../../../functions";

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

interface Props {
   active: boolean,
   setActive(value: boolean): void
}

const Menu: FC<Props> = ({ active, setActive }) => {
   return (
      <div className={classes("transition", "ease-in-out", "duration-200","fixed", "h-full", "gap-0", "columns-2", !active ? "-translate-x-[100%]" : "-translate-x-[0%]")}>
         <div className=" h-full w-[300px] bg-[#2c2c2c] flex flex-col items-center">
            <img src="/brand_logo_2.png" className="mt-[70px]" />
            <div className="mt-[67px] space-y-[35px]">
               {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                     {item.icon}
                     <span className="text-[15px] font-[Gotham] text-white font-bold ml-5">{item.label}</span>
                  </div>
               ))}
            </div>
         </div>
         <div className="h-full right-0 " onClick={() => setActive(!active)}>
         </div>
      </div>
   );
};

export { Menu };
