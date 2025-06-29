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
const initialCartItems = localStorage.getItem('cartItems');

const initialState: CartState = {
  items: initialCartItems ? JSON.parse(initialCartItems) : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {} ,
});

export const { } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
