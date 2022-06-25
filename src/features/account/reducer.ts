import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
   name: string;
}

interface AccountState {
   profile: ProfileState;
}

const initialState: AccountState = {
   profile: {
      name: ''
   }
};

const accountSlice = createSlice({
   name: 'accountSlice',
   initialState,
   reducers: {
      setProfile(state, { payload: profile }: PayloadAction<ProfileState>) {
         state.profile = profile;
      }
   }
});

export const {
   reducer: accountReducer,
   actions: accountActions,
} = accountSlice;
