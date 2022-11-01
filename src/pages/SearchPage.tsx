import { useQuery } from "@apollo/client";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { Accordion } from "../common/components/button/Accordion";
import Button from "../common/components/button/Button";
import Card from "../common/components/card/Card";
import Footer from "../common/components/Footer";
import Header from "../common/components/header/Header";
import { TypeButtonContainer } from "../common/components/TypeButtonContainer";
import { Pokemon } from "../types/pokemon.utils";
import {

  usePokemonQuery,
} from "../utils/queries";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [activeTypes, setActiveTypes] = useState<String[]>([]);
  const { loading, error, data, fetchMore } = usePokemonQuery(searchText, activeTypes)


  const getActiveTypes = (activatedTypes: string[]) => {
    const newactivatedTypes: string[] = [...activatedTypes];
    setActiveTypes(newactivatedTypes);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const input = data.get("input")
    if (input)
    { setSearchText(input.toString()); }
  };


  return (
    <div>
      <Header></Header>
      <div className="flex flex-col">
        <div className="bg-[#121A36] flex items-center justify-center pt-[100px] h-[200px]">
          <form onSubmit={handleSubmit} className="space-x-3">
            <input
              className="bg-[#3F4867] text-[#FFFFFF] placeholder-[#FFFFFF] rounded-full w-[600px] h-16 pl-5"
              // onChange={onChangeSearchField}
              placeholder="Enter pokemon name or number"
              // value={searchText}
              name="input" id="input"
            />
            <Button type={"submit"}>Search</Button>
          </form>
        </div>
        <div className="bg-[#121A36] justify-items-center	">
          <Accordion
            title={"Advanced Search"}
            content={<TypeButtonContainer getActiveTypes={getActiveTypes} />}
          ></Accordion>
        </div>
        <div className="bg-[#DEDFDF] grid grid-cols-4 gap-6 px-32 py-20 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data && data.pokemon.map((pokemon: Pokemon) => (
          <Card pokemon={pokemon}></Card>
        ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SearchPage;
