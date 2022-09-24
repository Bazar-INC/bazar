import { FC, useEffect, useState } from "react";
import { classes } from "../../../functions";

interface Props {
   className?: string;
   prefix?: string;
   hint?: string;
   type: "text" | "number" | "phone";
   maxLength?: number;
   disabled?: boolean;
   onChange(value: string): void;
   hardValue?: string;
}

const Input: FC<Props> = ({ className, hint, prefix, type, maxLength, disabled, onChange, hardValue }) => {

   const [value, setValue] = useState("");

   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

      const newValue = event.target.value;

      if (type == "phone") {
         if (newValue.length > 9) {
            return;
         }
      }

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
      <div className={classes(className, "flex w-[230px]")}>
         <div className="">{prefix}</div>
         <input
            className="bg-transparent outline-none"
            disabled={disabled}
            type="text"
            placeholder={hint}
            value={hardValue ?? value}
            onChange={handleOnChange}
            maxLength={maxLength}
         />
      </div>
   );
};

export { Input };
