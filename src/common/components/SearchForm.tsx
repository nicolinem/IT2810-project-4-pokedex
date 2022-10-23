import React, { useState } from "react";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonNumber, setPokemonNumber] = useState("");

  const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);
  const isLetters = (str: string): boolean => /^[a-zA-Z]+$/.test(str);

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const getSearchResults = () => {
    //TODO set search query when the user press the search button
    
    if (isNumeric(searchText)){
      setPokemonNumber(searchText);
    } 
    else if (isLetters(searchText)){
      setPokemonName(searchText); 
    }
    else{
    //TODO - tilbakemelding til bruker om feil input
    }
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

export default SearchForm;
