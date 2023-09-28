import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetBerryList, GetImageList } from "redux/BerrySlice/BerryAsyncThunk";

export async function getAllBerryDetails(payload: GetBerryList) {
    try {
      const response = await appClient.get(
        api.endPoint.berry +
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

  export async function getBerryDetails(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.berry + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }