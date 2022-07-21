import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../icons/icons';
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
            <div className="ml-auto flex items-center">
               <Link to="/cart">
                  <Icons.Cart />
               </Link>
               <div className="ml-10" onClick={openSignModal}>
                  <Layout.Button>Увійти</Layout.Button>
               </div>
            </div>
         </header>
         <nav className="h-[70px] bg-[#1d1d1b]">
            <div className="w-[1660px] mx-auto flex items-center h-full">
               <div className="w-[430px] h-full bg-[#31353c] flex items-center">
                  <span className="ml-5 mr-2.5"><Icons.AlignLeft /></span>
                  <span className="text-[21px] font-semibold text-white leading-[70px]">Каталог товарів</span>
               </div>
               <div className="text-white font-semibold text-[20px] space-x-12 ml-8">
                  <span>Про нас</span>
                  <span>Довідковий центр</span>
                  <span>Доставка та оплата</span>
                  <span>Партнерам</span>
               </div>
               <div className="ml-auto">
                  <span className="text-white font-semibold text-[20px]">Покупцям</span>
               </div>
            </div>
         </nav>
      </>
   );
};

export { Header };
