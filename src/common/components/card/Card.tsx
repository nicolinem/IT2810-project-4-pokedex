import React from "react";
import { getImageUrl } from "../../../api/utils/match.utils";
import { Pokemon } from "../../../types/pokemon.utils";
import { PokemonType } from "../../../types/types.utils";
import TypeButton from "../TypeButton";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  pokemon: Pokemon;
  pokemonType: PokemonType;
};

const Card: React.FC<Props> = ({ children, onClick, pokemon, pokemonType }) => {
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
        <TypeButton type1={pokemonType} type2={pokemonType}></TypeButton>
        <TypeButton type1={pokemonType} type2={pokemonType}></TypeButton>
      </div>
    </div>
  );
};

export default Card;
