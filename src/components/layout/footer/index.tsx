import { FC } from 'react';
import { classes } from "../../../functions";
import { Layout } from '../layout';

interface Props {
   className?: string;
}

const Footer: FC<Props> = ({ className }) => {
   return (
      <footer className={classes("bg-[#1D1D1D] py-16", className)}>
         <Layout.Container>
            <img src="brand_logo_2.png" alt="" />
         </Layout.Container>
      </footer>
   );
};

export { Footer };
