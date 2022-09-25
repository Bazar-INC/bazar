import { FC, useEffect, useState } from "react";
import { classes, isEmpty } from "../../../functions";

interface Props {
   className?: string;
   prefix?: string;
   hint?: string;
   type: "text" | "number" | "phone";
   maxLength?: number;
   disabled?: boolean;
   onChange(value: string): void;
   hardValue?: string;
   textCenter?: boolean;
}

const Input: FC<Props> = ({ className, hint, prefix, type, maxLength, disabled, onChange, hardValue, textCenter }) => {

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
      <div className={classes(className, "flex w-[230px] items-center justify-center")}>
         <div className="">{prefix}</div>
         <input
            className={classes("bg-transparent outline-none", textCenter && "w-full text-center", type === "phone" ? "w-[112px]" : "w-full")}
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
