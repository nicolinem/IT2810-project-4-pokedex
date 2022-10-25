import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_POKEMON_ID, GET_POKEMON_ID_TYPE, GET_POKEMON_NAME, GET_POKEMON_NAME_TYPE, GET_POKEMON } from "../../utils/queries";
import { Pokemon } from "../../types/pokemon.utils";
import Card from "./card/Card"

export const SearchForm = () => {

  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState(GET_POKEMON);
  const [variables, setVariables] = useState({});
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  

  const queryName = {
    GET_POKEMON_ID: "getPokemonOnID",

  }

  //hentet kode
  //const { data: filterData } = useQuery(GET_POKEMON_FILTER);

  

  //TODO: skriv en funksjon for å hente de aktiverte typene
  const typesActive: String[] = [];

  const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);
  const isLetters = (str: string): boolean => /^[a-zA-Z]+$/.test(str);

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: variables
      
      //sortDescending: filterData.pokemonFilter.sortDescending,
      //type: filterData.pokemonFilter.type,
,
  });
  /*const initialPokemons: Pokemon[] = [];
  data.getPokemon.forEach((pokemon: Pokemon) => initialPokemons.push(pokemon)); */

  

  const getSearchResults = () => {
    //TODO set search query when the user press the search button
    
    if (isNumeric(searchText)){
      if (typesActive.length > 0) {
        setVariables({input: searchText, types: typesActive});
        setQuery(GET_POKEMON_ID_TYPE);
      } else {
        setVariables({input: searchText});
        setQuery(GET_POKEMON_ID);
      }
      
    } 
    else if (isLetters(searchText)){
      if (typesActive.length > 0) {
        setVariables({input: searchText, types: typesActive});
        setQuery(GET_POKEMON_NAME_TYPE);
      } else {
        setVariables({input: searchText});
        setQuery(GET_POKEMON_NAME);
      }
    }
    else{
    //TODO - tilbakemelding til bruker om feil input
    }
  };

    // Returns UI according to status of data
    const getDataResult = () => {
      if (error) {
        return 
          //TODO return alert to user about error
        ;
      }
      if (loading) {
        
      }
      if (data) {
        return data.getPokemon?.map((pokemon: Pokemon) => (
            <Card pokemon={pokemon}></Card>
          )
        );}
        //setPokemons(data.pokemons?.map((pokemon: Pokemon) => (
          //<PokemonCard pokemon={pokemon} key={pokemon._id} />
        console.log(data.getPokemonOnName)
        //);));
        var pokemons: Pokemon[] = [];
        data.getPokemonOnName?.map((pokemon: Pokemon) => pokemons.push(pokemon));
        console.log(pokemons)
        setPokemons(pokemons)
         
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
    
      {getDataResult()}
      
    </div>
  );
  }

export default SearchForm;


