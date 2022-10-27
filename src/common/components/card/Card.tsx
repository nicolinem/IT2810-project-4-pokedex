import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../../api/utils/match.utils";
import { matchType, Pokemon } from "../../../types/pokemon.utils";
import TypeButton from "../button/TypeButton";

type Props = {
  children?: React.ReactNode;
  className?: string;
  pokemon: Pokemon;
};



const Card: React.FC<Props> = ({ children, pokemon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
  navigate("/pokemon/" + pokemon.pokemonID);
}


  return (
    <div onClick={ handleClick} className="w-full px-8 py-6 border-gray-400 rounded-lg shadow-lg lg:max-w-sm hover:cursor-pointer">
      <img
        className="object-cover w-full max-w-fit "
        src={getImageUrl(pokemon.pokemonID)}
        alt="image"
        height={15}
        width={15}
      />
      <div className="content-center justify-center p-4">
        <p className="mb-2 font-semibold leading-normal text-center uppercase text-transform:">
          {pokemon.name}
        </p>
        <div className="grid grid-cols-2">
          <TypeButton type={matchType(pokemon.type1)} activate={false}></TypeButton>
          <TypeButton type={matchType(pokemon.type2)} activate={false}></TypeButton>
        </div>
      </div>
      </div>
  );
};

export default Card;

