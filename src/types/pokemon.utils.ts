import { PokemonType } from "./types.utils";

export interface Pokemon {
  pokemonID: number;
  name: string;
  height: number;
  weight: number;
  speed: number;
  sp_attack: number;
  sp_defence: number;
  attack: number;
  defence: number;
  type1: string;
  type2: string;
  hp: number;
  imageUrl: string;
}

export const matchType = (type: string) => {
  if (type === "normal") {
    return PokemonType.Normal;
  }
  if (type === "fire") {
    return PokemonType.Fire;
  }
  if (type === "water") {
    return PokemonType.Water;
  }
  if (type === "electric") {
    return PokemonType.Electric;
  }
  if (type === "grass") {
    return PokemonType.Grass;
  }
  if (type === "ice") {
    return PokemonType.Ice;
  }
  if (type === "fighting") {
    return PokemonType.Fighting;
  }
  if (type === "poison") {
    return PokemonType.Poison;
  }
  if (type === "ground") {
    return PokemonType.Ground;
  }
  if (type === "flying") {
    return PokemonType.Flying;
  }
  if (type === "psychic") {
    return PokemonType.Psychic;
  }
  if (type === "bug") {
    return PokemonType.Bug;
  }
  if (type === "rock") {
    return PokemonType.Rock;
  }
  if (type === "ghost") {
    return PokemonType.Ghost;
  }
  if (type === "dragon") {
    return PokemonType.Dragon;
  }
  if (type === "dark") {
    return PokemonType.Dark;
  }
  if (type === "steel") {
    return PokemonType.Steel;
  }
  if (type === "fairy") {
    return PokemonType.Fairy;
  }
  return PokemonType.Normal;
};
