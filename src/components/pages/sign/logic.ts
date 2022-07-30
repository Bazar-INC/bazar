import { useState } from 'react';
import { AccountEndpoints } from '../../../api/endpoints/account';
import { AuthEndpoints } from '../../../api/endpoints/auth';
import { accountActions } from '../../../features/account/reducer';
import { useAppDispatch } from '../../../store/hooks';
import { StorageUtility } from '../../../utilities/storageUtility';
import { useProperty } from '../../hooks/property';

const tokenStorage = new StorageUtility('TOKEN_STORAGE');

const useSignPageLogic = () => {

   const dispatch = useAppDispatch();

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

   const [enterMode, setEnterMode] = useState<'phone' | 'code' | 'verification'>('phone');

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

      setEnterMode('code');
   };

   const confirmCode = async () => {

      if (code.get.length < 4) {
         return;
      }

      setEnterMode('verification');

      const confirmResponse = await AuthEndpoints.loginConfirm(phone.get, code.get);

      tokenStorage.set(confirmResponse.data.token);

      const profileResponse = await AccountEndpoints.getProfile();

      dispatch(accountActions.setProfile(profileResponse.data));
   };

   return {
      enterMode,
      handleKeyDown,
      handleChangePhone,
      handleChangeCode,
      sendPhone,
      confirmCode
   };
};

export { useSignPageLogic };
