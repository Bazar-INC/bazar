import { FC, useState } from "react";
import { Icons } from "../icons/icons";
import { Layout } from "../layout/layout";



const AdminPage: FC = () => {

   const [menuActive, setMenuActive] = useState(false);

   return (
      <div className="bg-[#F4F4F4] h-full">
         <Layout.Menu active={menuActive} setActive={setMenuActive} />
         <div className="h-full flex-1">
            <header className="h-[60px] w-full bg-white flex items-center px-5">
               {/* <div className="invisible ml-auto flex gap-x-5 items-center">
                  <span className="text-[35px] font-bold font-[Gotham]">Bazar Adm</span>
                  <img className="w-[60px] h-[60px] rounded-full" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=456" />
               </div> */}
               <div onClick={() => setMenuActive(!menuActive)}>
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2 22H28M2 12H28M2 2H28" stroke="#ACACAC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
               <div className="">
                  <Layout.Input
                     type="phone"
                     hint="Пошук"
                     onChange={(value) => console.log(value)}
                     className="border-[#9DA0A9] border-2 rounded-lg text-[20px]" />
               </div>
               <div>
                  <Icons.Cart />
               </div>
            </header>
         </div>
      </div>
   );
};

export { AdminPage };
