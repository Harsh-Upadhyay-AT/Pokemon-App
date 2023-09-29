import { createSlice } from "@reduxjs/toolkit";
import { BerryList } from "./BerryType";
import constant from "config/constant/constant";
import { getAllBerryDetailsAction, getBerryDetailsAction } from "./BerryAsyncThunk";

const initialImage = {
    name: '',
    id:1,
    max_harvest:1,
    natural_gift_power: 1,
    smoothness: 1,
    soil_dryness: 1,
    firmness: 1,
  };

const initialState: BerryList = {
  list: [],
  isLoading: false,
  id: 1,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  name: "",
  imagePokemonList: initialImage
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
    resetSpecificPerson(state) {
      state.imagePokemonList = initialImage
    }
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
      .addCase(getAllBerryDetailsAction.rejected, (state: BerryList)=> {
        state.isLoading = false;
      })
      .addCase(getBerryDetailsAction.pending, (state: BerryList) => {
        state.isLoading = true;
      })
      .addCase(
        getBerryDetailsAction.fulfilled,
        (state: BerryList, { payload }) => {
          if (payload) {
            const { data, spec, name,  growth_time, max_harvest, natural_gift_power, smoothness, soil_dryness } = payload;
            state.imagePokemonList = {
              ...data,
              ...spec,
              name,
              growth_time,
              max_harvest,
              natural_gift_power,
              smoothness,
              soil_dryness
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
