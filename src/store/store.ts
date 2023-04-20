import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import { useDispatch } from 'react-redux';
import favoriteSlice from './favoriteSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoriteSlice
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch <AppDispatch>();