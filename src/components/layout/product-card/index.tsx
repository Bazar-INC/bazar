import { FC } from 'react';
import { Link } from "react-router-dom";
import { Icons } from '../../icons/icons';
import { Layout } from '../layout';

import './index.css';

interface Props {
   picture: string;
   categoryName: string;
   productName: string;
   price: number;
   link?: string;
}

function priceSeparateByThousands(price: number) {

   let priceAsString = (price % 1000) + " ";

   const result = (Math.floor(price / 1000) % 1000);

   if (result > 0) {
      priceAsString = result + " " + priceAsString;
   }

   return priceAsString;
}

const ProductCard: FC<Props> = ({ picture, categoryName, productName, price, link }) => {
   return (
      <div className="card-product">
         <img className="card-image" src={picture} />
         <div className="w-72 mt-6 flex flex-col items-start">
            <span className="font-[Intro] text-[#61615f] text-[15px] mb-2">{categoryName}</span>
            <Link to={link ?? ""} className="font-semibold hover:text-[#8F00F9] text-[17px] h-12 overflow-clip">{productName}</Link>
            <Layout.Badge additionalClasses="mt-4" color="#00ff74">Від 1099 в міс.</Layout.Badge>
            <Layout.Badge additionalClasses="mt-4" color="#8f00f9">Хіт продаж</Layout.Badge>
            <div className="flex mt-5 items-center">
               <span className="line-through text-[#70706d] font-semibold text-[10px]">17 999</span>
               <span className="bg-[#d4ffe7] rounded ml-2 font-semibold text-[10px] text-[#1d1d1d] px-2.5">-1000</span>
            </div>
            <span className="text-[20px] font-[Intro]">{priceSeparateByThousands(price)} грн</span>
            <div className="w-full flex mt-5">
               <Layout.Button stretch>Купити</Layout.Button>
               <Icons.Compare className="text-[#8f00f9] ml-7 w-16 cursor-pointer" />
            </div>
         </div>
      </div>
   );
};

export { ProductCard };
