import { FC } from "react";
import { Layout } from "../../../layout/layout";
import { Icons } from "../../../icons/icons";
import { Typography } from "../../../typography";

const FiltersList = [
   {
      label: "Бренд",
      icon: <Icons.Phone />
   },
   {
      label: "Пам'ять",
      icon: <Icons.Phone />
   },
   {
      label: "Діагональ",
      icon: <Icons.Phone />
   },   
];

const Filters: FC = () => {
   return (
      <div className="w-full py-[20px]">
         <div className="flex justify-between">
            <Typography.Heading size="small">Фільтри</Typography.Heading>
            <Layout.Button>Додати фільтр</Layout.Button>
         </div>
         <div className="mt-[30px]">
            {FiltersList.map((item, index) => (
               <div key={index} className="flex items-center justify-between bg-white rounded-lg  h-[70px] pl-[20px] pt-[10px] pb-[10px] pr-[10px] mb-[10px]">
                  <div className="flex">
                     {item.icon}
                     <span className="text-[15px] font-[Gotham] text-black font-bold ml-5 w-[200px] md:w-[527px] h-min my-auto">{item.label}</span>
                  </div>

                  <div className="flex">
                     <svg className="cursor-pointer mr-[15px]" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5314 5.06536L19.9669 0.469401C19.6653 0.168767 19.2571 0 18.8316 0C18.4061 0 17.9979 0.168767 17.6963 0.469401L2.32445 15.8462C1.79507 16.3758 1.42496 17.0433 1.25622 17.7728L0.0369726 23.0441C-0.0139942 23.2776 -0.012247 23.5196 0.0420864 23.7523C0.0964198 23.9851 0.201967 24.2027 0.351018 24.3893C0.500068 24.576 0.688857 24.7269 0.903592 24.8311C1.11833 24.9353 1.35358 24.9901 1.59218 24.9916C1.70335 25.0028 1.81537 25.0028 1.92655 24.9916L7.25157 23.769C7.98425 23.6007 8.65469 23.2295 9.18604 22.6977L24.5314 7.33997C24.8315 7.03781 25 6.62891 25 6.20266C25 5.77642 24.8315 5.36752 24.5314 5.06536ZM8.43567 21.2713C7.88722 21.8182 7.19176 22.1942 6.43375 22.3534L1.5533 23.3791L2.67052 18.5608C2.83986 17.8305 3.21102 17.1625 3.74168 16.633L15.0369 5.36137L19.7025 10.0352L8.43567 21.2713ZM20.7445 8.90571L16.0789 4.23185L18.785 1.5366L23.3728 6.21045L20.7445 8.90571Z" fill="#8F00F9" />
                     </svg>

                     <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.30545 1.7803C0.20861 1.68346 0.131793 1.56849 0.079384 1.44196C0.0269748 1.31544 1.02037e-09 1.17982 0 1.04287C-1.02037e-09 0.905921 0.0269748 0.77031 0.079384 0.643783C0.131793 0.517255 0.20861 0.40229 0.30545 0.30545C0.40229 0.20861 0.517255 0.131793 0.643783 0.079384C0.77031 0.0269748 0.905921 -1.02037e-09 1.04287 0C1.17982 1.02037e-09 1.31544 0.0269748 1.44196 0.079384C1.56849 0.131793 1.68346 0.20861 1.7803 0.30545L12.5 11.0272L23.2197 0.30545C23.3165 0.20861 23.4315 0.131793 23.558 0.079384C23.6846 0.0269748 23.8202 0 23.9571 0C24.0941 0 24.2297 0.0269748 24.3562 0.079384C24.4827 0.131793 24.5977 0.20861 24.6946 0.30545C24.7914 0.40229 24.8682 0.517255 24.9206 0.643783C24.973 0.77031 25 0.905921 25 1.04287C25 1.17982 24.973 1.31544 24.9206 1.44196C24.8682 1.56849 24.7914 1.68346 24.6946 1.7803L13.9728 12.5L24.6946 23.2197C24.7914 23.3165 24.8682 23.4315 24.9206 23.558C24.973 23.6846 25 23.8202 25 23.9571C25 24.0941 24.973 24.2297 24.9206 24.3562C24.8682 24.4827 24.7914 24.5977 24.6946 24.6946C24.5977 24.7914 24.4827 24.8682 24.3562 24.9206C24.2297 24.973 24.0941 25 23.9571 25C23.8202 25 23.6846 24.973 23.558 24.9206C23.4315 24.8682 23.3165 24.7914 23.2197 24.6946L12.5 13.9728L1.7803 24.6946C1.68346 24.7914 1.56849 24.8682 1.44196 24.9206C1.31544 24.973 1.17982 25 1.04287 25C0.905921 25 0.77031 24.973 0.643783 24.9206C0.517255 24.8682 0.40229 24.7914 0.30545 24.6946C0.20861 24.5977 0.131793 24.4827 0.079384 24.3562C0.0269748 24.2297 0 24.0941 0 23.9571C0 23.8202 0.0269748 23.6846 0.079384 23.558C0.131793 23.4315 0.20861 23.3165 0.30545 23.2197L11.0272 12.5L0.30545 1.7803Z" fill="#ACACAC" />
                     </svg>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export { Filters };
