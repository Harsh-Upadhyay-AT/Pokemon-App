export interface Evolution {
    name: string;
    id: number;
    url: string;
    game_index: number;
    is_hidden: boolean;
    height: number;
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
    background:number;
    EvolutionTriggerList:EvolutionTrigger
    ChainList:EvolutionDetails
  }


  export interface Language {
    name: string;
    url: string;
  }

  export interface names {
    name: string;
  }


  interface EvolutionTrigger {
    id: number;
    name: string;
    names: {
      name: string;
      language: Language;
    }[];
    pokemon_species: PokemonSpecies[];
  }


  interface PokemonChain {
    id: number;
    baby_trigger_item: null;

  }



  interface PokemonSpecies {
    name: string;
    url: string;
  }
  
  interface EvolutionDetails {
    item: null | string;
    gender: null | string;
    held_item: null | string;
    known_move: null | string;
    known_move_type: null | string;
    location: null | string;
    min_level: number;
    min_happiness: null | string;
    min_beauty: null | string;
    min_affection: null | string;
    needs_overworld_rain: boolean;
    party_species: null | string;
    party_type: null | string;
    relative_physical_stats: null | string;
    time_of_day: string;
    trade_species: null | string;
    turn_upside_down: boolean;
  }


