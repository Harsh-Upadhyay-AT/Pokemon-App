import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import {
  getAllMoveDetailsAction,
  getMoveAilmentAction,
  getMoveBattleStylesAction,
  getMoveTargetAction,
} from "./MoveAsyncThunk";
import { MoveList } from "./MoveType";

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

const MoveAilments = {
  id: 0,
  name: "",
  moves: [
    {
      name: "",
      url: "",
    },
  ],
  names: [
    {
      name: "",
      language: {
        name: "",
        url: "",
      },
    },
  ],
};

const initialState: MoveList = {
  list: [],
  id: 1,
  imagePokemonList: initialImage,
  offset: constant.offset.defaultNumber,
  limit: constant.offset.size,
  total: constant.offset.defaultTotal,
  isLoading: false,
  name: "",
  AilmentsList: MoveAilments,
};

const MoveSlice = createSlice({
  name: "Move",
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
      .addCase(getAllMoveDetailsAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getAllMoveDetailsAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )

      .addCase(getMoveAilmentAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveAilmentAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            state.AilmentsList = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getMoveAilmentAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })

      .addCase(getMoveBattleStylesAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })
      .addCase(getMoveBattleStylesAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveBattleStylesAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            // state.EncounterConditionList = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )

      .addCase(getMoveTargetAction.rejected, (state: MoveList) => {
        state.isLoading = false;
      })
      .addCase(getMoveTargetAction.pending, (state: MoveList) => {
        state.isLoading = true;
      })
      .addCase(
        getMoveTargetAction.fulfilled,
        (state: MoveList, { payload }) => {
          if (payload?.data) {
            // state.SpecificMoveList = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      );
  },
});
export const MoveReducer = MoveSlice.reducer;
export const MoveAction = MoveSlice.actions;
