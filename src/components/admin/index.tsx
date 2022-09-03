import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";
import { Menu } from "./components/menu";
import { Typography } from "../typography";
import { Products } from "./sections/products";
import { Reviews } from "./sections/reviews";
import { NewCategorySection } from "./sections/new-category";
import { NewProduct } from "./sections/newProduct";
import { Categories } from "./sections/categories";
import { Filters } from "./sections/filters";
import { Asks } from "./sections/asks";



const AdminPage: FC = () => {

   const [menuActive, setMenuActive] = useState(false);

   return (
      <div className="bg-[#F4F4F4] h-full flex" >
         <Menu active={menuActive} setActive={setMenuActive} />
         <div className="h-full flex-1 md:pl-[300px]">
            <header className="h-[60px] w-full bg-white flex justify-between items-center px-5 md:px-[70px]">
               {/* <div className="invisible ml-auto flex gap-x-5 items-center">
                  <span className="text-[35px] font-bold font-[Gotham]">Bazar Adm</span>
                  <img className="w-[60px] h-[60px] rounded-full" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=456" />
               </div> */}
               <div className="md:hidden" onClick={() => setMenuActive(!menuActive)}>
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2 22H28M2 12H28M2 2H28" stroke="#ACACAC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
               <div className="">
                  <Layout.Input
                     type="text"
                     hint="Пошук"
                     onChange={(value) => console.log(value)}
                     className="border-[#9DA0A9] border-2 rounded-lg text-[20px] w-[240px] md:w-[450px]" />
               </div>
               <div className="flex">
                  <Typography.Heading className="hidden md:block pr-[10px]" size="small">Admin</Typography.Heading>
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="17.5" cy="17.5" r="17.5" fill="black" />
                     <path d="M20.2527 23.8239C21.2108 23.8233 22.1295 23.4447 22.8072 22.7711C23.485 22.0976 23.8664 21.1842 23.8679 20.2314C23.8679 20.184 23.8679 20.1371 23.8644 20.0897C23.8468 19.6374 23.7429 19.1926 23.5583 18.7789C23.4843 18.6137 23.3978 18.4544 23.2994 18.3023C22.9879 17.8149 22.5626 17.4096 22.0598 17.1208L21.7588 17.6387L22.0598 17.1203C21.5106 16.8051 20.8877 16.6391 20.2537 16.6388L13.0444 16.6413L13.0313 7.05859H11.8273L11.8398 17.8388L20.2527 17.8363C20.6754 17.8362 21.0907 17.9468 21.4567 18.1571C21.5662 18.2202 21.6706 18.2918 21.7688 18.3712C21.8493 18.4359 21.9254 18.5059 21.9966 18.5808C20.8773 19.6394 19.3921 20.2303 17.8476 20.2314H11.8273C11.0289 20.2314 10.2633 19.9159 9.69875 19.3545C9.13424 18.793 8.8171 18.0316 8.8171 17.2375C8.8171 16.4435 9.13424 15.6821 9.69875 15.1206C10.2633 14.5592 11.0289 14.2437 11.8273 14.2437V13.0462C10.7096 13.0462 9.63767 13.4878 8.84735 14.2738C8.05703 15.0599 7.61304 16.1259 7.61304 17.2375C7.61304 18.3492 8.05703 19.4152 8.84735 20.2013C9.63767 20.9873 10.7096 21.4289 11.8273 21.4289V27.4165H13.0313V21.4289H15.4394V23.8239H20.2527ZM17.8476 21.4289C19.5922 21.4278 21.2776 20.7994 22.5931 19.6595C22.632 19.8158 22.6547 19.9757 22.6608 20.1366L23.2628 20.1131L22.6608 20.1371C22.6608 20.1685 22.6633 20.1994 22.6633 20.2314C22.6622 20.8668 22.4078 21.4758 21.9557 21.9248C21.5037 22.3738 20.891 22.6261 20.2522 22.6264H16.6435V21.4289H17.8476Z" fill="#00FF74" />
                     <path d="M25.3622 15.1494C25.2618 15.0496 25.155 14.9498 25.0446 14.8535C25.0617 14.6504 25.0717 14.4463 25.0717 14.2437C25.0717 10.2819 21.8308 7.05859 17.8473 7.05859H16.6433V8.25612H17.8473C19.4019 8.25791 20.8956 8.85707 22.0165 9.92841C23.1373 10.9998 23.7986 12.4604 23.8621 14.0052C23.7554 13.9437 23.6474 13.8851 23.538 13.8296C23.4256 13.7727 23.3133 13.7193 23.2044 13.6704C22.5913 13.3972 21.9426 13.2111 21.2774 13.1176C21.0375 12.4009 20.5773 11.7773 19.9619 11.3348C19.3464 10.8923 18.6068 10.6531 17.8473 10.6512H15.4392V16.6388H16.6433V14.2437H20.2555C21.1027 14.2416 21.9407 14.4188 22.7137 14.7637C22.804 14.8036 22.8974 14.8485 22.9912 14.8964L23.2656 14.363L22.9917 14.8964C24.1968 15.5071 25.16 16.5036 25.7261 17.7253C26.2922 18.947 26.4281 20.3227 26.112 21.6306C25.796 22.9386 25.0463 24.1025 23.9838 24.9349C22.9213 25.7673 21.608 26.2196 20.2555 26.219H16.6433V27.4165H20.2555C24.2389 27.4165 27.4798 24.1932 27.4798 20.2314C27.4825 19.287 27.2967 18.3516 26.9332 17.4792C26.5697 16.6069 26.0357 15.8149 25.3622 15.1494ZM16.6433 13.0462V11.8487H17.8473C18.2698 11.8498 18.6845 11.9609 19.0504 12.171C19.4162 12.3811 19.7203 12.6829 19.9324 13.0462H16.6433Z" fill="#00FF74" />
                  </svg>
               </div>
            </header>

            <div className="px-[20px] md:px-[70px]">
               <Routes>
                  <Route path="products" element={<Products />}/>
                  <Route path="categories" element={<Categories />}/>
                  <Route path="filters" element={<Filters />}/>
                  <Route path="reviews" element={<Reviews />}/>
                  <Route path="asks" element={<Asks />}/>
                  <Route path="new_product" element={<NewProduct />}/>
                  <Route path="new_category" element={<NewCategorySection />}/>
               </Routes>
            </div>
         </div> 
      </div>
   );
};

export { AdminPage };
