import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetContestList, GetImageList } from "redux/ContestSlice/ContestAsyncThunk";

export async function getAllContestDetails(payload: GetContestList) {
    try {
      const response = await appClient.get(
        api.endPoint.contestType +
          "?offset=" +
          payload.offset +
          "&limit=" +
          payload.limit
      );
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getContestDetails(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.contestType + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }