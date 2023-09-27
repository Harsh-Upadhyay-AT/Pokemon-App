export interface Move {
    id: number;
    url: string;
    name: string;
    accuracy: number;
    effect_chance: number;
    priority: number;
    background :number
    fontColor:number
    power: number;
    contest_combos: ContestType[]
    contest_effect: ContestEffect[]
    damage_class: MoveDamageClass[]
    past_values: PastMoveStatValues[]
    stat_changes: MoveStatChange[]
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


export interface MoveDamageClass {
  id: number;
  name: string;
}

export interface ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  
}


export interface IMoveStatChange {
  change: number;

}
export interface ContestType {
  id: number;
  name: string;
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

  export interface PastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
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

