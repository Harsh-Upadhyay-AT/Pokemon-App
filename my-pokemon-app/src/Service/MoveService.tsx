import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetImageList } from "redux/PokemonSlice/PokemonAsyncThunk";
import { GetMoveList } from "redux/MoveSlice/MoveAsyncThunk";


export async function getAllMoveDetails(payload: GetMoveList) {
    try {
      const response = await appClient.get(
        api.endPoint.move +
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

  export async function getMoveDetails(payload: GetImageList) {
    try {
      const response = await appClient.get(api.endPoint.move + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }