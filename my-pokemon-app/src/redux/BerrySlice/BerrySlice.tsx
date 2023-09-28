import { createSlice } from "@reduxjs/toolkit";
import { BerryList } from "./BerryType";
import constant from "config/constant/constant";
import { getAllBerryDetailsAction, getBerryDetailsAction } from "./BerryAsyncThunk";

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

const initialState: BerryList = {
  list: [],
  isLoading: false,
  id: 1,
  growth_time: 1,
  max_harvest: 1,
  natural_gift_power: 1,
  smoothness: 1,
  soil_dryness: 1,
  firmness: 1,
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  name: "",
  weight: 1,
  height: 1,
  order: 1,

};

const BerrySlice = createSlice({
  name: "Berry",
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
      .addCase(getAllBerryDetailsAction.pending, (state: BerryList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllBerryDetailsAction.fulfilled,
        (state: BerryList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getBerryDetailsAction.pending, (state: BerryList) => {
        state.isLoading = true;
      })
      .addCase(
        getBerryDetailsAction.fulfilled,
        (state: BerryList, { payload }) => {
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
      .addCase(getBerryDetailsAction.rejected, (state: BerryList) => {
        state.isLoading = false;
      });
  },
});
export const BerryReducer = BerrySlice.reducer;
export const BerryAction = BerrySlice.actions;
