import { FC } from "react";
import { classes } from "../../../../../functions";
import { useProperty } from "../../../../hooks/property";
import { Layout } from "../../../../layout/layout";

const HorizontalMenu: FC = () => {

   const [menuItems] = useProperty([
      "Все про товар",
      "Характеристики",
      "Питання та відповіді",
      "Відгуки",
   ]);

   const [active] = useProperty(-1);

   return (
      <Layout.Container className="!pr-0">
         <div className="py-10 overflow-x-scroll pr-4 sm:pr-8 lg:pr-16">
            <div className="bg-white w-full min-w-max h-[67px] 2xl:h-[100px] rounded-xl px-12">
               <ul className="flex h-full font-[Gotham] text-[17px] 2xl:text-[25px] font-bold items-center gap-x-8 2xl:gap-x-12">
                  {menuItems.get.map((item, index) => (
                     <li onClick={() => active.set(index)} key={index} className={classes(
                        "min-w-fit leading-[66px] 2xl:leading-[98px] border-[#00FF74]",
                        active.get === index ? "border-b-2" : ""
                     )}>{item}</li>
                  ))}
               </ul>
            </div>
         </div>
      </Layout.Container>
   );
};

export { HorizontalMenu };
