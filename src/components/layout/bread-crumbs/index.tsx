import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

const ArrowRight: FC = () => {
   return (
      <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1 1L1 6L4.5 3.5L1 1Z" fill="#9DA0A9" stroke="#9DA0A9" strokeWidth="2" strokeLinejoin="round" />
      </svg>
   );
};

interface Item {
   label: string;
   route: string;
}

interface Props {
   items: Array<Item>;
}

const BreadCrumbs: FC<Props> = ({ items }) => {
   return (
      <div className="flex gap-x-3 items-center">
         {items.map((item, index) => (
            <Fragment key={index}>
               <Link to={item.route} className="cursor-pointer text-[#9da0a9] text-[15px] font-semibold hover:text-black">{item.label}</Link>
               {items.length > index + 1 && (
                  <ArrowRight />
               )}
            </Fragment>
         ))}
      </div>
   );
};

export { BreadCrumbs };
