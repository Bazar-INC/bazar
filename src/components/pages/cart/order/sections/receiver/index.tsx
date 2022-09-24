import { FC } from "react";
import { useProperty } from "../../../../../hooks/property";
import { Layout } from "../../../../../layout/layout";
import { OrderSectionWrap } from "../order-section-wrap";

interface Props {
   active: boolean;
   onFinish: (values: any) => void;
}

const ReceiverOrderSection: FC<Props> = ({ active, onFinish }) => {

   const [name] = useProperty("");
   const [surname] = useProperty("");
   const [phone] = useProperty("");
   const [email] = useProperty("");

   const handleFinish = () => {
      onFinish({
         name: name.get,
         surname: surname.get,
         phone: phone.get,
         email: email.get
      });
   };

   const INPUT_CLASSES = "px-4 py-2 bg-transparent mt-2 border-2 rounded border-[#9DA0A9]";

   return (
      <OrderSectionWrap name="Отримувач" onClick={handleFinish} active={active}>
         <div className="flex gap-x-10 w-full">
            <div className="flex flex-col">
               <span className="bold">Ім{"'"}я</span>
               <Layout.Input type="text" hint="Володимир" className={INPUT_CLASSES} onChange={name.set} />
            </div>
            <div className="flex flex-col">
               <span className="bold">Прізвище</span>
               <Layout.Input type="text" hint="Яворський" className={INPUT_CLASSES} onChange={surname.set} />
            </div>
         </div>
         <div className="flex gap-x-10 mt-6">
            <div className="flex flex-col">
               <span className="bold">Номер телефону</span>
               <Layout.Input type="phone" prefix="+380" hint="___-___-____" className={INPUT_CLASSES} onChange={phone.set} />
            </div>
            <div className="flex flex-col">
               <span className="bold">Е-mail</span>
               <Layout.Input type="text" hint="vyavorsky@gmail.com" className={INPUT_CLASSES} onChange={email.set} />
            </div>
         </div>
      </OrderSectionWrap>
   );
};

export { ReceiverOrderSection };
