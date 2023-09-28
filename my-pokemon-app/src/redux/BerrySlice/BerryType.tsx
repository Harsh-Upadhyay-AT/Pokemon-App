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
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    name: string;
    url: string;
    id: number;
    weight: number;
    order: number;
    height: number;
  }

export interface BerryList {
    list:Berry[]
    id: number
    name: string
    limit: number;
    offset: number;
    growth_time: number
    total: number;
    max_harvest: number
    natural_gift_power	: number
    smoothness: number
    soil_dryness: number
    firmness: number
    isLoading: boolean;
    imagePokemonList: ImagePokemon;
    weight: number;
    height: number;
    order: number;
  }


  export interface Language {
    name: string;
    url: string;
  }

  export interface names {
    name: string;
  }

 