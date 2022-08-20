import { FC, useEffect, useState } from "react";

interface Props {
   className?: string;
   hint?: string;
   type: "text" | "phone";
   maxLength?: number;
   disabled?: boolean;
   onChange(value: string): void;
}

const Input: FC<Props> = ({ className, hint, type, maxLength, disabled, onChange }) => {

   const [value, setValue] = useState("");

   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

      const newValue = event.target.value;

      if (type == "phone") {

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
         value={value}
         onChange={handleOnChange}
         maxLength={maxLength}
      />
   );
};

export { Input };
