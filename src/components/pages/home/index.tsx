import { FC } from "react";
import { Layout } from "../../layout/layout";

const productList1 = [
   {
      categoryName: "Смартфон",
      productName: "Apple Iphone 13 PRO 128GB Cірий",
      picture: "https://itmag.ua/upload/iblock/a2c/piktjhio4tmj4z0kn2sjw3rert35ibiu/195u.jpg",
      price: 16_999
   },
   {
      categoryName: "Сад та город",
      productName: "Набір вазонів та грунт для вирощування трав Supretto на підвіконня Білий",
      picture: "https://content2.rozetka.com.ua/goods/images/big/249084760.jpg",
      price: 500
   },
   {
      categoryName: "Алкогольні напої",
      productName: "Вино Misilla Nero D'Avola Sicilia DOC красное сухое 0.75 л 13%",
      picture: "https://content2.rozetka.com.ua/goods/images/big/273452464.jpg",
      price: 699
   },
   {
      categoryName: "Аксессуари",
      productName: "Фітнес браслет Xiaomi Mi Smart Band 7 Black",
      picture: "https://img.ktc.ua/img/base/1/0/400130.jpg",
      price: 1_799
   },
];

const productList2 = [
   {
      categoryName: "Побутова хімія",
      productName: "Таблетки для посудомоечных машин FINISH Quantum Ultimate 60 шт",
      picture: "https://content2.rozetka.com.ua/goods/images/big/243680271.jpg",
      price: 449
   },
   {
      categoryName: "Автотовари",
      productName: "Реагент Lesta AdBlue для зниження викидів оксиду азота 5 л",
      picture: "https://content1.rozetka.com.ua/goods/images/big/225058937.jpg",
      price: 341
   },
   {
      categoryName: "Електроінструмент",
      productName: "Пила циркулярная Metabo KS 66 FS",
      picture: "https://content2.rozetka.com.ua/goods/images/big/137115749.jpg",
      price: 4_724
   },
   {
      categoryName: "Автомобільні диски",
      productName: "Zorat Wheels 969 R14 W6 PCD4x98 ET35 DIA67.1 (RL)BPX",
      picture: "https://content1.rozetka.com.ua/goods/images/big/10732647.jpg",
      price: 3_127
   },
];

const HomePage: FC = () => {
   return (
      <div className="py-8">
         <Layout.Container>
            <div className="h-[595px] w-full ml-auto rounded-lg bg-black"></div>
         </Layout.Container>
         <img className="mt-20 mb-10" src="/banner.png" />
         <Layout.Container>
            <div className="flex items-center">
               <img src="/fire.png" />
               <span className="font-[Intro] text-[40px] mt-4">Хіти продаж</span>
            </div>
            <div className="flex justify-between gap-2 mt-8">
               {productList1.map((product, index) => (
                  <Layout.ProductCard key={index} {...product} />
               ))}
            </div>
            <div className="flex items-center mt-20">
               <img src="/sound.png" />
               <span className="font-[Intro] text-[40px] mt-4 ml-2">Новинки</span>
            </div>
            <div className="flex justify-between mt-8 gap-2">
               {productList2.map((product, index) => (
                  <Layout.ProductCard key={index} {...product} />
               ))}
            </div>
         </Layout.Container>
      </div>
   );
};

export { HomePage };
