import { FC } from "react";

interface FilterProps {
   title: string;
   values: string[];
}

const Filter: FC<FilterProps> = ({ title, values }) => {
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

export { Filter };
