import { FC, useRef } from 'react';
import { Layout } from '../../layout/layout';

interface Props {
   open: boolean;
   onClose(): void;
}

const Sign: FC<Props> = ({ open, onClose }) => {

   const containerRef = useRef<HTMLDivElement>(null);

   if (open === false) {
      return <></>;
   }

   const handleClose = (event: React.MouseEvent) => {

      if (event.target !== event.currentTarget) {
         return;
      }

      onClose();

   };

   return (
      <div ref={containerRef} onClick={handleClose} className="fixed w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.35)] flex">
         <div className="m-auto px-24 h-[602px] bg-white rounded-3xl flex flex-col items-center justify-center">
            <span className="font-[Intro] text-[40px]">Вхід в аккаунт</span>
            <span className="text-[25px] mt-5">Введіть ваш номер телефону</span>
            <input placeholder="067-70-48-212" type="text" className="border-[#9DA0A9] border-2 rounded-lg w-[360px] mt-2 py-4 text-center text-[20px] mb-10" />
            <Layout.Button stretch>Надіслати</Layout.Button>
         </div>
      </div>
   );
};

export { Sign };
