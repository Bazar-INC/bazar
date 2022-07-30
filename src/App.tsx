import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useProperty } from './components/hooks/property';
import { useAppDispatch } from './store/hooks';

import { AccountEndpoints } from './api/endpoints/account';
import { accountActions } from './features/account/reducer';

import { Layout } from './components/layout/layout';
import { Modals } from './components/modals';

import { CartPage } from './components/pages/cart';
import { HomePage } from './components/pages/home';
import { SignPage } from './components/pages/sign';
import { accountActions } from './features/account/reducer';
import { useAppDispatch } from './store/hooks';

const App: FC = () => {

   const dispatch = useAppDispatch();

   useEffect(() => {

      AccountEndpoints.getProfile().then((response) => {
         dispatch(accountActions.setProfile(response.data));
      });

   }, []);

   const [signModalIsOpen] = useProperty(false);

   const openSignModal = () => {
      signModalIsOpen.set(true);
   };

   const closeSignModal = () => {
      signModalIsOpen.set(false);
   };

   return (
      <>
         <div className="min-h-full bg-[#f4f4f4] flex flex-col">

            <Layout.Header openSignModal={openSignModal} />

            <Routes>
               <Route path="home" element={<HomePage />} />
               <Route path="sign" element={<SignPage />} />
               <Route path="cart" element={<CartPage />} />
            </Routes>

            <div className="mt-auto">
               <Layout.Footer />
            </div>

         </div>
         <Modals.Sign open={signModalIsOpen.get} onClose={closeSignModal} />
      </>
   );
};

export { App };
