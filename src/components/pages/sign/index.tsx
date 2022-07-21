import { FC } from 'react';
import { useSignPageLogic } from './logic';

const SignPage: FC = () => {

   const {
      enterMode,
      handleKeyDown,
      handleChangeCode,
      handleChangePhone,
      sendPhone,
      confirmCode
   } = useSignPageLogic();

   return (
      <div className="flex h-full">
         <div className="m-auto border py-8 px-12">
            <div className="flex flex-col">
               <span className="text-3xl">Вхід в аккаунт</span>
               {enterMode === 'verification' ? (
                  <span className="mt-8">Verification ...</span>
               ) : (
                  <>
                     <span className="text mt-8 text-center">Введіть номер телефону:</span>
                     <div className="w-60 relative">
                        <div className="flex items-center justify-center border-b py-4">
                           <span>+380</span>
                           <input
                              required
                              className="w-20 outline-none appearance-none"
                              type="text"
                              placeholder="931234567"
                              maxLength={9}
                              onKeyDown={handleKeyDown}
                              onChange={handleChangePhone}
                           />
                        </div>
                     </div>
                     {enterMode === 'code' && (
                        <>
                           <span className="text mt-4 text-center">Введіть код з смс:</span>
                           <div className="w-60 relative">
                              <div className="flex items-center justify-center border-b py-4">
                                 <input
                                    required
                                    className="w-full text-center outline-none appearance-none"
                                    type="text"
                                    placeholder="XXXX"
                                    maxLength={4}
                                    onChange={handleChangeCode}
                                 />
                              </div>
                           </div>
                        </>
                     )}
                     {enterMode === 'phone' && (
                        <button onClick={sendPhone} className="bg-black text-white w-full h-16 mt-4">Надіслати</button>
                     )}
                     {enterMode === 'code' && (
                        <button onClick={confirmCode} className="bg-black text-white w-full h-16 mt-4">Підтвердити</button>
                     )}
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export { SignPage };
