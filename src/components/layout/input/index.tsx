import { FC, useEffect, useState } from "react";

interface Props {
   className?: string;
   hint?: string;
   type: "text" | "number" | "phone";
   maxLength?: number;
   disabled?: boolean;
   onChange(value: string): void;
   hardValue?: string;
}

const Input: FC<Props> = ({ className, hint, type, maxLength, disabled, onChange, hardValue }) => {

   const [value, setValue] = useState("");

   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

      const newValue = event.target.value;

      if (type == "phone" || type == "number") {

         if (/\D/g.test(newValue)) {
            return;
         }

      }

      setValue(event.target.value);
   };

   useEffect(() => {
      onChange(value);
   }, [value]);

   return (
      <input
         disabled={disabled}
         type="text"
         className={className}
         placeholder={hint}
         value={hardValue ?? value}
         onChange={handleOnChange}
         maxLength={maxLength}
      />
   );
};

export { Input };
