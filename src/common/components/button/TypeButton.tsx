import React, { useState } from "react";
import { matchType, matchTypeColor, matchTypeHover } from "../../../types/pokemon.utils";
import { PokemonType } from "../../../types/types.utils";

type Props = {
  type: PokemonType;
  activate: boolean;
};

const TypeButton: React.FC<Props> = ({ type, activate }) => {
  const [switchState, setSwitchState] = useState(false);

  const [styling, setStyling] = useState(activate ? `text-black text-sm font-bold rounded-full w-28 h-7 ${matchTypeColor(
                                                    matchType(type))} ${matchTypeHover(matchType(type))}` 
                                                  :  `flex justify-around text-black text-sm font-bold rounded-full w-28 h-7 pt-1 ${matchTypeColor(
                                                    matchType(type))}`);

  

const handleOnChange = () => {
    const state = switchState;

    setSwitchState(!state);

    if (!state) {
      setStyling(
        `text-black text-sm font-bold rounded-full w-28 h-7 outline-double outline-8 outline-white-500 ${matchTypeColor(
          matchType(type)
        ), matchTypeHover(
          matchType(type)
        )}`
      );
    } else {
      setStyling(
        `text-black text-sm font-bold rounded-full w-28 h-7 ${matchTypeColor(
          matchType(type)
        ), matchTypeHover(
          matchType(type)
        )}`
      );
    }
  };

  if (activate) {
    return (
    <button onClick={handleOnChange} className={styling}>
      {type}
    </button>
    )
  } else {
    return (
      <div className={styling}>
        {type}
      </div>

    )
  }
  
};

export default TypeButton;
