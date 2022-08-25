import { FC, useEffect, useRef } from 'react';
import { ProductsEndpoints } from "../../../api/endpoints/products";
import { ProductModel } from "../../../api/models/product";
import { useProperty } from "../../hooks/property";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";
import { HorizontalMenu } from "./components/horizontal-menu";

const ProductPage: FC = () => {

   const ref = useRef<HTMLDivElement>(null);

   const [productList] = useProperty<Array<ProductModel>>([]);

   useEffect(() => {

      ProductsEndpoints.getTopProducts(1).then((response) => {
         productList.set(response.data.products);
      });

      const startOffset = ref.current?.offsetTop ?? 0;

      window.addEventListener("scroll", () => {
         if (ref.current) {
            let margin = window.scrollY - 1200;
            if (window.scrollY <= startOffset) {
               margin = 0;
            }
            if (window.scrollY >= 5300) {
               margin = 4040;
            }
            ref.current.style.marginTop = margin + "px";
         }
      });
   }, []);

   return (
      <div className="bg-white pt-8">
         <Layout.Container>
            <Layout.BreadCrumbs items={[
               { label: 'Головна', route: '' },
               { label: 'Каталог', route: '' },
               { label: 'Смартфон', route: '' },
               { label: 'Apple', route: '' },
            ]} />
            <div className="mt-5 flex justify-between">
               <Typography.Heading>
                  Apple Iphone 13 PRO 128GB Cірий
               </Typography.Heading>
               <div>
                  <Layout.Badge color="#00ff74">Є в наявності</Layout.Badge>
                  <span className="ml-6 font-semibold">Код: 329493</span>
               </div>
            </div>
            <div className="mt-4">
               <Layout.Badge color="#00ff74">Від 1099 в міс.</Layout.Badge>
               <Layout.Badge additionalClasses="ml-6" color="#8f00f9">Хіт продаж</Layout.Badge>
               <span className="font-semibold ml-6">
                  <span>50 ГБ в iCloud </span>
                  <span className="text-[#8f00f9]">безкоштовно</span>
               </span>
               <Layout.Badge additionalClasses="ml-6" color="#ffc700">1% на ЗСУ</Layout.Badge>
               <Layout.Badge additionalClasses="ml-6" color="#ffc700">98% в фонд Притули</Layout.Badge>
               <Layout.Badge additionalClasses="ml-6" color="#ffc700">1% на зарплату програмістам</Layout.Badge>
            </div>
            <div className="mt-8 mb-20 flex justify-between">
               <div>
                  <img
                     className="w-[600px] h-[600px] object-contain"
                     src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-pro-max-gold.png?v=5"
                  />
               </div>
               <div>
                  <div className="text-[20px] font-bold font-[Gotham]">Колір товару:  Сірий</div>
                  <div className="flex my-6 gap-x-8">
                     <div className="w-16 h-16 bg-[#666A70] rounded-full"></div>
                     <div className="w-16 h-16 bg-[#FFDCCC] rounded-full"></div>
                     <div className="w-16 h-16 bg-[#7FC8F8] rounded-full"></div>
                     <div className="w-16 h-16 bg-[#E9E6E6] rounded-full"></div>
                  </div>
                  <div className="text-[20px] font-bold font-[Gotham]">Об’єм пам’яті</div>
                  <div className="flex flex-wrap gap-8 mt-2">
                     <div className="border-[#D9D9D9] border-2 rounded-lg px-10 py-3 text-[25px] font-bold font-[Gotham]">1 ТБ</div>
                     <div className="border-[#D9D9D9] border-2 rounded-lg px-10 py-3 text-[25px] font-bold font-[Gotham]">512 ГБ</div>
                     <div className="border-[#D9D9D9] border-2 rounded-lg px-10 py-3 text-[25px] font-bold font-[Gotham]">256 ГБ</div>
                     <div className="border-[#D9D9D9] border-2 rounded-lg px-10 py-3 text-[25px] font-bold font-[Gotham]">128 ГБ</div>
                  </div>
               </div>
               <div className="w-[480px]">
                  <div className="border-[#D9D9D9] border rounded-lg flex flex-col p-6">
                     <Typography.Heading>16 999 грн</Typography.Heading>
                     <span className="mt-2 mb-8">Кешбек 4 000</span>
                     <Layout.Button stretch>Купити</Layout.Button>
                     <div className="mt-4">
                        <Layout.Button stretch>Розстрочка Від 1099 в міс.</Layout.Button>
                     </div>
                  </div>
                  <div className="border-[#D9D9D9] border rounded-lg flex flex-col p-6 mt-8">
                     <span>Доставка в: Рівне</span>
                  </div>
               </div>
            </div>
         </Layout.Container >
         <div className="bg-[#f4f4f4]">
            <HorizontalMenu />
            <Layout.Container>
               <div className="flex mt-8 gap-x-8 items-start">
                  <div className=" flex-1 bg-white px-12 py-12 rounded-xl">
                     <Typography.Heading size="small">Опис</Typography.Heading>
                     <p className="text-[20px] font-[Gotham] mt-10">
                        <span className="font-bold">iPhone 13</span>
                        <br />
                        Сильний світу всього
                        <br /><br />
                        Оновлена система двох камер, продуктивний чип A15 Bionic, більше автономності та скло екрану, яке витримає ваші пригоди.
                        <br /><br />
                        <span className="font-bold">Чому камери по діагоналі?</span>
                        <br />
                        Щоб помістити збільшену матрицю ширококутної камери. Раз. Щоб встановити оптичну стабілізацію зображення зрушенням матриці. Два. Таким чином, ви отримуєте більш плавну картинку, а фото на знайомий &quot;ширік&quot; можна буде робити в темряві.
                        <br /><br />
                        <span className="font-bold">Знімемо сторіз? А як щодо фільму?</span>
                        <br />
                        Завдяки новому режиму «Кіноефект», ви отримаєте кінематографічну картинку, а також ефект глибини, як у справжньому кіно. iPhone сам буде розпізнавати об&apos;єкт в кадрі, щоб фокусувати увагу на ньому, а потім плавно переводити фокус на інший об&apos;єкт. До речі глибину різкості можна буде змінити під час постобробки. До того ж це все буде доступно в HDR стандарту Dolby Vision.
                        <br /><br />
                        <span className="font-bold">Фотографічні стилі</span>
                        Нововведенням стали не просто фільтри, а стилі, які підсилюють і приглушують кольори, зберігаючи відтінок шкіри природним. Вибирайте для кожного кадру свій стиль, щоб зробити фото ще більш виразним.
                        <br /><br />
                        А знаєте, що радує не менше?Це все працює і на фронтальній камері.
                        <br /><br />
                        <span className="font-bold">І про інші поліпшення:</span>
                        - екран Super Retina XDR, який став яскравішим і насиченішим, але й більш енергоефективним;
                        - продуктивність з A15 Bionic для нових можливостей і більш тривалої автономної роботи;
                        - акумулятор, який покликаний живити новий iPhone 13 ще довше.
                        <br /><br />
                        Щороку Apple дивують в новому iPhone. І iPhone 13 не став винятком. Ставайте не тільки власником нового смартфона, будьте режисером своєї історії.
                     </p>
                     <div className="space-y-20 font-[Gotham]">
                        <div className="flex items-center gap-x-20">
                           <img
                              className="object-cover w-[500px] h-[600px] rounded-3xl"
                              src="https://img.ktc.ua/img/l/1221/2ff28d9e8d2c986e4e0f4d638a1187c2.jpg"
                           />
                           <div className="flex-1">
                              <p>
                                 <span className="font-bold">Смартфон Apple iPhone 13</span>
                                 <br /><br />
                                 <span className="font-bold">Сильний світу всього</span>
                                 <br /><br />
                                 - чіп, з яким все супер швидко;
                                 <br />
                                 - наша найдосконаліша система двох камер;
                                 <br />
                                 - особливий погляд на міцність дисплея.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-center gap-x-20">
                           <div className="flex-1">
                              <p>
                                 <span className="font-bold">Смартфон Apple iPhone 13</span>
                                 <br /><br />
                                 <span className="font-bold">Сильний світу всього</span>
                                 <br /><br />
                                 - чіп, з яким все супер швидко;
                                 <br />
                                 - наша найдосконаліша система двох камер;
                                 <br />
                                 - особливий погляд на міцність дисплея.
                              </p>
                           </div>
                           <img
                              className="object-cover w-[500px] h-[600px] rounded-3xl"
                              src="https://img.ktc.ua/img/l/1221/28162771d32959d81b747a04b1870cd6.jpg"
                           />
                        </div>
                        <div className="flex items-center gap-x-20">
                           <img
                              className="object-cover w-[500px] h-[600px] rounded-3xl"
                              src="https://img.ktc.ua/img/l/1221/54fa93ae71cd007ae0c0986abf78d48f.jpg"
                           />
                           <div className="flex-1">
                              <p>
                                 <span className="font-bold">Смартфон Apple iPhone 13</span>
                                 <br /><br />
                                 <span className="font-bold">Сильний світу всього</span>
                                 <br /><br />
                                 - чіп, з яким все супер швидко;
                                 <br />
                                 - наша найдосконаліша система двох камер;
                                 <br />
                                 - особливий погляд на міцність дисплея.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-center gap-x-20">
                           <div className="flex-1">
                              <p>
                                 <span className="font-bold">Смартфон Apple iPhone 13</span>
                                 <br /><br />
                                 <span className="font-bold">Сильний світу всього</span>
                                 <br /><br />
                                 - чіп, з яким все супер швидко;
                                 <br />
                                 - наша найдосконаліша система двох камер;
                                 <br />
                                 - особливий погляд на міцність дисплея.
                              </p>
                           </div>
                           <img
                              className="object-cover w-[500px] h-[600px] rounded-3xl"
                              src="https://img.ktc.ua/img/l/1221/5b30f97b5c27508716a45a3ab7de4a38.jpg"
                           />
                        </div>
                        <div className="flex items-center gap-x-20">
                           <img
                              className="object-cover w-[500px] h-[600px] rounded-3xl"
                              src="https://img.ktc.ua/img/l/1221/d2d34d0a608659706263971a7367ec10.jpg"
                           />
                           <div className="flex-1">
                              <p>
                                 <span className="font-bold">Смартфон Apple iPhone 13</span>
                                 <br /><br />
                                 <span className="font-bold">Сильний світу всього</span>
                                 <br /><br />
                                 - чіп, з яким все супер швидко;
                                 <br />
                                 - наша найдосконаліша система двох камер;
                                 <br />
                                 - особливий погляд на міцність дисплея.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-center gap-x-20">
                           <div className="flex-1">
                              <p>
                                 <span className="font-bold">Смартфон Apple iPhone 13</span>
                                 <br /><br />
                                 <span className="font-bold">Сильний світу всього</span>
                                 <br /><br />
                                 - чіп, з яким все супер швидко;
                                 <br />
                                 - наша найдосконаліша система двох камер;
                                 <br />
                                 - особливий погляд на міцність дисплея.
                              </p>
                           </div>
                           <img
                              className="object-cover w-[500px] h-[600px] rounded-3xl"
                              src="https://img.ktc.ua/img/l/1221/0cf8829ad1822ac142a09fd85515d241.jpg"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="w-[480px]">
                     <div ref={ref} className="bg-white rounded-xl p-8">
                        <Typography.Heading size="small">Характеристики</Typography.Heading>
                        <div className="mt-8">
                           <div className="flex border-b pb-8 border-[#9DA0A9]">
                              <span className="w-1/2 text-[17px] font-bold font-[Gotham]">Діагональ екрана</span>
                              <span>6.1&quot;</span>
                           </div>
                           <div className="flex border-b py-8 border-[#9DA0A9]">
                              <span className="w-1/2 text-[17px] font-bold font-[Gotham]">Тип матриці</span>
                              <span>Super Retina XDR display</span>
                           </div>
                           <div className="flex border-b py-8 border-[#9DA0A9]">
                              <span className="w-1/2 text-[17px] font-bold font-[Gotham]">Роздільна здатність екрану</span>
                              <span>2532x1170 пікселів</span>
                           </div>
                           <div className="flex border-b py-8 border-[#9DA0A9]">
                              <span className="w-1/2 text-[17px] font-bold font-[Gotham]">Внутрішня пам&apos;ять</span>
                              <span>128 ГБ</span>
                           </div>
                           <div className="flex pt-8">
                              <span className="w-1/2 text-[17px] font-bold font-[Gotham]">Основна камера</span>
                              <span>12 MP, f/1.6, 26mm (wide)</span>
                           </div>
                           <button className="text-[22px] font-bold font-[Gotham] py-5 mt-8 rounded border-[#00FF74] border w-full">
                              Усі характеристики
                           </button>
                        </div>
                     </div>
                     <div className="bg-white rounded-xl p-8 mt-6">
                        <Typography.Heading size="small">Відгуки</Typography.Heading>
                        <div>
                           <div>Відгук</div>
                           <textarea className="w-full border-2 border-[#9DA0A9] rounded"></textarea>
                           <div>Ваше ім’я</div>
                           <textarea className="w-full border-2 border-[#9DA0A9] rounded"></textarea>
                           <button className="text-[22px] font-bold font-[Gotham] py-5 mt-8 rounded border-[#00FF74] border w-full">
                              Залишити відгук
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <Typography.Heading className="block my-16">З цим товаром також купують</Typography.Heading>
               <div className="flex flex-wrap gap-[20px]">
                  <div className="border-[#00FF74] border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Всі товари</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Кейси</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Захисне скло</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Захисна плівка</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Дата кабель</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Зарядний пристрій</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Навушники</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Кейси</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Кейси</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Захисне скло</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Захисна плівка</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Дата кабель</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Зарядний пристрій</div>
                  <div className="border-black border rounded-3xl py-2 px-8 text-[20px] font-bold font-[Gotham]">Навушники</div>
               </div>
               <div className="flex flex-wrap justify-start mt-12 mb-32 gap-3">
                  {productList.get.map((product, index) => (
                     <Layout.ProductCard
                        id={product.id}
                        link={"/product/" + product.id}
                        key={index}
                        categoryName="Смартфон"
                        productName={product.name}
                        picture={product.images[0]}
                        price={product.price}
                     />
                  ))}
               </div>
            </Layout.Container>
         </div>
      </div >
   );
};

export { ProductPage };
