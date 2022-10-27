import React from "react";
import { matchTypeColor } from "../../../types/pokemon.utils";
import { PokemonType } from "../../../types/types.utils";

const pokemon = PokemonType;
type ButtonType = "round" | "primary" | "secondary" | "tertiary";
export const buttonTypeMapping: Record<ButtonType, string> = {
  round: "border rounded-full border-current h-16 w-16",
  primary: `text-white text-sm rounded-full p-2 px-4 hover:bg-gray-600 active:bg-gray-700 focus:outline-none flex-row bg-gray-500 ${matchTypeColor(
    pokemon.toString()
  )}`,
  secondary:
    "text-black text-sm font-bold rounded-full w-28 h-7 outline-double outline-8 outline-white-500",
  tertiary:
    "text-black text-sm font-bold rounded-full w-28 h-7 outline-double outline-8 outline-white-500",
};

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  buttonType?: ButtonType;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  buttonType = "primary",
}) => {
  return (
    <button onClick={onClick} className={`${buttonTypeMapping[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
