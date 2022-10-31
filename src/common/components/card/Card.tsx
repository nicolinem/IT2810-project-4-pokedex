import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../../api/utils/match.utils";
import { matchType, Pokemon } from "../../../types/pokemon.utils";
import { Type } from "../Type";

type Props = {
  children?: React.ReactNode;
  className?: string;
  pokemon: Pokemon;
};

const Card: React.FC<Props> = ({ children, pokemon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pokemon/" + pokemon.pokemonID);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full px-10 py-10 border-gray-400 rounded-lg shadow-lg bg- lg:max-w-sm hover:cursor-pointer"
    >
      <img
        className="object-cover w-full max-w-fit"
        src={getImageUrl(pokemon.pokemonID)}
        alt="image"
        height={15}
        width={15}
      />
      <div className="content-center justify-center p-4 mx-auto max-w-fit w-30 h-30">
        <p className="mb-2 text-sm font-semibold leading-normal text-center uppercase xxs:text-xxs xs:text-xs sm: xl:text-xl lg:text-lg text-transform:">
          {pokemon.name}
        </p>
        <div className="grid grid-cols-2 tracking-widest max-w-fit">
          {pokemon.type2 === "" ? (
            <Type type={matchType(pokemon.type1)}></Type>
          ) : (
            <>
              <div className="space-x-0.5 space-y-1">
                <Type type={matchType(pokemon.type1)} />
                <Type type={matchType(pokemon.type2)} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
