import React, { useState } from "react";
import {  Text, TouchableOpacity } from "react-native";
import tw from 'twrnc';
import { colorMapping } from "../../types/types.utils";

type Props = {
  type: string;
  activateButton: (type: string) => void;
};

const TypeButton: React.FC<Props> = ({ type, activateButton }) => {
  const [switchState, setSwitchState] = useState(false);

  const color = colorMapping[type.toLowerCase()];
  const style = "py-1 px-4 rounded-full my-1 min-w-22 capitalize border-2 border-[#121A36]"
  const activeStyling = "border-2 border-white"

  const [styling, setStyling] = useState(style);

  const handleOnChange = () => {
    const state = switchState;

    setSwitchState(!state);
    activateButton(type);

    if (!state) {
      setStyling( style + activeStyling);
    } else {
      setStyling( style );
    }
  };



  

  return (
    <TouchableOpacity onPress={() => handleOnChange()} style={tw`bg-[${color}] ${styling} `}>
      <Text
         style={tw`text-white font-bold text-center capitalize`}
      >
              {type}
        </Text>
    
    </TouchableOpacity>
  );
};

            
export default TypeButton;
