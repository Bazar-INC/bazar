import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
   name: string;
}

type ProductId = string;

interface AccountState {
   profile: ProfileState | null;
   cart: {
      products: Array<{
         id: ProductId,
         count: number
      }>
   };
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

         const index = state.cart.products.findIndex(w => w.id === productId);

         const product = state.cart.products[index];

         if (index === -1) {
            state.cart.products = [
               ...state.cart.products,
               { id: productId, count: 1 }
            ];
         } else {
            state.cart.products = [
               ...state.cart.products.slice(0, index),
               { id: product.id, count: product.count + 1 },
               ...state.cart.products.slice(index + 1),
            ];
         }
      },
   }
});

export const {
   reducer: accountReducer,
   actions: accountActions,
} = accountSlice;
