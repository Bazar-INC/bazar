import { FC } from 'react';
import { Icons } from '../../icons/icons';
import { Layout } from '../layout';

import './index.css';

interface Props {
   picture: string;
   categoryName: string;
   productName: string;
   price: number;
}

const ProductCard: FC<Props> = ({ picture, categoryName, productName, price }) => {
   return (
      <div className="card-product">
         <img className="card-image" src={picture} />
         <div className="w-72 mt-6 flex flex-col items-start">
            <span className="font-[Intro] text-[#61615f] text-[15px] mb-2">{categoryName}</span>
            <span className="font-semibold text-[17px] h-12 overflow-clip">{productName}</span>
            <Layout.Badge additionalClasses="mt-4" color="#00ff74">Від 1099 в міс.</Layout.Badge>
            <Layout.Badge additionalClasses="mt-4" color="#8f00f9">Хіт продаж</Layout.Badge>
            <div className="flex mt-5 items-center">
               <span className="line-through text-[#70706d] font-semibold text-[10px]">17 999</span>
               <span className="bg-[#d4ffe7] rounded ml-2 font-semibold text-[10px] text-[#1d1d1d] px-2.5">-1000</span>
            </div>
            <span className="text-[20px] font-[Intro]">{price} грн</span>
            <div className="w-full flex mt-5">
               <Layout.Button stretch>Купити</Layout.Button>
               <Icons.Compare className="text-[#8f00f9] ml-7 w-16 cursor-pointer" />
            </div>
         </div>
      </div>
   );
};

export { ProductCard };
