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
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
