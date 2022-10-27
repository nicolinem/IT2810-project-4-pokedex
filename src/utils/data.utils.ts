import { Pokemon } from "../types/pokemon.utils"

export type PokemonStats = {
    "Speed": number,
    "Special Attack": number,
    "Special Defence": number,
    "Attack": number,
    "Defence": number,
    "Hp": number
}


export const parsePokemonData = (pokemon: Pokemon): PokemonStats  => {
    const { speed, sp_attack, sp_defence, attack, defence, hp } = pokemon;
    

    return {
        "Speed": speed,
        "Special Attack": sp_attack,
        "Special Defence": sp_defence,
        "Attack": attack,
        "Defence": defence,
        "Hp": hp
    }
}