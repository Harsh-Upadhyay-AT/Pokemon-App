import { createSlice } from "@reduxjs/toolkit";
import constant from "config/constant/constant";
import { getAllEvolutionDetailsAction, getEvolutionChainsAction, getEvolutionTriggersAction } from "./EvolutionAsyncThunk";
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


  const EvolutionChain = {
    id: 0,
    baby_trigger_item: null,
    chain: {
      is_baby: false,
      species: {
        name: "",
        url: "",
      },
      evolution_details: null,
      evolves_to: [
        {
          is_baby: false,
          species: {
            name: "",
            url: "",
          },
          evolution_details: [
            {
              item: null,
              trigger: {
                name: "",
                url: "",
              },
              gender: null,
              held_item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_level: 0,
              min_happiness: null,
              min_beauty: null,
              min_affection: null,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              relative_physical_stats: null,
              time_of_day: "",
              trade_species: null,
              turn_upside_down: false,
            },
          ],
          evolves_to: [],
        },
      ],
    },
  };

  const EvolutionTrigger={
    id: 0,
    name: "",
    names: [
      {
        name: "",
        language: {
          name: "",
          url: "",
        },
      },
    ],
    pokemon_species: [
      {
        name: "",
        url: "",
      },
    ],
  };

  const Chain =
  {
    "id": 0,
    "baby_trigger_item": null,
  }

  const ChainDetails = {
    item: "",
    gender: "",
    held_item: "",
    known_move: "",
    known_move_type: "",
    location: "",
    min_level: 0,
    min_happiness: "",
    min_beauty: "",
    min_affection: "",
    needs_overworld_rain: false,
    party_species: "",
    party_type: "",
    relative_physical_stats: "",
    time_of_day: "",
    trade_species: "",
    turn_upside_down: false,
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
  background: 0,
  EvolutionTriggerList: EvolutionTrigger,
  ChainList: ChainDetails
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
        getAllEvolutionDetailsAction.fulfilled,
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
      .addCase(getEvolutionChainsAction.pending, (state: EvolutionList) => {
        state.isLoading = true;
      })
      .addCase(
        getEvolutionChainsAction.fulfilled,
        (state: EvolutionList, { payload }) => {
          if (payload?.data) {
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getEvolutionChainsAction.rejected, (state: EvolutionList) => {
        state.isLoading = false;
      })


      .addCase(getEvolutionTriggersAction.rejected, (state: EvolutionList) => {
        state.isLoading = false;
      }).addCase(getEvolutionTriggersAction.pending, (state: EvolutionList) => {
        state.isLoading = true;
      })
      .addCase(
        getEvolutionTriggersAction.fulfilled,
        (state: EvolutionList, { payload }) => {
          if (payload?.data) {
            state.EvolutionTriggerList = payload?.data;
            state.total = payload?.count;
          } else {
              state.list = [];
          }
          state.isLoading = false;
        }
      )
  },
});
export const EvolutionReducer = EvolutionSlice.reducer;
export const EvolutionAction = EvolutionSlice.actions;
