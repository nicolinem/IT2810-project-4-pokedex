import React from "react";
import { Accordion } from "../button/Accordion";
import InputField from "../InputField";
import {SearchForm} from "../SearchForm";
import {TypeButtonContainer} from "../TypeButtonContainer";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};
const Header: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="bg-[#121A36] text-center h-auto ">
      <header className="text-4xl font-extrabold text-white tracking-widest py-24">
        POKEDEX
      </header>
      <SearchForm></SearchForm>
    </div>
  );
};

export default Header;
