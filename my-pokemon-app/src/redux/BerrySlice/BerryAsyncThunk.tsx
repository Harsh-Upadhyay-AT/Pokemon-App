import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBerryDetails, getBerryDetails } from "Service/BerryService";
import constant from "config/constant/constant";

export interface GetBerryList {
    id: number;
    offset: number;
    limit: number;
  }

  export interface GetImageList {
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
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getBerryDetails(payload);
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
