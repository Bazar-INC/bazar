import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../layout';

const Header: FC = () => {
   return (
      <>
         <header className="h-[100px] flex items-center w-[1660px] mx-auto">
            <Link to="/home">
               <img src="brand_logo_1.png" />
            </Link>
            <div className="ml-auto">
               <Link to="/sign">
                  <Layout.Button>Увійти</Layout.Button>
               </Link>
            </div>
         </header>
         <nav className="h-[70px] bg-[#1d1d1b]"></nav>
      </>
   );
};

export { Header };
