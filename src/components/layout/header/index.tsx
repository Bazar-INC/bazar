import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { Icons } from '../../icons/icons';
import { Layout } from '../layout';

const catalogMenuItems = [
   {
      title: "Акції інтернет - магазину",
      icon: <Icons.Phone />,
      route: "/goods/laptops"
   },
   {
      title: "Ноутбуки та комп’ютери",
      icon: <Icons.Phone />,
      route: "/goods/laptops"
   },
   {
      title: "Смартфони, ТВ і електроніка",
      icon: <Icons.Phone />,
      route: "/goods/electronics"
   },
   {
      title: "Товари для геймерів",
      icon: <Icons.Controller />,
      route: "/goods/gaming"
   },
   {
      title: "Побутова техніка",
      icon: <Icons.Phone />,
      route: "/goods/household_appliances"
   },
   {
      title: "Товари для дому",
      icon: <Icons.Phone />,
      route: "/goods/home"
   },
   {
      title: "Інструменти та автотовари",
      icon: <Icons.Phone />,
      route: "/goods/cars"
   },
   {
      title: "Сантехніка та ремонт",
      icon: <Icons.Phone />,
      route: "/goods/plumbing"
   },
   {
      title: "Ще 15 категорій",
      icon: <Icons.Dots />,
      route: ""
   },
];

interface Props {
   openSignModal(): void;
   fixMenu?: boolean;
}

const Header: FC<Props> = ({ openSignModal, fixMenu }) => {

   const profile = useAppSelector(state => state.accountReducer.profile);

   return (
      <>
         <Layout.Container>
            <header className="h-[100px] flex items-center">
               <Link to="/home">
                  <img src="/brand_logo_1.png" />
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
         </Layout.Container>
         <nav className="h-[70px] bg-[#1d1d1b]">
            <Layout.Container>
               <div className="flex items-center h-full">
                  <div className="group w-[430px] h-full bg-[#31353c] flex items-center relative">
                     <span className="ml-5 mr-2.5"><Icons.AlignLeft /></span>
                     <span className="text-[21px] font-semibold text-white leading-[70px] cursor-pointer">Каталог товарів</span>
                     <div className={`${!fixMenu && "hidden"} group-hover:block absolute top-full bg-white w-[430px] p-5 space-y-2 shadow-2xl rounded-b`}>
                        {catalogMenuItems.map((item, index) => (
                           <Link to={item.route} key={index} className="flex items-center h-14">
                              <div className="w-9 flex justify-center">
                                 {item.icon}
                              </div>
                              <span className="text-[19px] font-semibold ml-4">{item.title}</span>
                           </Link>
                        ))}
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
            </Layout.Container>
         </nav>
      </>
   );
};

export { Header };
