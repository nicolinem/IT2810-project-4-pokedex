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

export const matchTypeColor = (type: string) => {
  switch (type) {
    case "normal":
      return "bg-[#A8A878] hover:bg-[#C6C6A9]";
    case "fire":
      return "bg-[#F08030] hover:bg-[#F5AC78]";
    case "water":
      return "bg-[#6890F0] hover:bg-[#9DB7F5]";
    case "electric":
      return "bg-[#F8D030] hover:bg-[#FAE078]";
    case "grass":
      return "bg-[#78C850] hover:bg-[#A7DB8D]";
    case "ice":
      return "bg-[#98D8D8] hover:bg-[#BCE6E6]";
    case "fighting":
      return "bg-[#C03028] hover:bg-[#D67873]";
    case "poison":
      return "bg-[#A040A0]  hover:bg-[#C183C1]";
    case "ground":
      return "bg-[#E0C068] hover:bg-[#EBD69D]";
    case "flying":
      return "bg-[#A890F0] hover:bg-[#C6B7F5]";
    case "psychic":
      return "bg-[#F85888] hover:bg-[#FA92B2]";
    case "bug":
      return "bg-[#A8B820] hover:bg-[#C6D16E]";
    case "rock":
      return "bg-[#B8A038] hover:bg-[#D1C17D]";
    case "ghost":
      return "bg-[#705898] hover:bg-[#A292BC]";
    case "dragon":
      return "bg-[#7038F8] hover:bg-[#A27DFA]";
    case "dark":
      return "bg-[#705848] hover:bg-[#A29288]";
    case "steel":
      return "bg-[#B8B8D0] hover:bg-[#D1D1E0]";
    case "fairy":
      return "bg-[#EE99AC] hover:bg-[#F4BDC9]";
  }
};
