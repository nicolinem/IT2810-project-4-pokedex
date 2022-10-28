import React, { useState } from "react";
import {
  matchType,
  matchTypeColor,
  matchTypeHover,
} from "../../../types/pokemon.utils";
import { PokemonType } from "../../../types/types.utils";

type Props = {
  type: PokemonType;
  activateButton: (type: string) => void;
};

const TypeButton: React.FC<Props> = ({ type, activateButton }) => {
  const [switchState, setSwitchState] = useState(false);
  const [styling, setStyling] = useState(
    `text-black text-sm font-bold rounded-full w-24 h-7 ${matchTypeColor(
      matchType(type)
    )} ${matchTypeHover(matchType(type))}`
  );

  const handleOnChange = () => {
    const state = switchState;

    setSwitchState(!state);
    activateButton(type);

    if (!state) {
      setStyling(
        `text-black text-sm font-bold rounded-full w-24 h-7 outline-double outline-8 outline-white ${matchTypeColor(
          matchType(type)
        )} ${matchTypeHover(matchType(type))}`
      );
    } else {
      setStyling(
        `text-black text-sm font-bold rounded-full w-24 h-7 ${matchTypeColor(
          matchType(type)
        )} ${matchTypeHover(matchType(type))}`
      );
    }
  };

  return (
    <button onClick={handleOnChange} className={styling}>
      {type}
    </button>
  );
};

export default TypeButton;
