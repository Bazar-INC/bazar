import { FC, useRef } from "react";
import { Form } from "../../../../layout/form";

interface FilterProps {
   title: string;
   options: Array<{ name: string; value: string; }>;
   onChange: (values: { [key: string]: any }) => void;
}

const Filter: FC<FilterProps> = ({ title, options, onChange }) => {

   const handleCheck = () => {
      ref.current?.requestSubmit();
   };

   const handleFinish = (values: { [key: string]: any }) => {
      onChange(values);
   };

   const ref = useRef<HTMLFormElement>(null);

   return (
      <div>
         <span className="font-bold text-[20px]">{title}</span>
         <Form onFinish={handleFinish} ref={ref}>
            <ol>
               {options.map((option, index) => (
                  <li className="mt-2.5" key={index}>
                     <label className="flex items-center">
                        <input onChange={handleCheck} name={option.value} className="w-[30px] h-[30px]" type="checkbox" />
                        <span className="text-[15px] font-semibold ml-4">{option.name}</span>
                     </label>
                  </li>
               ))}
            </ol>
         </Form>
      </div>
   );
};

export { Filter };
