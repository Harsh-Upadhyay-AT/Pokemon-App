export interface Move {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    priority: number;
    power: number;
    
    
}

export interface MoveMetaData {
    min_hits: number;
    max_hits: number;
    min_turns: number;
    max_turns: number;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}

export interface MoveStatChange {
    change: number;
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

export interface MoveList {
    list:Move[]
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

