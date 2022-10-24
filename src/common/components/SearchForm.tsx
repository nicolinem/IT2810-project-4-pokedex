import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_POKEMON_ID } from "../../utils/queries";
import { Pokemon } from "../../types/pokemon.utils";
import { Card } from "@mui/material";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonNumber, setPokemonNumber] = useState("");

  //hentet kode
  //const { data: filterData } = useQuery(GET_POKEMON_FILTER);

  const { loading, error, data, fetchMore } = useQuery(GET_POKEMON_ID, {
    variables: {
      name: searchText,
      //sortDescending: filterData.pokemonFilter.sortDescending,
      //type: filterData.pokemonFilter.type,
    },
  });

  const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);
  const isLetters = (str: string): boolean => /^[a-zA-Z]+$/.test(str);

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const getSearchResults = () => {
    //TODO set search query when the user press the search button
    
    if (isNumeric(searchText)){
      setPokemonNumber(searchText);
      setQuery(searchText);
    } 
    else if (isLetters(searchText)){
      setPokemonName(searchText);
      setQuery(searchText); 
    }
    else{
    //TODO - tilbakemelding til bruker om feil input
    }

      // Returns UI according to status of data
  const dataResult = () => {
    if (error) {
      return (
        //TODO return alert to user about error
      );
    }
    if (loading) {
      return ;
    }
    if (data) {
      return data.pokemons?.map((pokemon: Pokemon) => (
        //<PokemonCard pokemon={pokemon} key={pokemon._id} />
        <Card></Card>
      ));
    }
    return null;
  };

  };

  return (
    <div className="flex items-center justify-center pt-[100px]">
      <input
        className="bg-[#3F4867] text-[#FFFFFF] placeholder-[#FFFFFF] rounded-full w-[600px] h-16 pl-5"
        onChange={onChangeSearchField}
        name="Pokemon name or number"
        placeholder="Enter pokemon name or number"
        value={searchText}
      />
      <button
        className="bg-[#e36d8f] text-[#FFFFFF] rounded-full h-16 w-16"
        onClick={getSearchResults}>
        Search
      </button>

      
      
    </div>
  );
}


