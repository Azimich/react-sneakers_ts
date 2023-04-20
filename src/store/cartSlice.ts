import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { calcTotalPrice } from "../utils/CartTotalPrice";

export interface ICartProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ICartState {
  totalPrice: number
  cartItems: ICartProps[]
}

const initialState: ICartState = {
  totalPrice: 0,
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProps>) => {
      const sneakers = state.cartItems.find((obj) => obj.id === action.payload.id)
      if (sneakers) {
       
      } else {
        state.cartItems.push({...action.payload})
      }
      state.totalPrice = calcTotalPrice(state.cartItems)
    },
    removeToCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
    }
  },
})

export const selectCart = (state: RootState) => state.cart;
export const { addToCart, removeToCart } = cartSlice.actions
export default cartSlice.reducer