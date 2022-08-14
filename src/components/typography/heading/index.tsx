import { FC } from 'react';
import { classes } from "../../../functions";

interface Props {
   children: string;
   className?: string;
   size?: "default" | "small";
}

const Heading: FC<Props> = ({ children, className, size = "default" }) => {
   return (
      <span className={classes("font-[Intro]", size === "small" ? "text-[30px]" : "text-[40px]", className)}>
         {children}
      </span>
   );
};

export { Heading };
