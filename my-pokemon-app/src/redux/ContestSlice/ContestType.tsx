export interface Contest {
    id: number;
    name: string;
    appeal: number;
    jam: number;
    url: string;
    background :number
    fontColor:number
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

export interface ContestList {
    list:Contest[]
    id: number
    name: string
    limit: number;
    offset: number;
    total: number;
    flavor_text_entries:FlavorText[]
    effect_entries: Effect[]
    isLoading: boolean;
    imagePokemonList: ImagePokemon;
  }


  export interface FlavorText {
    flavor_text: string;
    language:Language[]
  }
  export interface Effect{
    effet: string;
  }

  export interface Language {
    name: string;
    url: string;
  }

  export interface names {
    name: string;
  }
