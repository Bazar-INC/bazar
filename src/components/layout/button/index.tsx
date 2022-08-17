import { FC, ReactNode } from 'react';
import { classes } from "../../../functions";

interface Props {
   children: ReactNode;
   stretch?: boolean;
   onClick?(): void;
   className?: string;
}

const Button: FC<Props> = ({
   children,
   stretch: stretch = false,
   onClick,
   className
}) => {

   const stretchStyles = stretch === true ? 'w-full' : '';

   return (
      <button onClick={onClick} className={classes(
         "flex justify-center items-center text-xl bg-[#8F00F9] hover:bg-[#6500B0] text-white py-2 px-6 rounded",
         stretchStyles,
         className
      )}>
         {children}
      </button>
   );
};

export { Button };
