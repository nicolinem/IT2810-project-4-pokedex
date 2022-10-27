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
      return "bg-[#A8A878]";
    case "fire":
      return "bg-[#F08030]";
    case "water":
      return "bg-[#6890F0]";
    case "electric":
      return "bg-[#F8D030]";
    case "grass":
      return "bg-[#78C850]";
    case "ice":
      return "bg-[#98D8D8]";
    case "fighting":
      return "bg-[#C03028]";
    case "poison":
      return "bg-[#A040A0]";
    case "ground":
      return "bg-[#E0C068]";
    case "flying":
      return "bg-[#A890F0]";
    case "psychic":
      return "bg-[#F85888]";
    case "bug":
      return "bg-[#A8B820]";
    case "rock":
      return "bg-[#B8A038]";
    case "ghost":
      return "bg-[#705898]";
    case "dragon":
      return "bg-[#7038F8]";
    case "dark":
      return "bg-[#705848]";
    case "steel":
      return "bg-[#B8B8D0]";
    case "fairy":
      return "bg-[#EE99AC]";
  }
};

export const matchTypeHover = (type: string) => {
  switch (type) {
    case "normal":
      return " hover:bg-[#C6C6A9]";
    case "fire":
      return " hover:bg-[#F5AC78]";
    case "water":
      return " hover:bg-[#9DB7F5]";
    case "electric":
      return " hover:bg-[#FAE078]";
    case "grass":
      return " hover:bg-[#A7DB8D]";
    case "ice":
      return " hover:bg-[#BCE6E6]";
    case "fighting":
      return " hover:bg-[#D67873]";
    case "poison":
      return "  hover:bg-[#C183C1]";
    case "ground":
      return " hover:bg-[#EBD69D]";
    case "flying":
      return " hover:bg-[#C6B7F5]";
    case "psychic":
      return " hover:bg-[#FA92B2]";
    case "bug":
      return " hover:bg-[#C6D16E]";
    case "rock":
      return " hover:bg-[#D1C17D]";
    case "ghost":
      return " hover:bg-[#A292BC]";
    case "dragon":
      return " hover:bg-[#A27DFA]";
    case "dark":
      return " hover:bg-[#A29288]";
    case "steel":
      return " hover:bg[#D1D1E0]";
    case "fairy":
      return " hover:bg-[#F4BDC9]";
  }
};

