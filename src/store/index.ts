import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { accountReducer } from '../features/account/reducer';

const store = configureStore({
   reducer: {
      accountReducer
   }
});

export { store };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
