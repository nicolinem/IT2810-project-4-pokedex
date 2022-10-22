import React from "react";
import { getImageUrl } from "../../../api/utils/match.utils";
import { matchType, Pokemon } from "../../../types/pokemon.utils";
import TypeButton from "../TypeButton";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  pokemon: Pokemon;
};

const Card: React.FC<Props> = ({ children, onClick, pokemon }) => {
  return (
    <div className="w-full px-10 py-10 border-gray-400 rounded-lg shadow-lg lg:max-w-sm">
      <img
        className="object-cover w-full max-w-fit "
        src={getImageUrl(pokemon.pokemonID)}
        alt="image"
        height={15}
        width={15}
      />
      <div className="content-center p-4">
        <p className="mb-2 font-semibold leading-normal text-center uppercase text-transform:">
          {pokemon.name}
        </p>
        <div className="grid grid-cols-2">
          <TypeButton type={matchType(pokemon.type1)}></TypeButton>
          <TypeButton type={matchType(pokemon.type2)}></TypeButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
