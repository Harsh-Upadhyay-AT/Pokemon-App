export interface Berry {
    name: string;
    id: number;
    background :number
    capitalizedText:number
    fontColor:number
    color:number
    url: string;
    game_index: number;
    is_hidden: boolean;
    height: number;
}

export interface ImagePokemon {
    name: string;
    id: number;
    max_harvest: number;
    natural_gift_power: number;
    smoothness: number;
    soil_dryness: number;
    firmness: number;
  }

export interface BerryList {
    list:Berry[]
    id: number
    name: string
    limit: number;
    offset: number;
    total: number;
    isLoading: boolean;
    imagePokemonList: ImagePokemon;
  }

  export interface Language {
    name: string;
    url: string;
  }

  export interface names {
    name: string;
  }
