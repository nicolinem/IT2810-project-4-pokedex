import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};
const Header: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="bg-skin-primary">
      <header className="bg-skin-primary">POKEDEX</header>
    </div>
  );
};

export default Header;
