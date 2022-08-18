import { FC, PropsWithChildren } from 'react';
import { classes } from "../../../functions";

interface Props {
   className?: string;
}

const Container: FC<PropsWithChildren<Props>> = ({ children, className }) => {
   return (
      <div className={classes("max-w-[1660px] mx-auto px-6 sm:px-16", className)}>
         {children}
      </div>
   );
};

export { Container };
