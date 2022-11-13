import { Pokemon } from "../types/pokemon.utils"

// export type PokemonStats = {
//     "Speed": number,
//     "Special Attack": number,
//     "Special Defence": number,
//     "Attack": number,
//     "Defence": number,
//     "Hp": number
// }
export type PokemonStat = {
    name: string, 
    value: number
}


export const parsePokemonData = (pokemon: Pokemon): PokemonStat[]  => {
    const { speed, sp_attack, sp_defence, attack, defence, hp } = pokemon;
    
    const stats = [{ name: "Speed", value: speed },
        { name: "Special Attack", value: sp_attack },
        { name: "Special Defence", value: sp_defence },
        { name: "Attack", value: attack },
        { name: "Defence", value: defence },
        { name: "Hp", value: hp }]
    
    return stats
    
}