import { createSlice } from "@reduxjs/toolkit";
import constant from "../../config/constant/constant";
import {
  getAllDetailsAction,
  getPokemonDetailsAction,
} from "./PokemonAsyncThunk";
import { PokemonList } from "./PokemonType";

const initialPokemonImage = {
  back_default: "",
  back_shiny: "",
  front_default: "",
  front_shiny: "",
  name: "",
  url: "",
  id: 1,
  weight: 1,
  height: 1,
  order: 1,
};

const initialState: PokemonList = {
  list: [],
  isLoading: false,
  imagePokemonList: initialPokemonImage,
  id: 1,
  page: constant.page.defaultNumber,
  limit: constant.page.size,
  total: constant.page.defaultTotal,
  weight: 1,
  height: 1,
  name: "",
  order: 1,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.id = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDetailsAction.pending, (state: PokemonList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllDetailsAction.fulfilled,
        (state: PokemonList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getAllDetailsAction.rejected, (state: PokemonList) => {
        state.isLoading = false;
      })
      .addCase(getPokemonDetailsAction.pending, (state: PokemonList) => {
        state.isLoading = true;
      })
      .addCase(
        getPokemonDetailsAction.fulfilled,
        (state: PokemonList, { payload }) => {
          if (payload) {
            const { data, spec, name, weight, height, order } = payload;
            state.imagePokemonList = {
              ...data,
              ...spec,
              weight,
              height,
              name,
              order,
            };
          } else {
            state.imagePokemonList = initialPokemonImage;
          }
          state.isLoading = false;
        }
      )
      .addCase(getPokemonDetailsAction.rejected, (state: PokemonList) => {
        state.isLoading = false;
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const pokemonAction = pokemonSlice.actions;
