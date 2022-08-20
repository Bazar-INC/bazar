import { FC } from "react";

interface Props {
   className?: string;
}

const Location: FC<Props> = ({ className }) => {
   return (
      <svg className={className} viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M11 14C13.2348 14 15.0465 12.2091 15.0465 10C15.0465 7.79086 13.2348 6 11 6C8.76526 6 6.95361 7.79086 6.95361 10C6.95361 12.2091 8.76526 14 11 14Z" stroke="#464D5E" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M19.0929 14C16.058 21 11 29 11 29C11 29 5.94196 21 2.90714 14C-0.127685 7 4.93035 1 11 1C17.0696 1 22.1277 7 19.0929 14Z" stroke="#464D5E" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   );
};

export { Location };
