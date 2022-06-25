import { FC, useEffect } from 'react';
import { AccountEndpoints } from "./api/endpoints/account";
import { SignPage } from './components/pages/sign';
import { accountActions } from "./features/account/reducer";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const App: FC = () => {

   const dispatch = useAppDispatch();

   const profile = useAppSelector(state => state.accountReducer.profile);

   useEffect(() => {

      AccountEndpoints.getProfile().then((response) => {
         dispatch(accountActions.setProfile(response.data));
      });

   }, []);

   return (
      <div className="h-full">
         <header>User: {profile.name}</header>
         <SignPage />
      </div>
   );
};

export { App };
