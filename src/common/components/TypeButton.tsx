import React from "react";
import Button from "./Button";
import "../../styles/globals.css";

type props = {

  label: string;
  onClick?: () => void;
  backgroundColor: string;

};

const TypeButton: React.FC<props> = ({
  label,
  onClick,
  backgroundColor
}) => {
  return (
    <Button onClick={onClick} style={{backgroundColor: backgroundColor}}>
      {label}
    </Button>
  )
}


export default TypeButton;