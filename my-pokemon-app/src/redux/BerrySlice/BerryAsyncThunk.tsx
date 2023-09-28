import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBerryDetails, getBerryDetails } from "Service/BerryService";
import constant from "config/constant/constant";

export interface GetBerryList {
    id: number;
    offset: number;
    limit: number;
  }

  export interface GetBerryDetailsList {
    // url:number;
    id: number;
  }

  export const getAllBerryDetailsAction = createAsyncThunk(
    "details/getAllBerryDetailsAction",
    async (payload: GetBerryList, { dispatch, getState }) => {
      try {
        const response = await getAllBerryDetails(payload);
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
  export const getBerryDetailsAction = createAsyncThunk(
    "berryDetails/getBerryDetailsAction",
    async (payload: GetBerryDetailsList, { dispatch, getState }) => {
      try {
        const response = await getBerryDetails(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
            spec: response?.data?.species,
            name: response?.data?.name,
            growthTime: response?.data?.growth_time,
            maxHarvest : response?.data?.max_harvest,
            naturalGiftPower: response?.data?.natural_gift_power
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );
