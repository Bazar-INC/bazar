import { FC, useEffect, useState } from "react";
import { Icons } from "../../../icons/icons";
import { classes } from "../../../../functions";

const menuItems = [
   {
      label: "Товари",
      icon: <Icons.Cart className="w-6" />
   },
   {
      label: "Категорії",
      icon: <Icons.Cart className="w-6" />
   },
   {
      label: "Фільтри",
      icon: <Icons.Cart className="w-6" />
   },
   {
      label: "Відгуки",
      icon: <Icons.Cart className="w-6" />
   },
   {
      label: "Питання та відповіді",
      icon: <Icons.Cart className="w-6" />
   },
   {
      label: "Налаштування",
      icon: <Icons.Cart className="w-6" />
   },
   {
      label: "Повернутися в BAZAR",
      icon: <Icons.Cart className="w-6" />
   }
];

interface Props {
   active: boolean,
   setActive(value: boolean): void
}

const Menu: FC<Props> = ({ active, setActive }) => {
   return (
      <div className={classes("flex flex-row transition ease-in-out duration-200 fixed md:static h-full w-full md:-translate-x-[0%]", !active ? "-translate-x-[100%]" : "-translate-x-[0%]")} onClick={e => e.stopPropagation()}>
         <div className=" h-full w-[300px] bg-[#2c2c2c] flex flex-col items-center">
            <img src="/brand_logo_2.png" className="mt-[70px]" />
            <div className="mt-[67px] space-y-[35px]">
               {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center cursor-pointer">
                     {item.icon}
                     <span className="text-[15px] font-[Gotham] text-white hover:text-[#8F00F9] font-bold ml-5"  onClick={() => setActive(!active)}>{item.label}</span>
                  </div>
               ))}
            </div>
         </div>
         <div className={classes("ml-[300px] h-full fixed w-full md:w-0", active ? "w-full" : "w-0")} onClick={() => setActive(!active)}>

         </div>
      </div>
   );
};

export { Menu };
