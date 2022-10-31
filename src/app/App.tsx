import { gql, useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import useProfile from "../common/hooks/useProfile";
import MainPage from "../pages/MainPage";
import { PokemonPage } from "../pages/PokemonPage";
import LoginPage from "../pages/views/Login";
import Register from "../pages/views/Register";

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

  // console.log(localStorage.getItem("token"))

  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
    </Routes>
  );
}

export default App;
