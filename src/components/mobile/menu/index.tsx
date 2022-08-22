import { FC } from "react";

const menuItems = [
   {
      title: "Головна",
      icon: (
         <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.84468 1.53968L2.36429 7.69999C2.13363 7.88995 2 8.17311 2 8.47193V18.5C2 19.0523 2.44772 19.5 3 19.5H6.5C7.05228 19.5 7.5 19.0523 7.5 18.5V12.5C7.5 11.9477 7.94772 11.5 8.5 11.5H12.5C13.0523 11.5 13.5 11.9477 13.5 12.5V18.5C13.5 19.0523 13.9477 19.5 14.5 19.5H17.5C18.0523 19.5 18.5 19.0523 18.5 18.5V8.45377C18.5 8.16541 18.3755 7.89108 18.1585 7.70119L11.1389 1.55903C10.7704 1.2366 10.2226 1.22841 9.84468 1.53968Z" stroke="white" strokeWidth="2" />
         </svg>
      )
   },
   {
      title: "Каталог",
      icon: (
         <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2V19.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.4587 3.625H7.07615C6.73638 3.625 6.46094 3.98877 6.46094 4.4375V8.5C6.46094 8.94873 6.73638 9.3125 7.07615 9.3125H14.4587C14.7985 9.3125 15.074 8.94873 15.074 8.5V4.4375C15.074 3.98877 14.7985 3.625 14.4587 3.625Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5348 12.5625H7.07615C6.73638 12.5625 6.46094 12.9263 6.46094 13.375V17.4375C6.46094 17.8862 6.73638 18.25 7.07615 18.25H17.5348C17.8746 18.25 18.15 17.8862 18.15 17.4375V13.375C18.15 12.9263 17.8746 12.5625 17.5348 12.5625Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      )
   },
   {
      title: "Пошук",
      icon: (
         <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.129 8.06451C14.129 11.4139 11.4139 14.129 8.06451 14.129C4.71518 14.129 2 11.4139 2 8.06451C2 4.71518 4.71518 2 8.06451 2C11.4139 2 14.129 4.71518 14.129 8.06451ZM13.016 14.4304C11.6494 15.4949 9.931 16.129 8.06451 16.129C3.61061 16.129 0 12.5184 0 8.06451C0 3.61061 3.61061 0 8.06451 0C12.5184 0 16.129 3.61061 16.129 8.06451C16.129 9.9311 15.4949 11.6496 14.4303 13.0162L19.9379 18.5238C20.3284 18.9144 20.3284 19.5475 19.9379 19.9381C19.5474 20.3286 18.9142 20.3286 18.5237 19.9381L13.016 14.4304Z" fill="white" />
         </svg>
      )
   },
   {
      title: "Корзина",
      icon: (
         <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H3L4.1954 3.66828M7.33333 10.6725H14.2585C15.3354 10.6725 16.3296 10.0954 16.8636 9.16026L19.1457 5.16419C19.5264 4.49754 19.045 3.66828 18.2773 3.66828H4.1954M7.33333 10.6725L4.1954 3.66828M7.33333 10.6725C5.88889 12.1178 3.86667 15.0085 7.33333 15.0085C10.8 15.0085 16.1111 15.0085 18.3333 15.0085" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="6.66675" cy="18.677" rx="2" ry="2.00121" fill="white" />
            <ellipse cx="16.6667" cy="18.677" rx="2" ry="2.00121" fill="white" />
         </svg>
      )
   },
   {
      title: "Порівняння",
      icon: (
         <svg className="w-7 text-white" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39 17C39 21.4183 35.4183 25 31 25C26.5817 25 23 21.4183 23 17M39 17H23M39 17L31.8756 4.08698C31.4953 3.39775 30.5047 3.39776 30.1244 4.08699L23 17" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" strokeLinejoin="round" />
            <path d="M17 17C17 21.4183 13.4183 25 9 25C4.58172 25 1 21.4183 1 17M17 17H1M17 17L9.87558 4.08698C9.49531 3.39775 8.50469 3.39776 8.12442 4.08699L1 17" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" />
            <path d="M3 3H37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="20" cy="3" r="3" fill="currentColor" />
         </svg>
      )
   }
];

const MobileMenu: FC = () => {
   return (
      <div className="bg-[#1d1d1d] fixed bottom-0 w-full sm:hidden shadow-[0_0_16px_rgba(0,0,0,0.5)]">
         <div className="flex items-end justify-center gap-x-8 py-4">
            {menuItems.map((item, index) => (
               <div className="flex flex-col items-center" key={index}>
                  {item.icon}
                  <span className="text-white font-bold text-[11px] mt-1">{item.title}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export { MobileMenu };
