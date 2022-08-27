import { FC } from 'react';
import { Link } from "react-router-dom";
import { accountActions } from "../../../features/account/reducer";
import { priceSeparateByThousands } from "../../../functions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Icons } from '../../icons/icons';
import { Typography } from "../../typography";
import { Layout } from '../layout';

import './index.css';

interface Props {
   id: string;
   picture: string;
   categoryName: string;
   productName: string;
   price: number;
   link: string;
}

const ProductCard: FC<Props> = ({ id, picture, categoryName, productName, price, link }) => {

   const dispatch = useAppDispatch();

   const products = useAppSelector(state => state.accountReducer.cart.products);

   const addToCart = () => {
      if (!products.includes(id)) {
         dispatch(accountActions.addProductToCard(id));
      }
   };

   const preparePrice = priceSeparateByThousands(price) + "грн";

   return (
      <div className="card-product">
         <img className="card-image" src={picture} />
         <div className="mt-6 flex flex-col items-start px-4">
            <span className="font-[Intro] text-[#61615f] text-[15px] mb-2">{categoryName}</span>
            <Link to={link ?? ""} className="font-semibold hover:text-[#8F00F9] text-[13px] 2xl:text-[17px] h-12 overflow-clip">{productName}</Link>
            <Layout.Badge additionalClasses="mt-4" color="#00ff74">Від 1099 в міс.</Layout.Badge>
            <Layout.Badge additionalClasses="mt-4" color="#8f00f9">Хіт продаж</Layout.Badge>
            <div className="flex mt-5 items-center">
               <span className="line-through text-[#70706d] font-semibold text-[10px]">17 999</span>
               <span className="bg-[#d4ffe7] rounded ml-2 font-semibold text-[10px] text-[#1d1d1d] px-2.5">-1000</span>
            </div>
            <Typography.Heading size="small">{preparePrice}</Typography.Heading>
            <div className="w-full flex mt-5">
               <Layout.Button onClick={addToCart} stretch>Купити</Layout.Button>
               <Icons.Compare className="text-[#8f00f9] ml-5 2xl:ml-7 w-10 2xl:w-16 cursor-pointer" />
            </div>
         </div>
      </div>
   );
};

export { ProductCard };
