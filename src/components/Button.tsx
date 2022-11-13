import React from "react";
import { matchTypeColor } from "../types/pokemon.utils";
import { PokemonType } from "../types/types.utils";
import { Pressable, Text } from "react-native"
import tw from 'twrnc';

const pokemon = PokemonType;
type ButtonType = "round" | "primary" | "secondary" | "tertiary";
export const buttonTypeMapping: Record<ButtonType, string> = {
  round: "rounded-full h-1/2 w-1/2 bg-[#d15860] text-white",
  primary: `text-white text-sm rounded-full p-2 px-4 hover:bg-gray-600 active:bg-gray-700 focus:outline-none flex-row bg-gray-500 ${matchTypeColor(
    pokemon.toString()
  )}`,
  secondary:
    "bg-red-800 hover:bg-[#C24F4F] border-red-800 text-[#FFFFFF] font-semibold rounded-full border-4 w-10 h-10",
  tertiary:
    "text-black text-sm font-bold rounded-full w-28 h-7 outline-double outline-8 outline-white-500",
};

type Props = {
  text: string;
  onClick?: () => void;
  href?: string;
  buttonType?: ButtonType;
  type?: "submit" | undefined
  //submitType?: () => void;
};

const CustomButton: React.FC<Props> = ({
  text,
  onClick,
  buttonType = "secondary",
  type,
}) => {

  const style = `${buttonTypeMapping[buttonType]}`;
  
  return (
    <Pressable onPress={() => onClick} style={tw`${style}`}>
      <Text>{text}</Text>
      
    </Pressable>
  );
};

export default CustomButton;
