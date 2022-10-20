import React from "react";
import { getImageUrl } from "../../../api/utils/match.utils";
import { Pokemon } from "../../../types/pokemon.utils";
import TypeButton from "../TypeButton";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  pokemon: Pokemon;
};

const Card: React.FC<Props> = ({ children, onClick, pokemon }) => {
  return (
    <div className="w-full px-10 py-10 border-gray-400 rounded-lg shadow-lg lg:max-w-sm">
      <img
        className="object-cover w-full max-w-fit "
        src={getImageUrl(pokemon.id)}
        alt="image"
      />
      <div className="content-center p-4">
        <p className="mb-2 leading-normal text-center">{pokemon.name}</p>
        <TypeButton type={pokemon.type1}></TypeButton>
        <TypeButton type={pokemon.type2}></TypeButton>
      </div>
    </div>
  );
};

export default Card;
