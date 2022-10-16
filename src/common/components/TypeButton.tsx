import React from "react";
import Button from "./Button";

type props = {

  label: string;
  onClick?: () => void;
  color: string;

};

const TypeButton: React.FC<props> = ({
  label,
  onClick,
  color
}) => {
 const styling: string = "text-black font-bold py-2 px-4 rounded-full w-83 max-h-28 ".concat(color);
  return (
    <Button onClick={onClick} className={styling} >
      {label}
    </Button>
  )
}


export default TypeButton;