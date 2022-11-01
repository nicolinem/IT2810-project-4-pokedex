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
      className="w-full flex flex-col content-start justify-start items-center px-10 py-4 bg-white border-gray-400 rounded-lg shadow-lg lg:max-w-sm hover:cursor-pointer hover:bg-[#b8c1d4]"
    >
      <img
        className="object-cover w-full max-w-fit"
        src={getImageUrl(pokemon.pokemonID)}
        alt="image of pokemon"
        height={15}
        width={15}
      /> 
      <div className="justify-self-center flex-col p-4 max-w-fit w-30 h-30">
        <p className="mb-2 text-sm font-semibold leading-normal tracking-widest text-center uppercase xxs:text-xxs xs:text-xs sm:text-sm xl:text-lg lg:text-sm text-transform:">
          {pokemon.name}
        </p>
        <div className="space-y-2 grid top-0 place-items-center tracking-widest ">
          {pokemon.type2 === "" ? (
            <Type type={matchType(pokemon.type1)}></Type>
          ) : (
            <>
              <div className="space-y-2 justify-center">
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
