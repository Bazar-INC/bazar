import { FC } from 'react';
import { classes } from "../../../functions";

interface Props {
   children: string;
   className?: string;
   size?: "default" | "small";
}

const Heading: FC<Props> = ({ children, className, size = "default" }) => {

   const sizeIsSmall = size === "small";

   return (
      <span className={
         classes(
            "font-[Intro]",
            sizeIsSmall ? "text-[25px] 2xl:text-[30px]" : "text-[30px] 2xl:text-[40px]",
            className
         )
      }>
         {children}
      </span>
   );
};

export { Heading };
