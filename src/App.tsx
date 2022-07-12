import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AccountEndpoints } from './api/endpoints/account';
import { Layout } from './components/layout/layout';
import { SignPage } from './components/pages/sign';
import { accountActions } from './features/account/reducer';
import { useAppDispatch } from './store/hooks';

const App: FC = () => {

   const dispatch = useAppDispatch();

   const profile = useAppSelector(state => state.accountReducer.profile);

   useEffect(() => {

      AccountEndpoints.getProfile().then((response) => {
         dispatch(accountActions.setProfile(response.data));
      });

   }, []);

   return (
      <div className="h-full bg-[#f4f4f4]">

         <Layout.Header />

         <Routes>
            <Route path="sign" element={<SignPage />} />
         </Routes>

      </div>
   );
};

export { App };
