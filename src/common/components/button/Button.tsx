import React from "react";
import { matchTypeColor } from "../../../types/pokemon.utils";
import { PokemonType } from "../../../types/types.utils";

const pokemon = PokemonType;
type ButtonType = "round" | "primary" | "secondary" | "tertiary";
export const buttonTypeMapping: Record<ButtonType, string> = {
  round: "rounded-full h-16 w-16 bg-[#d15860] text-white",
  primary: `text-white text-sm rounded-full p-2 px-4 hover:bg-gray-600 active:bg-gray-700 focus:outline-none flex-row bg-gray-500 ${matchTypeColor(
    pokemon.toString()
  )}`,
  secondary:
    "bg-red-800 hover:bg-[#C24F4F] border-red-800 text-[#FFFFFF] font-semibold rounded-full border-4 h-16 w-16",
  tertiary:
    "text-black text-sm font-bold rounded-full w-28 h-7 outline-double outline-8 outline-white-500",
};

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  buttonType?: ButtonType;
  type?: "submit" | undefined
  //submitType?: () => void;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  buttonType = "round",
  type,
}) => {
  return (
    <button type={type} onClick={onClick} className={`${buttonTypeMapping[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
