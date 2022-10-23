import Login from "../views/Login";
import MainPage from "../views/MainPage";
import { Route, Routes } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";
import useProfile from "../hooks/useProfile";
import Register from "../views/Register";
import {GET_POKEMON_ID, GET_POKEMON, GET_POKEMON_NAME, GET_POKEMON_NAME_TYPE, GET_POKEMON_ID_TYPE} from "../utils/queries";


function App() {

  const { refetch } = useProfile(); 

  
  const PokemonQuery = () => {
    const { loading, error, data } = useQuery(GET_POKEMON_ID_TYPE, {
      variables: {
        input: 2,
        types:["grass"]
      }
    });
 
    if (error) {
      console.log(JSON.stringify(error, null, 2));
    }
    console.log(data);
  }
   

  PokemonQuery();

  
  return (
    <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
