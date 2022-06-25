import { useState } from 'react';
import { Client } from '../../../api/client';

const client = new Client();

const useSignPageLogic = () => {

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

      const digits = /[0-9]/;
      const controls = 'ArrowLeft|ArrowRight|Backspace';

      const isControl = controls.includes(event.code);
      const isDigit = digits.test(event.key);

      if (!isControl && !isDigit) {
         event.preventDefault();
      };
   };

   const [phone, setPhone] = useState('');
   const [code, setCode] = useState('');

   const [enterMode, setEnterMode] = useState<'phone' | 'code' | 'verification'>('phone');

   const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(event.currentTarget.value);
   };

   const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCode(event.currentTarget.value);
   };

   const sendPhone = () => {

      if (phone.length < 9) {
         return;
      }

      client.methodPost('auth/request', { phone });

      setEnterMode('code');
   };

   const confirmCode = () => {

      if (code.length < 4) {
         return;
      }

      setEnterMode('verification');

      client.methodPost('auth/confirm', { phone, code })
         .then(response => {
            alert('Log in!');
         });
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
