import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
   name: string;
}

type ProductsIds = Array<string>;

interface Cart {
   products: ProductsIds;
}

interface AccountState {
   profile: ProfileState | null;
   cart: Cart;
}

const initialState: AccountState = {
   profile: null,
   cart: {
      products: []
   }
};

const accountSlice = createSlice({
   name: 'accountSlice',
   initialState,
   reducers: {
      setProfile(state, { payload: profile }: PayloadAction<ProfileState>) {
         state.profile = profile;
      },
      addProductToCard(state, { payload: productId }: PayloadAction<string>) {
         state.cart.products = [...state.cart.products, productId];
      },
   }
});

export const {
   reducer: accountReducer,
   actions: accountActions,
} = accountSlice;
