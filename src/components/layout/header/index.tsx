import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Category } from "../../../api/data-objects/category";
import { CategoryEntity } from "../../../api/entities/category";
import { routes } from "../../../router-config";
import { useAppSelector } from '../../../store/hooks';
import { useProperty } from "../../hooks/property";
import { Icons } from '../../icons/icons';
import { Layout } from '../layout';

import "./index.css";

const catalogMenuItems = [
   {
      title: "Ноутбуки та комп’ютери",
      icon: <Icons.Controller />,
      code: "computers_notebooks"
   },
   {
      title: "Смартфони, ТВ і Електроніка",
      icon: <Icons.Phone />,
      code: "telefony_tv_i_ehlektronika"
   },
   {
      title: "Товари для геймерів",
      icon: <Icons.Controller />,
      code: "game_zone"
   },
   {
      title: "Побутова техніка",
      icon: <Icons.Phone />,
      code: "household_appliances"
   },
   {
      title: "Товари для дому",
      icon: <Icons.Controller />,
      code: "tovary_dlya_doma"
   },
   {
      title: "Інструменти та автотовари",
      icon: <Icons.Phone />,
      code: "instrumenty_i_avtotovary"
   },
   {
      title: "Сантехніка та ремонт",
      icon: <Icons.Phone />,
      code: "santekhnika_i_remont"
   },
   {
      title: "Дача, сад, город",
      icon: <Icons.Phone />,
      code: "dacha_sad_ogorod"
   },
   {
      title: "Спорт і захоплення",
      icon: <Icons.Phone />,
      code: "sport_i_uvlecheniya"
   },
];

interface Props {
   openSignModal(): void;
   fixMenu?: boolean;
}

const Header: FC<Props> = ({ openSignModal, fixMenu }) => {

   const profile = useAppSelector(state => state.accountReducer.profile);

   const cart = useAppSelector(state => state.accountReducer.cart);

   const [categories] = useProperty<CategoryEntity[]>([]);

   useEffect(() => {
      Category.get().then((response) => {
         categories.set(response.data.categories);
      });
   }, []);

   return (
      <>
         <Layout.Container className="h-[66px] 2xl:h-[100px] flex items-center gap-x-8 shadow-lg sm:shadow-none">
            <div className="flex items-center justify-between w-full sm:w-auto lg:w-[286px] 2xl:w-[430px] gap-x-5">
               <Link to={routes.Home.link()}>
                  <img src="/brand_logo_1.png" className="w-32 lg:w-full" />
               </Link>
               <div className="flex items-center 2xl:mr-12">
                  <Icons.Location className="w-4 2xl:w-6" />
                  <span className="ml-2 text-[16px] 2xl:text-[25px] text-[#696E7C]">Рівне</span>
               </div>
            </div>
            <div className="ml-auto sm:flex-1 flex items-center gap-x-5 lg:gap-x-10">
               <div className="hidden sm:flex px-4 bg-white rounded w-full shadow-md h-8 2xl:h-12 items-center">
                  <Icons.Search className="w-4 2xl:w-6" />
                  <input
                     placeholder="Пошук"
                     className="ml-4 w-full text-[16px] 2xl:text-[25px] text-[#696E7C] outline-none bg-transparent"
                  />
               </div>
               <Link to="/compare" className="hidden sm:block">
                  <Icons.Compare className="w-8 2xl:w-10 text-[#696E7C]" />
               </Link>
               <Link to={routes.Cart.link()} className="hidden sm:block relative">
                  <Icons.Cart className="w-6 2xl:w-8" />
                  <div className="absolute w-3.5 h-3.5 bg-[#00FF74] -top-1 -right-2 rounded-full text-[12px] font-semibold leading-3 text-center">
                     {cart.products.length}
                  </div>
               </Link>
               {profile ? (
                  <div className="min-w-[56px] h-14 items-center border-2 rounded border-[#8f00f9] p-1">
                     <img
                        className="block w-full h-full object-cover rounded"
                        src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=456"
                     />
                  </div>
               ) : (
                  <Layout.Button
                     onClick={openSignModal}
                     className="h-[30px] lg:h-[40px] 2xl:h-[60px] w-[70px] lg:w-[100px] 2xl:w-[150px] text-[11px] lg:text-[18px] 2xl:text-[25px]"
                  >
                     Увійти
                  </Layout.Button>
               )}

            </div>
         </Layout.Container>
         <nav className="h-[48px] 2xl:h-[70px] bg-[#1d1d1b] hidden sm:block">
            <Layout.Container>
               <div className="flex items-center h-full">
                  <div className="group w-[256px] xl:w-[286px] 2xl:w-[430px] h-full bg-[#31353c] flex items-center relative">
                     <span className="ml-5 mr-2.5">
                        <Icons.AlignLeft className="w-6 h-6 2xl:w-9 2xl:h-9" />
                     </span>
                     <span className="text-[14px] 2xl:text-[21px] font-bold 2xl:font-semibold text-white leading-[48px] h-[48px] 2xl:h-[70px] 2xl:leading-[70px] cursor-pointer">Каталог товарів</span>
                     <div className={`hidden ${fixMenu && "lg:flex"} group-hover:flex absolute bg-white top-full flex z-50`}>
                        <div className="w-[286px] py-5">
                           {catalogMenuItems.map((item, index) => (
                              <div key={index} className="cursor-pointer item-menu flex items-center h-12 2xl:h-14 px-5">
                                 <img className="w-6 h-6 object-contain" src={`/catalog/${item.code}.png`} />
                                 {/* <div className="w-6 h-6 2xl:h-9 2xl:w-9 flex items-center justify-center">{item.icon}</div> */}
                                 <span className="text-[12px] 2xl:text-[19px] font-bold 2xl:font-semibold ml-4">{item.title}</span>
                                 <div className="hidden sub-menu bg-white border-l absolute left-full h-full top-0 w-[286px] py-5">
                                    {categories.get.filter(f => f.parentCode === item.code).map((category, index) => (
                                       <div key={index} className="cursor-pointer sub-menu-item flex items-center h-12 2xl:h-14 px-5">
                                          <span className="text-[12px] 2xl:text-[19px] font-bold 2xl:font-semibold ml-4">{category.name}</span>
                                          <div className="hidden sub-sub-menu bg-white border-l absolute h-full left-full top-0 w-[286px] py-5">
                                             {categories.get.filter(f => f.parentCode === category.code).map((category, index) => (
                                                <Link to={`/goods/${category.code}`} key={index} className="flex items-center h-12 2xl:h-14 px-5">
                                                   <span className="text-[12px] 2xl:text-[19px] font-bold 2xl:font-semibold">{category.name}</span>
                                                </Link>
                                             ))}
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     {/* <div className={`hidden ${fixMenu && "lg:block"} group-hover:block absolute top-full bg-white w-[256px] xl:w-[286px] 2xl:w-[430px] p-5 space-y-0 2xl:space-y-3 shadow-2xl rounded-b`}>
                        {catalogMenuItems.map((item, index) => (
                           <Link to={item.route} key={index} className="flex items-center h-12 2xl:h-14">
                              <div className="w-6 h-6 2xl:h-9 2xl:w-9 flex justify-center">
                                 {item.icon}
                              </div>
                              <span className="text-[12px] 2xl:text-[19px] font-bold 2xl:font-semibold ml-4">{item.title}</span>
                           </Link>
                        ))}
                     </div> */}
                  </div>
                  <div className="text-white font-bold 2xl:font-semibold text-[11px] lg:text-[13px] 2xl:text-[20px] space-x-5 lg:space-x-8 2xl:space-x-12 ml-4 md:ml-8">
                     <span className="">Про нас</span>
                     <span className="">Довідковий центр</span>
                     <span>Доставка та оплата</span>
                     <span className="hidden md:inline">Партнерам</span>
                  </div>
                  <div className="ml-auto">
                     <span className="hidden lg:block text-white font-bold 2xl:font-semibold text-[11px] lg:text-[13px] 2xl:text-[20px]">Покупцям</span>
                  </div>
               </div>
            </Layout.Container>
         </nav>
      </>
   );
};

export { Header };
