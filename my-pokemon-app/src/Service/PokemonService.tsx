import api from "../config/api";
import { GetAbilityList } from "../redux/PokemonDetailSlice/PokemonDetailAsyncThunk";
import { GetImageList, GetPokemonList } from "../redux/PokemonSlice/PokemonAsyncThunk";
import { hasError, hasSuccess } from "./ApiHepler";
import { appClient } from "./networkService";

export async function getAllDetails(payload: GetPokemonList) {
    try {
        const response = await appClient.get(api.endPoint.pokemon + "?page=" + payload.page + "&limit=" + payload.limit);
        return hasSuccess(response?.data)
    }
    catch(error){
        return hasError(error)
    }
}

export async function getPokemonDetails(payload: GetImageList) {

    try{
        const response = await appClient.get(api.endPoint.ditto + payload.id)
        return hasSuccess(response?.data)
    }
    catch(error) {
        return hasError(error)
    }
}

export async function getAbilityDetails(payload: GetAbilityList) {
    try{
        const response = await appClient.get(api.endPoint.ability + payload.id);
        return hasSuccess(response?.data)
    }
    catch(error) {
        return hasError(error)
    }
}