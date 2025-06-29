import { RootState } from '@/redux/store';
import { Extra, Size } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  name: string;
  id: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size?: Size;
  extras?: Extra[];
};

type CartState = {
  items: CartItem[];
};
// const initialCartItems = localStorage.getItem('cartItems');

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity=(existingItem.quantity || 0) + 1;
        existingItem.size=action.payload.size;
        existingItem.extras=action.payload.extras;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== action.payload);
        } else {
          existingItem.quantity!-=1;
        }
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },  
});

export const { addToCart, removeFromCart, removeItemFromCart, clearCart   } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
