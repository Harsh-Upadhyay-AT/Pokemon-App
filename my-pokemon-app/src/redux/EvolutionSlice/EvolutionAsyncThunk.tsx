import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEvolutionDetails, getEvolutionDetails } from "Service/EvolutionService";
import constant from "config/constant/constant";


export interface GetEvolutionList {
    id: number;
    offset: number;
    limit: number;
  }

  export interface GetImageList {
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
  export const getEvolutionDetailsAction = createAsyncThunk(
    "evolutionDetails/getEvolutionDetailsAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getEvolutionDetails(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
            spec: response?.data?.species,
            name: response?.data?.name,
            order: response?.data?.order,
            weight: response?.data?.weight,
            height: response?.data?.height,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );
  