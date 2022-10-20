import { gql } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import Login from "../common/components/login/Login";
import MainPage from "../pages/MainPage";

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
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
