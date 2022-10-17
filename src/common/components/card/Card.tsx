import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};
const Card: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="w-full px-10 py-10 rounded-lg shadow-lg lg:max-w-sm border-gray-400">
      <img
        className="object-cover w-full max-w-fit "
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        alt="image"
      />
      <div className="p-4 content-center">
        <p className="mb-2 leading-normal text-center">Charmander</p>
        <button className="bg-red-600 rounded-md px-2.5 ">Fire</button>
      </div>
    </div>
  );
};

export default Card;
