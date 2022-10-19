import React from "react";
import { Accordion } from "./button/Accordion";
import SearchForm from "./SearchForm";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};
const Header: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="bg-[#41444a] text-center h-96 ">
      <header className="text-4xl font-extrabold tracking-widest py-24">
        POKEDEX
      </header>
      <SearchForm></SearchForm>
      <div className="justify-items-center	">
        <Accordion
          title={"Advanced Search"}
          content={"fnejkfnejkn"}
        ></Accordion>
      </div>
    </div>
  );
};

export default Header;
