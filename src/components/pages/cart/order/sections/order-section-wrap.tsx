import { FC, ReactNode } from "react";
import { classes } from "../../../../../functions";
import { Layout } from "../../../../layout/layout";
import { Typography } from "../../../../typography";

interface OrderSectionWrapProps {
   name: string;
   children?: ReactNode;
   onClick: () => void;
   active: boolean;
   containerStyles?: string;
}

const OrderSectionWrap: FC<OrderSectionWrapProps> = ({ name, children, onClick, active, containerStyles }) => {
   return (
      <div>
         <div className="border border-[#9DA0A9] rounded py-6 px-12">
            <Typography.Heading
               size="small"
               className={classes(active ? "text-[#000000]" : "text-[#9DA0A9]")}
            >
               {name}
            </Typography.Heading>
            <div className={containerStyles}>{active && children}</div>
         </div>
         {active && <Layout.Button onClick={onClick} className="my-8">Далі</Layout.Button>}
      </div>
   );
};

export { OrderSectionWrap };
