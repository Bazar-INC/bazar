import { FC } from 'react';

interface Props {
   className?: string;
}

const Cart: FC<Props> = ({ className }) => {
   return (
      <svg className={className} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1 1H3.94737L5.70901 4.9322M10.3333 15.2542H21.3638C22.4406 15.2542 23.4349 14.6771 23.9689 13.742L28.1457 6.42811C28.5264 5.76146 28.045 4.9322 27.2773 4.9322H5.70901M10.3333 15.2542L5.70901 4.9322M10.3333 15.2542C8.20468 17.3842 5.22456 21.6441 10.3333 21.6441C15.4421 21.6441 23.269 21.6441 26.5439 21.6441" stroke="#696E7C" strokeWidth="2" strokeLinecap="round" />
         <ellipse cx="9.35093" cy="27.0508" rx="2.94737" ry="2.94915" fill="#696E7C" />
         <ellipse cx="24.0877" cy="27.0508" rx="2.94737" ry="2.94915" fill="#696E7C" />
      </svg>
   );
};

export { Cart };
