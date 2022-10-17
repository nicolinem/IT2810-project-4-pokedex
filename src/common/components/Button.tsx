import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};
const Button: React.FC<Props> = ({
  children,
  onClick,
}) => {
  return (
    <button 
      className="border rounded-full border-current h-16 w-16"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
