import { FC, useState } from "react";
import { classes } from "../../../../../functions";

interface Props {
   label: string,
   text: string
}

const DropDown: FC<Props> = ({ label, text }) => {

   const [dropdownOpen, setDropdown] = useState(false);

   return (
      <div className='flex flex-col border-[#70706D] border-[2px] rounded-lg bg-white'>
         <div className='flex flex-row justify-between ml-[35px] mr-[20px] my-[30px] md:cursor-pointer' onClick={() => setDropdown(!dropdownOpen)}>
            <span className='font-bold text-[20px]'>{label}</span>
            <div className='h-min my-auto ml-[20px]'>
               <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1H1L4.5 5L8 1Z" fill="#00FF74" stroke="#00FF74" strokeWidth="2" strokeLinejoin="round" />
               </svg>
            </div>
         </div>
         <div className={classes('m-[40px] mt-0', dropdownOpen ? 'block' : 'hidden')}>
            <p className='font-normal'>{text}</p>
         </div>
      </div>
   );
};

export { DropDown };
