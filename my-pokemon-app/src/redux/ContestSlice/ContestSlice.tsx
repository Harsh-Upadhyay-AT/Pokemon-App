import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllContestDetailsAction, getContestDetailsAction } from "./ContestAsyncThunk";
import { ContestList } from "./ContestType";

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

const initialState: ContestList = {
    list: [],
    id: 1,
    imagePokemonList: initialImage,
    offset: constant.offset.defaultNumber,
    limit: constant.offset.size,
    total: constant.offset.defaultTotal,
    name: "",
    flavor_text_entries: [],
    effect_entries: [],
    isLoading: false
};

const ContestSlice = createSlice({
  name: "Contest",
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
      .addCase(getAllContestDetailsAction.pending, (state: ContestList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllContestDetailsAction.fulfilled,
        (state: ContestList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getContestDetailsAction.pending, (state: ContestList) => {
        state.isLoading = true;
      })
      .addCase(
        getContestDetailsAction.fulfilled,
        (state: ContestList, { payload }) => {
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
      .addCase(getContestDetailsAction.rejected, (state: ContestList) => {
        state.isLoading = false;
      });
  },
});
export const ContestReducer = ContestSlice.reducer;
export const ContestAction = ContestSlice.actions;
