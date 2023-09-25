import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./PokemonSlice/PokemonSlice";
import { useDispatch } from "react-redux";
import { pokemonDetailReducer } from "./PokemonDetailSlice/PokemonDetailSlice";

export const store = configureStore({
  reducer: {
    pokemonStateData: pokemonReducer,
    pokemonDetailStateData: pokemonDetailReducer,
  },
});
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
