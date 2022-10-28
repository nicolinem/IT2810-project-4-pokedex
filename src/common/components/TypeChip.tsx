import { PokemonType } from "../../types/types.utils"
import { matchType, matchTypeColor } from "../../types/pokemon.utils";

type props = {
    type: PokemonType;
}
export const TypeChip: React.FC<props> = ({type}) => {
    const styling = `flex justify-around text-black text-sm font-bold rounded-full w-24 h-7 pt-1 ${matchTypeColor(
        matchType(type))}`
    return (
        <div className={styling}>
            {type}
        </div>
    )
}