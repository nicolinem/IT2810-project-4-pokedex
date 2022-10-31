import { matchType, matchTypeColor } from "../../types/pokemon.utils";
import { PokemonType } from "../../types/types.utils";

type props = {
  type: PokemonType;
};
export const Type: React.FC<props> = ({ type }) => {
  const styling = `flex justify-around text-black text-sm font-bold md:max-lg:flex rounded-full w-24 h-7 pt-1 xxs:h-4 xs:h-5 sm:h-6 lg:h-7 xxs:w-14 xs:w-16 sm:w-20 lg:w-24 xxs:text-xxs xs:text-xs sm:text-sm lg:text-lg ${matchTypeColor(
    matchType(type)
  )}`;
  return (
    <div className="max-w-fit ">
      <div className={styling}>{type}</div>
    </div>
  );
};
