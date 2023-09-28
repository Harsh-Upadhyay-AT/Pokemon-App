import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEncounterDetails, getEncounterDetails } from "Service/EncounterService";
import constant from "config/constant/constant";

export interface GetEncounterList {
    id: number;
    offset: number;
    limit: number;
}

export interface GetImageList {
    id: number;
}

export const getAllEncounterDetailsAction = createAsyncThunk(
    "details/getAllContestDetailsAction",
    async (payload:GetEncounterList, { dispatch, getState}) => {
        try {
            const response = await getAllEncounterDetails(payload);
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

export const getEncounterDetailsAction = createAsyncThunk(
    "encounterDetails/getEncounterDetailsAction",
    async (payload: GetImageList, { dispatch, getState }) => {
      try {
        const response = await getEncounterDetails(payload);
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
  