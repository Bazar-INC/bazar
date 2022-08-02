import { FC } from 'react';
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
               <hr className="my-8" />
               <FilterSection title="Бренд" values={['SAMSUNG', 'Lenovo', 'Xiaomi', 'Philips']} />
               <hr className="my-8" />
               <FilterSection title="Діагональ екрана" values={['32', '15,6', '14,1', '14']} />
               <hr className="my-8" />
               <FilterSection title="Об’єм пам’яті" values={['512', '256', '128', '64']} />
               <hr className="my-8" />
               <FilterSection title="Колір" values={['Білий', 'Синій', 'Чорний', 'Рожевий']} />
            </div>
            <div className="w-full">
               <div className="flex">
                  <span>Показано {230} товарів</span>
                  <select className="ml-auto">
                     <option>За рейтингом</option>
                     <option>Новинки</option>
                     <option>За популярністью</option>
                  </select>
               </div>
               <div className="flex flex-wrap justify-between mt-8 gap-3">
                  <Layout.ProductCard
                     categoryName="Смартфон"
                     productName="Apple Iphone 13 PRO 128GB Cірий"
                     picture="https://itmag.ua/upload/iblock/a2c/piktjhio4tmj4z0kn2sjw3rert35ibiu/195u.jpg"
                     price={16_999}
                  />
                  <Layout.ProductCard
                     categoryName="Сад та город"
                     productName="Набір вазонів та грунт для вирощування трав Supretto на підвіконня Білий"
                     picture="https://content2.rozetka.com.ua/goods/images/big/249084760.jpg"
                     price={500}
                  />
                  <Layout.ProductCard
                     categoryName="Алкогольные напитки"
                     productName="Вино Misilla Nero D'Avola Sicilia DOC красное сухое 0.75 л 13%"
                     picture="https://content2.rozetka.com.ua/goods/images/big/273452464.jpg"
                     price={699}
                  />
                  <Layout.ProductCard
                     categoryName="Аксессуари"
                     productName="Фітнес браслет Xiaomi Mi Smart Band 7 Black"
                     picture="https://img.ktc.ua/img/base/1/0/400130.jpg"
                     price={1_799}
                  />
                  <Layout.ProductCard
                     categoryName="Побутова хімія"
                     productName="Таблетки для посудомоечных машин FINISH Quantum Ultimate 60 шт"
                     picture="https://content2.rozetka.com.ua/goods/images/big/243680271.jpg"
                     price={449}
                  />
                  <Layout.ProductCard
                     categoryName="Автотовари"
                     productName="Реагент Lesta AdBlue для зниження викидів оксиду азота 5 л"
                     picture="https://content1.rozetka.com.ua/goods/images/big/225058937.jpg"
                     price={341}
                  />
                  <Layout.ProductCard
                     categoryName="Електроінструмент"
                     productName="Пила циркулярная Metabo KS 66 FS"
                     picture="https://content2.rozetka.com.ua/goods/images/big/137115749.jpg"
                     price={4_724}
                  />
                  <Layout.ProductCard
                     categoryName="Автомобільні диски"
                     productName="Zorat Wheels 969 R14 W6 PCD4x98 ET35 DIA67.1 (RL)BPX"
                     picture="https://content1.rozetka.com.ua/goods/images/big/10732647.jpg"
                     price={3_127}
                  />
                  <Layout.ProductCard
                     categoryName="Смартфон"
                     productName="Apple Iphone 12 PRO MAX 256GB Білий"
                     picture="https://itmag.ua/upload/iblock/a2c/piktjhio4tmj4z0kn2sjw3rert35ibiu/195u.jpg"
                     price={24_999}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export { GoodsPage };
