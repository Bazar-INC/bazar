import { FC, useEffect } from "react";
import { classes } from "../../../functions";
import { useProperty } from "../../hooks/property";
import { Layout } from "../layout";

interface Props {
   items: Array<string>;
   onChange: (index: number) => void;
   className?: string;
}

const HorizontalMenu: FC<Props> = ({ items, onChange, className }) => {

   const [active] = useProperty(0);

   useEffect(() => {
      onChange(active.get);
   }, [active.get]);

   return (
      <Layout.Container className={className}>
         <div className="pt-10 overflow-x-scroll md:overflow-x-hidden overflow-y-hidden pr-4 sm:pr-8 lg:pr-16">
            <div className="bg-white w-full min-w-max h-[67px] 2xl:h-[100px] rounded-xl px-12">
               <ul className="flex h-full font-[Gotham] text-[17px] 2xl:text-[25px] font-bold items-center gap-x-8 2xl:gap-x-12">
                  {items.map((item, index) => (
                     <li
                        key={index}
                        className={classes(
                           "cursor-pointer min-w-fit leading-[66px] 2xl:leading-[98px] border-[#00FF74]",
                           active.is(index) ? "border-b-2" : ""
                        )}
                        onClick={() => active.set(index)}
                     >
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </Layout.Container>
   );
};

export { HorizontalMenu };
