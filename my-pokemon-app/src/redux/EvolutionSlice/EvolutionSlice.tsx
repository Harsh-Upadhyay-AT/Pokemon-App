import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllEvolutionDetailsAction, getEvolutionDetailsAction } from "./EvolutionAsyncThunk";
import { getAllBerryDetailsAction } from "redux/BerrySlice/BerryAsyncThunk";
import { EvolutionList } from "./EvolutionType";


const initialImage = {
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

const initialState: EvolutionList = {
  list: [],
  isLoading: false,
  id: 1,
  firmness: 1,
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  name: "",
  background: 0
};

const EvolutionSlice = createSlice({
  name: "Evolution",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.id = action.payload;
    },
    setCurrentPageSize: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvolutionDetailsAction.pending, (state: EvolutionList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllBerryDetailsAction.fulfilled,
        (state: EvolutionList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getEvolutionDetailsAction.pending, (state: EvolutionList) => {
        state.isLoading = true;
      })
      .addCase(
        getEvolutionDetailsAction.fulfilled,
        (state: EvolutionList, { payload }) => {
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
            state.imagePokemonList = initialImage;
          }
          state.isLoading = false;
        }
      )
      .addCase(getEvolutionDetailsAction.rejected, (state: EvolutionList) => {
        state.isLoading = false;
      });
  },
});
export const EvolutionReducer = EvolutionSlice.reducer;
export const EvolutionAction = EvolutionSlice.actions;
