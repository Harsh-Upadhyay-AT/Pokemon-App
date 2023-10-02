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
  }


  export interface Language {
    name: string;
    url: string;
  }

  export interface names {
    name: string;
  }

  interface EvolutionChainDetails {
    item: null;
    trigger: EvolutionTrigger;
    gender: null;
    held_item: null;
    known_move: null;
    known_move_type: null;
    location: null;
    min_level: number;
    min_happiness: null;
    min_beauty: null;
    min_affection: null;
    needs_overworld_rain: boolean;
    party_species: null;
    party_type: null;
    relative_physical_stats: null;
    time_of_day: string;
    trade_species: null;
    turn_upside_down: boolean;
  }
  
  interface EvolutionChain {
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
    evolution_details: null;
    evolves_to: EvolutionChain[];
  }
  
  interface PokemonEvolutionInfo {
    id: number;
    baby_trigger_item: null;
    chain: EvolutionChain;
  }


  
  interface PokemonSpecies {
    name: string;
    url: string;
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