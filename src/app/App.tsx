import { gql, useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import useProfile from "../common/hooks/useProfile";
import MainPage from "../pages/MainPage";
import { PokemonPage } from "../pages/PokemonPage";

export const GET_POKEMON = gql`
  query {
    getPokemon {
      name
      pokemonID
      attack
      defence
      sp_attack
      sp_defence
      speed
      height
      weight
      hp
      imageUrl
      type1
      type2
    }
  }
`;

export const GET_POKEMON_ORDERID = gql`
  query {
    getPokemonFromID {
      name
      pokemonID
      attack
      defence
      sp_attack
      sp_defence
      speed
      height
      weight
      hp
      imageUrl
      type1
      type2
    }
  }
`;

function App() {
  const { refetch } = useProfile();

  const PokemonQuery = () => {
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  };

  PokemonQuery();
  refetch()


  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/pokemon/:id" element={<PokemonPage />} />
    </Routes>
  );
}

export default App;
