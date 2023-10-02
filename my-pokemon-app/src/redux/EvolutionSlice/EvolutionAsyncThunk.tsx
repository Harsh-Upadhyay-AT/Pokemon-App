import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEvolutionDetails, getEvolutionChain, getEvolutionTriggers } from "Service/EvolutionService";
import constant from "config/constant/constant";


export interface GetEvolutionList {
    id: number;
    offset: number;
    limit: number;
  }

  export interface GetEvolutionChain {
    id: number;
  }

  
  export interface GetEvolutionTriggers  {
    id: number;
  }
  export const getAllEvolutionDetailsAction = createAsyncThunk(
    "details/getAllBerryDetailsAction",
    async (payload: GetEvolutionList, { dispatch, getState }) => {
      try {
        const response = await getAllEvolutionDetails(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data?.results,
            count: response?.data?.count,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );
  export const getEvolutionChainsAction = createAsyncThunk(
    "evolutionDetails/getEvolutionChainsAction",
    async (payload: GetEvolutionChain, { dispatch, getState }) => {
      try {
        const response = await getEvolutionChain(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );
  

  export const getEvolutionTriggersAction = createAsyncThunk(
    "evolutionDetails/getEvolutionTriggersAction",
    async (payload: GetEvolutionTriggers, { dispatch, getState }) => {
      try {
        const response = await getEvolutionTriggers(payload);
        console.log(response,'testfasdf')
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );