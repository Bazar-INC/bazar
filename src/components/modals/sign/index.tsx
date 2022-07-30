import { FC, useRef } from 'react';
import { AccountEndpoints } from '../../../api/endpoints/account';
import { AuthEndpoints } from '../../../api/endpoints/auth';
import { accountActions } from '../../../features/account/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { StorageUtility } from '../../../utilities/storageUtility';
import { useProperty } from '../../hooks/property';
import { Layout } from '../../layout/layout';

const tokenStorage = new StorageUtility('TOKEN_STORAGE');

interface Props {
   open: boolean;
   onClose(): void;
}

const Sign: FC<Props> = ({ open, onClose }) => {

   const dispatch = useAppDispatch();

   const profile = useAppSelector(state => state.accountReducer.profile);

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

      const digits = /[0-9]/;
      const controls = 'ArrowLeft|ArrowRight|Backspace';

      const isControl = controls.includes(event.code);
      const isDigit = digits.test(event.key);

      if (!isControl && !isDigit) {
         event.preventDefault();
      }
   };

   const [phone] = useProperty('');
   const [code] = useProperty('');

   const [enterMode] = useProperty<'phone' | 'code' | 'verification'>('phone');

   const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
      phone.set(event.currentTarget.value);
   };

   const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
      code.set(event.currentTarget.value);
   };

   const sendPhone = () => {

      if (phone.get.length < 9) {
         return;
      }

      AuthEndpoints.loginRequest(phone.get);

      enterMode.set('code');
   };

   const confirmCode = async () => {

      if (code.get.length < 4) {
         return;
      }

      enterMode.set('verification');

      const confirmResponse = await AuthEndpoints.loginConfirm(phone.get, code.get);

      tokenStorage.set(confirmResponse.data.token);

      const profileResponse = await AccountEndpoints.getProfile();

      dispatch(accountActions.setProfile(profileResponse.data));
   };

   const containerRef = useRef<HTMLDivElement>(null);

   if (open === false || profile !== null) {
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
            <input
               placeholder="067-70-48-212"
               type="text"
               className="border-[#9DA0A9] border-2 rounded-lg w-[360px] mt-2 py-4 text-center text-[20px] mb-10"
               maxLength={9}
               onKeyDown={handleKeyDown}
               onChange={handleChangePhone}
            />
            {enterMode.get === 'code' && (
               <>
                  <span className="text-[25px] mt-5">Введіть код з смс:</span>
                  <input
                     placeholder="XXXX"
                     type="text"
                     className="border-[#9DA0A9] border-2 rounded-lg w-[360px] mt-2 py-4 text-center text-[20px] mb-10"
                     maxLength={4}
                     onChange={handleChangeCode}
                  />
               </>
            )}
            {enterMode.get === 'phone' && (
               <Layout.Button onClick={sendPhone} stretch>Надіслати</Layout.Button>
            )}
            {enterMode.get === 'code' && (
               <Layout.Button onClick={confirmCode} stretch>Підтвердити</Layout.Button>
            )}
            {enterMode.get === 'verification' && (
               <Layout.Button stretch>
                  <div className="w-1 h-8 bg-white animate-spin" />
               </Layout.Button>
            )}
         </div>
      </div>
   );
};

export { Sign };
