import React, { FC, useEffect } from 'react';
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { useProperty } from "../../hooks/property";
import { Layout } from '../../layout/layout';
import { Typography } from '../../typography';

interface FilterSectionProps {
   title: string;
   values: string[];
}

const FilterSection: FC<FilterSectionProps> = ({ title, values }) => {
   return (
      <div>
         <span className="font-bold text-[20px]">{title}</span>
         <ol>
            {values.map((value, index) => (
               <li className="mt-2.5" key={index}>
                  <label className="flex items-center">
                     <input className="w-[30px] h-[30px]" type="checkbox" />
                     <span className="text-[15px] font-semibold ml-4">{value}</span>
                  </label>
               </li>
            ))}
         </ol>
      </div>
   );
};

const GoodsPage: FC = () => {

   const [products] = useProperty<Array<{ title: string; price: number; }>>([]);
   const [totalPages] = useProperty(0);
   const [filters] = useProperty<Array<{ title: string; values: Array<string>; }>>([]);

   useEffect(() => {

      ProductsEndpoints.getProducts().then((response) => {

         const data = response.data;

         products.set(data.products.map((p) => ({ title: p.name, price: p.price })));
         totalPages.set(data.totalPages);

         const ff = data.filters.map((f) => {
            return {
               title: f.name,
               values: f.options.map((v) => v.value)
            };
         });

         filters.set(ff);
      });

   }, []);

   const mockPics = [
      "https://itmag.ua/upload/iblock/a2c/piktjhio4tmj4z0kn2sjw3rert35ibiu/195u.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/249084760.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/273452464.jpg",
      "https://img.ktc.ua/img/base/1/0/400130.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/243680271.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/225058937.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/137115749.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/10732647.jpg",
      "https://itmag.ua/upload/iblock/a2c/piktjhio4tmj4z0kn2sjw3rert35ibiu/195u.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/249084760.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/273452464.jpg",
      "https://img.ktc.ua/img/base/1/0/400130.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/243680271.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/225058937.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/137115749.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/10732647.jpg",
      "https://itmag.ua/upload/iblock/a2c/piktjhio4tmj4z0kn2sjw3rert35ibiu/195u.jpg"
   ];

   return (
      <div className="max-w-[1660px] mx-auto px-4 mt-8">
         <Layout.BreadCrumbs items={[
            { label: 'Головна', route: '' },
            { label: 'Каталог', route: '' },
            { label: 'Літній розпродаж', route: '' },
         ]} />
         <Typography.Heading className="block mt-5">Літній розпродаж</Typography.Heading>
         <div className="flex gap-x-[100px] mt-14">
            <div className="w-[400px]">
               <span>Фільтруй базар</span>
               {filters.get.map((filter, index) => (
                  <React.Fragment key={index}>
                     <hr className="my-8" />
                     <FilterSection title={filter.title} values={filter.values} />
                  </React.Fragment>
               ))}
            </div>
            <div className="w-full">
               <div className="flex">
                  <span>Показано {products.get.length} товарів</span>
                  <select className="ml-auto">
                     <option>За рейтингом</option>
                     <option>Новинки</option>
                     <option>За популярністью</option>
                  </select>
               </div>
               <div className="flex flex-wrap justify-between mt-8 gap-3">
                  {products.get.map((product, index) => (
                     <Layout.ProductCard
                        key={index}
                        categoryName="Смартфон"
                        productName={product.title}
                        picture={mockPics[index] && mockPics[index]}
                        price={product.price}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export { GoodsPage };
