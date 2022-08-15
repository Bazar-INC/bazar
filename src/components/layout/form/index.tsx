import React from "react";
import { forwardRef, ReactNode } from "react";

export type FormResultValues = { [key: string]: any };

interface Props {
   onFinish: (values: FormResultValues) => void;
   children: ReactNode;
}

const Form = forwardRef<HTMLFormElement, Props>(({ children, onFinish }, ref) => {

   const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {

      event.preventDefault();

      // Declare variable for values to return at the end
      const values: FormResultValues = {};

      for (let i = 0; i < event.currentTarget.elements.length; i++) {
         const element = event.currentTarget.elements[i] as HTMLInputElement;

         // input value of attribute 'name'
         const name = element.name;

         if (!name) {
            continue;
         }

         const type = element.type;

         if (type === "checkbox") { // type="checkbox"
            values[name] = element.checked;
         } else {
            values[name] = element.value;
         }
      }

      onFinish(values);
   };

   return <form ref={ref} onSubmit={handleSubmitForm}>{children}</form>;
});

Form.displayName = "Form";

export { Form };
