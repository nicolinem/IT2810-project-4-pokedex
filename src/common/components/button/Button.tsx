import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
};
const Button: React.FC<Props> = ({
  children,
  onClick,
}) => {
  return (
    <button 
      className="bg-red-800 hover:bg-[#C24F4F] border-red-800 text-[#FFFFFF] font-semibold rounded-full border-4 h-16 w-16 "
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
