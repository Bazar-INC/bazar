import { FC } from "react";
import { classes } from "../../../functions";

interface Props {
   additionalClasses?: string;
   children: string;
   color: string;
}

const Badge: FC<Props> = ({ children, color, additionalClasses }) => {

   const defaultClasses = "inline-block rounded-lg px-1 py-0.5 border-2";

   return (
      <div style={{ borderColor: color }} className={classes(defaultClasses, additionalClasses)}>
         <span className="text-xs 2xl:text-sm font-[Gotham] font-bold block w-full text-center">
            {children}
         </span>
      </div>
   );
};

export { Badge };
