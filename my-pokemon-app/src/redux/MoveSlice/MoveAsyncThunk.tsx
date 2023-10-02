import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMoveDetails, getMove } from "Service/MoveService";
import constant from "config/constant/constant";

export interface GetMoveList {
    id: number;
    offset: number;
    limit: number;
}

export interface GetMoveAilment {
  id: number;
}

export interface GetMove {
  id: number;
}

export interface GetMoveCategories {
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

export const getMoveAction = createAsyncThunk(
    "moveDetails/getMoveAction",
    async (payload: GetMove, { dispatch, getState }) => {
      try {
        const response = await getMove(payload);
        if (response.status === constant.APIResponse.defaultStatusCode) {
          return {
            data: response?.data
          };
        } else if (response.status === constant.APIResponse.errorStatusCode) {
          return response?.data?.message;
        }
      } catch (error) {
        return error;
      }
    }
  );


  // export const getMoveAilment = createAsyncThunk(
  //   "moveDetails/getMoveAilment",
  //   async (payload: GetMoveAilment, { dispatch, getState }) => {
  //     try {
  //       const response = await getMoveAilments(payload);
  //       console.log(response,"testonetest")
  //       if (response.status === constant.APIResponse.defaultStatusCode) {
  //         return {
  //           data: response?.data
  //         };
  //       } else if (response.status === constant.APIResponse.errorStatusCode) {
  //         return response?.data?.message;
  //       }
  //     } catch (error) {
  //       return error;
  //     }
  //   }
  // );

  
