import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContestDetails, getContestDetails } from "Service/ContestService";
import constant from "config/constant/constant";

export interface GetContestList {
    id: number;
    offset: number;
    limit: number;
}

export interface GetImageList {
    url:number
    id: number;
}

export const getAllContestDetailsAction = createAsyncThunk(
    "details/getAllContestDetailsAction",
    async (payload:GetContestList, { dispatch, getState}) => {
        try {
            const response = await getAllContestDetails(payload);
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

export const getContestDetailsAction = createAsyncThunk(
    "berryDetails/getContestDetailsAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getContestDetails(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data,
            spec: response?.data?.species,
            name: response?.data?.name,
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );
  