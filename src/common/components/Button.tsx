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
  className
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
