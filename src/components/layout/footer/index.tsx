import { FC } from 'react';
import { classes } from "../../../functions";
import { Layout } from '../layout';

interface Props {
   className?: string;
}

const Footer: FC<Props> = ({ className }) => {
   return (
      <footer className={classes("bg-[#1D1D1D] py-16", className)}>
         <Layout.Container>
            <div className="flex w-full flex-wrap xl:flex-nowrap items-start gap-16 justify-between">
               <img src="/brand_logo_2.png" />
               <div className="flex-col lg:flex-row w-full flex items-start gap-16 justify-between">
                  <div>
                     <span className="text-[22px] font-semibold 2xl:font-bold 2xl:text-[35px] text-[#00FF74]">Категорії товарів</span>
                     <ul className="text-[19px] 2xl:text-[30px] text-white">
                        <li>Акції інтернет-магазину</li>
                        <li>Смартфони</li>
                        <li>Розумний годинник </li>
                        <li>Навушники та колонки</li>
                        <li>Планшети</li>
                        <li>Комп&apos;ютерна техніка</li>
                        <li>ТБ та аудіо</li>
                        <li>Розумний дім</li>
                        <li>Товари для кухні</li>
                        <li>Товари для дому</li>
                        <li>Будинок та сад</li>
                        <li>Геймінг</li>
                        <li>Kраса і здоров&apos;я</li>
                        <li>Аксесуари</li>
                        <li>Дитячі товари</li>
                        <li>Мобільний транспорт</li>
                        <li>Автотовари</li>
                        <li>Мерч</li>
                        <li>Продукти харчування</li>
                        <li>Розпродаж</li>
                     </ul>
                  </div>
                  <div>
                     <span className="text-[22px] font-semibold 2xl:font-bold 2xl:text-[35px] text-[#00FF74]">Інформація</span>
                     <ul className="text-[19px] 2xl:text-[30px] text-white">
                        <li>Акції інтернет-магазину</li>
                        <li>Смартфони</li>
                        <li>Розумний годинник </li>
                        <li>Навушники та колонки</li>
                        <li>Планшети</li>
                        <li>Комп&apos;ютерна техніка</li>
                        <li>ТБ та аудіо</li>
                        <li>Розумний дім</li>
                        <li>Товари для кухні</li>
                        <li>Товари для дому</li>
                        <li>Будинок та сад</li>
                     </ul>
                     <span className="text-[22px] font-semibold 2xl:font-bold 2xl:text-[35px] text-[#00FF74]">Цілодобово</span>
                     <ul className="text-white">
                        <li className="text-[19px] 2xl:text-[30px] text-white">+38 067 70 31 221</li>
                     </ul>
                  </div>
                  <div className="max-w-[370px] 2xl:max-w-[510px]">
                     <span className="text-[22px] font-semibold 2xl:font-bold 2xl:text-[35px] text-[#00FF74]">Дізнавайся першим про акції</span>
                     <div className="flex gap-x-4 mt-4">
                        <input
                           className="w-[190px] 2xl:w-[270px] text-white bg-transparent text-[15px] 2xl:text-[24px] px-5 border-white border-2 rounded py-3"
                           type="text"
                           placeholder="Введіть ваш e-mail"
                        />
                        <Layout.Button className="w-[124px] 2xl:w-[186px] !text-[15px] !2xl:text-[24px]">Підписатися</Layout.Button>
                     </div>
                     <span className="text-[22px] font-semibold 2xl:font-bold 2xl:text-[35px] text-[#00FF74] mt-16 inline-block">Підбірка</span>
                     <div className="flex flex-wrap gap-3 mt-[26px]">
                        {[
                           "Apple",
                           "Samsung",
                           "Смартфони 2021 року",
                           "Техніка для Кухні",
                           "Техніка для Кухні",
                           "Apple",
                           "Samsung",
                           "Смартфони 2021 року",
                        ].map((item, index) => (
                           <div
                              key={index}
                              className="cursor-pointer hover:border-[#8F00F9] text-[10px] 2xl:text-[16px] text-white border-2 border-white rounded-3xl px-6 py-1"
                           >
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </Layout.Container>
      </footer>
   );
};

export { Footer };
