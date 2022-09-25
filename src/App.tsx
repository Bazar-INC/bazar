import { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { useProperty } from './components/hooks/property';
import { useAppDispatch } from './store/hooks';

import { accountActions } from './features/account/reducer';

import { Layout } from './components/layout/layout';
import { Modals } from './components/modals';

import { CartPage } from './components/pages/cart';
import { HomePage } from './components/pages/home';
import { GoodsPage } from './components/pages/goods';
import { AdminPage } from "./components/admin";
import { ProductPage } from "./components/pages/product";
import { MobileMenu } from "./components/mobile/menu";
import { routes } from "./router-config";
import { AboutPage } from "./components/pages/about";
import { DeliveryAndPaymentPage } from "./components/pages/delivery-and-payment";
import { MeAPI } from "./api/services/me";

const App: FC = () => {

   const dispatch = useAppDispatch();

   useEffect(() => {

      MeAPI.getProfile().then(({ data }) => {
         dispatch(accountActions.setProfile(data));
      });

   }, []);

   const [signModalIsOpen] = useProperty(false);

   const openSignModal = () => {
      signModalIsOpen.set(true);
   };

   const closeSignModal = () => {
      signModalIsOpen.set(false);
   };

   const [cityModalIsOpen] = useProperty(false);

   const openCityModal = () => {
      cityModalIsOpen.set(true);
   };

   const closeCityModal = () => {
      cityModalIsOpen.set(false);
   };

   const location = useLocation();

   return (
      <>
         <Routes>
            <Route path="admin/*" element={<AdminPage />} />
            <Route path="*" element={
               <>
                  <div className="flex flex-col h-full">
                     <div className="flex-[1_0_auto]">
                        <Layout.Header
                           fixMenu={location.pathname === routes.Home.pathname}
                           openSignModal={openSignModal}
                           openCityModal={openCityModal}
                        />
                        <Routes>
                           <Route path={routes.Home.path} element={<HomePage />} />
                           <Route path="cart" element={<CartPage openCityModal={openCityModal} />} />
                           <Route path="goods/:category" element={<GoodsPage />} />
                           <Route path="product/:id" element={<ProductPage />} />
                           <Route path="about" element={<AboutPage />} />
                           <Route path="delivery-and-payment" element={<DeliveryAndPaymentPage />} />
                        </Routes>
                     </div>
                     <Layout.Footer className="mt-auto pb-40" />
                  </div>
                  <MobileMenu /></>
            } />
         </Routes>
         <Modals.Sign open={signModalIsOpen.get} onClose={closeSignModal} />
         <Modals.City open={cityModalIsOpen.get} onClose={closeCityModal} />
      </>
   );
};

export { App };
