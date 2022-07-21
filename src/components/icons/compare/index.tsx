import { FC } from 'react';

interface IconProps {
   className?: string;
}

const Compare: FC<IconProps> = ({ className }) => {
   return (
      <svg className={className} viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M39 17C39 21.4183 35.4183 25 31 25C26.5817 25 23 21.4183 23 17M39 17H23M39 17L31.8756 4.08698C31.4953 3.39775 30.5047 3.39776 30.1244 4.08699L23 17" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" strokeLinejoin="round" />
         <path d="M17 17C17 21.4183 13.4183 25 9 25C4.58172 25 1 21.4183 1 17M17 17H1M17 17L9.87558 4.08698C9.49531 3.39775 8.50469 3.39776 8.12442 4.08699L1 17" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" />
         <path d="M3 3H37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
         <circle cx="20" cy="3" r="3" fill="currentColor" />
      </svg>
   );
};

export { Compare };
