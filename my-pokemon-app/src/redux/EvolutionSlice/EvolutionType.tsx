export interface Evolution {
    name: string;
    id: number;
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
  }

export interface EvolutionList {
    list:Evolution[]
    id: number
    name: string
    limit: number;
    offset: number;
    total: number;
    firmness: number
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

 