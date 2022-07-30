import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { Icons } from '../../icons/icons';
import { Layout } from '../layout';

interface Props {
   openSignModal(): void;
}

const Header: FC<Props> = ({ openSignModal }) => {

   const profile = useAppSelector(state => state.accountReducer.profile);

   return (
      <>
         <header className="h-[100px] flex items-center w-[1660px] mx-auto">
            <Link to="/home">
               <img src="brand_logo_1.png" />
            </Link>
            <div className="ml-auto flex items-center">
               <Link className="mr-10" to="/cart">
                  <Icons.Cart />
               </Link>
               {profile ? (
                  <div className="flex items-center border-2 rounded border-[#8f00f9] p-1.5">
                     <img
                        className="w-12 h-12 object-cover rounded"
                        src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=456"
                     />
                     <span className="text-[#8f00f9] text-[20px] ml-3.5">{profile.name}</span>
                  </div>
               ) : (
                  <Layout.Button onClick={openSignModal}>Увійти</Layout.Button>
               )}
            </div>
         </header>
         <nav className="h-[70px] bg-[#1d1d1b]">
            <div className="w-[1660px] mx-auto flex items-center h-full">
               <div className="w-[430px] h-full bg-[#31353c] flex items-center relative">
                  <span className="ml-5 mr-2.5"><Icons.AlignLeft /></span>
                  <span className="text-[21px] font-semibold text-white leading-[70px]">Каталог товарів</span>
                  <div className="absolute top-full bg-white w-[430px] p-5 space-y-2">
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Phone />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Акції інтернет - магазину</span>
                     </div>
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Phone />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Ноутбуки та комп’ютери</span>
                     </div>
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Phone />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Смартфони, ТВ і електроніка</span>
                     </div>
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Controller />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Товари для геймерів</span>
                     </div>
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Phone />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Побутова техніка</span>
                     </div>
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Phone />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Товари для дому</span>
                     </div>
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Phone />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Інструменти та автотовари</span>
                     </div>
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Phone />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Сантехніка та ремонт</span>
                     </div>
                     <div className="flex items-center h-14">
                        <div className="w-9 flex justify-center">
                           <Icons.Dots />
                        </div>
                        <span className="text-[19px] font-semibold ml-4">Ще 15 категорій</span>
                     </div>
                  </div>
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
