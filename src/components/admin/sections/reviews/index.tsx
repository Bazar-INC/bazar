import { FC, useEffect, useState } from "react";
import { Icons } from "../../../icons/icons";
import { Layout } from "../../../layout/layout";
import { Typography } from "../../../typography";

const reviewItems = [
   {
      product: {
         label: "Apple Iphone 13 PRO 128GB Сірий",
         image: "https://img.ktc.ua/img/base/1_505/6/363866.jpg"
      },
      review: {
         name: "Анатолій Львович",
         text: "Яка різниця між Apple Iphone 13 512GB Starlight (MLQD3) та Apple Iphone 13 512GB Starlight (MLQD3U/A) окрім ціни?",
         avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
      }
   },
   {
      product: {
         label: "Apple Iphone 13 PRO 128GB Сірий",
         image: "https://img.ktc.ua/img/base/1_505/6/363866.jpg"
      },
      review: {
         name: "Анатолій Львович",
         text: "Яка різниця між Apple Iphone 13 512GB Starlight (MLQD3) та Apple Iphone 13 512GB Starlight (MLQD3U/A) окрім ціни?",
         avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
      }
   },
   {
      product: {
         label: "Apple Iphone 13 PRO 128GB Сірий",
         image: "https://img.ktc.ua/img/base/1_505/6/363866.jpg"
      },
      review: {
         name: "Анатолій Львович",
         text: "Яка різниця між Apple Iphone 13 512GB Starlight (MLQD3) та Apple Iphone 13 512GB Starlight (MLQD3U/A) окрім ціни?",
         avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
      }
   },
   {
      product: {
         label: "Apple Iphone 13 PRO 128GB Сірий",
         image: "https://img.ktc.ua/img/base/1_505/6/363866.jpg"
      },
      review: {
         name: "Анатолій Львович",
         text: "Яка різниця між Apple Iphone 13 512GB Starlight (MLQD3) та Apple Iphone 13 512GB Starlight (MLQD3U/A) окрім ціни?",
         avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
      }
   },
   {
      product: {
         label: "Apple Iphone 13 PRO 128GB Сірий",
         image: "https://img.ktc.ua/img/base/1_505/6/363866.jpg"
      },
      review: {
         name: "Анатолій Львович",
         text: "Яка різниця між Apple Iphone 13 512GB Starlight (MLQD3) та Apple Iphone 13 512GB Starlight (MLQD3U/A) окрім ціни?",
         avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
      }
   },
   {
      product: {
         label: "Apple Iphone 13 PRO 128GB Сірий",
         image: "https://img.ktc.ua/img/base/1_505/6/363866.jpg"
      },
      review: {
         name: "Анатолій Львович",
         text: "Яка різниця між Apple Iphone 13 512GB Starlight (MLQD3) та Apple Iphone 13 512GB Starlight (MLQD3U/A) окрім ціни?",
         avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
      }
   },
   {
      product: {
         label: "Apple Iphone 13 PRO 128GB Сірий",
         image: "https://img.ktc.ua/img/base/1_505/6/363866.jpg"
      },
      review: {
         name: "Анатолій Львович",
         text: "Яка різниця між Apple Iphone 13 512GB Starlight (MLQD3) та Apple Iphone 13 512GB Starlight (MLQD3U/A) окрім ціни?",
         avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
      }
   },
   {
      product: {
         label: "Apple Iphone 13 PRO 128GB Сірий",
         image: "https://img.ktc.ua/img/base/1_505/6/363866.jpg"
      },
      review: {
         name: "Анатолій Львович",
         text: "Яка різниця між Apple Iphone 13 512GB Starlight (MLQD3) та Apple Iphone 13 512GB Starlight (MLQD3U/A) окрім ціни?",
         avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
      }
   },
];

const Reviews: FC = () => {
   return (
      <div className="w-full py-[20px]">
         <div className="flex">
            <Typography.Heading className="h-min my-auto">Відгуки</Typography.Heading>
         </div>
         <div className="mt-[30px]">
            {reviewItems.map((item, index) => (
               <div key={index} className="flex flex-col lg:flex-row bg-white rounded-lg pl-[20px] pt-[24px] pb-[24px] pr-[20px] mb-[10px] md:mb-[30px]">
                  <div className="flex items-center justify-between">
                     <div className="flex lg:flex-col lg:w-[233px]">
                        <div className="lg:w-full lg:h-full mr-[15px]">
                           <img className="w-[40px] h-[40px] lg:w-[188px] lg:h-[188px]" src={item.product.image} />
                        </div>
                        <span className="h-min my-auto lg:text-center font-[Gotham] font-bold text-[21px]">{item.product.label}</span>
                     </div>
                  </div>
                  <div className="flex flex-col mt-[24px] lg:h-min lg:my-auto ml-[45px]">
                     <div className="flex">
                        <div className="mr-[15px]">
                           <img className="w-[40px] h-[40px]" src={item.review.avatar} />
                        </div>
                        <span className="h-min my-auto font-[Gotham] font-bold text-[21px]">{item.review.name}</span>
                     </div>

                     <div className="ml-[55px] lg:ml-0">
                        <span className="font-[Gotham] font-extralight text-[21px]">{item.review.text}</span>
                        <Layout.Button className="h-[40px] w-[178px] mt-[10px]">Відповісти</Layout.Button>
                     </div>
                  </div>
                  <div className="order-first ml-auto lg:order-none">
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.24436 1.42424C0.166888 1.34676 0.105435 1.25479 0.0635072 1.15357C0.0215798 1.05235 8.16297e-10 0.94386 0 0.834298C-8.16298e-10 0.724737 0.0215798 0.616248 0.0635072 0.515026C0.105435 0.413804 0.166888 0.321832 0.24436 0.24436C0.321832 0.166888 0.413804 0.105435 0.515026 0.0635072C0.616248 0.0215798 0.724737 -8.16298e-10 0.834298 0C0.94386 8.16297e-10 1.05235 0.0215798 1.15357 0.0635072C1.25479 0.105435 1.34676 0.166888 1.42424 0.24436L10 8.82179L18.5758 0.24436C18.6532 0.166888 18.7452 0.105435 18.8464 0.0635072C18.9477 0.0215798 19.0561 0 19.1657 0C19.2753 0 19.3838 0.0215798 19.485 0.0635072C19.5862 0.105435 19.6782 0.166888 19.7556 0.24436C19.8331 0.321832 19.8946 0.413804 19.9365 0.515026C19.9784 0.616248 20 0.724737 20 0.834298C20 0.94386 19.9784 1.05235 19.9365 1.15357C19.8946 1.25479 19.8331 1.34676 19.7556 1.42424L11.1782 10L19.7556 18.5758C19.8331 18.6532 19.8946 18.7452 19.9365 18.8464C19.9784 18.9477 20 19.0561 20 19.1657C20 19.2753 19.9784 19.3838 19.9365 19.485C19.8946 19.5862 19.8331 19.6782 19.7556 19.7556C19.6782 19.8331 19.5862 19.8946 19.485 19.9365C19.3838 19.9784 19.2753 20 19.1657 20C19.0561 20 18.9477 19.9784 18.8464 19.9365C18.7452 19.8946 18.6532 19.8331 18.5758 19.7556L10 11.1782L1.42424 19.7556C1.34676 19.8331 1.25479 19.8946 1.15357 19.9365C1.05235 19.9784 0.94386 20 0.834298 20C0.724737 20 0.616248 19.9784 0.515026 19.9365C0.413804 19.8946 0.321832 19.8331 0.24436 19.7556C0.166888 19.6782 0.105435 19.5862 0.0635072 19.485C0.0215798 19.3838 0 19.2753 0 19.1657C0 19.0561 0.0215798 18.9477 0.0635072 18.8464C0.105435 18.7452 0.166888 18.6532 0.24436 18.5758L8.82179 10L0.24436 1.42424Z" fill="#ACACAC" />
                     </svg>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export { Reviews };
