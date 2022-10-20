import { gql, useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import Login from "../common/components/login/Login";
import MainPage from "../common/components/mainPage/MainPage";

function App() {
  const GET_POKEMON = gql`
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

  const PokemonQuery = () => {
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }
    console.log(data);
  };

  PokemonQuery();

  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
