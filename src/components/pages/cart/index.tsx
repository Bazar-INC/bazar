import { FC } from 'react';
import { Layout } from '../../layout/layout';

const CartPage: FC = () => {
   return (
      <div className="max-w-[1660px] mx-auto mb-36 mt-24">
         <span className="font-[Intro] text-[40px]">Оформлення замовлення</span>
         <div className="w-full flex flex-col items-center">
            <img src="cart.png" className="-mt-52" />
            <div className="w-[676px] -mt-40">
               <span className="font-[Intro] text-[35px]">Упс... Ваш кошик порожній</span>
               <br />
               <span className="text-[30px]">Та з базару ніхто не йде з пустими руками, обери щось з каталогу</span>
            </div>
         </div>
         <div className="flex items-center mt-20">
            <img src="fire.png" />
            <span className="font-[Intro] text-[40px] mt-4">Хіти продаж</span>
         </div>
         <div className="flex justify-between mt-8">
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
         </div>
      </div>
   );
};

export { CartPage };
