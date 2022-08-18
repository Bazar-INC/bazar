import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { Icons } from '../../icons/icons';
import { Layout } from '../layout';

const catalogMenuItems = [
   {
      title: "Технiка для дому",
      icon: <Icons.Controller />,
      route: "/goods/home_appliances"
   },
   {
      title: "Техніка та електроніка",
      icon: <Icons.Controller />,
      route: "/goods/technique_and_electronics"
   },
   {
      title: "Мобільні телефони",
      icon: <Icons.Phone />,
      route: "/goods/mobile_phones"
   },
   {
      title: "Ноутбуки та Планшети",
      icon: <Icons.Controller />,
      route: "/goods/laptops_and_tablets"
   },
   {
      title: "ТВ та Вiдображення",
      icon: <Icons.Controller />,
      route: "/goods/tb_and_presentation"
   },
   {
      title: "Навушники та Колонки",
      icon: <Icons.Controller />,
      route: "/goods/home_appliances"
   },
   {
      title: "Інструменти та автотовари",
      icon: <Icons.Controller />,
      route: "/goods/cars"
   },
   {
      title: "Сантехніка та ремонт",
      icon: <Icons.Controller />,
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
         <nav className="h-[48px] 2xl:h-[70px] bg-[#1d1d1b] hidden sm:block">
            <Layout.Container>
               <div className="flex items-center h-full">
                  <div className="group w-[286px] 2xl:w-[430px] h-full bg-[#31353c] flex items-center relative">
                     <span className="ml-5 mr-2.5">
                        <Icons.AlignLeft className="w-6 h-6 2xl:w-9 2xl:h-9" />
                     </span>
                     <span className="text-[14px] 2xl:text-[21px] font-bold 2xl:font-semibold text-white leading-[48px] h-[48px] 2xl:h-[70px] 2xl:leading-[70px] cursor-pointer">Каталог товарів</span>
                     <div className={`${!fixMenu && "hidden"} group-hover:block absolute top-full bg-white w-[286px] 2xl:w-[430px] p-5 space-y-0 2xl:space-y-3 shadow-2xl rounded-b`}>
                        {catalogMenuItems.map((item, index) => (
                           <Link to={item.route} key={index} className="flex items-center h-12 2xl:h-14">
                              <div className="w-6 h-6 2xl:h-9 2xl:w-9 flex justify-center">
                                 {item.icon}
                              </div>
                              <span className="text-[12px] 2xl:text-[19px] font-bold 2xl:font-semibold ml-4">{item.title}</span>
                           </Link>
                        ))}
                     </div>
                  </div>
                  <div className="text-white font-bold 2xl:font-semibold text-[13px] 2xl:text-[20px] space-x-12 ml-8 hidden lg:block">
                     <span>Про нас</span>
                     <span>Довідковий центр</span>
                     <span>Доставка та оплата</span>
                     <span>Партнерам</span>
                  </div>
                  <div className="ml-auto">
                     <span className="text-white font-bold 2xl:font-semibold text-[13px] 2xl:text-[20px]">Покупцям</span>
                  </div>
               </div>
            </Layout.Container>
         </nav>
      </>
   );
};

export { Header };
