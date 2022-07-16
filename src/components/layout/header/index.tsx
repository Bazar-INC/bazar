import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../layout';

interface Props {
   openSignModal(): void;
}

const Header: FC<Props> = ({ openSignModal }) => {
   return (
      <>
         <header className="h-[100px] flex items-center w-[1660px] mx-auto">
            <Link to="/home">
               <img src="brand_logo_1.png" />
            </Link>
            <div className="ml-auto">
               <div onClick={openSignModal}>
                  <Layout.Button>Увійти</Layout.Button>
               </div>
            </div>
         </header>
         <nav className="h-[70px] bg-[#1d1d1b]"></nav>
      </>
   );
};

export { Header };
