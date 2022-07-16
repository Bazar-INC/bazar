import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AccountEndpoints } from './api/endpoints/account';
import { Layout } from './components/layout/layout';
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

   return (
      <div className="min-h-full bg-[#f4f4f4]">

         <Layout.Header />

         <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="sign" element={<SignPage />} />
         </Routes>

         <Layout.Footer />

      </div>
   );
};

export { App };
