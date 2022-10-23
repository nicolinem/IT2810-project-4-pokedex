import React, { useState } from "react";
import { PokemonType } from "../../types/types.utils";

type Props = {
  type: PokemonType;
};

const TypeButton: React.FC<Props> = ({ type }) => {
  const [switchState, setSwitchState] = useState(false);

  const [styling, setStyling] = useState(
    "text-black text-sm font-bold rounded-full w-28 h-7 ".concat(type)
  );

  const handleOnChange = () => {
    const state = switchState;

    setSwitchState(!state);

    if (!state) {
      setStyling(
        "text-black text-sm font-bold rounded-full w-28 h-7 outline-double outline-8 outline-white-500 ".concat(
          type
        )
      );
    } else {
      setStyling(
        "text-black text-sm font-bold rounded-full w-28 h-7 ".concat(type)
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
