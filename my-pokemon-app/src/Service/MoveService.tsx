import api from "config/api";
import { hasSuccess, hasError } from "./ApiHepler";
import { appClient } from "./networkService";
import { GetMove, GetMoveAilment, GetMoveCategories, GetMoveList } from "redux/MoveSlice/MoveAsyncThunk";


export async function getAllMoveDetails(payload: GetMoveList) {
  try {
    const response = await appClient.get(
      api.endPoint.move +
      "?offset=" +
      payload.offset +
      "&limit=" +
      payload.limit
      );
      console.log(response,"qwerqwer")
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMove(payload: GetMove) {
    try {
      const response = await appClient.get(api.endPoint.move + payload.id);
      console.log(response,"zxcvxzcv")
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveAilments (payload: GetMoveAilment) {
    try {
      const response = await appClient.get(api.endPoint.moveAilments + payload.id);
      console.log(response,"zxcvxzcvsdfa")
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }

  export async function getMoveCategories(payload: GetMoveCategories) {
    try {
      const response = await appClient.get(api.endPoint.moveCategory + payload.id);
      return hasSuccess(response?.data);
    } catch (error) {
      return hasError(error);
    }
  }