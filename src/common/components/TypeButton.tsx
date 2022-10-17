import { useState } from "react";

type props = {

  label: string;
  color: string;
};


const TypeButton: React.FC<props> = ({
  label,
  color,
}) => {

  const [switchState, setSwitchState] = useState(false); 

  const [styling, setStyling] = useState("text-black text-sm font-bold rounded-full w-28 h-7 ".concat(color));

  const handleOnChange = () => {

    
    const state = switchState;

    setSwitchState(!state);
    
    if (!state) {
      setStyling("text-black text-sm font-bold rounded-full w-28 h-7 outline-double outline-8 outline-white-500 ".concat(color));
    } else {
      setStyling("text-black text-sm font-bold rounded-full w-28 h-7 ".concat(color));
    }

  };

  
  return (
    <button onClick={handleOnChange} className={styling}>
      {label}
    </button>
  )
};


export default TypeButton;