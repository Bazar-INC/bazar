import { FC } from 'react';
import { Layout } from '../layout';

const Footer: FC = () => {
   return (
      <footer className="bg-[#1D1D1D] py-16">
         <Layout.Container>
            <img src="brand_logo_2.png" alt="" />
         </Layout.Container>
      </footer>
   );
};

export { Footer };
