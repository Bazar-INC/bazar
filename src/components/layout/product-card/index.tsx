import { FC } from 'react';
import { Icons } from '../../icons/icons';
import { Layout } from '../layout';

import './product-card.css';

interface Props {
   picture: string;
   categoryName: string;
   productName: string;
   price: number;
}

const ProductCard: FC<Props> = ({ picture, categoryName, productName, price }) => {
   return (
      <div className="w-[400px] py-10 flex flex-col items-center bg-white rounded-lg transition product-card">
         <img className="h w-72 h-[360px] object-contain" src={picture} />
         <div className="w-72 mt-6 flex flex-col items-start">
            <span className="font-bold text-[#61615F] text-[15px] mb-2">{categoryName}</span>
            <span className="font-medium text-[20px]">{productName}</span>
            <Layout.Badge additionalClasses="mt-4" color="#00FF74">Від 1099 в міс.</Layout.Badge>
            <Layout.Badge additionalClasses="mt-4" color="#8F00F9">Хіт продаж</Layout.Badge>
            <div className="flex mt-5 items-center">
               <span className="line-through text-[#70706D] font-bold text-xs">17 999</span>
               <span className="bg-[#D4FFE7] rounded ml-2 font-bold text-xs text-[#1D1D1B] px-2.5">-1000</span>
            </div>
            <span className="text-[20px] font-bold">{price} грн</span>
            <div className="w-full flex mt-5">
               <Layout.Button stretch>Купити</Layout.Button>
               <Icons.Compare className="text-[#8F00F9] mx-7 w-16" />
            </div>
         </div>
      </div>
   );
};

export { ProductCard };
