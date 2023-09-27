import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMoveDetails, getMoveDetails } from "Service/MoveService";
import constant from "config/constant/constant";

export interface GetMoveList {
    id: number;
    offset: number;
    limit: number;
}

export interface GetImageList {
    id: number;
}

export const getAllMoveDetailsAction = createAsyncThunk(
    "details/getAllContestDetailsAction",
    async (payload:GetMoveList, { dispatch, getState}) => {
        try {
            const response = await getAllMoveDetails(payload);
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

export const getMoveDetailsAction = createAsyncThunk(
    "moveDetails/getContestDetailsAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getMoveDetails(payload);
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
