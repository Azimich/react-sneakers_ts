import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IFavorite {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface IFavoritState {
  favoriteItems: IFavorite[]
}

const initialState: IFavoritState = {
  favoriteItems: []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<IFavorite>) => {
      state.favoriteItems.find((p) => p.id === action.payload.id)
      state.favoriteItems.push({...action.payload})
    },

    removeFavorite: (state, action: PayloadAction<IFavorite>) => {
      state.favoriteItems = state.favoriteItems.filter((p) => p.id !== action.payload.id)
    }
  }
})

export const selectFavorite = (state: RootState) => state.favorites;

export const { addToFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer