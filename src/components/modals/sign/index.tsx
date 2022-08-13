import { FC, useEffect } from "react";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";
import { useLogic } from "./logic";

interface Props {
   open: boolean;
   onClose(): void;
}

const Sign: FC<Props> = ({ open, onClose }) => {

   const {
      phone,
      code,
      isProfileNotNull,
      handleClickButton,
      loading,
      isEnterModePhone,
      isEnterModeCode,
      isShowTimeoutError,
      reset
   } = useLogic();

   useEffect(() => {
      if (open === false) {
         reset();
      }
   }, [open]);

   if (open === false || isProfileNotNull) {
      return <></>;
   }

   const handleClose = (event: React.MouseEvent) => {
      // Prevent click on child elements
      if (event.target === event.currentTarget) {
         onClose();
      }
   };

   return (
      <div onClick={handleClose} className="fixed w-full h-full left-0 top-0 bg-black/30 flex">
         <div className="m-auto px-16 h-[520px] bg-white rounded-3xl flex flex-col items-center justify-center">
            <Typography.Heading>Вхід в аккаунт</Typography.Heading>
            <span className="text-lg mt-5">Введіть ваш номер телефону</span>
            <div className="relative">
               <Layout.Input
                  disabled={!isEnterModePhone || loading.get}
                  onChange={phone.set}
                  type="phone"
                  hint="000-000-000"
                  maxLength={9}
                  className="border-[#9DA0A9] border-2 rounded-lg w-[360px] mt-2 py-4 pl-[154px] text-[20px]"
               />
               <span className="pointer-events-none absolute left-[94px] top-1/2 -translate-y-1/2 mt-[3px] text-[20px] text-black">(+380)</span>
            </div>
            {isEnterModeCode && (
               <>
                  <span className="text-lg mt-2">Введіть код з смс:</span>
                  <Layout.Input
                     onChange={code.set}
                     type="phone"
                     hint="XXXX"
                     maxLength={4}
                     className="border-[#9DA0A9] border-2 rounded-lg w-[360px] mt-2 py-4 text-center text-[20px]"
                  />
               </>
            )}
            <div className="w-full mt-10 relative">
               <Layout.Button onClick={handleClickButton} stretch>
                  {isEnterModePhone && "Надіслати"}
                  {!isEnterModePhone && "Підтвердити"}
                  {loading.get && (
                     <>
                        <div className="absolute top-3.5 right-4 w-4 h-4 border-4 border-white rounded-full animate-pulse" />
                        <div className="absolute top-3.5 right-8 mr-1 w-4 h-4 border-4 border-white border-r-gray-400 rounded-full animate-spin" />
                        <div className="absolute top-[18px] right-12 mr-3 w-2 h-2 border-4 border-white rounded-full animate-ping" />
                     </>
                  )}
               </Layout.Button>
            </div>
         </div>
         {isShowTimeoutError && (
            <div className="fixed bottom-0 left-0 w-full bg-red-900 text-center text-white font-[Gotham]">
               No internet connection
            </div>
         )}
      </div>
   );
};

export { Sign };
