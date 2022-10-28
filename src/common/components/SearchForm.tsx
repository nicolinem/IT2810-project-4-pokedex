import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_POKEMON_ID, GET_POKEMON_ID_TYPE, GET_POKEMON_NAME, GET_POKEMON_NAME_TYPE, GET_POKEMON } from "../../utils/queries";
import { Pokemon } from "../../types/pokemon.utils";
import CircularProgress from '@mui/material/CircularProgress';
import Card from "./card/Card"
import { Accordion } from "./button/Accordion";
import { TypeButtonContainer } from "./TypeButtonContainer";
import Alert from '@mui/material/Alert';
import Button from "./button/Button";

export const SearchForm = () => {

  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState(GET_POKEMON_NAME_TYPE);
  const [variables, setVariables] = useState({});
  const [activeTypes, setactiveTypes] = useState<string[]>([]);


  const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);
  const isLetters = (str: string): boolean => /^[a-zA-Z]+$/.test(str);

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: variables
,
  });

  const getActiveTypes = (activatedTypes: string[]) => {
    setactiveTypes(activatedTypes);
  }

  const getSearchResults = () => {
    
    if (isNumeric(searchText)){
      if (activeTypes.length > 0) {
        setVariables({input: Number(searchText), types: activeTypes});
        setQuery(GET_POKEMON_ID_TYPE);
      } else {
        setVariables({input: Number(searchText)});
        setQuery(GET_POKEMON_ID);
      } 
      
    } 
    else if (isLetters(searchText)){
      if (activeTypes.length > 0) {
        setVariables({input: searchText.toLowerCase(), types: activeTypes});
        setQuery(GET_POKEMON_NAME_TYPE);
     
      } else {
        setVariables({input: searchText.toLowerCase()});
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
        return (<CircularProgress color="success"></CircularProgress>);
      }
      if (data) {
        if (query === GET_POKEMON_ID) {
          return (data.getPokemonOnID?.map((pokemon: Pokemon) => (
            <Card pokemon={pokemon}></Card>
          ))
        );
        } else if (query === GET_POKEMON_ID_TYPE) {
          return (data.getPokemonOnIDAndType?.map((pokemon: Pokemon) => (
            <Card pokemon={pokemon}></Card>
          ))
        );
        } else if (query === GET_POKEMON_NAME) {
          return (data.getPokemonOnName?.map((pokemon: Pokemon) => (
            <Card pokemon={pokemon}></Card>
          ))
        );
        } else if (query === GET_POKEMON_NAME_TYPE) {
          return (data.getPokemonOnNameAndType?.map((pokemon: Pokemon) => (
            <Card pokemon={pokemon}></Card>
          ))
        );
        }
        }
         
        };

  return (
<div className="flex flex-col">
    <div className="flex items-center justify-center pt-[100px] space-x-4">
      <input
        className="bg-[#3F4867] text-[#FFFFFF] placeholder-[#FFFFFF] rounded-full w-[600px] h-16 pl-5"
        onChange={onChangeSearchField}
        name="Pokemon name or number"
        placeholder="Enter pokemon name or number"
        value={searchText}
      />
      <Button
        onClick={() => getSearchResults()}>
        Search
      </Button>
      </div>
        <div className="justify-items-center	">
          <Accordion
            title={"Advanced Search"}
            content={<TypeButtonContainer getActiveTypes={getActiveTypes}/>}
          ></Accordion>
        </div>
      <div className="flex flex-wrap justify-center bg-[#E0FAFF] m-4">
        {getDataResult()}
      </div>
    
    </div>
  );
  }

export default SearchForm;


