import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};
const Header: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="bg-[#121A36] text-center h-auto ">
      <header className="text-4xl font-extrabold text-white tracking-widest py-32">
        POKEDEX
      </header>
    </div>
  );
};

export default Header;
