export interface Encounter {
    id: number;
    background :number
    fontColor:number
    name: string;
    url: string;
}

export interface ImagePokemon {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    name: string;
    url: string;
    id: number;
  }

export interface EncounterList {
    list:Encounter[]
    id: number
    name: names[]
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
    url: string;
  }

 