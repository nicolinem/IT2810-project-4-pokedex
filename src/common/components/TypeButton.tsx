import React, { useState } from "react";
import { PokemonType } from "../../types/types.utils";

type Props = {
  type1: PokemonType;
  type2: PokemonType;
};

const TypeButton: React.FC<Props> = ({ type1, type2 }) => {
  const [switchState, setSwitchState] = useState(false);

  const [styling, setStyling] = useState(
    "text-black text-sm font-bold rounded-full w-28 h-7 ".concat(type1, type2)
  );

  const handleOnChange = () => {
    const state = switchState;

    setSwitchState(!state);

    if (!state) {
      setStyling(
        "text-black text-sm font-bold rounded-full w-28 h-7 outline-double outline-8 outline-white-500 ".concat(
          type1,
          type2
        )
      );
    } else {
      setStyling(
        "text-black text-sm font-bold rounded-full w-28 h-7 ".concat(
          type1,
          type2
        )
      );
    }
  };

  return (
    <button onClick={handleOnChange} className={styling}>
      {type1} {type2}
    </button>
  );
};

export default TypeButton;
