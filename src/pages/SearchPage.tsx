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
  GET_POKEMON,
  GET_POKEMON_ID,
  GET_POKEMON_ID_TYPE,
  GET_POKEMON_NAME,
  GET_POKEMON_NAME_TYPE,
  GET_POKEMON_TYPE,
} from "../utils/queries";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState(GET_POKEMON);
  const [variables, setVariables] = useState({});
  const [activeTypes, setActiveTypes] = useState<String[]>([]);

  const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);
  const isLetters = (str: string): boolean => /^[a-zA-Z]+$/.test(str);

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    if (event.target.value === "" && activeTypes.length > 0) {
      setVariables({ types: activeTypes });
      setQuery(GET_POKEMON_TYPE);
    } else if (event.target.value === "") {
      setVariables({});
      setQuery(GET_POKEMON);
    }
  };

  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: variables,
  });

  const getActiveTypes = (activatedTypes: string[]) => {
    const newactivatedTypes: string[] = [...activatedTypes];
    setActiveTypes(newactivatedTypes);
    getSearchResults();
  };

  useEffect(() => {
    getSearchResults();
  }, [activeTypes]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getSearchResults();
  };

  const getSearchResults = () => {
    if (searchText === "" && activeTypes.length > 0) {
      setVariables({ types: activeTypes });
      setQuery(GET_POKEMON_TYPE);
    } else if (searchText === "") {
      setVariables({});
      setQuery(GET_POKEMON);
    } else if (isNumeric(searchText)) {
      if (activeTypes.length > 0) {
        setVariables({ input: Number(searchText), types: activeTypes });
        setQuery(GET_POKEMON_ID_TYPE);
      } else {
        setVariables({ input: Number(searchText) });
        setQuery(GET_POKEMON_ID);
      }
    } else if (isLetters(searchText)) {
      if (activeTypes.length > 0) {
        setVariables({ input: searchText.toLowerCase(), types: activeTypes });
        setQuery(GET_POKEMON_NAME_TYPE);
      } else {
        setVariables({ input: searchText.toLowerCase() });
        setQuery(GET_POKEMON_NAME);
      }
    }
  };

  const getDataResult = () => {
    if (error) {
      return (
        <Alert severity="error">Something went wrong, please try again!</Alert>
      );
    }
    if (loading) {
      return <CircularProgress color="success"></CircularProgress>;
    }
    if (data) {
      if (query === GET_POKEMON_ID) {
        return data.getPokemonOnID?.map((pokemon: Pokemon) => (
          <Card pokemon={pokemon}></Card>
        ));
      } else if (query === GET_POKEMON_ID_TYPE) {
        return data.getPokemonOnIDAndType?.map((pokemon: Pokemon) => (
          <Card pokemon={pokemon}></Card>
        ));
      } else if (query === GET_POKEMON_NAME) {
        return data.getPokemonOnName?.map((pokemon: Pokemon) => (
          <Card pokemon={pokemon}></Card>
        ));
      } else if (query === GET_POKEMON_NAME_TYPE) {
        return data.getPokemonOnNameAndType?.map((pokemon: Pokemon) => (
          <Card pokemon={pokemon}></Card>
        ));
      } else if (query === GET_POKEMON) {
        return data.getPokemonFromID?.map((pokemon: Pokemon) => (
          <Card pokemon={pokemon}></Card>
        ));
      } else if (query === GET_POKEMON_TYPE) {
        return data.getPokemonFromType?.map((pokemon: Pokemon) => (
          <Card pokemon={pokemon}></Card>
        ));
      }
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="flex flex-col">
        <div className="bg-[#121A36] flex items-center justify-center pt-[100px] h-[200px]">
          <form onSubmit={handleSubmit} className="space-x-3">
            <input
              className="bg-[#3F4867] text-[#FFFFFF] placeholder-[#FFFFFF] rounded-full pl-5
              xs:w-[300px] sm:w-[400px] md:[550px] lg:w-[570px] xl:w-[600px]
              xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-16"
              onChange={onChangeSearchField}
              name="Pokemon name or number"
              placeholder="Enter pokemon name or id number"
              value={searchText}
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
          {getDataResult()}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SearchPage;
