import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};
const Header: React.FC<Props> = ({ children, onClick }) => {
  return <div className="bg-skin-primary text-green-50 text-3xl">POKEDEX</div>;
};

export default Header;
